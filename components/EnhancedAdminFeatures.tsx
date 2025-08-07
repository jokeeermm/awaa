import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Download, Filter, Search, RefreshCw, TrendingUp, Users, DollarSign, Clock, FileText, Database, Settings } from "lucide-react";

interface EnhancedAdminFeaturesProps {
  orders: any[];
}

export function EnhancedAdminFeatures({ orders }: EnhancedAdminFeaturesProps) {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('today');

  const exportData = (format: 'csv' | 'json' | 'excel') => {
    // Simulate export functionality
    const filename = `ai-orders-${new Date().toISOString().split('T')[0]}.${format}`;
    console.log(`Exporting data as ${format}:`, filename);
    
    // In a real app, this would generate and download the actual file
    const link = document.createElement('a');
    link.href = '#';
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getAdvancedStats = () => {
    const completed = orders.filter(o => o.status === 'completed').length;
    const processing = orders.filter(o => ['analyzing', 'verifying', 'transferring'].includes(o.status)).length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.amount, 0);
    const avgAiScore = orders.reduce((sum, order) => sum + (order.aiScore || 95), 0) / orders.length;
    
    return {
      completed,
      processing,
      totalRevenue,
      avgAiScore: avgAiScore.toFixed(1),
      successRate: ((completed / orders.length) * 100).toFixed(1),
      avgProcessingTime: '4.2 minutes'
    };
  };

  const stats = getAdvancedStats();

  return (
    <Tabs defaultValue="analytics" className="space-y-6">
      <TabsList className="grid w-full grid-cols-4 bg-slate-700/50">
        <TabsTrigger value="analytics" className="data-[state=active]:bg-slate-600">Analytics</TabsTrigger>
        <TabsTrigger value="filters" className="data-[state=active]:bg-slate-600">Filters</TabsTrigger>
        <TabsTrigger value="export" className="data-[state=active]:bg-slate-600">Export</TabsTrigger>
        <TabsTrigger value="settings" className="data-[state=active]:bg-slate-600">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="analytics" className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-slate-300 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Success Rate:</span>
                <Badge className="bg-green-900/30 text-green-400 border-green-400/30">
                  {stats.successRate}%
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Avg AI Score:</span>
                <span className="text-sm text-blue-400">{stats.avgAiScore}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Avg Processing:</span>
                <span className="text-sm text-purple-400">{stats.avgProcessingTime}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-slate-300 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-400" />
                Order Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Total Orders:</span>
                <span className="text-sm text-white">{orders.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Completed:</span>
                <span className="text-sm text-green-400">{stats.completed}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Processing:</span>
                <span className="text-sm text-blue-400">{stats.processing}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-slate-300 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-green-400" />
                Revenue Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Total Revenue:</span>
                <span className="text-sm text-green-400">${stats.totalRevenue.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Avg Order Value:</span>
                <span className="text-sm text-white">${(stats.totalRevenue / orders.length).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-400">Growth Rate:</span>
                <span className="text-sm text-green-400">+12.5%</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-cyan-400" />
              AI Performance Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-slate-300 text-sm">Processing Speed</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Analysis Phase:</span>
                    <span className="text-white">1.2 min avg</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1">
                    <div className="bg-blue-400 h-1 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Verification:</span>
                    <span className="text-white">0.8 min avg</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1">
                    <div className="bg-green-400 h-1 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Transfer:</span>
                    <span className="text-white">2.2 min avg</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1">
                    <div className="bg-purple-400 h-1 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-slate-300 text-sm">Neural Network Efficiency</h4>
                <div className="space-y-3">
                  <div className="bg-slate-700/30 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-400">Pattern Recognition:</span>
                      <span className="text-xs text-green-400">98.7%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1">
                      <div className="bg-green-400 h-1 rounded-full" style={{width: '98.7%'}}></div>
                    </div>
                  </div>
                  <div className="bg-slate-700/30 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-400">Compatibility Scoring:</span>
                      <span className="text-xs text-blue-400">96.2%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1">
                      <div className="bg-blue-400 h-1 rounded-full" style={{width: '96.2%'}}></div>
                    </div>
                  </div>
                  <div className="bg-slate-700/30 p-3 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-400">Transfer Optimization:</span>
                      <span className="text-xs text-purple-400">94.8%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1">
                      <div className="bg-purple-400 h-1 rounded-full" style={{width: '94.8%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="filters" className="space-y-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Filter className="w-5 h-5 text-blue-400" />
              Advanced Filtering
            </CardTitle>
            <CardDescription className="text-slate-400">
              Filter and search through AI operations with advanced criteria
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="text-slate-300">Status Filter</Label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="analyzing">Analyzing</SelectItem>
                    <SelectItem value="verifying">Verifying</SelectItem>
                    <SelectItem value="transferring">Transferring</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-slate-300">Date Range</Label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-700">
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                    <SelectItem value="year">This Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label className="text-slate-300">Search Orders</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    placeholder="Search by ID, group, or payment..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300">
                <RefreshCw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="export" className="space-y-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Download className="w-5 h-5 text-green-400" />
              Data Export
            </CardTitle>
            <CardDescription className="text-slate-400">
              Export AI operation data in various formats for analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="bg-slate-700/30 border-slate-600 p-4">
                <div className="text-center space-y-3">
                  <FileText className="w-8 h-8 text-green-400 mx-auto" />
                  <h4 className="text-white">CSV Export</h4>
                  <p className="text-xs text-slate-400">Spreadsheet-compatible format for data analysis</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => exportData('csv')}
                  >
                    Export CSV
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-slate-700/30 border-slate-600 p-4">
                <div className="text-center space-y-3">
                  <Database className="w-8 h-8 text-blue-400 mx-auto" />
                  <h4 className="text-white">JSON Export</h4>
                  <p className="text-xs text-slate-400">Structured data format for API integration</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => exportData('json')}
                  >
                    Export JSON
                  </Button>
                </div>
              </Card>
              
              <Card className="bg-slate-700/30 border-slate-600 p-4">
                <div className="text-center space-y-3">
                  <FileText className="w-8 h-8 text-purple-400 mx-auto" />
                  <h4 className="text-white">Excel Export</h4>
                  <p className="text-xs text-slate-400">Full-featured spreadsheet with formatting</p>
                  <Button 
                    size="sm" 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => exportData('excel')}
                  >
                    Export Excel
                  </Button>
                </div>
              </Card>
            </div>
            
            <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600">
              <h4 className="text-slate-300 text-sm mb-3">Export Options</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Include AI Scores</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Include Processing Timeline</span>
                  <input type="checkbox" defaultChecked className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Include Payment Details</span>
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Include Internal Notes</span>
                  <input type="checkbox" className="rounded" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="settings" className="space-y-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-purple-400" />
              System Configuration
            </CardTitle>
            <CardDescription className="text-slate-400">
              Configure AI system parameters and operational settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-slate-300">AI Processing Settings</h4>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label className="text-slate-400 text-sm">Max Concurrent Operations</Label>
                    <Input 
                      type="number" 
                      defaultValue="50" 
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-400 text-sm">AI Confidence Threshold</Label>
                    <Input 
                      type="number" 
                      defaultValue="85" 
                      min="0" 
                      max="100"
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-400 text-sm">Processing Timeout (minutes)</Label>
                    <Input 
                      type="number" 
                      defaultValue="15" 
                      className="bg-slate-700/50 border-slate-600 text-white"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-slate-300">Notification Settings</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Email Alerts</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">SMS Notifications</span>
                    <input type="checkbox" className="rounded" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">Slack Integration</span>
                    <input type="checkbox" defaultChecked className="rounded" />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-400 text-sm">Alert Frequency</Label>
                    <Select defaultValue="immediate">
                      <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Save Configuration
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300">
                Reset to Defaults
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}