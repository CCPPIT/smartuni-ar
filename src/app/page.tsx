"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HomePage from "@/components/HomePage";
import StudentDashboard from "@/components/StudentDashboard";
import AdminSystem from "@/components/AdminSystem";
import AIFeatures from "@/components/AIFeatures";
import ARFeatures from "@/components/ARFeatures";
import ReportsSystem from "@/components/ReportsSystem";
import AuthSystem from "@/components/AuthSystem";
import MobileTabBar from "@/components/MobileTabBar";
import MobileSidebar from "@/components/MobileSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  GraduationCap,
  Shield,
  Brain,
  Camera,
  BarChart3,
  User,
  Settings,
  Bell,
  Search,
  Menu,
} from "lucide-react";

type PageType =
  | "home"
  | "dashboard"
  | "admin"
  | "ai"
  | "ar"
  | "reports"
  | "profile";

interface NavigationItem {
  id: PageType;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
  color: string;
  description: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "الرئيسية",
    icon: <Home className="w-5 h-5" />,
    component: <HomePage />,
    color: "from-pink-500 to-rose-500",
    description: "الصفحة الرئيسية والأخبار"
  },
  {
    id: "dashboard",
    label: "لوحة التحكم",
    icon: <GraduationCap className="w-5 h-5" />,
    component: <StudentDashboard />,
    color: "from-blue-500 to-cyan-500",
    description: "لوحة تحكم الطلاب"
  },
  {
    id: "admin",
    label: "إدارة الجامعة",
    icon: <Shield className="w-5 h-5" />,
    component: <AdminSystem />,
    color: "from-purple-500 to-indigo-500",
    description: "نظام إدارة الجامعة"
  },
  {
    id: "ai",
    label: "الذكاء الاصطناعي",
    icon: <Brain className="w-5 h-5" />,
    component: <AIFeatures />,
    color: "from-green-500 to-emerald-500",
    description: "مساعد ذكي وتوصيات"
  },
  {
    id: "ar",
    label: "الواقع المعزز",
    icon: <Camera className="w-5 h-5" />,
    component: <ARFeatures />,
    color: "from-orange-500 to-red-500",
    description: "تجارب تفاعلية وجولات"
  },
  {
    id: "reports",
    label: "التقارير",
    icon: <BarChart3 className="w-5 h-5" />,
    component: <ReportsSystem />,
    color: "from-violet-500 to-purple-500",
    description: "تحليلات وتقارير شاملة"
  }
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [isAuthenticated, setIsAuthenticated] = useState(true); // محاكاة تسجيل الدخول
  const [showNavigation, setShowNavigation] = useState(false);

  const currentItem = navigationItems.find(item => item.id === currentPage);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-6" dir="rtl">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold gradient-text">SmartUni AR</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              مرحباً بك في منصة التعلم الذكية
            </p>
          </motion.div>
          <AuthSystem />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" dir="rtl">
      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 dark:bg-slate-900/80 dark:border-slate-700">
        <div className="flex items-center justify-between w-full px-6 py-4">
          <div className="flex items-center space-x-4 space-x-reverse">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center"
            >
              <Brain className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold gradient-text">SmartUni AR</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                منصة التعلم الذكية
              </p>
            </div>
          </div>

          <nav className="flex items-center space-x-2 space-x-reverse">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 space-x-reverse px-4 py-2 rounded-xl transition-all ${
                  currentPage === item.id
                    ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                    : "hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-300"
                }`}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center space-x-3 space-x-reverse">
            <Button size="sm" variant="outline">
              <Search className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline">
              <Bell className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline">
              <Settings className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="outline" onClick={() => setIsAuthenticated(false)}>
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200 dark:bg-slate-900/90 dark:border-slate-700">
        <div className="flex items-center justify-between px-4 py-3">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowNavigation(!showNavigation)}
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="text-center">
            <h1 className="text-lg font-bold gradient-text">SmartUni AR</h1>
            {currentItem && (
              <p className="text-xs text-gray-600 dark:text-gray-400">
                {currentItem.description}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2 space-x-reverse">
            <Button size="sm" variant="ghost">
              <Bell className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setIsAuthenticated(false)}>
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {showNavigation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700"
            >
              <div className="p-4 space-y-2">
                {navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setShowNavigation(false);
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center space-x-3 space-x-reverse p-3 rounded-xl transition-all ${
                      currentPage === item.id
                        ? `bg-gradient-to-r ${item.color} text-white`
                        : "hover:bg-gray-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {item.icon}
                    <div className="flex-1 text-right">
                      <div className="font-medium">{item.label}</div>
                      <div className="text-xs opacity-80">{item.description}</div>
                    </div>
                    {currentPage === item.id && (
                      <Badge className="bg-white/20 text-white border-white/30">
                        نشط
                      </Badge>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Page Content */}
      <div className="pt-16 md:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentItem?.component}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Mobile Components */}
      <div className="md:hidden">
        <MobileSidebar />
        <MobileTabBar />
      </div>
    </div>
  );
}
