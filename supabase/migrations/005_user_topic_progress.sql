-- 用户主题完成状态表
CREATE TABLE user_topic_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    topic_id UUID NOT NULL REFERENCES topics(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT false,
    completed_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE (user_id, topic_id)
);

CREATE INDEX idx_user_topic_progress_user ON user_topic_progress(user_id);
CREATE INDEX idx_user_topic_progress_topic ON user_topic_progress(topic_id);
CREATE INDEX idx_user_topic_progress_completed ON user_topic_progress(user_id, completed);

ALTER TABLE user_topic_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own topic progress" ON user_topic_progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own topic progress" ON user_topic_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own topic progress" ON user_topic_progress
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own topic progress" ON user_topic_progress
    FOR DELETE USING (auth.uid() = user_id);
