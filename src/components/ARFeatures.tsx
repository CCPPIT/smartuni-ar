"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Camera,
  Scan,
  Navigation,
  Eye,
  Play,
  Pause,
  Settings,
  Share,
  Bookmark,
  MapPin,
  Compass,
  Building,
  FlaskConical,
  Atom,
  Lightbulb,
  Target,
  Award,
  Users,
  Clock,
  Battery,
  QrCode,
  Image as ImageIcon,
  Video,
} from "lucide-react";
import { useState, useRef } from "react";

interface ARExperience {
  id: string;
  title: string;
  description: string;
  category: "campus" | "lab" | "science" | "interactive";
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: number;
  rating: number;
  participants: number;
  features: string[];
  requirements: string[];
  instructor?: string;
  color: string;
}

const arExperiences: ARExperience[] = [
  {
    id: "1",
    title: "جولة في الحرم الجامعي",
    description: "استكشف المباني والمرافق الجامعية بتقنية الواقع المعزز",
    category: "campus",
    difficulty: "beginner",
    duration: 15,
    rating: 4.8,
    participants: 2340,
    features: ["خرائط تفاعلية", "معلومات مباشرة", "ملاحة ذكية"],
    requirements: ["كاميرا", "إنترنت"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "مختبر الكيمياء الافتراضي",
    description: "قم بتجارب كيميائية آمنة في بيئة افتراضية",
    category: "lab",
    difficulty: "intermediate",
    duration: 45,
    rating: 4.9,
    participants: 1850,
    features: ["تجارب آمنة", "نتائج فورية", "تسجيل البيانات"],
    requirements: ["كاميرا", "مساحة 2x2 متر"],
    instructor: "د. سارة الكيميائية",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "3",
    title: "نموذج الذرة ثلاثي الأبعاد",
    description: "اكتشف بنية الذرة والجزيئات بصورة تفاعلية",
    category: "science",
    difficulty: "beginner",
    duration: 20,
    rating: 4.7,
    participants: 3200,
    features: ["نماذج 3D", "تفاعل باللمس", "شرح صوتي"],
    requirements: ["كاميرا"],
    instructor: "د. أحمد الفيزيائي",
    color: "from-purple-500 to-indigo-500",
  },
];

export default function ARFeatures() {
  const [isARActive, setIsARActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [deviceStatus] = useState({
    camera: true,
    gps: true,
    battery: 85,
  });

  const videoRef = useRef<HTMLVideoElement>(null);

  const startAR = async () => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsARActive(true);
        }
      }
    } catch (error) {
      console.error("خطأ في تشغيل الكاميرا:", error);
    }
  };

  const stopAR = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      setIsARActive(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "campus": return <Building className="w-4 h-4" />;
      case "lab": return <FlaskConical className="w-4 h-4" />;
      case "science": return <Atom className="w-4 h-4" />;
      case "interactive": return <Lightbulb className="w-4 h-4" />;
      default: return <Eye className="w-4 h-4" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
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
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Camera className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold mb-1">الواقع المعزز 📱</h1>
              <p className="text-white/80">استكشف عالماً جديداً من التعلم التفاعلي</p>
              <div className="flex items-center space-x-2 space-x-reverse mt-2">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Eye className="w-3 h-3 mr-1" />
                  {deviceStatus.camera ? 'كاميرا نشطة' : 'كاميرا معطلة'}
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <MapPin className="w-3 h-3 mr-1" />
                  {deviceStatus.gps ? 'موقع محدد' : 'موقع غير محدد'}
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  <Battery className="w-3 h-3 mr-1" />
                  {deviceStatus.battery}%
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 space-x-reverse">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={isARActive ? stopAR : startAR}
                className={`${isARActive ? 'bg-red-500 hover:bg-red-600' : 'bg-white/20 hover:bg-white/30'} text-white font-bold px-6 py-3 rounded-xl backdrop-blur-sm border border-white/30`}
              >
                <Camera className="w-5 h-5 mr-2" />
                {isARActive ? 'إيقاف AR' : 'تشغيل AR'}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-white/20 hover:bg-white/30 text-white font-bold px-4 py-3 rounded-xl backdrop-blur-sm border border-white/30">
                <Scan className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* AR Camera View */}
      {isARActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="mb-6"
        >
          <Card className="border-0 shadow-2xl overflow-hidden">
            <div className="relative bg-black">
              <video
                ref={videoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-96 object-cover"
              />

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-8 h-8 border-2 border-white rounded-full opacity-50"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">مبنى الحاسب الآلي</span>
                  </div>
                  <p className="text-xs opacity-80 mt-1">15 متر شمالاً</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Compass className="w-4 h-4" />
                    <span className="text-sm">شمال شرق</span>
                  </div>
                  <p className="text-xs opacity-80 mt-1">اتجه يساراً</p>
                </motion.div>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto">
                <div className="flex items-center space-x-2 space-x-reverse bg-black/50 backdrop-blur-sm rounded-full p-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/20 rounded-full"
                    onClick={() => setIsRecording(!isRecording)}
                  >
                    {isRecording ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 rounded-full">
                    <ImageIcon className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 rounded-full">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-white hover:bg-white/20 rounded-full">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}

      {/* AR Experiences */}
      <motion.div variants={itemVariants} className="mb-6">
        <h2 className="text-2xl font-bold mb-4">تجارب الواقع المعزز</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {arExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden"
            >
              <Card className="border-0 shadow-lg h-full">
                <div className={`h-2 bg-gradient-to-r ${experience.color}`} />
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${experience.color} text-white`}>
                        {getCategoryIcon(experience.category)}
                      </div>
                      <Badge className={getDifficultyColor(experience.difficulty)}>
                        {experience.difficulty === 'beginner' ? 'مبتدئ' :
                         experience.difficulty === 'intermediate' ? 'متوسط' : 'متقدم'}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-1 space-x-reverse text-yellow-500">
                      <span className="text-sm font-medium">{experience.rating}</span>
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                  <CardTitle className="text-lg">{experience.title}</CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {experience.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>{experience.duration} دقيقة</span>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span>{experience.participants.toLocaleString()} مشارك</span>
                    </div>
                  </div>

                  {experience.instructor && (
                    <div className="flex items-center space-x-2 space-x-reverse text-sm">
                      <Avatar className="w-6 h-6">
                        <AvatarFallback className="text-xs">{experience.instructor[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-gray-600 dark:text-gray-400">{experience.instructor}</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">الميزات:</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-2 space-x-reverse pt-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className={`flex-1 bg-gradient-to-r ${experience.color} text-white border-0`}>
                          <Play className="w-4 h-4 mr-2" />
                          بدء التجربة
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>{experience.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="aspect-video bg-gray-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            >
                              <Camera className="w-12 h-12 text-gray-400" />
                            </motion.div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {experience.description}
                          </p>
                          <div className="flex space-x-2 space-x-reverse">
                            <Button className={`flex-1 bg-gradient-to-r ${experience.color} text-white border-0`}>
                              <Camera className="w-4 h-4 mr-2" />
                              تشغيل AR
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Bookmark className="w-4 h-4 mr-2" />
                              حفظ
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button variant="outline" size="sm">
                      <Bookmark className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Campus Map */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">خريطة الحرم التفاعلية</h2>
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                استكشاف الحرم الجامعي
              </CardTitle>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Button size="sm" variant="outline">
                  <Navigation className="w-4 h-4 mr-1" />
                  ملاحة
                </Button>
                <Button size="sm" variant="outline">
                  <QrCode className="w-4 h-4 mr-1" />
                  مسح QR
                </Button>
                <Button size="sm" className="gradient-button text-white">
                  <Camera className="w-4 h-4 mr-1" />
                  AR View
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-lg overflow-hidden relative flex items-center justify-center">
              <div className="text-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">خريطة الحرم الجامعي التفاعلية</p>
                <p className="text-sm mt-2">انقر على "AR View" لاستكشاف الحرم بالواقع المعزز</p>
              </div>

              {/* Sample location markers */}
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute w-4 h-4 bg-red-500 rounded-full top-1/2 left-1/4"
              >
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-6 h-6 bg-blue-500 rounded-full top-1/3 right-1/3 flex items-center justify-center text-white"
              >
                <Building className="w-3 h-3" />
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
