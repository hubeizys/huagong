import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus, Trash2, AlignLeft
} from 'lucide-react';
import type { Project } from '@/types';
import { Link } from 'react-router-dom';

interface MyProjectsProps {
  projects: Project[];
  onDeleteProject: (id: string) => void;
  onToggleTask: (projectId: string, taskId: string) => void;
  onAddTask: (projectId: string, title: string) => void;
  onDeleteTask: (projectId: string, taskId: string) => void;
  onUpdateNotes: (projectId: string, notes: string) => void;
}

export function MyProjectsSection({
  projects,
  onDeleteProject,
  onToggleTask,
  onAddTask,
  onDeleteTask,
  onUpdateNotes
}: MyProjectsProps) {
  const [newTaskTitle, setNewTaskTitle] = useState<Record<string, string>>({});
  const [editingNotes, setEditingNotes] = useState<Record<string, boolean>>({});

  const todoProjects = projects.filter(p => p.status === 'todo');
  const inProgressProjects = projects.filter(p => p.status === 'in-progress');
  const completedProjects = projects.filter(p => p.status === 'completed');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'todo': return <Badge variant="outline" className="border-slate-500 text-slate-400">待开始</Badge>;
      case 'in-progress': return <Badge className="bg-amber-500 text-white">进行中</Badge>;
      case 'completed': return <Badge className="bg-emerald-500 text-white">已完成</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">我的项目</h1>
          <p className="text-slate-400 mt-1">追踪你的学习进度，管理课题任务</p>
        </div>
        <Link to="/topics">
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            <Plus className="w-4 h-4 mr-2" />
            添加新项目
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-white">{todoProjects.length}</p>
            <p className="text-sm text-slate-400">待开始</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-amber-400">{inProgressProjects.length}</p>
            <p className="text-sm text-slate-400">进行中</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-emerald-400">{completedProjects.length}</p>
            <p className="text-sm text-slate-400">已完成</p>
          </CardContent>
        </Card>
      </div>

      {/* Projects Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-slate-800 border border-slate-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-cyan-500">全部 ({projects.length})</TabsTrigger>
          <TabsTrigger value="todo" className="data-[state=active]:bg-slate-600">待开始 ({todoProjects.length})</TabsTrigger>
          <TabsTrigger value="in-progress" className="data-[state=active]:bg-amber-500">进行中 ({inProgressProjects.length})</TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-emerald-500">已完成 ({completedProjects.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <ProjectGrid 
            projects={projects}
            onDeleteProject={onDeleteProject}
            onToggleTask={onToggleTask}
            onAddTask={onAddTask}
            onDeleteTask={onDeleteTask}
            onUpdateNotes={onUpdateNotes}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
            editingNotes={editingNotes}
            setEditingNotes={setEditingNotes}
            getStatusBadge={getStatusBadge}
          />
        </TabsContent>

        <TabsContent value="todo" className="mt-6">
          <ProjectGrid 
            projects={todoProjects}
            onDeleteProject={onDeleteProject}
            onToggleTask={onToggleTask}
            onAddTask={onAddTask}
            onDeleteTask={onDeleteTask}
            onUpdateNotes={onUpdateNotes}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
            editingNotes={editingNotes}
            setEditingNotes={setEditingNotes}
            getStatusBadge={getStatusBadge}
          />
        </TabsContent>

        <TabsContent value="in-progress" className="mt-6">
          <ProjectGrid 
            projects={inProgressProjects}
            onDeleteProject={onDeleteProject}
            onToggleTask={onToggleTask}
            onAddTask={onAddTask}
            onDeleteTask={onDeleteTask}
            onUpdateNotes={onUpdateNotes}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
            editingNotes={editingNotes}
            setEditingNotes={setEditingNotes}
            getStatusBadge={getStatusBadge}
          />
        </TabsContent>

        <TabsContent value="completed" className="mt-6">
          <ProjectGrid 
            projects={completedProjects}
            onDeleteProject={onDeleteProject}
            onToggleTask={onToggleTask}
            onAddTask={onAddTask}
            onDeleteTask={onDeleteTask}
            onUpdateNotes={onUpdateNotes}
            newTaskTitle={newTaskTitle}
            setNewTaskTitle={setNewTaskTitle}
            editingNotes={editingNotes}
            setEditingNotes={setEditingNotes}
            getStatusBadge={getStatusBadge}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface ProjectGridProps {
  projects: Project[];
  onDeleteProject: (id: string) => void;
  onToggleTask: (projectId: string, taskId: string) => void;
  onAddTask: (projectId: string, title: string) => void;
  onDeleteTask: (projectId: string, taskId: string) => void;
  onUpdateNotes: (projectId: string, notes: string) => void;
  newTaskTitle: Record<string, string>;
  setNewTaskTitle: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  editingNotes: Record<string, boolean>;
  setEditingNotes: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  getStatusBadge: (status: string) => React.ReactNode;
}

function ProjectGrid({
  projects,
  onDeleteProject,
  onToggleTask,
  onAddTask,
  onDeleteTask,
  onUpdateNotes,
  newTaskTitle,
  setNewTaskTitle,
  editingNotes,
  setEditingNotes,
  getStatusBadge
}: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">暂无项目</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map(project => (
        <Card key={project.id} className="bg-slate-900/50 border-slate-800">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {getStatusBadge(project.status)}
                  <span className="text-slate-500 text-xs">
                    {new Date(project.startDate).toLocaleDateString('zh-CN')} 开始
                  </span>
                </div>
                <CardTitle className="text-white text-lg">
                  <Link 
                    to={`/topic/${project.topicId}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {project.topicTitle}
                  </Link>
                </CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                onClick={() => onDeleteProject(project.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Progress */}
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">任务进度</span>
                <span className="text-white">
                  {project.tasks.filter(t => t.completed).length}/{project.tasks.length}
                </span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan-500 transition-all duration-300"
                  style={{ 
                    width: `${project.tasks.length > 0 
                      ? (project.tasks.filter(t => t.completed).length / project.tasks.length) * 100 
                      : 0}%` 
                  }}
                />
              </div>
            </div>

            {/* Tasks */}
            <div className="space-y-2">
              <p className="text-sm text-slate-400">任务列表</p>
              {project.tasks.map(task => (
                <div 
                  key={task.id} 
                  className="flex items-center gap-2 p-2 bg-slate-800/50 rounded hover:bg-slate-800 transition-colors"
                >
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => onToggleTask(project.id, task.id)}
                    className="border-slate-500 data-[state=checked]:bg-cyan-500"
                  />
                  <span className={`text-sm flex-1 ${task.completed ? 'text-slate-500 line-through' : 'text-white'}`}>
                    {task.title}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 text-slate-500 hover:text-red-400"
                    onClick={() => onDeleteTask(project.id, task.id)}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              ))}
              
              {/* Add Task */}
              <div className="flex gap-2 mt-2">
                <Input
                  placeholder="添加新任务..."
                  value={newTaskTitle[project.id] || ''}
                  onChange={(e) => setNewTaskTitle(prev => ({ ...prev, [project.id]: e.target.value }))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && newTaskTitle[project.id]?.trim()) {
                      onAddTask(project.id, newTaskTitle[project.id].trim());
                      setNewTaskTitle(prev => ({ ...prev, [project.id]: '' }));
                    }
                  }}
                  className="bg-slate-800 border-slate-700 text-white text-sm"
                />
                <Button
                  size="sm"
                  className="bg-cyan-500 hover:bg-cyan-600"
                  onClick={() => {
                    if (newTaskTitle[project.id]?.trim()) {
                      onAddTask(project.id, newTaskTitle[project.id].trim());
                      setNewTaskTitle(prev => ({ ...prev, [project.id]: '' }));
                    }
                  }}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Notes */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-slate-400 flex items-center gap-1">
                  <AlignLeft className="w-4 h-4" />
                  学习笔记
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-cyan-400 hover:text-cyan-300"
                  onClick={() => setEditingNotes(prev => ({ ...prev, [project.id]: !prev[project.id] }))}
                >
                  {editingNotes[project.id] ? '保存' : '编辑'}
                </Button>
              </div>
              {editingNotes[project.id] ? (
                <Textarea
                  value={project.notes}
                  onChange={(e) => onUpdateNotes(project.id, e.target.value)}
                  onBlur={() => setEditingNotes(prev => ({ ...prev, [project.id]: false }))}
                  placeholder="记录你的学习心得..."
                  className="bg-slate-800 border-slate-700 text-white text-sm min-h-[100px]"
                  autoFocus
                />
              ) : (
                <div 
                  className="p-3 bg-slate-800/50 rounded text-sm text-slate-300 min-h-[100px] cursor-pointer hover:bg-slate-800 transition-colors"
                  onClick={() => setEditingNotes(prev => ({ ...prev, [project.id]: true }))}
                >
                  {project.notes || <span className="text-slate-500">点击添加笔记...</span>}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
