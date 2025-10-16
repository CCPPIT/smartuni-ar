"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  TrendingDown,
  Download,
  Filter,
  Calendar,
  Users,
  BookOpen,
  Award,
  Target,
  Clock,
  Star,
  CheckCircle,
  AlertTriangle,
  Info,
  Eye,
  Share,
  Printer,
  FileText,
  Image as ImageIcon,
  BarChart,
  Activity,
  Zap,
  Brain,
  GraduationCap,
  Building,
  MapPin,
  Wifi,
  Battery,
  Signal,
  RefreshCw,
  Settings,
  Search,
  Plus,
  Minus,
  Maximize,
  Minimize,
} from "lucide-react";
import { useState } from "react";

interface PerformanceData {
  period: string;
  students: number;
  averageGrade: number;
  passRate: number;
  attendanceRate: number;
  satisfactionScore: number;
}

interface CourseAnalytics {
  courseId: string;
  courseName: string;
  instructor: string;
  enrolledStudents: number;
  completionRate: number;
  averageGrade: number;
  satisfactionScore: number;
  difficultyRating: number;
  timeSpent: number;
  topPerformers: number;
  strugglingStudents: number;
  trend: "up" | "down" | "stable";
}

interface StudentProgress {
  studentId: string;
  studentName: string;
  major: string;
  year: string;
  currentGPA: number;
  creditsCompleted: number;
  attendanceRate: number;
  assignmentsSubmitted: number;
  totalAssignments: number;
  projectsCompleted: number;
  activeCourses: number;
  rank: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

const performanceData: PerformanceData[] = [
  { period: "يناير", students: 1250, averageGrade: 3.45, passRate: 89, attendanceRate: 92, satisfactionScore: 4.2 },
  { period: "فبراير", students: 1280, averageGrade: 3.52, passRate: 91, attendanceRate: 90, satisfactionScore: 4.3 },
  { period: "مارس", students: 1320, averageGrade: 3.48, passRate: 88, attendanceRate: 93, satisfactionScore: 4.1 },
  { period: "أبريل", students: 1350, averageGrade: 3.61, passRate: 94, attendanceRate: 91, satisfactionScore: 4.4 },
  { period: "مايو", students: 1380, averageGrade: 3.58, passRate: 92, attendanceRate: 89, satisfactionScore: 4.2 },
  { period: "يونيو", students: 1420, averageGrade: 3.65, passRate: 95, attendanceRate: 94, satisfactionScore: 4.5 },
];

const courseAnalytics: CourseAnalytics[] = [
  {
    courseId: "CS301",
    courseName: "الذكاء الاصطناعي المتقدم",
    instructor: "د. أحمد التقني",
    enrolledStudents: 45,
    completionRate: 87,
    averageGrade: 3.7,
    satisfactionScore: 4.3,
    difficultyRating: 4.1,
    timeSpent: 12.5,
    topPerformers: 8,
    strugglingStudents: 3,
    trend: "up"
  },
  {
    courseId: "CS302",
    courseName: "هندسة البرمجيات",
    instructor: "د. سارة المطورة",
    enrolledStudents: 38,
    completionRate: 92,
    averageGrade: 3.5,
    satisfactionScore: 4.1,
    difficultyRating: 3.8,
    timeSpent: 10.2,
    topPerformers: 6,
    strugglingStudents: 2,
    trend: "stable"
  },
  {
    courseId: "CS303",
    courseName: "قواعد البيانات المتقدمة",
    instructor: "د. محمد البيانات",
    enrolledStudents: 32,
    completionRate: 94,
    averageGrade: 3.8,
    satisfactionScore: 4.5,
    difficultyRating: 3.5,
    timeSpent: 8.7,
    topPerformers: 10,
    strugglingStudents: 1,
    trend: "up"
  },
];

const topStudents: StudentProgress[] = [
  {
    studentId: "1",
    studentName: "أحمد محمد السالم",
    major: "هندسة الحاسوب",
    year: "الثالثة",
    currentGPA: 3.95,
    creditsCompleted: 85,
    attendanceRate: 96,
    assignmentsSubmitted: 28,
    totalAssignments: 30,
    projectsCompleted: 12,
    activeCourses: 5,
    rank: 1,
    strengths: ["البرمجة", "التحليل", "إدارة الوقت"],
    weaknesses: ["العروض التقديمية"],
    recommendations: ["انضم لنادي الخطابة", "شارك في المؤتمرات"]
  },
  {
    studentId: "2",
    studentName: "فاطمة أحمد النور",
    major: "علوم الحاسوب",
    year: "الرابعة",
    currentGPA: 3.92,
    creditsCompleted: 110,
    attendanceRate: 94,
    assignmentsSubmitted: 25,
    totalAssignments: 26,
    projectsCompleted: 15,
    activeCourses: 4,
    rank: 2,
    strengths: ["الخوارزميات", "التصميم", "العمل الجماعي"],
    weaknesses: ["إدارة الضغط"],
    recommendations: ["تمارين الاسترخاء", "تنظيم الوقت"]
  },
];

export default function ReportsSystem() {
  const [selectedPeriod, setSelectedPeriod] = useState("الشهر الحالي");
  const [selectedReport, setSelectedReport] = useState("academic");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [chartType, setChartType] = useState("bar");

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

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="w-4 h-4 text-green-500" />;
      case "down": return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getGradeColor = (grade: number) => {
    if (grade >= 3.7) return "text-green-600 dark:text-green-400";
    if (grade >= 3.0) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const currentPeriodData = performanceData[performanceData.length - 1];
  const previousPeriodData = performanceData[performanceData.length - 2];

  const calculateChange = (current: number, previous: number) => {
    return ((current - previous) / previous * 100).toFixed(1);
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
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <BarChart3 className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold mb-1">التقارير والتحليلات 📊</h1>
              <p className="text-white/80">رؤى شاملة للأداء الأكاديمي والإحصائيات</p>
              <div className="flex items-center space-x-2 space-x-reverse mt-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Users className="w-3 h-3 mr-1" />
                  {currentPeriodData.students} طالب
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Star className="w-3 h-3 mr-1" />
                  {currentPeriodData.averageGrade.toFixed(2)} معدل عام
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {currentPeriodData.passRate}% نجاح
                </Badge>
              </div>
            </div>
          </div>

          {/* Report Controls */}
          <div className="flex items-center space-x-3 space-x-reverse">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-40 bg-white/20 border-white/30 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="الشهر الحالي">الشهر الحالي</SelectItem>
                <SelectItem value="الفصل الحالي">الفصل الحالي</SelectItem>
                <SelectItem value="العام الدراسي">العام الدراسي</SelectItem>
                <SelectItem value="مخصص">فترة مخصصة</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30">
              <Download className="w-4 h-4 mr-2" />
              تصدير
            </Button>

            <Button className="bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30">
              <Share className="w-4 h-4 mr-2" />
              مشاركة
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Quick Stats */}
      <motion.div variants={itemVariants} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              title: "إجمالي الطلاب",
              value: currentPeriodData.students,
              change: calculateChange(currentPeriodData.students, previousPeriodData.students),
              icon: <Users className="w-6 h-6" />,
              color: "from-blue-500 to-purple-500",
              positive: true,
            },
            {
              title: "المعدل العام",
              value: currentPeriodData.averageGrade.toFixed(2),
              change: calculateChange(currentPeriodData.averageGrade, previousPeriodData.averageGrade),
              icon: <Star className="w-6 h-6" />,
              color: "from-green-500 to-emerald-500",
              positive: currentPeriodData.averageGrade > previousPeriodData.averageGrade,
            },
            {
              title: "معدل النجاح",
              value: `${currentPeriodData.passRate}%`,
              change: calculateChange(currentPeriodData.passRate, previousPeriodData.passRate),
              icon: <CheckCircle className="w-6 h-6" />,
              color: "from-orange-500 to-yellow-500",
              positive: currentPeriodData.passRate > previousPeriodData.passRate,
            },
            {
              title: "معدل الحضور",
              value: `${currentPeriodData.attendanceRate}%`,
              change: calculateChange(currentPeriodData.attendanceRate, previousPeriodData.attendanceRate),
              icon: <Clock className="w-6 h-6" />,
              color: "from-pink-500 to-rose-500",
              positive: currentPeriodData.attendanceRate > previousPeriodData.attendanceRate,
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
                      <div className="flex items-center mt-1">
                        {stat.positive ? (
                          <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                        ) : (
                          <TrendingDown className="w-3 h-3 text-red-500 mr-1" />
                        )}
                        <span className={`text-xs ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}%
                        </span>
                      </div>
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
      </motion.div>

      <Tabs value={selectedReport} onValueChange={setSelectedReport} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 bg-white dark:bg-slate-800 rounded-xl p-1">
          <TabsTrigger value="academic" className="rounded-lg">الأداء الأكاديمي</TabsTrigger>
          <TabsTrigger value="courses" className="rounded-lg">تحليل المقررات</TabsTrigger>
          <TabsTrigger value="students" className="rounded-lg">تقارير الطلاب</TabsTrigger>
          <TabsTrigger value="custom" className="rounded-lg">تقارير مخصصة</TabsTrigger>
        </TabsList>

        <TabsContent value="academic" className="space-y-6">
          {/* Performance Chart */}
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <LineChart className="w-5 h-5 mr-2" />
                    تطور الأداء الأكاديمي
                  </CardTitle>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Select value={chartType} onValueChange={setChartType}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bar">أعمدة</SelectItem>
                        <SelectItem value="line">خطي</SelectItem>
                        <SelectItem value="area">منطقة</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="sm" variant="outline">
                      <Maximize className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Simulated Chart */}
                  <div className="absolute inset-4">
                    <div className="flex items-end justify-between h-full space-x-2 space-x-reverse">
                      {performanceData.map((data, index) => (
                        <motion.div
                          key={data.period}
                          initial={{ height: 0 }}
                          animate={{ height: `${data.averageGrade * 25}%` }}
                          transition={{ delay: index * 0.1, duration: 0.6 }}
                          className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-lg flex-1 min-h-[10px] relative group"
                        >
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {data.averageGrade.toFixed(2)}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {performanceData.map((data) => (
                        <span key={data.period} className="text-xs">{data.period}</span>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-4 right-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                  >
                    ✓ تحسن مستمر
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    مؤشرات الأداء الرئيسية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "معدل الإنجاز", value: 94, target: 95, color: "bg-green-500" },
                    { label: "رضا الطلاب", value: 87, target: 90, color: "bg-blue-500" },
                    { label: "جودة التعليم", value: 91, target: 88, color: "bg-purple-500" },
                    { label: "الحضور", value: 89, target: 85, color: "bg-orange-500" },
                  ].map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {metric.value}% / هدف {metric.target}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={metric.value} className="h-3" />
                        <div
                          className="absolute top-0 w-1 h-3 bg-red-400 opacity-60"
                          style={{ left: `${metric.target}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>0%</span>
                        <span className="text-red-500">هدف {metric.target}%</span>
                        <span>100%</span>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="w-5 h-5 mr-2" />
                    توزيع الدرجات
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { grade: "A (ممتاز)", percentage: 35, color: "bg-green-500", students: 490 },
                      { grade: "B (جيد جداً)", percentage: 28, color: "bg-blue-500", students: 392 },
                      { grade: "C (جيد)", percentage: 22, color: "bg-yellow-500", students: 308 },
                      { grade: "D (مقبول)", percentage: 12, color: "bg-orange-500", students: 168 },
                      { grade: "F (راسب)", percentage: 3, color: "bg-red-500", students: 42 },
                    ].map((item, index) => (
                      <motion.div
                        key={item.grade}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 space-x-reverse"
                      >
                        <div className={`w-4 h-4 ${item.color} rounded`} />
                        <div className="flex-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{item.grade}</span>
                            <span className="text-gray-600 dark:text-gray-400">
                              {item.percentage}% ({item.students} طالب)
                            </span>
                          </div>
                          <Progress value={item.percentage} className="h-2 mt-1" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    تحليل أداء المقررات
                  </CardTitle>
                  <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                    <SelectTrigger className="w-60">
                      <SelectValue placeholder="اختر المقرر" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">جميع المقررات</SelectItem>
                      {courseAnalytics.map((course) => (
                        <SelectItem key={course.courseId} value={course.courseId}>
                          {course.courseName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseAnalytics.map((course, index) => (
                    <motion.div
                      key={course.courseId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg bg-gray-50 dark:bg-slate-800"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg">{course.courseName}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {course.instructor} • {course.enrolledStudents} طالب
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 space-x-reverse">
                          {getTrendIcon(course.trend)}
                          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {course.courseId}
                          </Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">
                            {course.completionRate}%
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">معدل الإكمال</div>
                        </div>
                        <div className="text-center">
                          <div className={`text-2xl font-bold ${getGradeColor(course.averageGrade)}`}>
                            {course.averageGrade}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">المعدل</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-yellow-600">
                            {course.satisfactionScore}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">الرضا</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">
                            {course.timeSpent}h
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">متوسط الوقت</div>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                          <Award className="w-4 h-4 text-yellow-500 mr-2" />
                          <span className="text-sm">
                            {course.topPerformers} طلاب متفوقون
                          </span>
                        </div>
                        <div className="flex items-center">
                          <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                          <span className="text-sm">
                            {course.strugglingStudents} طلاب يحتاجون مساعدة
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  أفضل الطلاب أداءً
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-right">الترتيب</TableHead>
                      <TableHead className="text-right">الطالب</TableHead>
                      <TableHead className="text-right">التخصص</TableHead>
                      <TableHead className="text-right">المعدل</TableHead>
                      <TableHead className="text-right">الحضور</TableHead>
                      <TableHead className="text-right">المهام</TableHead>
                      <TableHead className="text-right">الإجراءات</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topStudents.map((student, index) => (
                      <motion.tr
                        key={student.studentId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="hover:bg-gray-50 dark:hover:bg-slate-800"
                      >
                        <TableCell>
                          <div className="flex items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                              student.rank === 1 ? 'bg-yellow-500' :
                              student.rank === 2 ? 'bg-gray-400' :
                              'bg-orange-500'
                            }`}>
                              {student.rank}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-3 space-x-reverse">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>{student.studentName[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{student.studentName}</p>
                              <p className="text-sm text-gray-500">{student.year}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{student.major}</TableCell>
                        <TableCell>
                          <Badge className={`${getGradeColor(student.currentGPA)} bg-opacity-20`}>
                            {student.currentGPA.toFixed(2)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Progress value={student.attendanceRate} className="w-16 h-2" />
                            <span className="text-sm">{student.attendanceRate}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm">
                            {student.assignmentsSubmitted}/{student.totalAssignments}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <FileText className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <motion.div variants={itemVariants}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  إنشاء تقرير مخصص
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">نوع التقرير</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر نوع التقرير" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="performance">تقرير الأداء</SelectItem>
                        <SelectItem value="attendance">تقرير الحضور</SelectItem>
                        <SelectItem value="grades">تقرير الدرجات</SelectItem>
                        <SelectItem value="financial">التقرير المالي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">الفترة الزمنية</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الفترة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">أسبوعي</SelectItem>
                        <SelectItem value="month">شهري</SelectItem>
                        <SelectItem value="semester">فصلي</SelectItem>
                        <SelectItem value="year">سنوي</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">التخصص</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر التخصص" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">جميع التخصصات</SelectItem>
                        <SelectItem value="cs">علوم الحاسوب</SelectItem>
                        <SelectItem value="ai">الذكاء الاصطناعي</SelectItem>
                        <SelectItem value="se">هندسة البرمجيات</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "الدرجات والتقديرات",
                    "معدلات الحضور",
                    "أداء المقررات",
                    "رضا الطلاب",
                    "إحصائيات الأساتذة",
                    "التحليل المالي",
                    "معدلات النجاح",
                    "التوقعات المستقبلية"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                    >
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{item}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex space-x-4 space-x-reverse">
                  <Button className="gradient-button text-white">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    إنشاء التقرير
                  </Button>
                  <Button variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    معاينة
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    تحميل القالب
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
