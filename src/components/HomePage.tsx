"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  TrendingUp,
  Users,
  Brain,
  Camera,
  Zap,
  Star,
  Heart,
  MessageCircle,
  Share,
  Play,
  Clock,
  Award,
  Target,
  Sparkles,
} from "lucide-react";

const stories = [
  {
    id: 1,
    user: "د. أحمد السالم",
    avatar: "/api/placeholder/40/40",
    subject: "الفيزياء",
    hasNew: true,
  },
  {
    id: 2,
    user: "د. فاطمة النور",
    avatar: "/api/placeholder/40/40",
    subject: "الرياضيات",
    hasNew: true,
  },
  {
    id: 3,
    user: "د. محمد الأمين",
    avatar: "/api/placeholder/40/40",
    subject: "البرمجة",
    hasNew: false,
  },
  {
    id: 4,
    user: "د. سارة الكريم",
    avatar: "/api/placeholder/40/40",
    subject: "الكيمياء",
    hasNew: true,
  },
];

const posts = [
  {
    id: 1,
    type: "video",
    title: "شرح الذكاء الاصطناعي في 60 ثانية",
    instructor: "د. أحمد التقني",
    avatar: "/api/placeholder/48/48",
    thumbnail: "/api/placeholder/300/400",
    duration: "0:58",
    likes: 1247,
    comments: 89,
    shares: 156,
    subject: "الذكاء الاصطناعي",
  },
  {
    id: 2,
    type: "ar",
    title: "استكشف الحرم الجامعي بالواقع المعزز",
    instructor: "د. سارة الواقع",
    avatar: "/api/placeholder/48/48",
    thumbnail: "/api/placeholder/300/400",
    likes: 892,
    comments: 67,
    shares: 234,
    subject: "الواقع المعزز",
  },
  {
    id: 3,
    type: "live",
    title: "محاضرة مباشرة: الرياضيات المتقدمة",
    instructor: "د. محمد الرياضي",
    avatar: "/api/placeholder/48/48",
    thumbnail: "/api/placeholder/300/400",
    viewers: 1567,
    likes: 2341,
    comments: 178,
    subject: "الرياضيات",
  },
];

const achievements = [
  {
    icon: <Award className="w-5 h-5" />,
    title: "طالب مميز",
    description: "حصلت على أعلى الدرجات",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "مهمة مكتملة",
    description: "أكملت 15 مهمة هذا الأسبوع",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "نقاط ذكية",
    description: "حصلت على 500 نقطة",
    color: "from-purple-400 to-pink-500",
  },
];

export default function HomePage() {
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

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Header */}
      <motion.div
        variants={itemVariants}
        className="gradient-main p-6 text-white"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <motion.h1
              className="text-2xl font-bold"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
            >
              مرحباً أحمد 👋
            </motion.h1>
            <motion.p
              className="text-white/80"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 }}
            >
              جاهز لبدء رحلة التعلم اليوم؟
            </motion.p>
          </div>
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="glass-effect p-3 rounded-full"
          >
            <Brain className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: "الدورات", value: "12", icon: <BookOpen className="w-4 h-4" /> },
            { label: "النقاط", value: "750", icon: <Zap className="w-4 h-4" /> },
            { label: "الإنجازات", value: "24", icon: <Star className="w-4 h-4" /> },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-effect p-3 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-1">
                {stat.icon}
              </div>
              <div className="font-bold text-lg">{stat.value}</div>
              <div className="text-xs text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="px-4 -mt-6 pb-20">
        {/* Stories Section */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-lg font-bold mb-3 text-right">القصص التعليمية</h2>
          <div className="flex space-x-4 space-x-reverse overflow-x-auto pb-2">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <div className={`w-16 h-16 rounded-full p-1 ${
                    story.hasNew
                      ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
                      : "bg-gray-300"
                  }`}>
                    <Avatar className="w-full h-full border-2 border-white">
                      <AvatarImage src={story.avatar} />
                      <AvatarFallback>{story.user[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  {story.hasNew && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  )}
                </div>
                <p className="text-xs text-center mt-1 w-16 truncate">
                  {story.subject}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div variants={itemVariants} className="mb-6">
          <h2 className="text-lg font-bold mb-3 text-right">إنجازاتك الأخيرة</h2>
          <div className="grid grid-cols-1 gap-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-effect p-4 rounded-xl border border-white/20"
              >
                <div className="flex items-center space-x-3 space-x-reverse">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="font-semibold">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {achievement.description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Posts Feed */}
        <motion.div variants={itemVariants}>
          <h2 className="text-lg font-bold mb-3 text-right">المحتوى التعليمي</h2>
          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={post.avatar} />
                      <AvatarFallback>{post.instructor[0]}</AvatarFallback>
                    </Avatar>
                    <div className="text-right">
                      <h3 className="font-semibold text-sm">{post.instructor}</h3>
                      <p className="text-xs text-gray-500">{post.subject}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {post.type === "live" ? "مباشر" : post.type === "ar" ? "AR" : "فيديو"}
                  </Badge>
                </div>

                {/* Post Content */}
                <div className="relative">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-80 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </motion.div>

                  {/* Duration/Viewers */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black/50 text-white border-0">
                      {post.type === "live" ? (
                        <>
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse" />
                          {post.viewers} مشاهد
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 mr-1" />
                          {post.duration}
                        </>
                      )}
                    </Badge>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg text-right">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-6 space-x-reverse">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 space-x-reverse"
                    >
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">{post.likes}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 space-x-reverse"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments}</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-1 space-x-reverse"
                    >
                      <Share className="w-5 h-5" />
                      <span className="text-sm">{post.shares || post.viewers}</span>
                    </motion.button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 gradient-button text-white rounded-full text-sm font-medium"
                  >
                    مشاهدة
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
