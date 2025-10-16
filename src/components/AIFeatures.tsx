"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Brain,
  MessageCircle,
  Lightbulb,
  TrendingUp,
  Target,
  Zap,
  Sparkles,
  BookOpen,
  Calendar,
  Award,
  BarChart3,
  Clock,
  Send,
  Mic,
  Image,
  FileText,
  Play,
  Pause,
  Volume2,
  Download,
  Star,
  ThumbsUp,
  ThumbsDown,
  RefreshCw,
  Cpu,
  Layers,
  Network,
  Activity,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  Info,
  Rocket,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface AIMessage {
  id: string;
  type: "user" | "ai";
  content: string;
  timestamp: Date;
  suggestions?: string[];
  attachments?: string[];
}

interface AIRecommendation {
  id: string;
  type: "course" | "study" | "career" | "social";
  title: string;
  description: string;
  confidence: number;
  reasons: string[];
  action: string;
  icon: React.ReactNode;
  color: string;
}

interface StudyAnalytics {
  studyTime: number;
  productivity: number;
  focusScore: number;
  suggestions: string[];
  weakAreas: string[];
  strongAreas: string[];
}

const aiRecommendations: AIRecommendation[] = [
  {
    id: "1",
    type: "study",
    title: "وقت مراجعة الذكاء الاصطناعي",
    description: "بناءً على أدائك، ننصح بمراجعة الشبكات العصبية",
    confidence: 92,
    reasons: [
      "درجة الاختبار الأخير أقل من المتوقع",
      "وقت المذاكرة لهذا الموضوع أقل من المطلوب",
      "موعد الاختبار النهائي قريب"
    ],
    action: "بدء المراجعة",
    icon: <Brain className="w-5 h-5" />,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: "2",
    type: "course",
    title: "مقرر جديد مقترح",
    description: "الأمن السيبراني - يناسب مسارك المهني",
    confidence: 87,
    reasons: [
      "تطابق مع اهتماماتك السابقة",
      "مطلوب في سوق العمل",
      "يكمل مهاراتك الحالية"
    ],
    action: "عرض التفاصيل",
    icon: <BookOpen className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "3",
    type: "career",
    title: "فرصة تدريب",
    description: "شركة تقنية تبحث عن متدربين في الذكاء الاصطناعي",
    confidence: 79,
    reasons: [
      "يتطابق مع تخصصك",
      "درجاتك مؤهلة",
      "موقع مناسب"
    ],
    action: "التقديم الآن",
    icon: <Rocket className="w-5 h-5" />,
    color: "from-orange-500 to-red-500",
  },
];

const studyAnalytics: StudyAnalytics = {
  studyTime: 6.5,
  productivity: 78,
  focusScore: 82,
  suggestions: [
    "خذ استراحة كل 45 دقيقة",
    "ركز على المواد الصعبة في الصباح",
    "استخدم تقنية البومودورو"
  ],
  weakAreas: ["الخوارزميات المتقدمة", "التحليل الرياضي"],
  strongAreas: ["البرمجة", "التصميم", "إدارة المشاريع"],
};

export default function AIFeatures() {
  const [chatMessages, setChatMessages] = useState<AIMessage[]>([
    {
      id: "1",
      type: "ai",
      content: "مرحباً أحمد! أنا المساعد الذكي لمنصة SmartUni. كيف يمكنني مساعدتك اليوم؟",
      timestamp: new Date(),
      suggestions: [
        "ما هو جدولي اليوم؟",
        "ساعدني في مراجعة الذكاء الاصطناعي",
        "أرني أدائي الأكاديمي",
        "اقترح عليّ مقررات جديدة"
      ]
    }
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: AIMessage = {
      id: Date.now().toString(),
      type: "user",
      content: newMessage,
      timestamp: new Date(),
    };

    setChatMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // محاكاة رد الذكاء الاصطناعي
    setTimeout(() => {
      const aiMessage: AIMessage = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: getAIResponse(userMessage.content),
        timestamp: new Date(),
        suggestions: [
          "هل تحتاج المزيد من المساعدة؟",
          "أظهر لي نصائح دراسية",
          "ما هي مهامي المعلقة؟"
        ]
      };
      setChatMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const getAIResponse = (message: string): string => {
    const responses = [
      "بناءً على تحليل بياناتك، أنصحك بتخصيص وقت إضافي لمراجعة المفاهيم الأساسية.",
      "لقد لاحظت تحسناً في أدائك! استمر على هذا المنوال.",
      "هناك مهمة مهمة مستحقة غداً، هل تحتاج تذكيراً؟",
      "بناءً على نمط دراستك، أقترح فترة استراحة كل 45 دقيقة لتحسين التركيز.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSuggestionClick = (suggestion: string) => {
    setNewMessage(suggestion);
    sendMessage();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="gradient-main rounded-2xl p-6 text-white mb-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 space-x-reverse">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Brain className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold mb-1">الذكاء الاصطناعي 🧠</h1>
              <p className="text-white/80">مساعدك الذكي للتعلم والتحليل</p>
              <div className="flex items-center space-x-2 space-x-reverse mt-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Cpu className="w-3 h-3 mr-1" />
                  نشط
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Network className="w-3 h-3 mr-1" />
                  متصل
                </Badge>
              </div>
            </div>
          </div>

          {/* AI Chat Button */}
          <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-xl backdrop-blur-sm border border-white/30">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  محادثة ذكية
                </Button>
              </motion.div>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[600px] h-[600px] p-0">
              <div className="gradient-main text-white p-4 rounded-t-lg">
                <DialogHeader>
                  <DialogTitle className="flex items-center text-white">
                    <Brain className="w-6 h-6 mr-2" />
                    المساعد الذكي
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="ml-2"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-300" />
                    </motion.div>
                  </DialogTitle>
                </DialogHeader>
              </div>

              <div className="flex flex-col h-full">
                {/* Chat Messages */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {chatMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                          : 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white'
                      } rounded-2xl p-3`}>
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-white/70' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString('ar-SA')}
                        </p>

                        {message.suggestions && (
                          <div className="mt-3 space-y-2">
                            {message.suggestions.map((suggestion, index) => (
                              <motion.button
                                key={index}
                                onClick={() => handleSuggestionClick(suggestion)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="block w-full text-right p-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs transition-colors"
                              >
                                {suggestion}
                              </motion.button>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 dark:bg-slate-700 rounded-2xl p-3">
                        <div className="flex space-x-1 space-x-reverse">
                          {[1, 2, 3].map((dot) => (
                            <motion.div
                              key={dot}
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: dot * 0.2,
                              }}
                              className="w-2 h-2 bg-gray-400 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-gray-200 dark:border-slate-600">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setIsListening(!isListening)}
                      className={isListening ? "text-red-500" : ""}
                    >
                      <Mic className="w-4 h-4" />
                    </Button>
                    <Input
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="اكتب رسالتك هنا..."
                      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                      className="flex-1"
                    />
                    <Button
                      onClick={sendMessage}
                      disabled={!newMessage.trim() || isTyping}
                      className="gradient-button text-white"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </motion.div>

      {/* AI Recommendations */}
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-2xl font-bold mb-4">التوصيات الذكية</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {aiRecommendations.map((recommendation, index) => (
            <motion.div
              key={recommendation.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="relative overflow-hidden"
            >
              <Card className="border-0 shadow-lg h-full">
                <div className={`h-2 bg-gradient-to-r ${recommendation.color}`} />
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${recommendation.color} text-white`}>
                      {recommendation.icon}
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {recommendation.confidence}% دقة
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{recommendation.title}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {recommendation.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">أسباب التوصية:</h4>
                    <ul className="space-y-1">
                      {recommendation.reasons.map((reason, idx) => (
                        <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${recommendation.color} text-white border-0`}>
                    {recommendation.action}
                    <ChevronRight className="w-4 h-4 mr-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Study Analytics */}
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-2xl font-bold mb-4">تحليل الدراسة الذكي</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="w-5 h-5 mr-2" />
                أداء اليوم
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">ساعات الدراسة</span>
                    <span className="text-sm text-gray-600">{studyAnalytics.studyTime} ساعات</span>
                  </div>
                  <Progress value={(studyAnalytics.studyTime / 8) * 100} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">الإنتاجية</span>
                    <span className="text-sm text-gray-600">{studyAnalytics.productivity}%</span>
                  </div>
                  <Progress value={studyAnalytics.productivity} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">مستوى التركيز</span>
                    <span className="text-sm text-gray-600">{studyAnalytics.focusScore}%</span>
                  </div>
                  <Progress value={studyAnalytics.focusScore} className="h-2" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{studyAnalytics.strongAreas.length}</div>
                  <div className="text-xs text-gray-600">نقاط قوة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{studyAnalytics.weakAreas.length}</div>
                  <div className="text-xs text-gray-600">نقاط ضعف</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{studyAnalytics.suggestions.length}</div>
                  <div className="text-xs text-gray-600">توصيات</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="w-5 h-5 mr-2" />
                نصائح ذكية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-3 text-green-600">نقاط القوة:</h4>
                <div className="space-y-2">
                  {studyAnalytics.strongAreas.map((area, index) => (
                    <div key={index} className="flex items-center p-2 rounded-lg bg-green-50 dark:bg-green-900/20">
                      <Star className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-3 text-orange-600">تحتاج تحسين:</h4>
                <div className="space-y-2">
                  {studyAnalytics.weakAreas.map((area, index) => (
                    <div key={index} className="flex items-center p-2 rounded-lg bg-orange-50 dark:bg-orange-900/20">
                      <AlertCircle className="w-4 h-4 text-orange-500 mr-2" />
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-3 text-blue-600">توصيات للتحسين:</h4>
                <div className="space-y-2">
                  {studyAnalytics.suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-center p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                      <Info className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* AI Tools */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">أدوات الذكاء الاصطناعي</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "مولد الملخصات",
              description: "ملخص ذكي للمحاضرات والكتب",
              icon: <FileText className="w-6 h-6" />,
              color: "from-blue-500 to-purple-500",
              action: "تجربة"
            },
            {
              title: "مساعد البحث",
              description: "بحث ذكي في المراجع الأكاديمية",
              icon: <Brain className="w-6 h-6" />,
              color: "from-green-500 to-emerald-500",
              action: "بحث"
            },
            {
              title: "مخطط الدراسة",
              description: "جدولة ذكية للمذاكرة والمراجعة",
              icon: <Calendar className="w-6 h-6" />,
              color: "from-orange-500 to-red-500",
              action: "إنشاء"
            },
            {
              title: "محلل الأداء",
              description: "تحليل شامل لنتائجك الأكاديمية",
              icon: <BarChart3 className="w-6 h-6" />,
              color: "from-purple-500 to-pink-500",
              action: "تحليل"
            },
          ].map((tool, index) => (
            <motion.div
              key={tool.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="border-0 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                    {tool.icon}
                  </div>
                  <h3 className="font-bold mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {tool.description}
                  </p>
                  <Button className={`w-full bg-gradient-to-r ${tool.color} text-white border-0`}>
                    {tool.action}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
