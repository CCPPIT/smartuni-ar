"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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
  Brain,
  GraduationCap,
  Shield,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Building,
  Calendar,
  BookOpen,
  Sparkles,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";

interface AuthFormData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  university?: string;
  major?: string;
  year?: string;
  studentId?: string;
}

const universities = [
  "جامعة الملك سعود",
  "جامعة الملك عبدالعزيز",
  "جامعة الإمام محمد بن سعود",
  "جامعة الملك فهد للبترول والمعادن",
  "جامعة الأميرة نورة",
  "الجامعة الأردنية",
  "الجامعة الأمريكية في بيروت",
  "جامعة القاهرة",
];

const majors = [
  "هندسة الحاسوب",
  "علوم الحاسوب",
  "الذكاء الاصطناعي",
  "هندسة البرمجيات",
  "الطب",
  "الهندسة المدنية",
  "إدارة الأعمال",
  "المحاسبة",
  "القانون",
  "التصميم الجرافيكي",
];

export default function AuthSystem() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [formData, setFormData] = useState<AuthFormData>({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    university: "",
    major: "",
    year: "",
    studentId: "",
  });

  const handleInputChange = (field: keyof AuthFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = (isLogin: boolean) => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.email) {
      newErrors.email = "البريد الإلكتروني مطلوب";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "البريد الإلكتروني غير صحيح";
    }

    if (!formData.password) {
      newErrors.password = "كلمة المرور مطلوبة";
    } else if (formData.password.length < 6) {
      newErrors.password = "كلمة المرور يجب أن تكون 6 أحرف على الأقل";
    }

    if (!isLogin) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "تأكيد كلمة المرور مطلوب";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "كلمات المرور غير متطابقة";
      }

      if (!formData.firstName) newErrors.firstName = "الاسم الأول مطلوب";
      if (!formData.lastName) newErrors.lastName = "الاسم الأخير مطلوب";
      if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
      if (!formData.university) newErrors.university = "الجامعة مطلوبة";
      if (!formData.major) newErrors.major = "التخصص مطلوب";
      if (!formData.year) newErrors.year = "السنة الدراسية مطلوبة";
      if (!formData.studentId) newErrors.studentId = "الرقم الجامعي مطلوب";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (isLogin: boolean) => {
    if (!validateForm(isLogin)) return;

    setLoading(true);
    // محاكاة API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setIsOpen(false);

    // هنا يمكن إضافة منطق المصادقة الفعلي
    console.log(isLogin ? "تسجيل الدخول" : "إنشاء حساب", formData);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.2 }
    }
  };

  const inputVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="gradient-button text-white font-bold px-6 py-3 rounded-xl shadow-lg">
            <User className="w-5 h-5 mr-2" />
            دخول / تسجيل
          </Button>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] p-0 border-0 bg-transparent">
        <AnimatePresence>
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="gradient-main rounded-2xl shadow-2xl overflow-hidden"
          >
            <DialogHeader className="p-6 text-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex items-center justify-center mb-4"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2"
                  >
                    <Sparkles className="w-6 h-6 text-yellow-300" />
                  </motion.div>
                </div>
              </motion.div>
              <DialogTitle className="text-2xl font-bold text-white">
                SmartUni AR
              </DialogTitle>
              <p className="text-white/80">منصة التعلم الذكية</p>
            </DialogHeader>

            <div className="p-6">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-white/10 backdrop-blur-sm">
                  <TabsTrigger
                    value="login"
                    className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
                  >
                    تسجيل الدخول
                  </TabsTrigger>
                  <TabsTrigger
                    value="register"
                    className="data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
                  >
                    إنشاء حساب
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-4 mt-6">
                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="login-email" className="text-white font-medium">
                      البريد الإلكتروني
                    </Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 h-4 w-4 text-white/60" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="example@smartuni.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-300 text-sm mt-1 flex items-center"
                        >
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.2 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="login-password" className="text-white font-medium">
                      كلمة المرور
                    </Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-3 h-4 w-4 text-white/60" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pr-10 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3 top-3 h-4 w-4 text-white/60 hover:text-white"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                      {errors.password && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-300 text-sm mt-1 flex items-center"
                        >
                          <AlertCircle className="w-3 h-3 mr-1" />
                          {errors.password}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="pt-4"
                  >
                    <Button
                      onClick={() => handleSubmit(true)}
                      disabled={loading}
                      className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 rounded-xl backdrop-blur-sm border border-white/30"
                    >
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Shield className="w-5 h-5 mr-2" />
                        </motion.div>
                      ) : (
                        <CheckCircle className="w-5 h-5 mr-2" />
                      )}
                      {loading ? "جارٍ تسجيل الدخول..." : "تسجيل الدخول"}
                    </Button>
                  </motion.div>
                </TabsContent>

                <TabsContent value="register" className="space-y-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="firstName" className="text-white font-medium">
                        الاسم الأول
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="أحمد"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      {errors.firstName && (
                        <p className="text-red-300 text-xs">{errors.firstName}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.2 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="lastName" className="text-white font-medium">
                        الاسم الأخير
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="محمد"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      {errors.lastName && (
                        <p className="text-red-300 text-xs">{errors.lastName}</p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="register-email" className="text-white font-medium">
                      البريد الإلكتروني
                    </Label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-3 h-4 w-4 text-white/60" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="example@smartuni.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      {errors.email && (
                        <p className="text-red-300 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="phone" className="text-white font-medium">
                      رقم الهاتف
                    </Label>
                    <div className="relative">
                      <Phone className="absolute right-3 top-3 h-4 w-4 text-white/60" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+966 50 123 4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="pr-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      {errors.phone && (
                        <p className="text-red-300 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.5 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="university" className="text-white font-medium">
                        الجامعة
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("university", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="اختر الجامعة" />
                        </SelectTrigger>
                        <SelectContent>
                          {universities.map((uni) => (
                            <SelectItem key={uni} value={uni}>
                              {uni}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.university && (
                        <p className="text-red-300 text-xs">{errors.university}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.6 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="major" className="text-white font-medium">
                        التخصص
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("major", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="اختر التخصص" />
                        </SelectTrigger>
                        <SelectContent>
                          {majors.map((major) => (
                            <SelectItem key={major} value={major}>
                              {major}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.major && (
                        <p className="text-red-300 text-xs">{errors.major}</p>
                      )}
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.7 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="year" className="text-white font-medium">
                        السنة الدراسية
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("year", value)}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white">
                          <SelectValue placeholder="السنة" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">السنة الأولى</SelectItem>
                          <SelectItem value="2">السنة الثانية</SelectItem>
                          <SelectItem value="3">السنة الثالثة</SelectItem>
                          <SelectItem value="4">السنة الرابعة</SelectItem>
                          <SelectItem value="graduate">دراسات عليا</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.year && (
                        <p className="text-red-300 text-xs">{errors.year}</p>
                      )}
                    </motion.div>

                    <motion.div
                      variants={inputVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.8 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="studentId" className="text-white font-medium">
                        الرقم الجامعي
                      </Label>
                      <Input
                        id="studentId"
                        placeholder="202012345"
                        value={formData.studentId}
                        onChange={(e) => handleInputChange("studentId", e.target.value)}
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      {errors.studentId && (
                        <p className="text-red-300 text-xs">{errors.studentId}</p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.9 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="register-password" className="text-white font-medium">
                      كلمة المرور
                    </Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-3 h-4 w-4 text-white/60" />
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="pr-10 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute left-3 top-3 h-4 w-4 text-white/60 hover:text-white"
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </button>
                      {errors.password && (
                        <p className="text-red-300 text-xs mt-1">{errors.password}</p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.0 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="confirmPassword" className="text-white font-medium">
                      تأكيد كلمة المرور
                    </Label>
                    <div className="relative">
                      <Lock className="absolute right-3 top-3 h-4 w-4 text-white/60" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className="pr-10 pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute left-3 top-3 h-4 w-4 text-white/60 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff /> : <Eye />}
                      </button>
                      {errors.confirmPassword && (
                        <p className="text-red-300 text-xs mt-1">{errors.confirmPassword}</p>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={inputVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.1 }}
                    className="pt-4"
                  >
                    <Button
                      onClick={() => handleSubmit(false)}
                      disabled={loading}
                      className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 rounded-xl backdrop-blur-sm border border-white/30"
                    >
                      {loading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <GraduationCap className="w-5 h-5 mr-2" />
                        </motion.div>
                      ) : (
                        <CheckCircle className="w-5 h-5 mr-2" />
                      )}
                      {loading ? "جارٍ إنشاء الحساب..." : "إنشاء حساب"}
                    </Button>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
