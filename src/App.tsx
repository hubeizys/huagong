import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/sections/Dashboard';
import { LearningPathSection } from '@/sections/LearningPath';
import { TopicsSection } from '@/sections/Topics';
import { TopicDetail } from '@/sections/TopicDetail';
import { MyProjectsSection } from '@/sections/MyProjects';
import { About } from '@/sections/About';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import { useProjects } from '@/hooks/useProjects';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';

function App() {
  const { 
    learningPath, 
    toggleNodeComplete, 
    getProgress 
  } = useLearningProgress();

  const {
    projects,
    createProject,
    deleteProject,
    toggleTask,
    addTask,
    deleteTask,
    updateNotes,
    getProjectByTopicId,
    getStats
  } = useProjects();

  const learningProgress = getProgress();
  const projectStats = getStats();

  const handleCreateProject = (topicId: string, topicTitle: string) => {
    if (getProjectByTopicId(topicId)) {
      toast.info('该项目已存在');
      return;
    }
    createProject(topicId, topicTitle);
    toast.success('项目创建成功', {
      description: `已添加 "${topicTitle}" 到我的项目`
    });
  };

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-slate-950">
        <Sidebar projectCount={projects.length} />
        <main className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Dashboard 
                    learningProgress={learningProgress}
                    projectStats={projectStats}
                    recentProjects={projects.slice(-5).reverse()}
                  />
                } 
              />
              <Route 
                path="/learning-path" 
                element={
                  <LearningPathSection 
                    learningPath={learningPath}
                    onToggleComplete={toggleNodeComplete}
                  />
                } 
              />
              <Route 
                path="/topics" 
                element={
                  <TopicsSection 
                    hasProject={(topicId) => !!getProjectByTopicId(topicId)}
                    onCreateProject={handleCreateProject}
                  />
                } 
              />
              <Route 
                path="/topic/:id" 
                element={
                  <TopicDetail 
                    hasProject={(topicId) => !!getProjectByTopicId(topicId)}
                    onCreateProject={handleCreateProject}
                  />
                } 
              />
              <Route 
                path="/my-projects" 
                element={
                  <MyProjectsSection 
                    projects={projects}
                    onDeleteProject={deleteProject}
                    onToggleTask={toggleTask}
                    onAddTask={addTask}
                    onDeleteTask={deleteTask}
                    onUpdateNotes={updateNotes}
                  />
                } 
              />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1e293b',
            color: '#fff',
            border: '1px solid #334155'
          }
        }}
      />
    </BrowserRouter>
  );
}

export default App;
