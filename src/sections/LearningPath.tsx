import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, ChevronRight, Clock, CheckCircle2, Circle, BookOpen } from 'lucide-react';
import type { LearningNode } from '@/types';

interface LearningPathProps {
  learningPath: LearningNode[];
  onToggleComplete: (nodeId: string) => void;
}

function TreeNode({ 
  node, 
  level, 
  onToggleComplete 
}: { 
  node: LearningNode; 
  level: number;
  onToggleComplete: (nodeId: string) => void;
}) {
  const [expanded, setExpanded] = useState(level < 2);
  const hasChildren = node.children && node.children.length > 0;

  const getLevelColor = (lvl: number) => {
    switch (lvl) {
      case 0: return 'border-cyan-500/50 bg-cyan-500/10';
      case 1: return 'border-blue-500/50 bg-blue-500/10';
      case 2: return 'border-slate-600 bg-slate-800/50';
      default: return 'border-slate-700 bg-slate-800/30';
    }
  };

  return (
    <div className="select-none">
      <Card 
        className={`mb-2 border ${getLevelColor(level)} transition-all hover:border-opacity-80 ${
          node.completed ? 'opacity-70' : ''
        }`}
        style={{ marginLeft: `${level * 24}px` }}
      >
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            {hasChildren && (
              <Button
                variant="ghost"
                size="sm"
                className="p-0 h-6 w-6 text-slate-400 hover:text-white"
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </Button>
            )}
            {!hasChildren && <div className="w-6" />}
            
            <Checkbox
              checked={node.completed}
              onCheckedChange={() => onToggleComplete(node.id)}
              className="border-slate-500 data-[state=checked]:bg-cyan-500 data-[state=checked]:border-cyan-500"
            />
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                {node.completed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Circle className="w-4 h-4 text-slate-500" />
                )}
                <h3 className={`font-medium ${node.completed ? 'text-slate-400 line-through' : 'text-white'}`}>
                  {node.title}
                </h3>
              </div>
              <p className="text-sm text-slate-400 mt-1 ml-6">{node.description}</p>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{node.estimatedTime}</span>
              </div>
              {node.prerequisites.length > 0 && (
                <div className="hidden md:flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  <span>需先修: {node.prerequisites.length}项</span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
      
      {hasChildren && expanded && (
        <div className="animate-in slide-in-from-top-2 duration-200">
          {node.children!.map(child => (
            <TreeNode
              key={child.id}
              node={child}
              level={level + 1}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function LearningPathSection({ learningPath, onToggleComplete }: LearningPathProps) {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">学习路线</h1>
          <p className="text-slate-400 mt-1">系统化化学工程知识树，从基础到前沿</p>
        </div>
        <Button
          variant="outline"
          className="border-slate-600 text-slate-300 hover:bg-slate-800"
          onClick={() => setExpandAll(!expandAll)}
        >
          {expandAll ? '全部收起' : '全部展开'}
        </Button>
      </div>

      <div className="bg-slate-900/30 rounded-xl p-6 border border-slate-800">
        <div className="flex items-center gap-6 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border border-cyan-500/50 bg-cyan-500/10" />
            <span className="text-slate-400">阶段</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border border-blue-500/50 bg-blue-500/10" />
            <span className="text-slate-400">模块</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border border-slate-600 bg-slate-800/50" />
            <span className="text-slate-400">具体课程</span>
          </div>
        </div>

        <div className="space-y-2">
          {learningPath.map(node => (
            <TreeNode
              key={node.id}
              node={node}
              level={0}
              onToggleComplete={onToggleComplete}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-4">
            <p className="text-cyan-400 font-medium">Phase 1</p>
            <p className="text-white text-lg font-bold">基础依赖</p>
            <p className="text-slate-400 text-sm">数学 + 物理化学 + 化学基础</p>
            <p className="text-slate-500 text-sm mt-2">预计 4-6 个月</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-4">
            <p className="text-blue-400 font-medium">Phase 2</p>
            <p className="text-white text-lg font-bold">核心组件</p>
            <p className="text-slate-400 text-sm">化工原理 + 反应工程 + 热力学</p>
            <p className="text-slate-500 text-sm mt-2">预计 12-18 个月</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/50 border-slate-800">
          <CardContent className="p-4">
            <p className="text-purple-400 font-medium">Phase 3-5</p>
            <p className="text-white text-lg font-bold">专业深化</p>
            <p className="text-slate-400 text-sm">工具链 + 专业方向 + 系统思维</p>
            <p className="text-slate-500 text-sm mt-2">持续学习</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
