import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ArrowUpRight, DollarSign, Users, Eye } from 'lucide-react';

const DATA = [
  { name: 'Mon', views: 4000, engagement: 2400, revenue: 240 },
  { name: 'Tue', views: 3000, engagement: 1398, revenue: 221 },
  { name: 'Wed', views: 2000, engagement: 9800, revenue: 229 },
  { name: 'Thu', views: 2780, engagement: 3908, revenue: 200 },
  { name: 'Fri', views: 1890, engagement: 4800, revenue: 218 },
  { name: 'Sat', views: 2390, engagement: 3800, revenue: 250 },
  { name: 'Sun', views: 3490, engagement: 4300, revenue: 210 },
];

export const Analytics: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Channel Performance</h2>
      
      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Views', value: '2.4M', change: '+12.5%', icon: Eye, color: 'text-blue-500' },
          { label: 'Subscribers', value: '85.2K', change: '+4.1%', icon: Users, color: 'text-purple-500' },
          { label: 'Est. Revenue', value: '$12,450', change: '+18.2%', icon: DollarSign, color: 'text-green-500' },
          { label: 'Avg. Retention', value: '8m 42s', change: '+2.4%', icon: ArrowUpRight, color: 'text-orange-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#121215] border border-white/5 rounded-xl p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              </div>
              <div className={`p-2 bg-white/5 rounded-lg ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-center text-sm text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              {stat.change}
              <span className="text-gray-500 ml-1">vs last 28 days</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#121215] border border-white/5 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Real-time Views</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DATA}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2e" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a' }}
                  itemStyle={{ color: '#e5e7eb' }}
                />
                <Area type="monotone" dataKey="views" stroke="#3b82f6" fillOpacity={1} fill="url(#colorViews)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#121215] border border-white/5 rounded-xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Engagement Metrics</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2e" />
                <XAxis dataKey="name" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a' }}
                  itemStyle={{ color: '#e5e7eb' }}
                />
                <Bar dataKey="engagement" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};