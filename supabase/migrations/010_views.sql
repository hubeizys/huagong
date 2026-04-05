-- 用户学习路径完成统计视图
CREATE VIEW user_learning_stats AS
SELECT
    u.id AS user_id,
    COUNT(DISTINCT lpn.id) AS total_nodes,
    COUNT(DISTINCT ulp.node_id) FILTER (WHERE ulp.completed = true) AS completed_nodes,
    ROUND(
        COUNT(DISTINCT ulp.node_id) FILTER (WHERE ulp.completed = true)::NUMERIC /
        NULLIF(COUNT(DISTINCT lpn.id), 0) * 100,
        1
    ) AS completion_percentage
FROM auth.users u
CROSS JOIN learning_path_nodes lpn
LEFT JOIN user_learning_progress ulp ON u.id = ulp.user_id AND lpn.id = ulp.node_id
GROUP BY u.id;

-- 用户主题完成统计视图
CREATE VIEW user_topic_stats AS
SELECT
    u.id AS user_id,
    COUNT(DISTINCT t.id) AS total_topics,
    COUNT(DISTINCT utp.topic_id) FILTER (WHERE utp.completed = true) AS completed_topics,
    ROUND(
        COUNT(DISTINCT utp.topic_id) FILTER (WHERE utp.completed = true)::NUMERIC /
        NULLIF(COUNT(DISTINCT t.id), 0) * 100,
        1
    ) AS completion_percentage
FROM auth.users u
CROSS JOIN topics t
LEFT JOIN user_topic_progress utp ON u.id = utp.user_id AND t.id = utp.topic_id
GROUP BY u.id;

-- 用户项目统计视图
CREATE VIEW user_project_stats AS
SELECT
    user_id,
    COUNT(*) AS total_projects,
    COUNT(*) FILTER (WHERE status = 'completed') AS completed_projects,
    COUNT(*) FILTER (WHERE status = 'in-progress') AS in_progress_projects,
    COUNT(*) FILTER (WHERE status = 'todo') AS todo_projects
FROM user_projects
GROUP BY user_id;
