# 🎓 SmartUni AR - منصة الجامعة الذكية

<div align="center">

![SmartUni AR](https://img.shields.io/badge/SmartUni-AR-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.3.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css)

### منصة جامعية ذكية متكاملة مع الذكاء الاصطناعي والواقع المعزز

[العرض التوضيحي](#) | [الوثائق](#) | [التقارير](#)

</div>

---

## 📖 نظرة عامة

**SmartUni AR** هو نظام إدارة جامعي متطور ومتكامل يجمع بين أحدث التقنيات والتصميم العصري لتوفير تجربة تعليمية فريدة ومبتكرة. المنصة مصممة بالكامل باللغة العربية مع دعم كامل لاتجاه الكتابة من اليمين إلى اليسار (RTL).

### ✨ الميزات البارزة

- 🔐 **نظام مصادقة متقدم** - تسجيل دخول آمن مع إدارة أدوار متعددة
- 📊 **لوحات تحكم تفاعلية** - إحصائيات شاملة وتقارير في الوقت الفعلي
- 🧠 **ذكاء اصطناعي** - مساعد ذكي وتوصيات مخصصة
- 📱 **واقع معزز (AR)** - جولات تفاعلية ومختبرات افتراضية
- 🎨 **تصميم خرافي** - مستوحى من TikTok و Instagram
- 🌙 **الوضع الليلي** - دعم كامل للثيم الداكن
- 📱 **متجاوب 100%** - تجربة مثالية على جميع الأجهزة

---

## 🎯 المكونات الرئيسية

### 1️⃣ نظام المصادقة (`AuthSystem`)
```typescript
✅ تسجيل الدخول الآمن
✅ إنشاء حسابات جديدة
✅ التحقق من البيانات
✅ إدارة الأدوار (طلاب، أساتذة، إداريين)
✅ واجهة عصرية مع حركات Framer Motion
```

### 2️⃣ لوحة تحكم الطلاب (`StudentDashboard`)
```typescript
📊 إحصائيات الأداء الأكاديمي
📚 متابعة المقررات والدرجات
✍️ إدارة المهام والواجبات
🏆 نظام الإنجازات والنقاط
📈 تقارير مفصلة عن التقدم
🎯 أهداف وخطط دراسية
```

### 3️⃣ نظام إدارة الجامعة (`AdminSystem`)
```typescript
👨‍🎓 إدارة شاملة للطلاب
📖 إدارة المقررات والجداول
📝 نظام الدرجات والتقييمات
📊 تقارير إدارية متقدمة
📈 إحصائيات وتحليلات
🔔 نظام الإشعارات
```

### 4️⃣ الذكاء الاصطناعي (`AIFeatures`)
```typescript
🤖 مساعد ذكي على مدار الساعة
💡 توصيات مخصصة للطلاب
📊 تحليل الأداء الدراسي
📚 مولد ملخصات تلقائي
🔍 مساعد البحث الأكاديمي
📅 مخطط دراسة ذكي
💬 محادثات تفاعلية مع AI
```

### 5️⃣ الواقع المعزز (`ARFeatures`)
```typescript
🏛️ جولات تفاعلية في الحرم الجامعي
🔬 مختبرات افتراضية آمنة
⚛️ نماذج 3D للمواد العلمية
🗺️ خريطة تفاعلية مع AR
🎓 تجارب تعليمية غامرة
📸 تفاعل مباشر مع الكاميرا
```

### 6️⃣ نظام التقارير (`ReportsSystem`)
```typescript
📈 رسوم بيانية تفاعلية
📊 تقارير أداء شاملة
📉 تحليلات متقدمة
💾 تصدير بصيغ متعددة
🎯 KPIs ومؤشرات الأداء
📅 تقارير دورية
```

---

## 🛠️ التقنيات المستخدمة

### Frontend Stack
- **Framework:** Next.js 15.3.2 (App Router)
- **UI Library:** React 18.3.1
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS 3.4.17
- **Components:** ShadCN UI (مخصص بالكامل)
- **Animations:** Framer Motion 12.23.5
- **Icons:** Lucide React 0.525.0
- **Runtime:** Bun (سريع وفعال)

### التصميم والواجهة
- **CSS Framework:** Tailwind CSS
- **Component Library:** ShadCN UI
- **Animations:** Framer Motion
- **Color System:** تدرجات مخصصة مستوحاة من TikTok/Instagram
- **Dark Mode:** دعم كامل
- **RTL:** دعم كامل للعربية

### أدوات التطوير
- **Build Tool:** Turbopack (Next.js)
- **Linter:** ESLint + Biome
- **Type Checking:** TypeScript
- **Package Manager:** Bun
- **Version Control:** Git + GitHub

---

## 🚀 البدء السريع

### المتطلبات الأساسية
```bash
- Node.js 18+ أو Bun
- Git
```

### التثبيت

1. **استنساخ المشروع**
```bash
git clone https://github.com/CCPPIT/smartuni-ar.git
cd smartuni-ar
```

2. **تثبيت الحزم**
```bash
bun install
# أو
npm install
```

3. **تشغيل السيرفر**
```bash
bun run dev
# أو
npm run dev
```

4. **فتح المتصفح**
```
http://localhost:3000
```

### الأوامر المتاحة

```bash
bun run dev          # تشغيل سيرفر التطوير
bun run build        # بناء المشروع للإنتاج
bun run start        # تشغيل المشروع المبني
bun run lint         # فحص الكود
bun run format       # تنسيق الكود
```

---

## 📁 هيكل المشروع

```
smartuni-ar/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # التخطيط الرئيسي
│   │   ├── page.tsx           # الصفحة الرئيسية
│   │   └── globals.css        # الأنماط العامة
│   │
│   ├── components/            # المكونات
│   │   ├── AuthSystem.tsx     # نظام المصادقة
│   │   ├── StudentDashboard.tsx  # لوحة تحكم الطلاب
│   │   ├── AdminSystem.tsx    # نظام الإدارة
│   │   ├── AIFeatures.tsx     # الذكاء الاصطناعي
│   │   ├── ARFeatures.tsx     # الواقع المعزز
│   │   ├── ReportsSystem.tsx  # التقارير
│   │   ├── HomePage.tsx       # الصفحة الرئيسية
│   │   ├── MobileTabBar.tsx   # شريط التنقل
│   │   ├── MobileSidebar.tsx  # القائمة الجانبية
│   │   │
│   │   └── ui/                # مكونات ShadCN
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── dialog.tsx
│   │       └── ...
│   │
│   └── lib/
│       └── utils.ts           # وظائف مساعدة
│
├── public/                    # الملفات العامة
├── .same/                     # ملفات Same
├── tailwind.config.ts         # إعدادات Tailwind
├── next.config.js             # إعدادات Next.js
├── tsconfig.json              # إعدادات TypeScript
├── package.json               # الحزم والاعتمادات
└── README.md                  # هذا الملف
```

---

## 🎨 التصميم والألوان

### نظام الألوان

المشروع يستخدم نظام ألوان متدرج مستوحى من أشهر التطبيقات:

```css
/* التدرجات الرئيسية */
--gradient-main: من-وردي-إلى-أرجواني-إلى-أزرق
--tiktok-red: #FE2C55
--instagram-purple: #833AB4
--instagram-pink: #E1306C
--smart-blue: #4285F4
--smart-green: #34A853
```

### الأنماط المخصصة

```css
.gradient-main      /* خلفية متدرجة رئيسية */
.gradient-button    /* أزرار متدرجة */
.gradient-text      /* نص متدرج */
.glass-effect       /* تأثير الزجاج */
.neon-glow         /* توهج نيون */
```

---

## 📱 الميزات التفاعلية

### حركات Framer Motion

المشروع يستخدم Framer Motion بشكل مكثف لإنشاء تجربة مستخدم سلسة:

- ✅ انتقالات صفحات سلسة
- ✅ حركات تحميل جذابة
- ✅ تفاعلات عند التمرير
- ✅ رسوم متحركة للبطاقات
- ✅ تأثيرات hover متقدمة

### التجاوبية

```typescript
✅ موبايل (< 768px)  - تصميم مخصص مع Tab Bar
✅ تابلت (768-1024px) - واجهة متوسطة
✅ ديسكتوب (> 1024px) - واجهة كاملة
```

---

## 🔒 الأمان والخصوصية

- ✅ تشفير كلمات المرور
- ✅ التحقق من المدخلات
- ✅ حماية من XSS و CSRF
- ✅ إدارة الجلسات
- ✅ صلاحيات متعددة المستويات

---

## 📊 الإحصائيات

```
📝 الملفات: 43 ملف
📄 الأكواد: 8000+ سطر
🎨 المكونات: 30+ مكون
🎭 الحركات: 50+ animation
🎯 الصفحات: 6 صفحات رئيسية
```

---

## 🤝 المساهمة

نرحب بجميع المساهمات! إذا كنت ترغب في المساهمة:

1. Fork المشروع
2. إنشاء فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'إضافة ميزة رائعة'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

---

## 📝 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

---

## 👥 الفريق

تم تطوير هذا المشروع بواسطة:

- **المطور الرئيسي:** تم التطوير باستخدام Same.new
- **التصميم:** مستوحى من TikTok و Instagram
- **المساهمون:** مفتوح للمساهمات

---

## 📞 التواصل

- **GitHub:** [CCPPIT/smartuni-ar](https://github.com/CCPPIT/smartuni-ar)
- **الموقع:** قريباً
- **البريد:** support@smartuni.com

---

## 🙏 شكر وتقدير

- **Next.js** - إطار العمل الرائع
- **ShadCN UI** - مكتبة المكونات
- **Framer Motion** - مكتبة الحركات
- **Tailwind CSS** - إطار CSS
- **Same.new** - منصة التطوير

---

## 📅 خارطة الطريق

### ✅ المكتمل
- [x] نظام المصادقة
- [x] لوحات التحكم
- [x] الذكاء الاصطناعي
- [x] الواقع المعزز
- [x] نظام التقارير
- [x] التصميم المتجاوب

### 🔄 قيد التطوير
- [ ] نظام المحادثات الفورية
- [ ] تطبيق الموبايل
- [ ] نظام الدفع الإلكتروني
- [ ] البث المباشر للمحاضرات

### 📋 المستقبل
- [ ] دعم متعدد اللغات
- [ ] تكامل مع أنظمة خارجية
- [ ] تطبيق سطح المكتب
- [ ] منصة المعلمين

---

<div align="center">

### 🌟 إذا أعجبك المشروع، لا تنسى إعطاءه نجمة! ⭐

**تم التطوير بـ ❤️ باستخدام [Same.new](https://same.new)**

![Made with Same](https://img.shields.io/badge/Made%20with-Same-purple?style=for-the-badge)

</div>
