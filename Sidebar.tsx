import React from 'react';
import { LayoutDashboard, Zap, BarChart3, Radio, Smartphone, Terminal, Cpu } from 'lucide-react';
import { NavSection } from '../types';

interface SidebarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentSection, onNavigate }) => {
  const navItems = [
    { id: NavSection.HOME, icon: LayoutDashboard, label: 'Feed' },
    { id: NavSection.SHORTS, icon: Smartphone, label: 'Shorts Engine' },
    { id: NavSection.STUDIO, icon: Cpu, label: 'AI Studio' },
    { id: NavSection.ANALYTICS, icon: BarChart3, label: 'God Mode Analytics' },
    { id: NavSection.LIVE, icon: Radio, label: 'Live Control' },
    { id: NavSection.SYSTEM, icon: Terminal, label: 'System Core' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#0a0a0c] border-r border-white/5 flex flex-col z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
          <Zap className="text-white w-5 h-5" />
        </div>
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          AETHER
        </h1>
      </div>

      <nav className="flex-1 px-3 space-y-2 py-4">
        {navItems.map((item) => {
          const isActive = currentSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-gray-500 group-hover:text-white'}`} />
              <span className="font-medium">{item.label}</span>
              {isActive && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-mono text-gray-400">SYSTEM HEALTH</span>
          </div>
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex justify-between">
              <span>Android App</span>
              <span className="text-green-400">Live</span>
            </div>
            <div className="flex justify-between">
              <span>Python Core</span>
              <span className="text-green-400">Healthy</span>
            </div>
            <div className="flex justify-between">
              <span>AI Engine</span>
              <span className="text-blue-400">Idle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};