import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { BookOpen, CheckCircle2, Clock, Target, TrendingUp, FlaskConical } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '@/types';

interface DashboardProps {
  learningProgress: { total: number; completed: number; percentage: number };
  projectStats: { total: number; todo: number; inProgress: number; completed: number };
  recentProjects: Project[];
}

export function Dashboard({ learningProgress, projectStats, recentProjects }: DashboardProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(learningProgress.percentage), 300);
    return () => clearTimeout(timer);
  }, [learningProgress.percentage]);

  const quickStats = [
    {
      title: '学习路线进度',
      value: `${learningProgress.completed}/${learningProgress.total}`,
      subtitle: `已完成 ${learningProgress.percentage}%`,
      icon: TrendingUp,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    },
    {
      title: '进行中的项目',
      value: projectStats.inProgress.toString(),
      subtitle: `总计 ${projectStats.total} 个项目`,
      icon: FlaskConical,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10'
    },
    {
      title: '已完成课题',
      value: projectStats.completed.toString(),
      subtitle: '待开始: ' + projectStats.todo,
      icon: CheckCircle2,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10'
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-white mb-2">
            欢迎回到 ChemE-Learning Hub
          </h1>
          <p className="text-slate-300 max-w-2xl">
            系统化学习化学工程知识，从基础数学到前沿技术，50+精选课题等你探索。
          </p>
          <div className="flex gap-3 mt-6">
            <Link to="/topics">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <BookOpen className="w-4 h-4 mr-2" />
                浏览课题
              </Button>
            </Link>
            <Link to="/learning-path">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Target className="w-4 h-4 mr-2" />
                学习路线
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="bg-slate-900/50 border-slate-800">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400">{stat.title}</p>
                  <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.subtitle}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              学习进度概览
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-400">总体完成度</span>
                <span className="text-cyan-400 font-medium">{learningProgress.percentage}%</span>
              </div>
              <Progress value={animatedProgress} className="h-3 bg-slate-700" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-white">{learningProgress.completed}</p>
                <p className="text-sm text-slate-400">已完成节点</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-white">{learningProgress.total - learningProgress.completed}</p>
                <p className="text-sm text-slate-400">待学习节点</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              最近的项目
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentProjects.length === 0 ? (
              <div className="text-center py-8 text-slate-500">
                <p>还没有项目，快去课题库添加一个吧！</p>
                <Link to="/topics">
                  <Button variant="outline" className="mt-4 border-slate-600">
                    浏览课题
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {recentProjects.slice(0, 5).map(project => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        project.status === 'completed' ? 'bg-emerald-400' :
                        project.status === 'in-progress' ? 'bg-amber-400' : 'bg-slate-400'
                      }`} />
                      <div>
                        <p className="text-white text-sm font-medium">{project.topicTitle}</p>
                        <p className="text-slate-500 text-xs">
                          {project.tasks.filter(t => t.completed).length}/{project.tasks.length} 任务完成
                        </p>
                      </div>
                    </div>
                    <Link to="/my-projects">
                      <Button variant="ghost" size="sm" className="text-cyan-400 hover:text-cyan-300">
                        查看
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: '学习路线', path: '/learning-path', desc: '系统化知识树', color: 'from-blue-500/20 to-cyan-500/20' },
          { label: '课题库', path: '/topics', desc: '50+精选课题', color: 'from-purple-500/20 to-pink-500/20' },
          { label: '我的项目', path: '/my-projects', desc: '追踪学习进度', color: 'from-emerald-500/20 to-teal-500/20' },
          { label: '关于', path: '/about', desc: '使用指南', color: 'from-orange-500/20 to-amber-500/20' }
        ].map((item, index) => (
          <Link key={index} to={item.path}>
            <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02]`}>
              <p className="text-white font-medium">{item.label}</p>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
