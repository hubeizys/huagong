// 学习路线节点
export interface LearningNode {
  id: string;
  title: string;
  description: string;
  level: number;
  children?: LearningNode[];
  completed: boolean;
  estimatedTime: string;
  prerequisites: string[];
}

// 学习资源
export interface Resource {
  title: string;
  url?: string;
  type: 'book' | 'video' | 'article' | 'course';
}

// 课题
export interface Topic {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  summary: string;
  coreConcept: string;
  theory: string[];
  resources: Resource[];
  estimatedTime: string;
  experiment?: string;
}

// 任务
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

// 项目
export interface Project {
  id: string;
  topicId: string;
  topicTitle: string;
  status: 'todo' | 'in-progress' | 'completed';
  tasks: Task[];
  notes: string;
  startDate: string;
  completedDate?: string;
}

// 分类
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}
