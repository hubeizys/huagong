import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, FlaskConical, Target, Lightbulb, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-white">关于 ChemE-Learning Hub</h1>
        <p className="text-slate-400 mt-1">系统化学习化学工程的知识平台</p>
      </div>

      {/* Hero */}
      <Card className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500/30">
        <CardContent className="p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
              <FlaskConical className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">课题驱动学习</h2>
              <p className="text-slate-300">每个课题都是一个完整的"侦探故事"</p>
            </div>
          </div>
          <p className="text-slate-300 leading-relaxed">
            ChemE-Learning Hub 采用"课题驱动学习"方法，将化学工程知识拆解为50+个精选课题。
            每个课题从日常现象或工业问题出发，引导你主动探索背后的原理，
            像工程师一样思考，像科学家一样探究。
          </p>
        </CardContent>
      </Card>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              系统化学习路线
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              从数学基础到前沿技术，5大阶段、30+模块、100+知识节点，
              构建完整的化学工程知识体系。每个节点都有明确的前置依赖和学习时长估计。
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              50+ 精选课题
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              涵盖8大模块：身边的化工、能源与材料、环境化工、传统工艺、
              精细化工、前沿技术、过程安全、计算智能化。从洗发水到芯片制造，应有尽有。
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-400" />
              项目制学习
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              将课题添加到"我的项目"，创建任务清单，记录学习笔记，
              追踪进度。像管理工程项目一样管理你的学习过程。
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-slate-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-400" />
              开源免费
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300">
              完全免费，数据存储在本地浏览器中。你可以随时导出备份，
              也可以离线使用。适合自学、教学辅助和工程师进修。
            </p>
          </CardContent>
        </Card>
      </div>

      {/* How to Use */}
      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">使用指南</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                1
              </div>
              <div>
                <p className="text-white font-medium">浏览学习路线</p>
                <p className="text-slate-400 text-sm">
                  先查看"学习路线"页面，了解整个化学工程的知识架构，标记你已掌握的内容。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                2
              </div>
              <div>
                <p className="text-white font-medium">选择感兴趣的课题</p>
                <p className="text-slate-400 text-sm">
                  在"课题库"中按分类或难度筛选，找到你想探索的问题。建议从"身边的化工"开始。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                3
              </div>
              <div>
                <p className="text-white font-medium">添加到项目</p>
                <p className="text-slate-400 text-sm">
                  点击"添加到我的项目"，系统会为你创建学习任务清单。按步骤完成学习。
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                4
              </div>
              <div>
                <p className="text-white font-medium">记录与输出</p>
                <p className="text-slate-400 text-sm">
                  在学习笔记中记录心得，完成实践项目。最好的学习是教会别人，尝试向朋友解释你学到的内容。
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="bg-slate-900/50 border-slate-800">
        <CardHeader>
          <CardTitle className="text-white">学习建议</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>物理化学是灵魂</strong>：热力学和动力学理解不透，后续课程会很吃力</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>数学建模能力</strong>：化工本质是"用数学描述物理过程"，重视微分方程和数值方法</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>软件实操</strong>：Aspen Plus必须亲手做10个以上完整案例，光看视频没用</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>工程思维</strong>：培养"物料衡算"的本能，任何过程先画流程图、列衡算式</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>安全意识</strong>：化工首先是安全，其次是环保，最后才是效益</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center text-slate-500 text-sm py-8">
        <p>Made with ❤️ for Chemical Engineering learners</p>
        <p className="mt-1">Data is stored locally in your browser</p>
      </div>
    </div>
  );
}
