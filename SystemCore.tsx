import React, { useState } from 'react';
import { Terminal, Box, Database, Server, Cpu, Copy, Check, Download } from 'lucide-react';

const CODE_FILES = {
  android: {
    name: 'MainActivity.java',
    lang: 'java',
    content: `package com.aether.app;

import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;
import com.google.android.exoplayer2.ExoPlayer;
import com.aether.core.GodModeEngine;

public class MainActivity extends AppCompatActivity {
    private ExoPlayer player;
    private GodModeEngine aiEngine;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // Initialize God-Mode AI Engine
        aiEngine = new GodModeEngine(this);
        aiEngine.enableQuantumOptimization(true);
        
        // Setup 8K Video Pipeline
        initializePlayer();
        
        // Connect to Python Backend via WebSocket
        WebSocketService.connect("wss://api.aether.com/v1/stream");
    }

    private void initializePlayer() {
        player = new ExoPlayer.Builder(this).build();
        // Custom C++ JNI Bridge for Zero-Copy Rendering
        player.setVideoSurface(NativeBridge.getSurface());
    }
}`
  },
  backend: {
    name: 'ai_core.py',
    lang: 'python',
    content: `import torch
from fastapi import FastAPI, WebSocket
from transformers import AutoModelForCausalLM
from aether_lib import ViralityPredictor

app = FastAPI()
model = AutoModelForCausalLM.from_pretrained("google/gemini-3-flash")
predictor = ViralityPredictor(weights="god_mode_v9.pt")

@app.websocket("/ws/stream")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_json()
        
        # Real-time virality scoring
        score = predictor.calculate_score(data['video_frames'])
        
        # Optimize metadata using Gemini
        optimization = model.generate(
            f"Optimize for max CTR: {data['title']}"
        )
        
        await websocket.send_json({
            "virality_score": score,
            "suggested_tags": optimization.tags,
            "status": "OPTIMIZED"
        })`
  },
  cpp: {
    name: 'video_processor.cpp',
    lang: 'cpp',
    content: `#include <jni.h>
#include <opencv2/core.hpp>
#include "aether_native.h"

extern "C" JNIEXPORT void JNICALL
Java_com_aether_core_NativeBridge_processFrame(JNIEnv* env, jobject thiz, jbyteArray frameData) {
    // High-performance Zero-Copy processing
    jbyte* buffer = env->GetByteArrayElements(frameData, NULL);
    
    cv::Mat frame(1920, 1080, CV_8UC4, buffer);
    
    // Apply AI Upscaling (Super Resolution)
    Aether::SuperRes::Upscale(frame, 4.0f); // 1080p -> 4K
    
    // Hardware accelerated encoding
    CudaEncoder::Encode(frame);
    
    env->ReleaseByteArrayElements(frameData, buffer, 0);
}`
  }
};

export const SystemCore: React.FC = () => {
  const [activeFile, setActiveFile] = useState<keyof typeof CODE_FILES>('backend');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_FILES[activeFile].content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col bg-[#0f0f12]">
      {/* Header */}
      <div className="p-6 border-b border-white/10 bg-[#0f0f12]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Terminal className="text-green-500" />
              System Core & Deployment
            </h2>
            <p className="text-gray-400 mt-1">Direct access to ecosystem source code and build pipelines.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white font-medium transition-colors">
            <Download size={18} />
            Export Full Project ZIP
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* File Explorer */}
        <div className="w-64 border-r border-white/10 bg-[#0a0a0c] p-4">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Project Structure</h3>
          <div className="space-y-1">
            <button
              onClick={() => setActiveFile('backend')}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeFile === 'backend' ? 'bg-blue-500/10 text-blue-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Server size={16} />
              backend/ai_engine.py
            </button>
            <button
              onClick={() => setActiveFile('android')}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeFile === 'android' ? 'bg-green-500/10 text-green-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Box size={16} />
              android/MainActivity.java
            </button>
            <button
              onClick={() => setActiveFile('cpp')}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeFile === 'cpp' ? 'bg-purple-500/10 text-purple-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Cpu size={16} />
              native/video_core.cpp
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Build Status</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Python API</span>
                  <span className="text-green-400">Running</span>
                </div>
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-green-500" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Neural Net</span>
                  <span className="text-blue-400">Inference: 4ms</span>
                </div>
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-blue-500 animate-pulse" />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Android Build</span>
                  <span className="text-yellow-400">APK Ready</span>
                </div>
                <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code Editor View */}
        <div className="flex-1 bg-[#1e1e1e] flex flex-col">
          <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-[#3e3e42]">
            <span className="text-sm text-gray-300 font-mono">{CODE_FILES[activeFile].name}</span>
            <button onClick={handleCopy} className="text-gray-400 hover:text-white transition-colors">
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <pre className="font-mono text-sm">
              <code className="language-python text-blue-300">
                {CODE_FILES[activeFile].content}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};