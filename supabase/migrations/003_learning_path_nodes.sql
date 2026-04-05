-- 学习路径节点表：存储层级学习路径
CREATE TABLE learning_path_nodes (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    level INTEGER NOT NULL CHECK (level >= 0),
    estimated_time TEXT,
    prerequisites TEXT[] DEFAULT '{}',
    parent_id TEXT REFERENCES learning_path_nodes(id) ON DELETE CASCADE,
    path TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_learning_path_nodes_parent ON learning_path_nodes(parent_id);
CREATE INDEX idx_learning_path_nodes_level ON learning_path_nodes(level);
CREATE INDEX idx_learning_path_nodes_path ON learning_path_nodes(path);

ALTER TABLE learning_path_nodes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Learning path nodes are viewable by everyone" ON learning_path_nodes
    FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert nodes" ON learning_path_nodes
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update nodes" ON learning_path_nodes
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete nodes" ON learning_path_nodes
    FOR DELETE USING (auth.role() = 'authenticated');
