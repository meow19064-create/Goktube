import React from 'react';
import { Heart, MessageCircle, Share2, Music2 } from 'lucide-react';

export const ShortsPlayer: React.FC = () => {
  return (
    <div className="h-full flex justify-center py-8">
      <div className="w-full max-w-[400px] h-[calc(100vh-100px)] bg-gray-900 rounded-2xl overflow-hidden relative shadow-2xl border border-white/10">
        <img 
          src="https://picsum.photos/400/800?random=short1" 
          alt="Short" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
        
        {/* Right Actions */}
        <div className="absolute right-4 bottom-20 flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-colors">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <span className="text-white text-xs font-bold">124K</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-colors">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <span className="text-white text-xs font-bold">1.2K</span>
          </div>
          <div className="flex flex-col items-center gap-1 cursor-pointer group">
            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-colors">
              <Share2 className="w-7 h-7 text-white" />
            </div>
            <span className="text-white text-xs font-bold">Share</span>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute left-4 bottom-6 right-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 border border-white/50" />
            <span className="text-white font-bold text-sm">@ViralMaster</span>
            <button className="px-3 py-1 bg-white text-black text-xs font-bold rounded-full">Subscribe</button>
          </div>
          <p className="text-white text-sm line-clamp-2 mb-3">
            Wait for the end! 🤯 You won't believe this #viral #trending #fyp
          </p>
          <div className="flex items-center gap-2 text-white/80 text-xs">
            <Music2 className="w-3 h-3" />
            <div className="overflow-hidden">
              <p className="whitespace-nowrap animate-marquee">Original Sound - ViralMaster • Original Sound - ViralMaster</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};