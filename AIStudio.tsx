import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight, TrendingUp, Tag, FileText } from 'lucide-react';
import { optimizeContent } from '../services/geminiService';
import { AIOptimizationResult } from '../types';

export const AIStudio: React.FC = () => {
  const [concept, setConcept] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIOptimizationResult | null>(null);

  const handleOptimize = async () => {
    if (!concept) return;
    setLoading(true);
    const data = await optimizeContent(concept);
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto h-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white flex items-center gap-3">
          <Sparkles className="text-purple-500" />
          God-Mode Studio
        </h2>
        <p className="text-gray-400 mt-2">Use the Aether Neural Engine to predict virality and optimize content before you even film.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-[#121215] border border-white/10 rounded-2xl p-6 shadow-2xl">
          <label className="block text-sm font-medium text-gray-400 mb-2">Video Concept / Rough Idea</label>
          <textarea
            value={concept}
            onChange={(e) => setConcept(e.target.value)}
            className="w-full h-48 bg-[#0a0a0c] border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none mb-4"
            placeholder="e.g., I want to film a vlog about surviving 24 hours in a desert with only a spoon..."
          />
          
          <button
            onClick={handleOptimize}
            disabled={loading || !concept}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-purple-900/20"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Sparkles className="w-5 h-5" />}
            {loading ? 'Consulting the Algorithm...' : 'Optimize & Predict Virality'}
          </button>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          {result ? (
            <>
              {/* Score Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <TrendingUp size={120} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-gray-400 font-medium mb-1">Predicted Virality Score</h3>
                  <div className="flex items-end gap-2">
                    <span className={`text-6xl font-bold ${result.viralityScore > 80 ? 'text-green-400' : result.viralityScore > 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {result.viralityScore}
                    </span>
                    <span className="text-2xl text-gray-500 mb-2">/ 100</span>
                  </div>
                  <p className="mt-4 text-sm text-gray-300 italic">"{result.reasoning}"</p>
                </div>
              </div>

              {/* Metadata Card */}
              <div className="bg-[#121215] border border-white/10 rounded-2xl p-6 space-y-4">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">
                    <FileText size={16} /> Optimized Title
                  </h4>
                  <div className="bg-[#0a0a0c] p-3 rounded-lg border border-white/5 text-lg font-bold text-white">
                    {result.title}
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                    <FileText size={16} /> Description Preview
                  </h4>
                  <div className="bg-[#0a0a0c] p-3 rounded-lg border border-white/5 text-sm text-gray-300">
                    {result.description}
                  </div>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">
                    <Tag size={16} /> Viral Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm border border-white/10">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-gray-600 border-2 border-dashed border-gray-800 rounded-2xl p-8">
              <TrendingUp className="w-16 h-16 mb-4 opacity-20" />
              <p className="text-center max-w-xs">AI results will appear here after analysis. Get ready to break the algorithm.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};