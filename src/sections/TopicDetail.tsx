import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import { ArrowLeft, Clock, BookOpen, ExternalLink, FlaskConical, Plus, Check, PlayCircle } from 'lucide-react';
import { categories, getDifficultyColor, getDifficultyLabel } from '@/data/topics';
import { getTopicById } from '@/data/topics';

interface TopicDetailProps {
  hasProject: (topicId: string) => boolean;
  onCreateProject: (topicId: string, topicTitle: string) => void;
}

export function TopicDetail({ hasProject, onCreateProject }: TopicDetailProps) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const topic = id ? getTopicById(id) : undefined;

  if (!topic) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">课题未找到</p>
        <Button 
          variant="outline" 
          className="mt-4 border-slate-600"
          onClick={() => navigate('/topics')}
        >
          返回课题库
        </Button>
      </div>
    );
  }

  const category = categories.find(c => c.id === topic.categoryId);
  const isProjectCreated = hasProject(topic.id);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Back Button */}
      <Button
        variant="ghost"
        className="text-slate-400 hover:text-white"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        返回
      </Button>

      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{category?.icon}</span>
              <Badge className={`${getDifficultyColor(topic.difficulty)} text-white`}>
                {getDifficultyLabel(topic.difficulty)}
              </Badge>
              <span className="text-slate-400 text-sm">{topic.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {topic.title}
            </h1>
            <p className="text-slate-300 text-lg max-w-3xl">
              {topic.summary}
            </p>
            <div className="flex items-center gap-6 mt-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>预计学习时间: {topic.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>{topic.theory.length} 个核心理论</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            {isProjectCreated ? (
              <Badge variant="outline" className="border-emerald-500 text-emerald-400 px-4 py-2">
                <Check className="w-4 h-4 mr-2" />
                已添加到项目
              </Badge>
            ) : (
              <Button 
                size="lg" 
                className="bg-cyan-500 hover:bg-cyan-600"
                onClick={() => onCreateProject(topic.id, topic.title)}
              >
                <Plus className="w-4 h-4 mr-2" />
                添加到我的项目
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Action Button */}
      <div className="md:hidden">
        {isProjectCreated ? (
          <Button variant="outline" className="w-full border-emerald-500 text-emerald-400" disabled>
            <Check className="w-4 h-4 mr-2" />
            已添加到项目
          </Button>
        ) : (
          <Button 
            className="w-full bg-cyan-500 hover:bg-cyan-600"
            onClick={() => onCreateProject(topic.id, topic.title)}
          >
            <Plus className="w-4 h-4 mr-2" />
            添加到我的项目
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Core Concept */}
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <PlayCircle className="w-5 h-5 text-cyan-400" />
                核心揭秘
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                {topic.coreConcept}
              </p>
            </CardContent>
          </Card>

          {/* Theory */}
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-400" />
                涉及理论
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {topic.theory.map((t, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-2 bg-slate-800 text-slate-300 rounded-lg text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Experiment */}
          {topic.experiment && (
            <Card className="bg-slate-900/50 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FlaskConical className="w-5 h-5 text-amber-400" />
                  实践项目
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{topic.experiment}</p>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resources */}
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white text-lg">学习资源</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topic.resources.map((resource, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        resource.type === 'book' ? 'bg-blue-400' :
                        resource.type === 'video' ? 'bg-red-400' :
                        resource.type === 'course' ? 'bg-green-400' : 'bg-amber-400'
                      }`} />
                      <span className="text-slate-300 text-sm">{resource.title}</span>
                    </div>
                    {resource.url && (
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Learning Path */}
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white text-lg">学习路径建议</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-white text-sm">阅读核心概念</p>
                    <p className="text-slate-500 text-xs">理解基本原理</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-white text-sm">学习相关理论</p>
                    <p className="text-slate-500 text-xs">深入数学模型</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-white text-sm">完成实践项目</p>
                    <p className="text-slate-500 text-xs">动手验证</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-white text-sm">总结输出</p>
                    <p className="text-slate-500 text-xs">写笔记或做演示</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
