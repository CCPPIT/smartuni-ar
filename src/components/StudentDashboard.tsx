"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Star,
  Award,
  Brain,
  Users,
  MessageCircle,
  Bell,
  Download,
  Eye,
  PlayCircle,
  FileText,
  Zap,
  GraduationCap,
  BarChart3,
  Camera,
  Lightbulb,
  Sparkles,
  Timer,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

interface Course {
  id: string;
  name: string;
  instructor: string;
  progress: number;
  grade: string;
  color: string;
  nextClass: string;
  assignments: number;
}

interface Assignment {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  priority: "high" | "medium" | "low";
  completed: boolean;
  type: "homework" | "project" | "quiz" | "exam";
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  date: string;
  points: number;
}

const courses: Course[] = [
  {
    id: "1",
    name: "الذكاء الاصطناعي",
    instructor: "د. أحمد التقني",
    progress: 75,
    grade: "A",
    color: "from-purple-500 to-indigo-500",
    nextClass: "غداً 10:00 ص",
    assignments: 3,
  },
  {
    id: "2",
    name: "هندسة البرمجيات",
    instructor: "د. سارة المطورة",
    progress: 60,
    grade: "B+",
    color: "from-blue-500 to-cyan-500",
    nextClass: "الأحد 2:00 م",
    assignments: 2,
  },
  {
    id: "3",
    name: "قواعد البيانات",
    instructor: "د. محمد البيانات",
    progress: 85,
    grade: "A-",
    color: "from-green-500 to-emerald-500",
    nextClass: "الإثنين 11:00 ص",
    assignments: 1,
  },
  {
    id: "4",
    name: "شبكات الحاسوب",
    instructor: "د. فاطمة الشبكة",
    progress: 45,
    grade: "B",
    color: "from-orange-500 to-red-500",
    nextClass: "الثلاثاء 9:00 ص",
    assignments: 4,
  },
];

const assignments: Assignment[] = [
  {
    id: "1",
    title: "مشروع تطبيق الذكاء الاصطناعي",
    course: "الذكاء الاصطناعي",
    dueDate: "2025-07-20",
    priority: "high",
    completed: false,
    type: "project",
  },
  {
    id: "2",
    title: "واجب تصميم قاعدة البيانات",
    course: "قواعد البيانات",
    dueDate: "2025-07-18",
    priority: "medium",
    completed: false,
    type: "homework",
  },
  {
    id: "3",
    title: "اختبار الشبكات",
    course: "شبكات الحاسوب",
    dueDate: "2025-07-25",
    priority: "high",
    completed: false,
    type: "exam",
  },
  {
    id: "4",
    title: "مراجعة الكود",
    course: "هندسة البرمجيات",
    dueDate: "2025-07-16",
    priority: "low",
    completed: true,
    type: "homework",
  },
];

const achievements: Achievement[] = [
  {
    id: "1",
    title: "مطور نجم",
    description: "أكملت 10 مشاريع برمجية",
    icon: <Star className="w-5 h-5" />,
    color: "from-yellow-400 to-orange-500",
    date: "2025-07-10",
    points: 500,
  },
  {
    id: "2",
    title: "عقل صناعي",
    description: "حصلت على A+ في الذكاء الاصطناعي",
    icon: <Brain className="w-5 h-5" />,
    color: "from-purple-400 to-pink-500",
    date: "2025-07-08",
    points: 300,
  },
  {
    id: "3",
    title: "محلل بيانات",
    description: "أنشأت 5 قواعد بيانات متقدمة",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "from-green-400 to-emerald-500",
    date: "2025-07-05",
    points: 250,
  },
];

export default function StudentDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "project": return <FileText className="w-4 h-4" />;
      case "homework": return <BookOpen className="w-4 h-4" />;
      case "quiz": return <Brain className="w-4 h-4" />;
      case "exam": return <GraduationCap className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
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

  const averageGrade = courses.reduce((sum, course) => {
    const gradeValue = course.grade.includes('A') ? 95 :
                      course.grade.includes('B') ? 85 : 75;
    return sum + gradeValue;
  }, 0) / courses.length;

  const totalAssignments = assignments.length;
  const completedAssignments = assignments.filter(a => a.completed).length;
  const averageProgress = courses.reduce((sum, course) => sum + course.progress, 0) / courses.length;

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
            <Avatar className="h-16 w-16 ring-4 ring-white/30">
              <AvatarImage src="/api/placeholder/64/64" />
              <AvatarFallback className="gradient-button text-white font-bold text-xl">
                أح
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold mb-1">مرحباً أحمد محمد 👋</h1>
              <p className="text-white/80">هندسة الحاسوب - السنة الثالثة</p>
              <div className="flex items-center space-x-2 space-x-reverse mt-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Star className="w-3 h-3 mr-1" />
                  {averageGrade.toFixed(1)}% معدل عام
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Target className="w-3 h-3 mr-1" />
                  {Math.round(averageProgress)}% تقدم
                </Badge>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="hidden md:block"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white dark:bg-slate-800 rounded-xl p-1">
          <TabsTrigger value="overview" className="rounded-lg">لوحة التحكم</TabsTrigger>
          <TabsTrigger value="courses" className="rounded-lg">المقررات</TabsTrigger>
          <TabsTrigger value="assignments" className="rounded-lg">المهام</TabsTrigger>
          <TabsTrigger value="achievements" className="rounded-lg">الإنجازات</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: "المقررات النشطة",
                value: courses.length,
                icon: <BookOpen className="w-6 h-6" />,
                color: "from-blue-500 to-purple-500",
                change: "+2 هذا الفصل",
              },
              {
                title: "المهام المعلقة",
                value: assignments.filter(a => !a.completed).length,
                icon: <Clock className="w-6 h-6" />,
                color: "from-orange-500 to-red-500",
                change: "3 عاجلة",
              },
              {
                title: "النقاط الذكية",
                value: "750",
                icon: <Zap className="w-6 h-6" />,
                color: "from-yellow-500 to-orange-500",
                change: "+50 هذا الأسبوع",
              },
              {
                title: "المعدل العام",
                value: `${averageGrade.toFixed(1)}%`,
                icon: <TrendingUp className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500",
                change: "+2.5% هذا الشهر",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden"
              >
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                          {stat.change}
                        </p>
                      </div>
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white`}>
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    النشاطات الأخيرة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      type: "grade",
                      message: "حصلت على A في مشروع الذكاء الاصطناعي",
                      time: "منذ ساعتين",
                      icon: <Star className="w-4 h-4 text-yellow-500" />,
                    },
                    {
                      type: "assignment",
                      message: "تم تسليم واجب قواعد البيانات",
                      time: "منذ 4 ساعات",
                      icon: <CheckCircle className="w-4 h-4 text-green-500" />,
                    },
                    {
                      type: "message",
                      message: "رسالة جديدة من د. أحمد التقني",
                      time: "منذ يوم",
                      icon: <MessageCircle className="w-4 h-4 text-blue-500" />,
                    },
                    {
                      type: "achievement",
                      message: "إنجاز جديد: مطور نجم",
                      time: "منذ 3 أيام",
                      icon: <Award className="w-4 h-4 text-purple-500" />,
                    },
                  ].map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 space-x-reverse p-3 rounded-lg bg-gray-50 dark:bg-slate-800"
                    >
                      {activity.icon}
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.message}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2" />
                    إجراءات سريعة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      title: "بدء محاضرة مباشرة",
                      description: "انضم إلى المحاضرة القادمة",
                      icon: <PlayCircle className="w-5 h-5" />,
                      color: "from-red-500 to-pink-500",
                      action: "انضمام",
                    },
                    {
                      title: "مراجعة المهام",
                      description: "3 مهام تحتاج انتباهك",
                      icon: <FileText className="w-5 h-5" />,
                      color: "from-blue-500 to-cyan-500",
                      action: "مراجعة",
                    },
                    {
                      title: "تحميل المواد",
                      description: "مواد جديدة متاحة للتحميل",
                      icon: <Download className="w-5 h-5" />,
                      color: "from-green-500 to-emerald-500",
                      action: "تحميل",
                    },
                    {
                      title: "الواقع المعزز",
                      description: "استكشف الحرم الجامعي",
                      icon: <Camera className="w-5 h-5" />,
                      color: "from-purple-500 to-indigo-500",
                      action: "تشغيل",
                    },
                  ].map((action, index) => (
                    <motion.div
                      key={action.title}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800 cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${action.color} text-white`}>
                          {action.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{action.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {action.description}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{course.name}</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.instructor}
                        </p>
                      </div>
                      <Badge className={`bg-gradient-to-r ${course.color} text-white border-0`}>
                        {course.grade}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>التقدم</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {course.nextClass}
                      </div>
                      <div className="flex items-center text-orange-600 dark:text-orange-400">
                        <FileText className="w-4 h-4 mr-1" />
                        {course.assignments} مهام
                      </div>
                    </div>

                    <div className="flex space-x-2 space-x-reverse">
                      <Button size="sm" className="flex-1 gradient-button text-white">
                        <PlayCircle className="w-4 h-4 mr-1" />
                        بدء الدراسة
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="w-4 h-4 mr-1" />
                        التفاصيل
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="assignments" className="space-y-6">
          <div className="grid gap-4">
            {assignments.map((assignment, index) => (
              <motion.div
                key={assignment.id}
                variants={itemVariants}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <Card className={`border-0 shadow-lg ${assignment.completed ? 'opacity-60' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 space-x-reverse">
                        <div className={`w-3 h-3 rounded-full ${getPriorityColor(assignment.priority)}`} />
                        <div className="p-2 rounded-lg bg-gray-100 dark:bg-slate-700">
                          {getTypeIcon(assignment.type)}
                        </div>
                        <div>
                          <h3 className={`font-medium ${assignment.completed ? 'line-through' : ''}`}>
                            {assignment.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {assignment.course}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <Timer className="w-3 h-3 mr-1" />
                            موعد التسليم: {assignment.dueDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        {assignment.completed ? (
                          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            مكتمل
                          </Badge>
                        ) : (
                          <Badge className={`${getPriorityColor(assignment.priority)} text-white`}>
                            {assignment.priority === 'high' ? 'عالي' :
                             assignment.priority === 'medium' ? 'متوسط' : 'منخفض'}
                          </Badge>
                        )}
                        <Button
                          size="sm"
                          variant={assignment.completed ? "outline" : "default"}
                          className={assignment.completed ? "" : "gradient-button text-white"}
                        >
                          {assignment.completed ? "مراجعة" : "إنجاز"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className={`h-3 bg-gradient-to-r ${achievement.color}`} />
                  <CardContent className="p-6 text-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}
                    >
                      {achievement.icon}
                    </motion.div>
                    <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{achievement.date}</span>
                      <div className="flex items-center">
                        <Sparkles className="w-3 h-3 mr-1 text-yellow-500" />
                        {achievement.points} نقطة
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
