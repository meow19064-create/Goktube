import React from 'react';
import { Play, MoreVertical, CheckCircle } from 'lucide-react';
import { Video } from '../types';

const MOCK_VIDEOS: Video[] = [
  { id: '1', title: 'Building a Fusion Reactor in My Garage', thumbnail: 'https://picsum.photos/800/450?random=1', views: '12M', timestamp: '2 hours ago', author: 'TechGod', duration: '14:20' },
  { id: '2', title: 'AI Took Over My Job (And I Love It)', thumbnail: 'https://picsum.photos/800/450?random=2', views: '3.4M', timestamp: '5 hours ago', author: 'FutureLife', duration: '8:45' },
  { id: '3', title: 'Top 10 Hidden Gems in Cyberpunk 2077', thumbnail: 'https://picsum.photos/800/450?random=3', views: '890K', timestamp: '1 day ago', author: 'GamingNexus', duration: '22:10' },
  { id: '4', title: 'Why Rust is the Future of Systems Programming', thumbnail: 'https://picsum.photos/800/450?random=4', views: '1.2M', timestamp: '2 days ago', author: 'CodeMaster', duration: '18:30' },
  { id: '5', title: 'Cooking 100oz Wagyu Steak Underwater', thumbnail: 'https://picsum.photos/800/450?random=5', views: '45M', timestamp: '1 week ago', author: 'ChefExtreme', duration: '12:00' },
  { id: '6', title: 'SpaceX Starship Launch Reaction', thumbnail: 'https://picsum.photos/800/450?random=6', views: '8M', timestamp: '3 days ago', author: 'SpaceFan', duration: '1:05:20' },
];

export const Feed: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
        <div className="flex gap-2">
          {['All', 'Tech', 'Gaming', 'AI', 'Lifestyle'].map((tag) => (
            <button key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10 transition-colors text-gray-300">
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_VIDEOS.map((video) => (
          <div key={video.id} className="group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
              <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs rounded font-medium text-white">
                {video.duration}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <Play className="w-5 h-5 text-white fill-white ml-1" />
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={`https://picsum.photos/100/100?random=${video.id}`} className="w-10 h-10 rounded-full border border-white/10" alt="avatar" />
              <div className="flex-1">
                <h3 className="font-semibold text-white leading-tight mb-1 group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center text-sm text-gray-400 mb-0.5">
                  <span>{video.author}</span>
                  <CheckCircle className="w-3 h-3 ml-1 text-blue-500 fill-blue-500/20" />
                </div>
                <div className="text-sm text-gray-500">
                  {video.views} views • {video.timestamp}
                </div>
              </div>
              <button className="text-gray-500 hover:text-white">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};