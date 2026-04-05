import { useState, useEffect, useCallback } from 'react';
import type { Project } from '@/types';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/hooks/useAuth';

export function useProjects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // 加载用户项目从数据库
  const loadProjects = useCallback(async () => {
    if (!user) {
      setProjects([]);
      setIsLoaded(true);
      return;
    }

    try {
      // 获取用户的所有项目
      const { data: userProjects, error: projectsError } = await supabase
        .from('user_projects')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (projectsError) throw projectsError;

      // 获取所有项目的任务
      const { data: allTasks } = await supabase
        .from('project_tasks')
        .select('*')
        .in('project_id', userProjects?.map(p => p.id) || []);

      // 获取所有项目的笔记
      const { data: allNotes } = await supabase
        .from('project_notes')
        .select('*')
        .in('project_id', userProjects?.map(p => p.id) || []);

      // 组装数据
      const assembledProjects: Project[] = (userProjects || []).map(p => ({
        id: p.id,
        topicId: p.topic_id || '',
        topicTitle: p.title,
        status: p.status,
        tasks: (allTasks || [])
          .filter(t => t.project_id === p.id)
          .sort((a, b) => a.sort_order - b.sort_order)
          .map(t => ({
            id: t.id,
            title: t.title,
            completed: t.completed
          })),
        notes: (allNotes || [])
          .filter(n => n.project_id === p.id)
          .sort((a, b) => b.is_pinned - a.is_pinned || new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
          .map(n => n.content)
          .join('\n\n'),
        startDate: p.start_date,
        completedDate: p.completed_date
      }));

      setProjects(assembledProjects);
    } catch (error) {
      console.error('Failed to load projects:', error);
    } finally {
      setIsLoaded(true);
    }
  }, [user]);

  // 监听数据库变化
  useEffect(() => {
    loadProjects();
  }, [loadProjects]);

  const createProject = useCallback(async (topicId: string, topicTitle: string) => {
    if (!user) return;

    // 检查是否已存在
    const existing = projects.find(p => p.topicId === topicId);
    if (existing) return existing.id;

    // 创建项目
    const { data: newProject, error } = await supabase
      .from('user_projects')
      .insert({
        user_id: user.id,
        topic_id: topicId,
        title: topicTitle,
        status: 'todo',
        start_date: new Date().toISOString().split('T')[0]
      })
      .select()
      .single();

    if (error) {
      console.error('Failed to create project:', error);
      return;
    }

    // 创建默认任务
    const defaultTasks = [
      '阅读核心概念',
      '学习相关理论',
      '完成实践项目/实验',
      '总结输出'
    ];

    await supabase.from('project_tasks').insert(
      defaultTasks.map((title, index) => ({
        project_id: newProject.id,
        title,
        sort_order: index
      }))
    );

    // 重新加载
    loadProjects();
    return newProject.id;
  }, [user, projects, loadProjects]);

  const deleteProject = useCallback(async (projectId: string) => {
    const { error } = await supabase
      .from('user_projects')
      .delete()
      .eq('id', projectId);

    if (error) {
      console.error('Failed to delete project:', error);
      return;
    }

    setProjects(prev => prev.filter(p => p.id !== projectId));
  }, []);

  const toggleTask = useCallback(async (projectId: string, taskId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const task = project.tasks.find(t => t.id === taskId);
    if (!task) return;

    // 更新数据库
    await supabase
      .from('project_tasks')
      .update({ completed: !task.completed })
      .eq('id', taskId);

    // 更新本地状态
    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        const updatedTasks = p.tasks.map(t =>
          t.id === taskId ? { ...t, completed: !t.completed } : t
        );
        const allCompleted = updatedTasks.every(t => t.completed);
        const someCompleted = updatedTasks.some(t => t.completed);

        let newStatus = p.status;
        if (allCompleted && updatedTasks.length > 0) {
          newStatus = 'completed';
        } else if (someCompleted) {
          newStatus = 'in-progress';
        }

        // 更新项目状态到数据库
        if (newStatus !== p.status) {
          supabase
            .from('user_projects')
            .update({
              status: newStatus,
              completed_date: newStatus === 'completed' ? new Date().toISOString().split('T')[0] : null
            })
            .eq('id', projectId);
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
  }, [projects]);

  const addTask = useCallback(async (projectId: string, title: string) => {
    if (!user) return;

    const project = projects.find(p => p.id === projectId);
    const sortOrder = project ? project.tasks.length : 0;

    const { data: newTask, error } = await supabase
      .from('project_tasks')
      .insert({
        project_id: projectId,
        title,
        sort_order: sortOrder
      })
      .select()
      .single();

    if (error) {
      console.error('Failed to add task:', error);
      return;
    }

    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        return {
          ...p,
          tasks: [...p.tasks, { id: newTask.id, title: newTask.title, completed: false }]
        };
      }
      return p;
    }));
  }, [user, projects]);

  const deleteTask = useCallback(async (projectId: string, taskId: string) => {
    await supabase
      .from('project_tasks')
      .delete()
      .eq('id', taskId);

    setProjects(prev => prev.map(p => {
      if (p.id === projectId) {
        return { ...p, tasks: p.tasks.filter(t => t.id !== taskId) };
      }
      return p;
    }));
  }, []);

  const updateNotes = useCallback(async (projectId: string, notes: string) => {
    // 先删除旧笔记，再插入新笔记
    await supabase.from('project_notes').delete().eq('project_id', projectId);

    if (notes.trim()) {
      await supabase.from('project_notes').insert({
        project_id: projectId,
        content: notes
      });
    }

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
    toggleTask,
    addTask,
    deleteTask,
    updateNotes,
    getProjectByTopicId,
    getStats,
    isLoaded
  };
}
