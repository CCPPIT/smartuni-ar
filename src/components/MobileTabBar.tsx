"use client";

import { motion } from "framer-motion";
import {
  Home,
  Search,
  Plus,
  Bell,
  User,
  BookOpen,
  Calendar,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";

interface TabItem {
  icon: React.ReactNode;
  label: string;
  isSpecial?: boolean;
}

const tabItems: TabItem[] = [
  {
    icon: <Home className="w-5 h-5" />,
    label: "الرئيسية",
  },
  {
    icon: <Search className="w-5 h-5" />,
    label: "البحث",
  },
  {
    icon: <Plus className="w-6 h-6" />,
    label: "إضافة",
    isSpecial: true,
  },
  {
    icon: <Bell className="w-5 h-5" />,
    label: "الإشعارات",
  },
  {
    icon: <User className="w-5 h-5" />,
    label: "الملف الشخصي",
  },
];

export default function MobileTabBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 md:hidden z-40"
    >
      <div className="gradient-main backdrop-blur-xl border-t border-white/20">
        <div className="flex items-center justify-around px-2 py-2">
          {tabItems.map((item, index) => (
            <motion.button
              key={item.label}
              onClick={() => setActiveTab(index)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                item.isSpecial ? "p-0" : ""
              }`}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Special center button */}
              {item.isSpecial ? (
                <motion.div
                  className="relative"
                  animate={{
                    rotate: activeTab === index ? 45 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-14 h-14 gradient-button rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      scale: activeTab === index ? 1.1 : 1,
                      boxShadow: activeTab === index
                        ? "0 8px 32px rgba(255, 20, 147, 0.4)"
                        : "0 4px 16px rgba(255, 20, 147, 0.2)",
                    }}
                    whileHover={{
                      boxShadow: "0 12px 40px rgba(255, 20, 147, 0.5)",
                    }}
                  >
                    <motion.div
                      animate={{
                        rotate: activeTab === index ? 45 : 0,
                      }}
                      className="text-white"
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>

                  {/* Floating particles effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                      opacity: activeTab === index ? 1 : 0,
                    }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                          scale: 0,
                        }}
                        animate={{
                          x: `${50 + Math.cos(i * 60 * Math.PI / 180) * 25}%`,
                          y: `${50 + Math.sin(i * 60 * Math.PI / 180) * 25}%`,
                          scale: activeTab === index ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    ))}
                  </motion.div>
                </motion.div>
              ) : (
                <>
                  {/* Regular tab button */}
                  <motion.div
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      activeTab === index
                        ? "glass-effect bg-white/20"
                        : "hover:bg-white/10"
                    }`}
                    animate={{
                      scale: activeTab === index ? 1.1 : 1,
                      y: activeTab === index ? -2 : 0,
                    }}
                  >
                    <motion.div
                      animate={{
                        color: activeTab === index ? "#ffffff" : "#ffffff80",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  </motion.div>

                  {/* Active indicator dot */}
                  <motion.div
                    className="mt-1 w-1 h-1 rounded-full bg-white"
                    animate={{
                      scale: activeTab === index ? 1 : 0,
                      opacity: activeTab === index ? 1 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />

                  {/* Ripple effect on tap */}
                  {activeTab === index && (
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/10"
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </>
              )}
            </motion.button>
          ))}
        </div>

        {/* Background wave effect */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "200%",
              marginLeft: "-100%",
            }}
          />
        </motion.div>
      </div>

      {/* Safe area for iPhone */}
      <div className="h-safe-area-inset-bottom bg-gradient-to-t from-pink-500/20 to-transparent" />
    </motion.div>
  );
}
