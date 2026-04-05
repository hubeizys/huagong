-- 项目笔记表
CREATE TABLE project_notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id UUID NOT NULL REFERENCES user_projects(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    is_pinned BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_project_notes_project ON project_notes(project_id);
CREATE INDEX idx_project_notes_pinned ON project_notes(project_id, is_pinned DESC, created_at DESC);

ALTER TABLE project_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage notes in own projects" ON project_notes
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM user_projects
            WHERE id = project_id AND user_id = auth.uid()
        )
    );

CREATE TRIGGER update_project_notes_updated_at
    BEFORE UPDATE ON project_notes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
