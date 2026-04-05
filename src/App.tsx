import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/sections/Dashboard';
import { LearningPathSection } from '@/sections/LearningPath';
import { TopicsSection } from '@/sections/Topics';
import { TopicDetail } from '@/sections/TopicDetail';
import { MyProjectsSection } from '@/sections/MyProjects';
import { About } from '@/sections/About';
import { AuthPage } from '@/sections/AuthPage';
import { useLearningProgress } from '@/hooks/useLearningProgress';
import { useProjects } from '@/hooks/useProjects';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { AuthProvider, useAuth } from '@/hooks/useAuth';

function AppRoutes() {
  const { user } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

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
  const {
    learningPath,
    toggleNodeComplete,
    getProgress
  } = useLearningProgress();

  const learningProgress = getProgress();
  const projectStats = getStats();

  const handleCreateProject = async (topicId: string, topicTitle: string) => {
    if (getProjectByTopicId(topicId)) {
      toast.info('该项目已存在');
      return;
    }
    const result = await createProject(topicId, topicTitle);
    if (result) {
      toast.success('项目创建成功', {
        description: `已添加 "${topicTitle}" 到我的项目`
      });
    }
  };

  return (
    <div className="flex h-screen bg-slate-950">
      {!isAuthPage && <Sidebar projectCount={projects.length} />}
      <main className={`flex-1 overflow-auto ${isAuthPage ? 'w-full' : ''}`}>
        <div className="p-6 max-w-7xl mx-auto">
          <Routes>
            <Route
              path="/auth"
              element={user ? <Navigate to="/" replace /> : <AuthPage />}
            />
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
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
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
    </AuthProvider>
  );
}

export default App;
