"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  Home,
  BookOpen,
  Calendar,
  Users,
  Settings,
  Bell,
  MessageCircle,
  TrendingUp,
  GraduationCap,
  Brain,
  Camera,
  Star,
  Shield,
  Zap,
} from "lucide-react";
import { useState } from "react";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  color: string;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <Home className="w-5 h-5" />,
    label: "الرئيسية",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: "الدورات",
    badge: "12",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    label: "الجدول",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    label: "المكتبة",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    label: "الذكاء الاصطناعي",
    badge: "AI",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: <Camera className="w-5 h-5" />,
    label: "الواقع المعزز",
    badge: "AR",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: <Users className="w-5 h-5" />,
    label: "المجتمع",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    label: "الرسائل",
    badge: "5",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    label: "التحليلات",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    label: "الإشعارات",
    badge: "3",
    color: "from-red-500 to-pink-500",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    label: "الإعدادات",
    color: "from-gray-500 to-slate-500",
  },
];

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  const sidebarVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: -50,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden fixed top-4 left-4 z-50 glass-effect neon-glow"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-6 w-6 text-white" />
          </motion.div>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-80 p-0 gradient-main border-0"
        dir="rtl"
      >
        <motion.div
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          className="h-full flex flex-col"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="p-6 border-b border-white/20"
          >
            <div className="flex items-center space-x-4 space-x-reverse">
              <Avatar className="h-12 w-12 ring-2 ring-white/30">
                <AvatarImage src="/api/placeholder/48/48" />
                <AvatarFallback className="gradient-button text-white font-bold">
                  أح
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">أحمد محمد</h3>
                <p className="text-white/80 text-sm">طالب هندسة الحاسوب</p>
              </div>
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Star className="w-6 h-6 text-yellow-300" fill="currentColor" />
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex-1 py-4">
            {sidebarItems.map((item, index) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                whileTap={{ scale: 0.98 }}
                className="mx-4 mb-2"
              >
                <motion.button
                  className="w-full flex items-center space-x-4 space-x-reverse p-4 rounded-xl glass-effect hover:bg-white/20 transition-all duration-300 group"
                  whileHover={{
                    boxShadow: "0 8px 32px rgba(255, 255, 255, 0.2)"
                  }}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className="text-white font-medium flex-1 text-right">
                    {item.label}
                  </span>
                  {item.badge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="bg-white/20 text-white border-white/30 text-xs"
                      >
                        {item.badge}
                      </Badge>
                    </motion.div>
                  )}
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="p-6 border-t border-white/20"
          >
            <motion.div
              className="glass-effect p-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-white font-medium">النقاط الذكية</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5 text-yellow-300" />
                </motion.div>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="flex-1 bg-white/20 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
                <span className="text-white text-sm font-bold">750/1000</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
