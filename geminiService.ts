import { GoogleGenAI, Type, Schema } from "@google/genai";
import { AIOptimizationResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const optimizeContent = async (concept: string): Promise<AIOptimizationResult> => {
  const schema: Schema = {
    type: Type.OBJECT,
    properties: {
      title: { type: Type.STRING, description: "A high-CTR, clickbait-style viral title." },
      description: { type: Type.STRING, description: "A SEO-optimized description." },
      tags: { type: Type.ARRAY, items: { type: Type.STRING }, description: "5 viral tags." },
      viralityScore: { type: Type.NUMBER, description: "A score from 0 to 100 predicting viral potential." },
      reasoning: { type: Type.STRING, description: "Brief explanation of why this will go viral." }
    },
    required: ["title", "description", "tags", "viralityScore", "reasoning"],
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a 'God-Mode' YouTube algorithm expert. Analyze this video concept: "${concept}". 
      Generate metadata designed to maximize click-through rate (CTR) and watch time.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema,
        systemInstruction: "You are the Aether AI Engine. Your goal is to maximize creator growth. Be aggressive with optimization strategies.",
      },
    });

    const result = JSON.parse(response.text || "{}");
    return result as AIOptimizationResult;
  } catch (error) {
    console.error("Gemini Optimization Error:", error);
    // Fallback mock data in case of API failure or missing key
    return {
      title: "Error Generating AI Response",
      description: "Please check your API key and try again.",
      tags: ["error", "retry"],
      viralityScore: 0,
      reasoning: "AI service unavailable."
    };
  }
};