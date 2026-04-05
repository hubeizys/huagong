-- 主题表：存储50+化工主题
CREATE TABLE topics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
    difficulty TEXT CHECK (difficulty IN ('easy', 'medium', 'hard', 'expert')),
    summary TEXT,
    core_concept TEXT,
    theory TEXT[],
    estimated_time TEXT,
    experiment TEXT,
    resources JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_topics_category ON topics(category_id);
CREATE INDEX idx_topics_slug ON topics(slug);
CREATE INDEX idx_topics_difficulty ON topics(difficulty);

ALTER TABLE topics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Topics are viewable by everyone" ON topics
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert topics" ON topics
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update topics" ON topics
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete topics" ON topics
    FOR DELETE USING (auth.role() = 'authenticated');
