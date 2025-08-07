'use client';

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Bot, Cpu, Zap, Activity, Users, ShieldCheck, TrendingUp, ArrowRight, Settings, BarChart3, Brain, Workflow, MessageSquare, ChevronDown, Eye, Globe, Server, Monitor } from "lucide-react";
import { StartWizard } from "./StartWizard";
import { AdminPanel } from "./AdminPanel";
import { OrderTracking } from "./OrderTracking";
import { AICharts } from "./AICharts";
import { NotificationSystem } from "./NotificationSystem";
import { SystemMonitor } from "./SystemMonitor";
import { AITrainingDashboard } from "./AITrainingDashboard";

type AppState = 'dashboard' | 'wizard' | 'admin' | 'tracking';

export function AIAgentDashboard() {
  const [currentView, setCurrentView] = useState<AppState>('dashboard');
  const [activeTab, setActiveTab] = useState('overview');
  const [aiStats, setAiStats] = useState({
    processing: 24,
    completed: 1847,
    success: 98.2,
    online: true,
    networkLoad: 67,
    memoryUsage: 45,
    aiLoad: 82
  });

  // Enhanced real-time updates with more dynamic data
  useEffect(() => {
    const interval = setInterval(() => {
      setAiStats(prev => ({
        ...prev,
        processing: Math.floor(Math.random() * 50) + 10,
        completed: prev.completed + Math.floor(Math.random() * 3),
        success: 97.8 + Math.random() * 0.8,
        networkLoad: Math.floor(Math.random() * 30) + 50,
        memoryUsage: Math.floor(Math.random() * 20) + 35,
        aiLoad: Math.floor(Math.random() * 25) + 70
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (currentView === 'wizard') {
    return <StartWizard onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'admin') {
    return <AdminPanel onBack={() => setCurrentView('dashboard')} />;
  }

  if (currentView === 'tracking') {
    return <OrderTracking onBack={() => setCurrentView('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced AI Agent Header */}
      <header className="border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bot className="w-8 h-8 text-blue-400" />
                <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${aiStats.online ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
              </div>
              <div>
                <h1 className="text-xl text-white">Telegram AI Agent v4.0</h1>
                <p className="text-xs text-slate-400">Autonomous Member Transfer System</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-green-900/30 text-green-400 border-green-400/30">
                <Activity className="w-3 h-3 mr-1" />
                AI Online
              </Badge>
              
              {/* Enhanced Network Status */}
              <div className="hidden md:flex items-center gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-slate-400">Network: {aiStats.networkLoad}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-slate-400">Latency: &lt;50ms</span>
                </div>
              </div>
              
              <NotificationSystem />
              
              <Button variant="ghost" size="sm" onClick={() => setCurrentView('admin')} className="text-slate-400">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced AI Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Real-time Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Processing</p>
                  <p className="text-2xl text-white">{aiStats.processing}</p>
                  <p className="text-xs text-blue-400">+{Math.floor(Math.random() * 5) + 1} this hour</p>
                </div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Completed</p>
                  <p className="text-2xl text-white">{aiStats.completed.toLocaleString()}</p>
                  <p className="text-xs text-green-400">+{Math.floor(Math.random() * 15) + 5} today</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Success Rate</p>
                  <p className="text-2xl text-white">{aiStats.success.toFixed(1)}%</p>
                  <p className="text-xs text-purple-400">AI optimized</p>
                </div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">AI Status</p>
                  <p className="text-2xl text-green-400">Active</p>
                  <p className="text-xs text-green-400">99.9% uptime</p>
                </div>
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600">
              <BarChart3 className="w-4 h-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-green-600">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="training" className="data-[state=active]:bg-purple-600">
              <Brain className="w-4 h-4 mr-2" />
              AI Training
            </TabsTrigger>
            <TabsTrigger value="system" className="data-[state=active]:bg-orange-600">
              <Server className="w-4 h-4 mr-2" />
              System
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Enhanced AI Agent Interface */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-blue-400" />
                        <CardTitle className="text-white">AI Processing Engine</CardTitle>
                      </div>
                      <Badge className="bg-blue-900/30 text-blue-400 border-blue-400/30">
                        Neural Network v4.0
                      </Badge>
                    </div>
                    <CardDescription className="text-slate-400">
                      Advanced machine learning algorithms automatically process and execute Telegram member transfers
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-slate-700/30 rounded-lg">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-sm text-slate-300">Deep learning analysis of group patterns</span>
                        <Badge className="ml-auto bg-green-900/30 text-green-400 border-green-400/30 text-xs">
                          Active
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-slate-700/30 rounded-lg">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                        <span className="text-sm text-slate-300">Automated member compatibility scoring</span>
                        <Badge className="ml-auto bg-blue-900/30 text-blue-400 border-blue-400/30 text-xs">
                          Processing
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 p-4 bg-slate-700/30 rounded-lg">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                        <span className="text-sm text-slate-300">Intelligent transfer timing optimization</span>
                        <Badge className="ml-auto bg-purple-900/30 text-purple-400 border-purple-400/30 text-xs">
                          Learning
                        </Badge>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        size="lg" 
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                        onClick={() => setCurrentView('wizard')}
                      >
                        <Zap className="w-5 h-5 mr-2" />
                        Initialize AI Transfer
                      </Button>
                      
                      <Button 
                        size="lg"
                        variant="outline"
                        className="border-slate-600 text-slate-300 hover:bg-slate-700"
                        onClick={() => setCurrentView('tracking')}
                      >
                        <Eye className="w-5 h-5 mr-2" />
                        Track Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-green-400" />
                      Live Analytics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">CPU Usage</span>
                        <span className="text-sm text-white">{aiStats.networkLoad}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000" 
                          style={{width: `${aiStats.networkLoad}%`}}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">Memory</span>
                        <span className="text-sm text-white">{aiStats.memoryUsage}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000" 
                          style={{width: `${aiStats.memoryUsage}%`}}
                        ></div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-slate-400">AI Load</span>
                        <span className="text-sm text-white">{aiStats.aiLoad}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000" 
                          style={{width: `${aiStats.aiLoad}%`}}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-orange-400" />
                      AI Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="p-3 bg-blue-900/20 rounded-lg border-l-4 border-blue-400">
                        <p className="text-blue-200">Optimal transfer window detected for next 2 hours</p>
                      </div>
                      <div className="p-3 bg-green-900/20 rounded-lg border-l-4 border-green-400">
                        <p className="text-green-200">High compatibility groups identified: +15% success rate</p>
                      </div>
                      <div className="p-3 bg-purple-900/20 rounded-lg border-l-4 border-purple-400">
                        <p className="text-purple-200">Neural network learning: Pattern recognition improved</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Enhanced AI Capabilities */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-white">Neural Analysis</CardTitle>
                  <CardDescription className="text-slate-400">
                    Deep learning algorithms analyze member behavior, engagement patterns, and group dynamics for optimal transfer decisions.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Workflow className="w-6 h-6 text-green-400" />
                  </div>
                  <CardTitle className="text-white">Automated Execution</CardTitle>
                  <CardDescription className="text-slate-400">
                    Fully autonomous processing pipeline handles everything from payment verification to transfer completion without human intervention.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white">Smart Security</CardTitle>
                  <CardDescription className="text-slate-400">
                    Advanced security protocols with encrypted processing ensure complete privacy and protection of all transfer operations.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <AICharts />
          </TabsContent>

          <TabsContent value="training">
            <AITrainingDashboard />
          </TabsContent>

          <TabsContent value="system">
            <SystemMonitor />
          </TabsContent>
        </Tabs>

        {/* Enhanced Recent AI Activities */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Recent AI Activities
              </CardTitle>
              <div className="flex items-center gap-2">
                <Badge className="bg-cyan-900/30 text-cyan-400 border-cyan-400/30">
                  Live Feed
                </Badge>
                <Button variant="ghost" size="sm" className="text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <CardDescription className="text-slate-400">
              Live feed of AI processing activities and decision making
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: "2 min ago", action: "Analyzed group compatibility", status: "success", details: "Source: crypto_traders → Target: investment_hub", score: "98.7%" },
                { time: "5 min ago", action: "Payment verification completed", status: "success", details: "BTC transaction confirmed on blockchain", score: "100%" },
                { time: "12 min ago", action: "Member transfer initiated", status: "processing", details: "Transferring 847 members with 94% compatibility score", score: "94.3%" },
                { time: "18 min ago", action: "Neural pattern recognition", status: "success", details: "Identified optimal timing window for 15:30-17:30", score: "96.1%" },
                { time: "25 min ago", action: "AI learning update", status: "info", details: "Model accuracy improved to 98.7% from user feedback", score: "98.7%" }
              ].map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'success' ? 'bg-green-400' :
                    activity.status === 'processing' ? 'bg-blue-400 animate-pulse' :
                    'bg-gray-400'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-white">{activity.action}</p>
                      <div className="flex items-center gap-2">
                        <Badge className={`text-xs ${
                          activity.status === 'success' ? 'bg-green-900/30 text-green-400 border-green-400/30' :
                          activity.status === 'processing' ? 'bg-blue-900/30 text-blue-400 border-blue-400/30' :
                          'bg-gray-900/30 text-gray-400 border-gray-400/30'
                        }`}>
                          {activity.score}
                        </Badge>
                        <span className="text-xs text-slate-400">{activity.time}</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{activity.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Enhanced AI Status Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-slate-400">AI System Status: Operational</span>
              </div>
              <Separator orientation="vertical" className="h-4 bg-slate-600" />
              <span className="text-sm text-slate-400">Neural Network v4.0.1</span>
              <Separator orientation="vertical" className="h-4 bg-slate-600" />
              <div className="flex items-center gap-1">
                <Globe className="w-3 h-3 text-slate-500" />
                <span className="text-sm text-slate-400">Global Network</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-xs text-slate-500">
              <span>Last Updated: {new Date().toLocaleTimeString()}</span>
              <span>Uptime: 99.9%</span>
              <span>Latency: &lt;{Math.floor(Math.random() * 30) + 20}ms</span>
              <span>Active Users: {1200 + Math.floor(Math.random() * 100)}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}