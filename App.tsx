import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Feed } from './pages/Feed';
import { Analytics } from './pages/Analytics';
import { AIStudio } from './pages/AIStudio';
import { ShortsPlayer } from './pages/ShortsPlayer';
import { SystemCore } from './pages/SystemCore';
import { NavSection } from './types';
import { Search, Bell, User } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>(NavSection.HOME);

  const renderContent = () => {
    switch (currentSection) {
      case NavSection.HOME:
        return <Feed />;
      case NavSection.ANALYTICS:
        return <Analytics />;
      case NavSection.STUDIO:
        return <AIStudio />;
      case NavSection.SHORTS:
        return <ShortsPlayer />;
      case NavSection.SYSTEM:
        return <SystemCore />;
      case NavSection.LIVE:
        return <div className="flex items-center justify-center h-full text-gray-500">Live Streaming Control Panel (Connect OBS to Start)</div>;
      default:
        return <Feed />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f12] text-white flex">
      <Sidebar currentSection={currentSection} onNavigate={setCurrentSection} />
      
      <main className="flex-1 ml-64">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-[#0f0f12]/80 backdrop-blur-md border-b border-white/5 px-8 py-4 flex items-center justify-between">
          <div className="w-96 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search ecosystem..." 
              className="w-full bg-[#1a1b1e] border border-white/5 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors relative">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[1px]">
              <div className="w-full h-full rounded-full bg-[#0f0f12] flex items-center justify-center">
                <User className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          </div>
        </header>

        {/* Dynamic Content */}
        <div className="min-h-[calc(100vh-80px)]">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}