import { useState, useEffect, useCallback } from 'react';
import type { LearningNode } from '@/types';
import { learningPath as initialPath } from '@/data/learningPath';

const STORAGE_KEY = 'cheme-learning-progress';

export function useLearningProgress() {
  const [learningPath, setLearningPath] = useState<LearningNode[]>(initialPath);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setLearningPath(parsed);
      } catch (e) {
        console.error('Failed to parse learning progress:', e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever path changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(learningPath));
    }
  }, [learningPath, isLoaded]);

  const toggleNodeComplete = useCallback((nodeId: string) => {
    const updateNode = (nodes: LearningNode[]): LearningNode[] => {
      return nodes.map(node => {
        if (node.id === nodeId) {
          return { ...node, completed: !node.completed };
        }
        if (node.children) {
          return { ...node, children: updateNode(node.children) };
        }
        return node;
      });
    };
    setLearningPath(prev => updateNode(prev));
  }, []);

  const getProgress = useCallback(() => {
    let total = 0;
    let completed = 0;
    
    const count = (nodes: LearningNode[]) => {
      nodes.forEach(node => {
        total++;
        if (node.completed) completed++;
        if (node.children) count(node.children);
      });
    };
    
    count(learningPath);
    return { total, completed, percentage: total > 0 ? Math.round((completed / total) * 100) : 0 };
  }, [learningPath]);

  const getCompletedNodes = useCallback(() => {
    const completed: string[] = [];
    
    const findCompleted = (nodes: LearningNode[]) => {
      nodes.forEach(node => {
        if (node.completed) completed.push(node.id);
        if (node.children) findCompleted(node.children);
      });
    };
    
    findCompleted(learningPath);
    return completed;
  }, [learningPath]);

  return {
    learningPath,
    toggleNodeComplete,
    getProgress,
    getCompletedNodes,
    isLoaded
  };
}
