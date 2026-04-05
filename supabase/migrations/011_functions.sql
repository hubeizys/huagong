-- 获取用户学习路径进度（包含子树）
CREATE OR REPLACE FUNCTION get_user_learning_progress(p_user_id UUID)
RETURNS TABLE (
    node_id TEXT,
    title TEXT,
    level INTEGER,
    parent_id TEXT,
    path TEXT,
    completed BOOLEAN,
    completed_at TIMESTAMPTZ
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        lpn.id,
        lpn.title,
        lpn.level,
        lpn.parent_id,
        lpn.path,
        COALESCE(ulp.completed, false) AS completed,
        ulp.completed_at
    FROM learning_path_nodes lpn
    LEFT JOIN user_learning_progress ulp
        ON lpn.id = ulp.node_id AND ulp.user_id = p_user_id
    ORDER BY lpn.path;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 获取用户指定阶段的所有子节点
CREATE OR REPLACE FUNCTION get_child_nodes(p_node_id TEXT, p_user_id UUID)
RETURNS TABLE (
    node_id TEXT,
    title TEXT,
    level INTEGER,
    path TEXT,
    completed BOOLEAN
) AS $$
BEGIN
    RETURN QUERY
    SELECT
        lpn.id,
        lpn.title,
        lpn.level,
        lpn.path,
        COALESCE(ulp.completed, false) AS completed
    FROM learning_path_nodes lpn
    LEFT JOIN user_learning_progress ulp
        ON lpn.id = ulp.node_id AND ulp.user_id = p_user_id
    WHERE lpn.path LIKE p_node_id || '/%'
       OR lpn.id = p_node_id
    ORDER BY lpn.path;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 完成节点并检查是否满足前置条件
CREATE OR REPLACE FUNCTION complete_node(p_node_id TEXT, p_user_id UUID)
RETURNS JSONB AS $$
DECLARE
    v_node learning_path_nodes;
    v_missing_prereqs TEXT[];
BEGIN
    SELECT * INTO v_node FROM learning_path_nodes WHERE id = p_node_id;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('success', false, 'error', 'Node not found');
    END IF;

    IF v_node.prerequisites IS NOT NULL AND array_length(v_node.prerequisites, 1) > 0 THEN
        SELECT ARRAY_AGG(prereq) INTO v_missing_prereqs
        FROM unnest(v_node.prerequisites) AS prereq
        WHERE NOT EXISTS (
            SELECT 1 FROM user_learning_progress
            WHERE user_id = p_user_id AND node_id = prereq AND completed = true
        );

        IF array_length(v_missing_prereqs, 1) > 0 THEN
            RETURN jsonb_build_object(
                'success', false,
                'error', 'Prerequisites not completed',
                'missing_prerequisites', v_missing_prereqs
            );
        END IF;
    END IF;

    INSERT INTO user_learning_progress (user_id, node_id, completed, completed_at)
    VALUES (p_user_id, p_node_id, true, NOW())
    ON CONFLICT (user_id, node_id)
    DO UPDATE SET completed = true, completed_at = NOW();

    RETURN jsonb_build_object('success', true, 'node_id', p_node_id);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
