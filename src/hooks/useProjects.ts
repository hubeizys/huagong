import { useState, useEffect, useCallback } from 'react';
import type { Project } from '@/types';

const STORAGE_KEY = 'cheme-projects';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setProjects(parsed);
      } catch (e) {
        console.error('Failed to parse projects:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }
  }, [projects, isLoaded]);

  const createProject = useCallback((topicId: string, topicTitle: string) => {
    const newProject: Project = {
      id: `proj-${Date.now()}`,
      topicId,
      topicTitle,
      status: 'todo',
      tasks: [
        { id: `task-${Date.now()}-1`, title: '阅读核心概念', completed: false },
        { id: `task-${Date.now()}-2`, title: '学习相关理论', completed: false },
        { id: `task-${Date.now()}-3`, title: '完成实践项目/实验', completed: false },
        { id: `task-${Date.now()}-4`, title: '总结输出', completed: false }
      ],
      notes: '',
      startDate: new Date().toISOString()
    };
    setProjects(prev => [...prev, newProject]);
    return newProject.id;
  }, []);

  const deleteProject = useCallback((projectId: string) => {
    setProjects(prev => prev.filter(p => p.id !== projectId));
  }, []);

  const updateProjectStatus = useCallback((projectId: string, status: Project['status']) => {
    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        return { 
          ...p, 
          status,
          completedDate: status === 'completed' ? new Date().toISOString() : p.completedDate
        };
      }
      return p;
    }));
  }, []);

  const toggleTask = useCallback((projectId: string, taskId: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        const updatedTasks = p.tasks.map(t => 
          t.id === taskId ? { ...t, completed: !t.completed } : t
        );
        // Auto-update project status based on tasks
        const allCompleted = updatedTasks.every(t => t.completed);
        const someCompleted = updatedTasks.some(t => t.completed);
        let newStatus = p.status;
        if (allCompleted && updatedTasks.length > 0) {
          newStatus = 'completed';
        } else if (someCompleted) {
          newStatus = 'in-progress';
        }
        return { 
          ...p, 
          tasks: updatedTasks,
          status: newStatus,
          completedDate: newStatus === 'completed' ? new Date().toISOString() : p.completedDate
        };
      }
      return p;
    }));
  }, []);

  const addTask = useCallback((projectId: string, title: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        return {
          ...p,
          tasks: [...p.tasks, { id: `task-${Date.now()}`, title, completed: false }]
        };
      }
      return p;
    }));
  }, []);

  const deleteTask = useCallback((projectId: string, taskId: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        return { ...p, tasks: p.tasks.filter(t => t.id !== taskId) };
      }
      return p;
    }));
  }, []);

  const updateNotes = useCallback((projectId: string, notes: string) => {
    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        return { ...p, notes };
      }
      return p;
    }));
  }, []);

  const getProjectByTopicId = useCallback((topicId: string) => {
    return projects.find(p => p.topicId === topicId);
  }, [projects]);

  const getStats = useCallback(() => {
    const total = projects.length;
    const todo = projects.filter(p => p.status === 'todo').length;
    const inProgress = projects.filter(p => p.status === 'in-progress').length;
    const completed = projects.filter(p => p.status === 'completed').length;
    return { total, todo, inProgress, completed };
  }, [projects]);

  return {
    projects,
    createProject,
    deleteProject,
    updateProjectStatus,
    toggleTask,
    addTask,
    deleteTask,
    updateNotes,
    getProjectByTopicId,
    getStats,
    isLoaded
  };
}
