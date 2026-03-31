import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Clock, BookOpen, Plus, Check } from 'lucide-react';
import { topics, categories, getDifficultyColor, getDifficultyLabel } from '@/data/topics';
import type { Topic } from '@/types';
import { Link } from 'react-router-dom';

interface TopicsProps {
  hasProject: (topicId: string) => boolean;
  onCreateProject: (topicId: string, topicTitle: string) => void;
}

export function TopicsSection({ hasProject, onCreateProject }: TopicsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const filteredTopics = useMemo(() => {
    return topics.filter(topic => {
      const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          topic.summary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || topic.categoryId === selectedCategory;
      const matchesDifficulty = !selectedDifficulty || topic.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const difficultyOptions = [
    { value: 'easy', label: '入门', color: 'bg-green-500' },
    { value: 'medium', label: '进阶', color: 'bg-yellow-500' },
    { value: 'hard', label: '专业', color: 'bg-orange-500' },
    { value: 'expert', label: '专家', color: 'bg-red-500' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">课题库</h1>
          <p className="text-slate-400 mt-1">50+精选化工课题，从日常现象到前沿技术</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <span>共 {topics.length} 个课题</span>
          <span className="text-slate-600">|</span>
          <span>已筛选 {filteredTopics.length} 个</span>
        </div>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input
            placeholder="搜索课题..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? 'bg-cyan-500 hover:bg-cyan-600' : 'border-slate-600 text-slate-300'}
          >
            <Filter className="w-4 h-4 mr-1" />
            全部
          </Button>
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
              className={selectedCategory === cat.id ? 'bg-cyan-500 hover:bg-cyan-600' : 'border-slate-600 text-slate-300'}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.name}
            </Button>
          ))}
        </div>

        {/* Difficulty Filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-slate-500 flex items-center">难度:</span>
          {difficultyOptions.map(diff => (
            <Button
              key={diff.value}
              variant={selectedDifficulty === diff.value ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedDifficulty(diff.value === selectedDifficulty ? null : diff.value)}
              className={selectedDifficulty === diff.value ? `${diff.color} hover:opacity-90` : 'border-slate-600 text-slate-300'}
            >
              {diff.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTopics.map(topic => (
          <TopicCard 
            key={topic.id} 
            topic={topic} 
            hasProject={hasProject(topic.id)}
            onCreateProject={() => onCreateProject(topic.id, topic.title)}
          />
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500">没有找到匹配的课题</p>
          <Button
            variant="outline"
            className="mt-4 border-slate-600"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory(null);
              setSelectedDifficulty(null);
            }}
          >
            清除筛选
          </Button>
        </div>
      )}
    </div>
  );
}

function TopicCard({ 
  topic, 
  hasProject,
  onCreateProject 
}: { 
  topic: Topic; 
  hasProject: boolean;
  onCreateProject: () => void;
}) {
  const category = categories.find(c => c.id === topic.categoryId);

  return (
    <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-600 transition-all group flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{category?.icon}</span>
            <Badge className={`${getDifficultyColor(topic.difficulty)} text-white text-xs`}>
              {getDifficultyLabel(topic.difficulty)}
            </Badge>
          </div>
          {hasProject ? (
            <Badge variant="outline" className="border-emerald-500 text-emerald-400">
              <Check className="w-3 h-3 mr-1" />
              已添加
            </Badge>
          ) : null}
        </div>
        <CardTitle className="text-white text-lg mt-2 group-hover:text-cyan-400 transition-colors">
          <Link to={`/topic/${topic.id}`}>
            {topic.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-slate-400 text-sm line-clamp-2 mb-4">{topic.summary}</p>
        
        <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{topic.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-3 h-3" />
            <span>{topic.theory.length} 个理论</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {topic.theory.slice(0, 3).map((t, i) => (
            <span key={i} className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded">
              {t}
            </span>
          ))}
          {topic.theory.length > 3 && (
            <span className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded">
              +{topic.theory.length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto flex gap-2">
          <Link to={`/topic/${topic.id}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full border-slate-600 text-slate-300 hover:bg-slate-800">
              查看详情
            </Button>
          </Link>
          {!hasProject && (
            <Button 
              size="sm" 
              className="bg-cyan-500 hover:bg-cyan-600"
              onClick={onCreateProject}
            >
              <Plus className="w-4 h-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
