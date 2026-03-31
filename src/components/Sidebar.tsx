import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  GitBranch, 
  BookOpen, 
  FolderKanban, 
  Info,
  FlaskConical,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  projectCount: number;
}

export function Sidebar({ projectCount }: SidebarProps) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { path: '/', label: '仪表盘', icon: LayoutDashboard },
    { path: '/learning-path', label: '学习路线', icon: GitBranch },
    { path: '/topics', label: '课题库', icon: BookOpen },
    { path: '/my-projects', label: '我的项目', icon: FolderKanban, badge: projectCount },
    { path: '/about', label: '关于', icon: Info },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div 
      className={`h-screen bg-slate-900 border-r border-slate-800 flex flex-col transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
            <FlaskConical className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-bold text-white text-sm">ChemE-Learning</h1>
              <p className="text-xs text-slate-400">化工学习平台</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map(item => (
          <Link key={item.path} to={item.path}>
            <Button
              variant={isActive(item.path) ? 'default' : 'ghost'}
              className={`w-full justify-start ${
                isActive(item.path) 
                  ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              } ${collapsed ? 'px-2' : 'px-3'}`}
            >
              <item.icon className={`w-5 h-5 ${!collapsed && 'mr-3'}`} />
              {!collapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="bg-slate-700 text-white text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </>
              )}
            </Button>
          </Link>
        ))}
      </nav>

      {/* Collapse Button */}
      <div className="p-3 border-t border-slate-800">
        <Button
          variant="ghost"
          size="sm"
          className="w-full text-slate-400 hover:text-white hover:bg-slate-800"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4 mr-2" />}
          {!collapsed && '收起侧边栏'}
        </Button>
      </div>
    </div>
  );
}
