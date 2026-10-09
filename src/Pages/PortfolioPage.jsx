import { useRef } from "react";
import Reveal from "../Components/Reveal";

const PROJECTS = [
    {
        id: "sarkarirankup",
        name: "SarkariRankup",
        category: "EdTech Platform",
        tagline: "Rank Analysis Platform",
        challenge: "During exam result seasons, platforms face massive concurrent traffic spikes. The client needed a highly scalable solution capable of complex, real-time data processing and rank prediction without crashing the mobile client or server.",
        solution: "Engineered a robust Native Android application backed by a React web dashboard. Implemented strict local caching strategies using Room Database to ensure responsiveness during server latency spikes, and highly optimized RecyclerViews to handle large datasets smoothly.",
        stack: ["Native Android", "React Web", "Room DB", "Kotlin"],
        mockup: "rank",
        accent: {
            text: "text-blue-600",
            badge: "bg-blue-600",
            chip: "bg-blue-50 border-blue-200 text-blue-700",
            gradient: "from-blue-600 to-cyan-500",
            glow: "bg-blue-400/30",
            dot: "bg-blue-500",
        },
    },
    {
        id: "gymxpertz",
        name: "GymXpertz",
        category: "B2B SaaS Ecosystem",
        tagline: "Fitness Management Suite",
        challenge: "Gym owners struggle with fragmented tools for attendance, payments, and member tracking. Members lacked a unified, engaging interface to track their fitness journey linked directly to their gym's internal database.",
        solution: "Delivered a complex React-based admin dashboard for gym owners to seamlessly manage subscriptions and revenue. Simultaneously deployed a high-performance mobile application for members featuring QR-based check-ins, automated payment reminders, and workout tracking.",
        stack: ["Admin Dashboard", "Member App", "QR Check-ins", "React"],
        mockup: "gym",
        accent: {
            text: "text-orange-500",
            badge: "bg-orange-500",
            chip: "bg-orange-50 border-orange-200 text-orange-700",
            gradient: "from-orange-500 to-amber-400",
            glow: "bg-orange-400/30",
            dot: "bg-orange-500",
        },
    },
    {
        id: "amritveda",
        name: "AmritVeda",
        category: "D2C E-Commerce",
        tagline: "Premium Hampers & Dry Fruits",
        challenge: "Selling premium dry fruits and corporate gift hampers requires high visual fidelity and a flawless user experience. The client needed a system capable of handling complex inventory for custom \"build-a-box\" features, secure payments, and massive holiday traffic spikes.",
        solution: "Architected a lightning-fast Next.js storefront and a buttery-smooth native mobile application. Integrated a robust headless CMS for real-time inventory synchronization and developed a custom, interactive \"Hamper Builder\" UI, resulting in a dramatic increase in average order value and user retention.",
        stack: ["Native E-Com App", "Next.js Web Store", "Headless CMS"],
        mockup: "shop",
        accent: {
            text: "text-green-600",
            badge: "bg-green-600",
            chip: "bg-green-50 border-green-200 text-green-700",
            gradient: "from-green-600 to-emerald-400",
            glow: "bg-green-400/30",
            dot: "bg-green-500",
        },
    },
    {
        id: "vilcorp",
        name: "VilCorp",
        category: "Enterprise Logistics",
        tagline: "Delivery & Operations Platform",
        challenge: "Logistics networks heavily rely on manual coordination, resulting in operational opacity and delivery delays for critical assets like vehicle number plates. The client required a system to completely digitize fleet tracking and bring transparency to the entire delivery lifecycle.",
        solution: "Led the development of a highly transparent operational platform. Delivered an interconnected system featuring real-time fleet GPS tracking interfaces, secure delivery validation protocols, and a centralized management dashboard to drastically reduce delivery times.",
        stack: ["Fleet Tracking", "B2B Dashboard", "GPS Live Map"],
        mockup: "fleet",
        accent: {
            text: "text-slate-700",
            badge: "bg-slate-800",
            chip: "bg-slate-100 border-slate-300 text-slate-700",
            gradient: "from-slate-800 to-slate-500",
            glow: "bg-slate-400/30",
            dot: "bg-slate-700",
        },
    },
];

const METRICS = [
    { value: "2M+", label: "Active Users Handled" },
    { value: "99.9%", label: "Crash-Free Sessions" },
    { value: "4.9/5", label: "Average App Rating" },
];

/* ---------- Helpers ---------- */

// 3D stage that tilts toward the mouse pointer
function TiltStage({ children, flip = false }) {
    const ref = useRef(null);
    const base = flip ? { rx: 8, ry: 14 } : { rx: 8, ry: -14 };

    const setTilt = (rx, ry) => {
        if (ref.current) ref.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    };

    const handleMove = (e) => {
        if (e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt(-y * 18, x * 22);
    };

    return (
        <div
            className="relative h-[360px] sm:h-[480px] flex items-center justify-center"
            style={{ perspective: "1400px" }}
            onPointerMove={handleMove}
            onPointerLeave={() => setTilt(base.rx, base.ry)}
        >
            <div
                ref={ref}
                className="relative transition-transform duration-500 ease-out scale-[0.62] sm:scale-90 lg:scale-100"
                style={{ transformStyle: "preserve-3d", transform: `rotateX(${base.rx}deg) rotateY(${base.ry}deg)` }}
            >
                {children}
            </div>
        </div>
    );
}

// Element lifted off the 3D plane
function Layer({ z = 60, className = "", children }) {
    return (
        <div className={`absolute ${className}`} style={{ transform: `translateZ(${z}px)` }}>
            {children}
        </div>
    );
}

function Phone({ children, className = "" }) {
    return (
        <div className={`w-[230px] h-[470px] rounded-[2.6rem] bg-slate-900 p-2.5 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.45)] ring-1 ring-slate-700 ${className}`}>
            <div className="relative w-full h-full rounded-[2.1rem] bg-white overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-slate-900 rounded-full z-20"></div>
                {children}
            </div>
        </div>
    );
}

function BrowserWindow({ children, url, className = "" }) {
    return (
        <div className={`w-[400px] rounded-2xl bg-white border border-slate-200 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.35)] overflow-hidden ${className}`}>
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                <span className="ml-3 flex-1 h-5 rounded-md bg-white border border-slate-200 text-[9px] text-slate-400 font-semibold flex items-center px-2">{url}</span>
            </div>
            {children}
        </div>
    );
}

function FloatChip({ children, className = "" }) {
    return (
        <div className={`pf-float px-4 py-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 shadow-2xl text-xs font-bold text-slate-800 whitespace-nowrap ${className}`}>
            {children}
        </div>
    );
}

/* ---------- Project mockups (pure CSS illustrations) ---------- */

function RankMockup() {
    const bars = [40, 65, 50, 85, 70, 95, 60];
    return (
        <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            <Phone>
                <div className="h-36 bg-gradient-to-br from-blue-600 to-cyan-500 px-5 pt-10 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Result Analysis</p>
                    <p className="text-lg font-black mt-1">SSC CGL Tier 1</p>
                </div>
                <div className="-mt-10 mx-4 rounded-2xl bg-white shadow-lg border border-slate-100 p-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Expected Rank</p>
                    <p className="text-3xl font-black text-slate-900">#1,248</p>
                    <div className="mt-3 flex items-end gap-1.5 h-14">
                        {bars.map((h, i) => (
                            <div key={i} className={`flex-1 rounded-t-md ${i === 5 ? "bg-blue-600" : "bg-blue-100"}`} style={{ height: `${h}%` }}></div>
                        ))}
                    </div>
                </div>
                <div className="px-4 mt-4 space-y-2.5">
                    {[["Quant", "48/50"], ["Reasoning", "45/50"], ["English", "41/50"]].map(([subject, score]) => (
                        <div key={subject} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5">
                            <span className="text-[11px] font-bold text-slate-700">{subject}</span>
                            <span className="text-[11px] font-black text-blue-600">{score}</span>
                        </div>
                    ))}
                </div>
            </Phone>
            <Layer z={90} className="-left-28 top-16">
                <FloatChip>
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>Offline cache · Room DB</span>
                </FloatChip>
            </Layer>
            <Layer z={120} className="-right-24 bottom-24">
                <FloatChip className="[animation-delay:-2s]">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Percentile</span>
                    <span className="text-xl font-black text-blue-600">97.6</span>
                </FloatChip>
            </Layer>
        </div>
    );
}

function GymMockup() {
    return (
        <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            <BrowserWindow url="admin.gymxpertz.com">
                <div className="flex">
                    <div className="w-16 bg-slate-900 py-4 flex flex-col items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-amber-400"></div>
                        {[0, 1, 2, 3].map((i) => <div key={i} className="w-6 h-1.5 rounded-full bg-slate-700"></div>)}
                    </div>
                    <div className="flex-1 p-4">
                        <div className="grid grid-cols-3 gap-2">
                            {[["Members", "842"], ["Check-ins", "316"], ["Renewals", "54"]].map(([k, v]) => (
                                <div key={k} className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                                    <p className="text-[8px] font-bold text-slate-400 uppercase">{k}</p>
                                    <p className="text-base font-black text-slate-900">{v}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 rounded-xl border border-slate-100 p-3">
                            <p className="text-[9px] font-bold text-slate-400 uppercase mb-2">Monthly Revenue</p>
                            <svg viewBox="0 0 200 70" className="w-full h-20">
                                <defs>
                                    <linearGradient id="gymArea" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.35" />
                                        <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M0 55 L30 48 L60 52 L90 35 L120 38 L150 20 L180 24 L200 10 L200 70 L0 70 Z" fill="url(#gymArea)" />
                                <path d="M0 55 L30 48 L60 52 L90 35 L120 38 L150 20 L180 24 L200 10" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="pf-draw" />
                            </svg>
                        </div>
                        <div className="mt-3 space-y-1.5">
                            {["Plan renewal due", "Payment received"].map((row, i) => (
                                <div key={row} className="flex items-center gap-2 text-[9px] font-bold text-slate-600">
                                    <span className={`w-1.5 h-1.5 rounded-full ${i ? "bg-green-500" : "bg-orange-500"}`}></span>{row}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </BrowserWindow>
            <Layer z={110} className="-right-16 -bottom-20">
                <div className="pf-float w-[140px] rounded-[1.8rem] bg-slate-900 p-2 shadow-2xl">
                    <div className="rounded-[1.4rem] bg-white p-3 text-center">
                        <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Scan to Check-in</p>
                        <div className="mt-2 mx-auto w-20 h-20 grid grid-cols-6 gap-[2px]">
                            {Array.from({ length: 36 }).map((_, i) => (
                                <span key={i} className={`rounded-[1px] ${[0, 1, 2, 6, 8, 12, 13, 14, 3, 9, 17, 20, 22, 25, 27, 29, 31, 33, 35, 21, 28].includes(i) ? "bg-slate-900" : "bg-slate-100"}`}></span>
                            ))}
                        </div>
                        <p className="mt-2 text-[10px] font-black text-orange-500">Member App</p>
                    </div>
                </div>
            </Layer>
            <Layer z={70} className="-left-20 -top-6">
                <FloatChip className="[animation-delay:-1.5s]">🔔 Auto payment reminders</FloatChip>
            </Layer>
        </div>
    );
}

function ShopMockup() {
    const products = [
        ["Royal Hamper", "from-amber-300 to-orange-400"],
        ["Kaju Delight", "from-green-300 to-emerald-500"],
        ["Festive Box", "from-rose-300 to-orange-400"],
        ["Badam Gold", "from-yellow-200 to-amber-400"],
    ];
    return (
        <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            <Phone>
                <div className="px-4 pt-10">
                    <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">AmritVeda</p>
                    <p className="text-lg font-black text-slate-900 leading-tight">Gift something premium</p>
                    <div className="mt-3 h-8 rounded-xl bg-slate-100 flex items-center px-3 text-[10px] text-slate-400 font-semibold">Search dry fruits, hampers…</div>
                </div>
                <div className="px-4 mt-4 grid grid-cols-2 gap-2.5">
                    {products.map(([name, gradient]) => (
                        <div key={name} className="rounded-2xl border border-slate-100 p-2">
                            <div className={`h-20 rounded-xl bg-gradient-to-br ${gradient}`}></div>
                            <p className="mt-1.5 text-[10px] font-black text-slate-800">{name}</p>
                            <p className="text-[9px] font-bold text-green-600">Add +</p>
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-4 inset-x-4 h-10 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white text-[11px] font-black flex items-center justify-center shadow-lg">
                    Build Your Hamper →
                </div>
            </Phone>
            <Layer z={100} className="-right-32 top-20">
                <div className="pf-float w-44 rounded-2xl bg-white border border-slate-200 shadow-2xl p-3">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Hamper Builder</p>
                    <div className="mt-2 grid grid-cols-3 gap-1.5">
                        {["🥜", "🌰", "🍯", "🍫", "🎁", "＋"].map((item) => (
                            <div key={item} className="aspect-square rounded-lg bg-green-50 border border-green-100 flex items-center justify-center text-sm">{item}</div>
                        ))}
                    </div>
                </div>
            </Layer>
            <Layer z={70} className="-left-24 bottom-28">
                <FloatChip className="[animation-delay:-2.5s]">✅ Payment secured</FloatChip>
            </Layer>
        </div>
    );
}

function FleetMockup() {
    return (
        <div className="relative" style={{ transformStyle: "preserve-3d" }}>
            <BrowserWindow url="ops.vilcorp.in/fleet">
                <div className="relative h-[260px] bg-slate-100 overflow-hidden">
                    <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)", backgroundSize: "28px 28px" }}></div>
                    <svg viewBox="0 0 400 260" className="absolute inset-0 w-full h-full">
                        <path d="M30 220 C 90 200, 110 120, 180 130 S 290 60, 370 40" fill="none" stroke="#0f172a" strokeWidth="3" strokeDasharray="8 8" className="pf-dash" />
                        <path d="M40 60 C 120 90, 200 70, 260 150 S 340 210, 380 200" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="8 8" className="pf-dash" />
                        <circle cx="30" cy="220" r="7" fill="#0f172a" />
                        <circle cx="370" cy="40" r="7" fill="#22c55e" />
                        <circle cx="380" cy="200" r="7" fill="#f97316" />
                    </svg>
                    <div className="absolute left-[44%] top-[44%] w-9 h-9 -ml-4 -mt-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm shadow-xl ring-4 ring-white">🚚</div>
                    <span className="absolute left-[44%] top-[44%] w-9 h-9 -ml-4 -mt-4 rounded-full bg-slate-900/30 animate-ping"></span>
                </div>
            </BrowserWindow>
            <Layer z={110} className="-right-16 -bottom-14">
                <div className="pf-float w-52 rounded-2xl bg-slate-900 text-white shadow-2xl p-4">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Shipment #VC-2041</p>
                    <p className="text-sm font-black mt-1">Out for delivery</p>
                    <div className="mt-3 flex items-center gap-1">
                        {[1, 1, 1, 0].map((done, i) => (
                            <span key={i} className={`h-1.5 flex-1 rounded-full ${done ? "bg-green-400" : "bg-slate-700"}`}></span>
                        ))}
                    </div>
                </div>
            </Layer>
            <Layer z={80} className="-left-16 -top-8">
                <FloatChip className="[animation-delay:-1s]">📍 Live GPS · 24 vehicles</FloatChip>
            </Layer>
        </div>
    );
}

const MOCKUPS = { rank: RankMockup, gym: GymMockup, shop: ShopMockup, fleet: FleetMockup };

/* ---------- Page ---------- */

function PortfolioPage({ setCurrentPage }) {
    const scrollToProject = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <main className="page-enter bg-slate-50 pt-20 pb-32 min-h-screen relative overflow-hidden">

            {/* HERO */}
            <section className="relative pt-20 pb-28 md:pt-28 md:pb-36">
                <div className="absolute inset-0 bg-grid pointer-events-none"></div>
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95]">
                        Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Studies.</span>
                    </h1>
                    <p className="mt-6 text-base md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium">
                        Deep dives into the platforms, B2B tools, and consumer applications engineered by our team.
                    </p>

                    {/* Project quick-jump pills */}
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        {PROJECTS.map((project, i) => (
                            <button
                                key={project.id}
                                onClick={() => scrollToProject(project.id)}
                                className="group inline-flex items-center gap-2.5 pl-2 pr-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                            >
                                <span className={`w-7 h-7 rounded-full bg-gradient-to-br ${project.accent.gradient} text-white text-[10px] font-black flex items-center justify-center`}>
                                    0{i + 1}
                                </span>
                                <span className="text-sm font-bold text-slate-800">{project.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Metrics */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {METRICS.map((metric, i) => (
                            <div
                                key={metric.label}
                                className="pf-float rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 shadow-xl shadow-slate-200/60 p-6"
                                style={{ animationDelay: `${-i * 1.3}s` }}
                            >
                                <p className="text-4xl md:text-5xl font-black text-slate-900">{metric.value}</p>
                                <p className="mt-1 text-xs font-bold text-slate-500 uppercase tracking-widest">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="relative max-w-7xl mx-auto px-6 md:px-12 pb-16 space-y-28 md:space-y-36">
                {PROJECTS.map((project, index) => {
                    const Mockup = MOCKUPS[project.mockup];
                    const flip = index % 2 === 1;

                    return (
                        <article key={project.id} id={project.id} className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                            <div className={`absolute top-1/2 -translate-y-1/2 ${flip ? "left-0" : "right-0"} w-[420px] h-[420px] ${project.accent.glow} rounded-full blur-[110px] pointer-events-none`}></div>

                            {/* Text content */}
                            <Reveal className={`relative min-w-0 ${flip ? "lg:order-2" : ""}`}>
                                <div className="flex items-center gap-4">
                                    <span className="pf-outline text-7xl md:text-8xl font-black leading-none select-none">0{index + 1}</span>
                                    <span className={`px-3 py-1.5 ${project.accent.badge} text-white text-[10px] font-black tracking-widest uppercase rounded-lg shadow-sm`}>
                                        {project.category}
                                    </span>
                                </div>
                                <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900 tracking-tight">{project.name}</h2>
                                <p className={`mt-2 text-lg font-bold ${project.accent.text}`}>{project.tagline}</p>

                                <div className="mt-8 space-y-4">
                                    {[["The Challenge", project.challenge], ["The Solution", project.solution]].map(([title, body], i) => (
                                        <div key={title} className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${project.accent.dot}`}></span>
                                                <span className={project.accent.text}>0{i + 1}.</span> {title}
                                            </h3>
                                            <p className="mt-3 text-[15px] text-slate-600 leading-relaxed font-medium">{body}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.stack.map((tech) => (
                                        <span key={tech} className={`px-3 py-1.5 rounded-lg border text-xs font-bold ${project.accent.chip}`}>{tech}</span>
                                    ))}
                                </div>
                            </Reveal>

                            {/* 3D mockup */}
                            <Reveal delay={150} className={`relative min-w-0 ${flip ? "lg:order-1" : ""}`}>
                                <TiltStage flip={flip}>
                                    <Mockup />
                                </TiltStage>
                            </Reveal>
                        </article>
                    );
                })}
            </section>

                {/* NEW: Light Theme Bottom Call-To-Action (CTA) Block */}
                <div className="max-w-5xl mx-auto px-6 md:px-12 mt-32 relative z-10">
                    <div className="bg-white/90 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-slate-200/80 shadow-2xl shadow-blue-500/5 group">
                        
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/60 rounded-full blur-[80px] pointer-events-none transition-transform duration-1000 group-hover:scale-150"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/60 rounded-full blur-[80px] pointer-events-none transition-transform duration-1000 group-hover:scale-150"></div>
                        
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                                Ready to Scale?
                            </div>
                            
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-none">
                                Have a complex problem? <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Let's engineer the solution.</span>
                            </h2>
                            
                            <p className="text-slate-600 font-medium text-[16px] md:text-xl mb-10 max-w-2xl mx-auto leading-snug">
                                Stop settling for average software. Partner with us to build scalable, high-performance digital systems that dominate your market.
                            </p>
                            
                <button
                    onClick={typeof setCurrentPage === 'function' ? () => setCurrentPage('contact') : undefined}
                    className="px-10 py-5 bg-slate-900 text-white rounded-full font-black text-lg tracking-wide shadow-[0_8px_30px_rgb(15,23,42,0.15)] hover:shadow-[0_12px_40px_rgb(15,23,42,0.25)] hover:-translate-y-1 hover:bg-slate-800 transition-all duration-300 flex items-center gap-3"
                >
                    Start Your Project
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
                        </div>
                    </div>
                </div>

            <style dangerouslySetInnerHTML={{__html: `

                .pf-float { animation: pfFloat 6s ease-in-out infinite; }
                @keyframes pfFloat {
                    0%, 100% { translate: 0 0; }
                    50% { translate: 0 -10px; }
                }


                .pf-outline { color: transparent; -webkit-text-stroke: 2px #cbd5e1; }

                .pf-dash { animation: pfDash 1.2s linear infinite; }
                @keyframes pfDash { to { stroke-dashoffset: -16; } }

                .pf-draw { stroke-dasharray: 300; stroke-dashoffset: 300; animation: pfDraw 2.5s ease-out 0.4s forwards; }
                @keyframes pfDraw { to { stroke-dashoffset: 0; } }

                @media (prefers-reduced-motion: reduce) {
                    .pf-float, .pf-dash { animation: none; }
                    .pf-draw { animation: none; stroke-dashoffset: 0; }
                }
            `}} />
        </main>
    );
}

export default PortfolioPage;
