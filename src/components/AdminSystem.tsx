"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  BookOpen,
  GraduationCap,
  BarChart3,
  Calendar,
  MessageCircle,
  FileText,
  Plus,
  Edit,
  Trash2,
  Download,
  Upload,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Target,
  TrendingUp,
  Award,
  Brain,
  Settings,
  Bell,
  Search,
  Filter,
  Mail,
  Phone,
  MapPin,
  Star,
  Zap,
  Shield,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  major: string;
  year: string;
  gpa: number;
  avatar: string;
  status: "active" | "inactive" | "graduated";
  enrolledCourses: string[];
}

interface Course {
  id: string;
  name: string;
  code: string;
  credits: number;
  instructor: string;
  schedule: string;
  enrolledStudents: number;
  maxCapacity: number;
  status: "active" | "completed" | "upcoming";
  description: string;
}

interface Grade {
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  midtermGrade: number;
  finalGrade: number;
  assignmentsGrade: number;
  totalGrade: number;
  letterGrade: string;
}

const students: Student[] = [
  {
    id: "1",
    name: "أحمد محمد السالم",
    email: "ahmed@smartuni.com",
    phone: "+966501234567",
    major: "هندسة الحاسوب",
    year: "الثالثة",
    gpa: 3.85,
    avatar: "/api/placeholder/40/40",
    status: "active",
    enrolledCourses: ["CS301", "CS302", "CS303"],
  },
  {
    id: "2",
    name: "فاطمة أحمد النور",
    email: "fatima@smartuni.com",
    phone: "+966507654321",
    major: "علوم الحاسوب",
    year: "الرابعة",
    gpa: 3.92,
    avatar: "/api/placeholder/40/40",
    status: "active",
    enrolledCourses: ["CS401", "CS402"],
  },
  {
    id: "3",
    name: "محمد عبدالله الأمين",
    email: "mohammed@smartuni.com",
    phone: "+966509876543",
    major: "الذكاء الاصطناعي",
    year: "الثانية",
    gpa: 3.67,
    avatar: "/api/placeholder/40/40",
    status: "active",
    enrolledCourses: ["AI201", "AI202", "CS201"],
  },
];

const courses: Course[] = [
  {
    id: "CS301",
    name: "الذكاء الاصطناعي المتقدم",
    code: "CS301",
    credits: 3,
    instructor: "د. أحمد التقني",
    schedule: "الأحد والثلاثاء 10:00-11:30",
    enrolledStudents: 45,
    maxCapacity: 50,
    status: "active",
    description: "مقرر متقدم في الذكاء الاصطناعي يغطي التعلم العميق والشبكات العصبية",
  },
  {
    id: "CS302",
    name: "هندسة البرمجيات",
    code: "CS302",
    credits: 3,
    instructor: "د. سارة المطورة",
    schedule: "الإثنين والأربعاء 2:00-3:30",
    enrolledStudents: 38,
    maxCapacity: 45,
    status: "active",
    description: "أساسيات هندسة البرمجيات وتطوير التطبيقات",
  },
  {
    id: "CS303",
    name: "قواعد البيانات المتقدمة",
    code: "CS303",
    credits: 4,
    instructor: "د. محمد البيانات",
    schedule: "الثلاثاء والخميس 11:00-12:30",
    enrolledStudents: 32,
    maxCapacity: 40,
    status: "active",
    description: "تصميم وإدارة قواعد البيانات المعقدة",
  },
];

const grades: Grade[] = [
  {
    studentId: "1",
    studentName: "أحمد محمد السالم",
    courseId: "CS301",
    courseName: "الذكاء الاصطناعي المتقدم",
    midtermGrade: 85,
    finalGrade: 92,
    assignmentsGrade: 88,
    totalGrade: 89,
    letterGrade: "A-",
  },
  {
    studentId: "1",
    studentName: "أحمد محمد السالم",
    courseId: "CS302",
    courseName: "هندسة البرمجيات",
    midtermGrade: 78,
    finalGrade: 84,
    assignmentsGrade: 90,
    totalGrade: 84,
    letterGrade: "B+",
  },
];

export default function AdminSystem() {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isAddStudentOpen, setIsAddStudentOpen] = useState(false);
  const [isAddCourseOpen, setIsAddCourseOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "inactive": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "graduated": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "completed": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
      case "upcoming": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade.includes('A')) return "text-green-600 dark:text-green-400";
    if (grade.includes('B')) return "text-blue-600 dark:text-blue-400";
    if (grade.includes('C')) return "text-yellow-600 dark:text-yellow-400";
    return "text-red-600 dark:text-red-400";
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.major.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === "active").length;
  const totalCourses = courses.length;
  const activeCourses = courses.filter(c => c.status === "active").length;
  const averageGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;

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
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-1">نظام إدارة الجامعة</h1>
              <p className="text-white/80">لوحة تحكم الأساتذة والإداريين</p>
              <div className="flex items-center space-x-2 space-x-reverse mt-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Users className="w-3 h-3 mr-1" />
                  {totalStudents} طالب
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {totalCourses} مقرر
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Star className="w-3 h-3 mr-1" />
                  {averageGPA.toFixed(2)} معدل عام
                </Badge>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="hidden md:block"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Brain className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-white dark:bg-slate-800 rounded-xl p-1">
          <TabsTrigger value="dashboard" className="rounded-lg">لوحة التحكم</TabsTrigger>
          <TabsTrigger value="students" className="rounded-lg">الطلاب</TabsTrigger>
          <TabsTrigger value="courses" className="rounded-lg">المقررات</TabsTrigger>
          <TabsTrigger value="grades" className="rounded-lg">الدرجات</TabsTrigger>
          <TabsTrigger value="reports" className="rounded-lg">التقارير</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                title: "إجمالي الطلاب",
                value: totalStudents,
                icon: <Users className="w-6 h-6" />,
                color: "from-blue-500 to-purple-500",
                subtitle: `${activeStudents} نشط`,
              },
              {
                title: "المقررات النشطة",
                value: activeCourses,
                icon: <BookOpen className="w-6 h-6" />,
                color: "from-green-500 to-emerald-500",
                subtitle: `من ${totalCourses} مقرر`,
              },
              {
                title: "المعدل العام",
                value: averageGPA.toFixed(2),
                icon: <TrendingUp className="w-6 h-6" />,
                color: "from-orange-500 to-yellow-500",
                subtitle: "ممتاز",
              },
              {
                title: "معدل الحضور",
                value: "94%",
                icon: <CheckCircle className="w-6 h-6" />,
                color: "from-pink-500 to-rose-500",
                subtitle: "+2% هذا الشهر",
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
                          {stat.subtitle}
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

          {/* Recent Activities & Notifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                      message: "تم رفع درجات اختبار الذكاء الاصطناعي",
                      time: "منذ ساعة",
                      icon: <Award className="w-4 h-4 text-yellow-500" />,
                    },
                    {
                      type: "student",
                      message: "انضم طالب جديد للمقرر CS301",
                      time: "منذ 3 ساعات",
                      icon: <Users className="w-4 h-4 text-blue-500" />,
                    },
                    {
                      type: "message",
                      message: "5 رسائل جديدة من الطلاب",
                      time: "منذ 5 ساعات",
                      icon: <MessageCircle className="w-4 h-4 text-green-500" />,
                    },
                    {
                      type: "course",
                      message: "تم إنشاء مقرر جديد في الأمن السيبراني",
                      time: "منذ يوم",
                      icon: <BookOpen className="w-4 h-4 text-purple-500" />,
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

            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    تنبيهات مهمة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      type: "urgent",
                      message: "موعد تسليم الدرجات النهائية: 3 أيام",
                      icon: <Clock className="w-4 h-4 text-red-500" />,
                      priority: "high",
                    },
                    {
                      type: "reminder",
                      message: "اجتماع القسم غداً الساعة 10:00 ص",
                      icon: <Calendar className="w-4 h-4 text-blue-500" />,
                      priority: "medium",
                    },
                    {
                      type: "system",
                      message: "تحديث النظام مجدول للأسبوع القادم",
                      icon: <Settings className="w-4 h-4 text-green-500" />,
                      priority: "low",
                    },
                    {
                      type: "pending",
                      message: "15 طلب انسحاب من المقررات في الانتظار",
                      icon: <FileText className="w-4 h-4 text-orange-500" />,
                      priority: "medium",
                    },
                  ].map((alert, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`p-3 rounded-lg border-r-4 ${
                        alert.priority === 'high' ? 'border-red-500 bg-red-50 dark:bg-red-900/20' :
                        alert.priority === 'medium' ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                        'border-green-500 bg-green-50 dark:bg-green-900/20'
                      }`}
                    >
                      <div className="flex items-center space-x-3 space-x-reverse">
                        {alert.icon}
                        <p className="text-sm font-medium">{alert.message}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="البحث عن الطلاب..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10 w-80"
                />
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="التخصص" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع التخصصات</SelectItem>
                  <SelectItem value="cs">علوم الحاسوب</SelectItem>
                  <SelectItem value="ai">الذكاء الاصطناعي</SelectItem>
                  <SelectItem value="se">هندسة البرمجيات</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Dialog open={isAddStudentOpen} onOpenChange={setIsAddStudentOpen}>
              <DialogTrigger asChild>
                <Button className="gradient-button text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة طالب
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>إضافة طالب جديد</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">الاسم الكامل</Label>
                    <Input id="studentName" placeholder="أحمد محمد السالم" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentEmail">البريد الإلكتروني</Label>
                    <Input id="studentEmail" type="email" placeholder="ahmed@smartuni.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentPhone">رقم الهاتف</Label>
                    <Input id="studentPhone" placeholder="+966501234567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentMajor">التخصص</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر التخصص" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">علوم الحاسوب</SelectItem>
                        <SelectItem value="ai">الذكاء الاصطناعي</SelectItem>
                        <SelectItem value="se">هندسة البرمجيات</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentYear">السنة الدراسية</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر السنة" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">الأولى</SelectItem>
                        <SelectItem value="2">الثانية</SelectItem>
                        <SelectItem value="3">الثالثة</SelectItem>
                        <SelectItem value="4">الرابعة</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentId">الرقم الجامعي</Label>
                    <Input id="studentId" placeholder="202012345" />
                  </div>
                </div>
                <div className="flex justify-end space-x-2 space-x-reverse">
                  <Button variant="outline" onClick={() => setIsAddStudentOpen(false)}>
                    إلغاء
                  </Button>
                  <Button className="gradient-button text-white">
                    إضافة الطالب
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <Card className="border-0 shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">الطالب</TableHead>
                  <TableHead className="text-right">التخصص</TableHead>
                  <TableHead className="text-right">السنة</TableHead>
                  <TableHead className="text-right">المعدل</TableHead>
                  <TableHead className="text-right">الحالة</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredStudents.map((student, index) => (
                  <motion.tr
                    key={student.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50 dark:hover:bg-slate-800"
                  >
                    <TableCell>
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={student.avatar} />
                          <AvatarFallback>{student.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-gray-500">{student.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{student.major}</TableCell>
                    <TableCell>{student.year}</TableCell>
                    <TableCell>
                      <Badge className={`${student.gpa >= 3.5 ? 'bg-green-100 text-green-800' :
                                        student.gpa >= 3.0 ? 'bg-yellow-100 text-yellow-800' :
                                        'bg-red-100 text-red-800'} dark:bg-opacity-20`}>
                        {student.gpa.toFixed(2)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(student.status)}>
                        {student.status === 'active' ? 'نشط' :
                         student.status === 'inactive' ? 'غير نشط' : 'متخرج'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">إدارة المقررات</h2>
            <Dialog open={isAddCourseOpen} onOpenChange={setIsAddCourseOpen}>
              <DialogTrigger asChild>
                <Button className="gradient-button text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة مقرر
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>إضافة مقرر جديد</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="courseName">اسم المقرر</Label>
                    <Input id="courseName" placeholder="الذكاء الاصطناعي المتقدم" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courseCode">رمز المقرر</Label>
                    <Input id="courseCode" placeholder="CS301" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courseCredits">عدد الساعات</Label>
                    <Input id="courseCredits" type="number" placeholder="3" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courseCapacity">السعة القصوى</Label>
                    <Input id="courseCapacity" type="number" placeholder="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courseSchedule">الجدول</Label>
                    <Input id="courseSchedule" placeholder="الأحد والثلاثاء 10:00-11:30" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="courseInstructor">الأستاذ</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الأستاذ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dr-ahmed">د. أحمد التقني</SelectItem>
                        <SelectItem value="dr-sara">د. سارة المطورة</SelectItem>
                        <SelectItem value="dr-mohammed">د. محمد البيانات</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="courseDescription">وصف المقرر</Label>
                    <Textarea
                      id="courseDescription"
                      placeholder="وصف شامل لمحتوى المقرر وأهدافه..."
                      rows={3}
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2 space-x-reverse">
                  <Button variant="outline" onClick={() => setIsAddCourseOpen(false)}>
                    إلغاء
                  </Button>
                  <Button className="gradient-button text-white">
                    إضافة المقرر
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className={getStatusColor(course.status)}>
                        {course.status === 'active' ? 'نشط' :
                         course.status === 'completed' ? 'مكتمل' : 'قادم'}
                      </Badge>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {course.code} • {course.credits} ساعات
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        {course.instructor}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {course.enrolledStudents}/{course.maxCapacity} طالب
                      </span>
                    </div>

                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      {course.schedule}
                    </div>

                    <Button className="w-full gradient-button text-white">
                      إدارة المقرر
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="grades" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">إدارة الدرجات</h2>
            <div className="flex items-center space-x-4 space-x-reverse">
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="w-60">
                  <SelectValue placeholder="اختر المقرر" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع المقررات</SelectItem>
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="gradient-button text-white">
                <Upload className="w-4 h-4 mr-2" />
                رفع الدرجات
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                تصدير
              </Button>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-right">الطالب</TableHead>
                  <TableHead className="text-right">المقرر</TableHead>
                  <TableHead className="text-right">الفصلي</TableHead>
                  <TableHead className="text-right">النهائي</TableHead>
                  <TableHead className="text-right">الأعمال</TableHead>
                  <TableHead className="text-right">المجموع</TableHead>
                  <TableHead className="text-right">التقدير</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {grades.map((grade, index) => (
                  <motion.tr
                    key={`${grade.studentId}-${grade.courseId}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50 dark:hover:bg-slate-800"
                  >
                    <TableCell>
                      <div className="font-medium">{grade.studentName}</div>
                    </TableCell>
                    <TableCell>{grade.courseName}</TableCell>
                    <TableCell>{grade.midtermGrade}</TableCell>
                    <TableCell>{grade.finalGrade}</TableCell>
                    <TableCell>{grade.assignmentsGrade}</TableCell>
                    <TableCell className="font-bold">{grade.totalGrade}</TableCell>
                    <TableCell>
                      <Badge className={`${getGradeColor(grade.letterGrade)} bg-opacity-20`}>
                        {grade.letterGrade}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Button size="sm" variant="outline">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    التقارير الأكاديمية
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "تقرير أداء الطلاب",
                    "تقرير حضور المحاضرات",
                    "تقرير نتائج الاختبارات",
                    "تقرير المقررات الأكثر تسجيلاً",
                    "تقرير التحليل الأكاديمي",
                  ].map((report, index) => (
                    <motion.div
                      key={report}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-slate-800"
                    >
                      <span className="font-medium">{report}</span>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        تحميل
                      </Button>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    إحصائيات سريعة
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>معدل النجاح</span>
                      <span className="font-bold text-green-600">94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>معدل الحضور</span>
                      <span className="font-bold text-blue-600">87%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>رضا الطلاب</span>
                      <span className="font-bold text-purple-600">4.3/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>المعدل العام</span>
                      <span className="font-bold text-orange-600">{averageGPA.toFixed(2)}</span>
                    </div>
                  </div>

                  <Button className="w-full gradient-button text-white">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    عرض التحليل المفصل
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
