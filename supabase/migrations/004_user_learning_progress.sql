-- 用户学习路径节点进度表
CREATE TABLE user_learning_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    node_id TEXT NOT NULL REFERENCES learning_path_nodes(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT false,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, node_id)
);

CREATE INDEX idx_user_learning_progress_user ON user_learning_progress(user_id);
CREATE INDEX idx_user_learning_progress_node ON user_learning_progress(node_id);
CREATE INDEX idx_user_learning_progress_completed ON user_learning_progress(user_id, completed);

ALTER TABLE user_learning_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own progress" ON user_learning_progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON user_learning_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON user_learning_progress
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own progress" ON user_learning_progress
    FOR DELETE USING (auth.uid() = user_id);
