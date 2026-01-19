export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  timestamp: string;
  author: string;
  duration: string;
}

export interface AnalyticsData {
  name: string;
  views: number;
  engagement: number;
  revenue: number;
}

export interface AIOptimizationResult {
  title: string;
  description: string;
  tags: string[];
  viralityScore: number;
  reasoning: string;
}

export enum NavSection {
  HOME = 'home',
  STUDIO = 'studio',
  ANALYTICS = 'analytics',
  SHORTS = 'shorts',
  LIVE = 'live',
  SYSTEM = 'system'
}