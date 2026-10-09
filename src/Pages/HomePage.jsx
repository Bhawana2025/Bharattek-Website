import { useEffect, useRef, useState } from "react";
import Reveal from "../Components/Reveal";

const TEAM = [
    {
        name: "Ankit Kumar",
        group: "Engineering",
        role: "Founder & Mobile Architect",
        desc: "Founder leading product strategy and engineering, building scalable Android & iOS applications with modern architecture.",
        skills: ["Android", "iOS", "Kotlin", "SwiftUI"],
        icon: "👨‍💻",
        theme: "from-orange-500 to-red-600"
    },
    {
        name: "Bhawana Chauhan",
        group: "Engineering",
        role: "Sr. React JS Developer",
        desc: "Developing scalable frontend systems and interactive user experiences using React, Next.js and modern UI frameworks.",
        skills: ["React JS", "Next.js", "Frontend UI"],
        icon: "⚛️",
        theme: "from-cyan-500 to-blue-600"
    },
    {
        name: "Shilpi",
        group: "Engineering",
        role: "Sr. Backend Python Developer",
        desc: "Designing secure APIs, backend systems and cloud-native services using Python and scalable backend technologies.",
        skills: ["Python", "FastAPI", "Backend APIs"],
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="18 4 92 119"
                className="w-[1em] h-[1em] drop-shadow-sm"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Blue Top Snake */}
                <path
                    fill="#3776AB"
                    d="M64.218 5.75c-30.82 0-29.074 13.33-29.074 13.33l.035 13.785h29.567v4.195H33.41s-13.82.262-13.82 29.895c0 29.636 12.04 29.078 12.04 29.078h8.86v-12.63s-.14-14.168 14.34-14.168h28.618s13.352-.085 13.352-13.11V28.36c0-23.77-20.2-22.61-20.2-22.61zm-15.05 9.074a4.137 4.137 0 0 1 4.136 4.132 4.137 4.137 0 0 1-4.135 4.137 4.137 4.137 0 0 1-4.137-4.137 4.137 4.137 0 0 1 4.136-4.132z"
                />
                {/* Yellow Bottom Snake */}
                <path
                    fill="#FFD343"
                    d="M63.535 122.25c30.816 0 29.074-13.33 29.074-13.33l-.035-13.78h-29.57v-4.196h31.336s13.824-.26 13.824-29.894c0-29.635-12.043-29.078-12.043-29.078h-8.855v12.63s.136 14.168-14.343 14.168H44.305s-13.35.085-13.35 13.11v27.764c0 23.77 20.2 22.61 20.2 22.61zm15.05-9.07a4.137 4.137 0 0 1-4.136-4.132 4.137 4.137 0 0 1 4.135-4.137 4.137 4.137 0 0 1 4.137 4.137 4.137 4.137 0 0 1-4.136 4.132z"
                />
            </svg>
        ),
        theme: "from-blue-600 to-indigo-800"
    },
    {
        name: "Ankit Sharma",
        group: "Engineering",
        role: "Sr. DOT NET & Python Dev",
        desc: "Building enterprise-grade systems, scalable APIs and business applications using DOT NET and Python technologies.",
        skills: ["DOT NET", "Python", "Enterprise Apps"],
        icon: "🖥️",
        theme: "from-violet-600 to-fuchsia-700"
    },
    {
        name: "Ravit Chaudhary",
        group: "Engineering",
        role: "Sr. iOS Developer",
        desc: "Crafting premium native iOS applications with scalable architecture, smooth animations and optimized performance.",
        skills: ["Swift", "UIKit", "iOS Apps"],
        icon: "",
        theme: "from-slate-700 to-slate-900"
    },
    {
        name: "Sonam",
        group: "Engineering",
        role: "React JS Developer",
        desc: "Creating responsive and modern user interfaces focused on seamless experience, accessibility and frontend performance.",
        skills: ["React JS", "Tailwind CSS", "Responsive UI"],
        icon: "⚛️",
        theme: "from-pink-500 to-rose-500"
    },
    {
        name: "Sajal Shukla",
        group: "Engineering",
        role: "Android Developer",
        desc: "Developing scalable android applications in kotlin , Jetpack Compose and KMP.",
        skills: ["Kotlin", "Jetpack Compose", "Xml"],
        icon: (
            <svg className="w-[1em] h-[1em] drop-shadow-sm" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0218 3.503C15.8285 8.2471 14.0041 7.854 12 7.854c-2.0041 0-3.8285.3931-5.1373 1.0963L4.841 5.4475a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
            </svg>
        ),
        theme: "from-cyan-500 to-blue-600"
    },
    {
        name: "Ravi Yadav",
        group: "Growth",
        role: "Lead Digital Marketer",
        desc: "Scaling brand visibility and user acquisition through deep Technical SEO, data analytics, and marketing campaigns.",
        skills: ["Technical SEO", "Ads", "Data Analytics"],
        icon: "🎯",
        theme: "from-rose-500 to-orange-600"
    },
    {
        name: "Deepak Yadav",
        group: "Growth",
        role: "VP of Sales & Growth",
        desc: "Driving revenue and enterprise partnerships through data-driven B2B sales strategies, relationship building.",
        skills: ["B2B Sales", "CRM Automation"],
        icon: "📈",
        theme: "from-emerald-500 to-teal-700"
    }
];

const TEAM_FILTERS = ["All", "Engineering", "Growth"];

const getInitials = (name) =>
    name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();

const HERO_LINES = [
    { text: "Software, AI & Cloud Solutions", delay: 0.1, className: "" },
    { text: "Built For Modern Businesses", delay: 0.6, className: "text-slate-800" },
];

const METRICS = [
    { value: "50+", label: "Apps Deployed", color: "text-blue-600", bar: "bg-blue-500" },
    { value: "10M+", label: "Organic Views", color: "text-orange-500", bar: "bg-orange-500" },
    { value: "99%", label: "Crash-Free", color: "text-green-600", bar: "bg-green-500" },
    { value: "3X", label: "Avg. Client ROI", color: "text-purple-600", bar: "bg-purple-500" },
];

const DEPLOYMENTS = [
    { name: "Android App", stack: "Kotlin · Compose", dot: "bg-green-500" },
    { name: "iOS App", stack: "Swift · SwiftUI", dot: "bg-green-500" },
    { name: "Web Platform", stack: "Next.js · Edge", dot: "bg-blue-500" },
    { name: "AI Assistant", stack: "RAG · Agentic AI", dot: "bg-orange-500" },
];

const TECH_MARQUEE = [
    "Kotlin", "Swift", "Jetpack Compose", "SwiftUI", "KMP", "React", "Next.js", "Python",
    "FastAPI", ".NET", "OpenCV", "RAG Pipelines", "Agentic AI", "Technical SEO", "AEO", "GEO",
];

const PROCESS = [
    {
        title: "System Discovery",
        desc: "We map out business logic, APIs, and complex state management requirements before writing a single line of code.",
        visual: "discovery",
        color: "from-blue-500 to-blue-700",
        bar: "bg-blue-500",
        glow: "shadow-blue-500/15 border-blue-200",
        tint: "from-blue-50 to-blue-100/70",
    },
    {
        title: "UX & Prototyping",
        desc: "Designing high-fidelity, interactive Figma prototypes to ensure the user journey is flawless and conversion-optimized.",
        visual: "ux",
        color: "from-orange-400 to-orange-600",
        bar: "bg-orange-500",
        glow: "shadow-orange-500/15 border-orange-200",
        tint: "from-orange-50 to-orange-100/70",
    },
    {
        title: "Agile Engineering",
        desc: "Building robust Native and KMP architectures adhering strictly to MVVM patterns for enterprise-grade stability.",
        visual: "engineering",
        color: "from-green-500 to-green-700",
        bar: "bg-green-500",
        glow: "shadow-green-500/15 border-green-200",
        tint: "from-green-50 to-green-100/70",
    },
    {
        title: "Growth & Scale",
        desc: "Deploying to production and immediately initiating aggressive SEO and marketing campaigns to drive user acquisition.",
        visual: "growth",
        color: "from-purple-500 to-purple-700",
        bar: "bg-purple-500",
        glow: "shadow-purple-500/15 border-purple-200",
        tint: "from-purple-50 to-purple-100/70",
    },
];

const INDUSTRIES = [
    { icon: "💳", label: "Fintech & Finance" },
    { icon: "🎓", label: "EdTech Platforms" },
    { icon: "🧩", label: "B2B SaaS Systems" },
    { icon: "🚚", label: "Hyper-Local Logistics" },
];

const STANDARDS = [
    { title: "Zero Technical Debt Promise", desc: "Clean, documented code ready for your future in-house team." },
    { title: "Direct Developer Access", desc: "No middle-men. You communicate directly with the engineers building your product." },
    { title: "Transparent Agile Sprints", desc: "Bi-weekly progress demos and complete visibility into the development pipeline." },
];

/* ---------- Effects ---------- */

// Tilts its 3D child toward the mouse pointer
function useTilt(strength = 20, base = { rx: 0, ry: 0 }) {
    const ref = useRef(null);

    const onPointerMove = (e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        ref.current.style.transform = `rotateX(${base.rx - y * strength}deg) rotateY(${base.ry + x * strength}deg)`;
    };

    const onPointerLeave = () => {
        if (ref.current) ref.current.style.transform = `rotateX(${base.rx}deg) rotateY(${base.ry}deg)`;
    };

    return { ref, handlers: { onPointerMove, onPointerLeave } };
}

// Counts a value like "10M+" up from zero once visible
function CountUp({ value }) {
    const [, digits, suffix] = value.match(/^(\d+)(.*)$/);
    const target = Number(digits);
    const ref = useRef(null);
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let frame;
        const observer = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            const start = performance.now();
            const tick = (now) => {
                const progress = Math.min((now - start) / 1600, 1);
                setCurrent(Math.round(target * (1 - Math.pow(1 - progress, 3))));
                if (progress < 1) frame = requestAnimationFrame(tick);
            };
            frame = requestAnimationFrame(tick);
        }, { threshold: 0.4 });
        observer.observe(el);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [target]);

    return <span ref={ref}>{current}{suffix}</span>;
}

// Button content drifts slightly toward the cursor
function Magnetic({ children, className = "" }) {
    const ref = useRef(null);

    const handleMove = (e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
    };

    const reset = () => {
        if (ref.current) ref.current.style.transform = "translate(0, 0)";
    };

    return (
        <div className={className} onPointerMove={handleMove} onPointerLeave={reset}>
            <div ref={ref} className="transition-transform duration-300 ease-out">{children}</div>
        </div>
    );
}

// Tracks scroll position relative to an element. Returns [ref, progress 0 → 1].
// "through": how far the element has scrolled past `startAt` (a viewport fraction).
// "enter": how far the element's top has risen into the viewport, completing after `startAt` of its height.
function useScrollProgress({ mode = "through", startAt = 0.6 } = {}) {
    const ref = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let frame;
        const update = () => {
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const value = mode === "enter"
                ? (vh - rect.top) / (vh * startAt)
                : (vh * startAt - rect.top) / rect.height;
            setProgress(Math.min(Math.max(value, 0), 1));
        };
        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(frame);
        };
    }, [mode, startAt]);

    return [ref, progress];
}

/* ---------- Hero product mockup ---------- */

function HeroDashboard() {
    const [stageRef, progress] = useScrollProgress({ mode: "enter", startAt: 0.9 });
    const rotate = 22 * (1 - progress);
    const scale = 0.9 + 0.1 * progress;

    return (
        <div ref={stageRef} className="relative mt-16 md:mt-20 text-left" style={{ perspective: "1600px" }}>
            <div className="absolute inset-x-[10%] top-10 bottom-0 bg-gradient-to-r from-orange-300/40 via-blue-300/40 to-green-300/40 blur-[90px] rounded-full pointer-events-none"></div>

            <div
                className="relative mx-auto max-w-5xl will-change-transform"
                style={{ transform: `rotateX(${rotate}deg) scale(${scale})`, transformOrigin: "center top", transformStyle: "preserve-3d" }}
            >
                {/* Browser window */}
                <div className="rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_50px_100px_-30px_rgba(15,23,42,0.35)] overflow-hidden">
                    <div className="flex items-center gap-1.5 px-4 md:px-5 py-3 border-b border-slate-100 bg-slate-50/80">
                        <span className="w-3 h-3 rounded-full bg-red-400"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                        <span className="w-3 h-3 rounded-full bg-green-400"></span>
                        <div className="ml-4 flex-1 max-w-sm h-7 rounded-lg bg-white border border-slate-200 flex items-center gap-2 px-3 text-[11px] text-slate-400 font-semibold">
                            <span className="text-green-500">🔒</span> bharattek.com/dashboard
                        </div>
                    </div>

                    <div className="flex">
                        {/* Sidebar */}
                        <div className="hidden md:flex w-52 shrink-0 flex-col gap-1.5 border-r border-slate-100 p-4">
                            <div className="flex items-center gap-2 px-2 pb-4">
                                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 via-blue-600 to-green-600"></div>
                                <span className="text-sm font-black text-slate-900">BharatTek</span>
                            </div>
                            {["Overview", "Mobile Apps", "Web Platforms", "AI Pipelines", "SEO Growth"].map((item, i) => (
                                <div key={item} className={`px-3 py-2 rounded-xl text-xs font-bold ${i === 0 ? "bg-slate-900 text-white" : "text-slate-500"}`}>{item}</div>
                            ))}
                        </div>

                        {/* Main */}
                        <div className="flex-1 p-4 md:p-6 bg-slate-50/40">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Overview</p>
                                    <p className="text-base md:text-lg font-black text-slate-900">Your product, shipped.</p>
                                </div>
                                <span className="px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-[10px] font-black uppercase tracking-wider">● Live</span>
                            </div>

                            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                                {METRICS.map((metric) => (
                                    <div key={metric.label} className="rounded-2xl bg-white border border-slate-200 p-3 md:p-4">
                                        <p className="text-[9.5px] font-bold text-slate-400 uppercase tracking-wider">{metric.label}</p>
                                        <p className={`mt-1 text-xl md:text-2xl font-black ${metric.color}`}><CountUp value={metric.value} /></p>
                                        <div className="mt-2 h-1 rounded-full bg-slate-100 overflow-hidden">
                                            <div className={`h-full rounded-full ${metric.bar} hp-bar`}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-3 grid md:grid-cols-[1.6fr_1fr] gap-3">
                                <div className="rounded-2xl bg-white border border-slate-200 p-4">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">User Growth</p>
                                    <svg viewBox="0 0 300 90" className="mt-2 w-full h-24">
                                        <defs>
                                            <linearGradient id="heroArea" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.25" />
                                                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                        <path d="M0 80 C 30 75, 50 70, 75 62 S 120 60, 150 45 S 210 38, 240 22 S 280 10, 300 6 L300 90 L0 90 Z" fill="url(#heroArea)" />
                                        <path d="M0 80 C 30 75, 50 70, 75 62 S 120 60, 150 45 S 210 38, 240 22 S 280 10, 300 6" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" className="hp-draw" />
                                        <path d="M0 85 C 40 82, 70 78, 100 74 S 160 68, 200 60 S 260 52, 300 40" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 6" />
                                    </svg>
                                </div>
                                <div className="rounded-2xl bg-white border border-slate-200 p-4">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deployments</p>
                                    <div className="mt-3 space-y-2.5">
                                        {DEPLOYMENTS.map((d) => (
                                            <div key={d.name} className="flex items-center gap-2.5">
                                                <span className={`w-2 h-2 rounded-full ${d.dot}`}></span>
                                                <span className="text-[11px] font-bold text-slate-800 flex-1">{d.name}</span>
                                                <span className="text-[10px] font-semibold text-slate-400">{d.stack}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Phone in front */}
                <div className="hidden sm:block absolute -right-6 md:-right-14 -bottom-10 w-[150px] md:w-[180px]" style={{ transform: "translateZ(80px)" }}>
                    <div className="hp-float rounded-[2rem] bg-slate-900 p-2 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.5)]">
                        <div className="relative rounded-[1.6rem] bg-white overflow-hidden aspect-[9/18]">
                            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-4 bg-slate-900 rounded-full"></div>
                            <div className="h-24 bg-gradient-to-br from-orange-500 to-orange-600 px-3 pt-8 text-white">
                                <p className="text-[8px] font-bold uppercase tracking-widest opacity-80">Good morning</p>
                                <p className="text-sm font-black">Dashboard</p>
                            </div>
                            <div className="p-3 space-y-2">
                                {["bg-blue-100", "bg-green-100", "bg-orange-100", "bg-purple-100"].map((c, i) => (
                                    <div key={i} className="flex items-center gap-2 rounded-xl bg-slate-50 p-2">
                                        <span className={`w-6 h-6 rounded-lg ${c}`}></span>
                                        <span className="flex-1 space-y-1">
                                            <span className="block h-1.5 w-3/4 rounded bg-slate-200"></span>
                                            <span className="block h-1.5 w-1/2 rounded bg-slate-100"></span>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* AI card in front */}
                <div className="hidden md:block absolute -left-12 bottom-16 w-64" style={{ transform: "translateZ(110px)" }}>
                    <div className="hp-float rounded-2xl bg-white border border-slate-200 p-4 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.35)]" style={{ animationDelay: "-3s" }}>
                        <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-sm">🧠</span>
                            <div>
                                <p className="text-xs font-black text-slate-900">AI Agent</p>
                                <p className="text-[10px] font-semibold text-green-600">● Online</p>
                            </div>
                        </div>
                        <div className="mt-3 rounded-xl bg-slate-50 p-2.5 text-[10.5px] font-medium text-slate-600 leading-snug">
                            Answer generated from your docs via RAG pipeline.
                        </div>
                        <div className="mt-2 flex gap-1">
                            <span className="hp-dot w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                            <span className="hp-dot w-1.5 h-1.5 rounded-full bg-slate-400" style={{ animationDelay: "0.15s" }}></span>
                            <span className="hp-dot w-1.5 h-1.5 rounded-full bg-slate-400" style={{ animationDelay: "0.3s" }}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------- Service card visuals ---------- */

function MobileVisual() {
    return (
        <div className="relative h-full flex items-end justify-center gap-4 pt-8">
            <div className="w-[130px] rounded-t-[1.6rem] bg-slate-900 p-1.5 pb-0 shadow-2xl translate-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                <div className="rounded-t-[1.3rem] bg-white h-[200px] overflow-hidden">
                    <div className="h-16 bg-gradient-to-br from-orange-400 to-orange-600 px-3 pt-5">
                        <span className="block h-1.5 w-12 rounded bg-white/60"></span>
                        <span className="block mt-1.5 h-2.5 w-20 rounded bg-white"></span>
                    </div>
                    <div className="p-2.5 grid grid-cols-2 gap-1.5">
                        {[0, 1, 2, 3].map((i) => <span key={i} className="h-12 rounded-lg bg-slate-100"></span>)}
                    </div>
                </div>
            </div>
            <div className="w-[130px] rounded-t-[1.6rem] bg-slate-800 p-1.5 pb-0 shadow-2xl translate-y-8 group-hover:translate-y-3 transition-transform duration-500 delay-75">
                <div className="rounded-t-[1.3rem] bg-white h-[180px] overflow-hidden p-2.5 pt-6 space-y-2">
                    {["bg-blue-100", "bg-green-100", "bg-orange-100"].map((c, i) => (
                        <div key={i} className="flex items-center gap-2 rounded-lg bg-slate-50 p-1.5">
                            <span className={`w-6 h-6 rounded-md ${c}`}></span>
                            <span className="flex-1 h-1.5 rounded bg-slate-200"></span>
                        </div>
                    ))}
                </div>
            </div>
            <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-black text-slate-700 shadow-sm">Kotlin · Swift</span>
            <span className="absolute top-14 right-5 px-3 py-1.5 rounded-full bg-orange-500 text-[11px] font-black text-white shadow-sm">120Hz</span>
        </div>
    );
}

function WebVisual() {
    return (
        <div className="relative h-full flex items-end justify-center px-6 pt-8">
            <div className="w-full max-w-md rounded-t-2xl border border-slate-200 bg-white shadow-xl overflow-hidden translate-y-2 group-hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-center gap-1 px-3 py-2 border-b border-slate-100 bg-slate-50">
                    <span className="w-2 h-2 rounded-full bg-red-300"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-300"></span>
                    <span className="w-2 h-2 rounded-full bg-green-300"></span>
                </div>
                <div className="p-4 grid grid-cols-[1.4fr_1fr] gap-3 h-[150px]">
                    <div className="space-y-2">
                        <span className="block h-3 w-4/5 rounded bg-slate-800"></span>
                        <span className="block h-3 w-3/5 rounded bg-slate-800"></span>
                        <span className="block h-1.5 w-full rounded bg-slate-200 mt-3"></span>
                        <span className="block h-1.5 w-5/6 rounded bg-slate-200"></span>
                        <span className="inline-block mt-2 h-6 w-20 rounded-lg bg-blue-600"></span>
                    </div>
                    <div className="rounded-xl bg-gradient-to-br from-blue-100 to-indigo-200"></div>
                </div>
            </div>
            <div className="absolute top-6 right-6 rounded-xl bg-slate-900 px-3 py-2 font-mono text-[10.5px] text-green-400 shadow-xl">
                $ next build <span className="text-white">✓</span>
            </div>
            <span className="absolute top-8 left-6 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-black text-slate-700 shadow-sm">React · Next.js · Edge</span>
        </div>
    );
}

function AIVisual() {
    const nodes = [
        { label: "Docs", x: "12%", y: "22%" },
        { label: "Vector DB", x: "70%", y: "16%" },
        { label: "OpenCV", x: "8%", y: "72%" },
        { label: "Agent", x: "72%", y: "74%" },
    ];
    return (
        <div className="relative h-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                {[[25, 28], [80, 22], [20, 78], [82, 80]].map(([x, y], i) => (
                    <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#16a34a" strokeWidth="0.6" strokeDasharray="2 2" className="hp-flow" vectorEffect="non-scaling-stroke" />
                ))}
            </svg>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-3xl shadow-[0_0_40px_rgba(22,163,74,0.45)] group-hover:scale-110 transition-transform duration-500">🧠</div>
            {nodes.map((n) => (
                <span key={n.label} className="absolute px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-[10.5px] font-black text-slate-700 shadow-sm" style={{ left: n.x, top: n.y }}>
                    {n.label}
                </span>
            ))}
        </div>
    );
}

function SEOVisual() {
    return (
        <div className="relative h-full flex flex-col justify-center gap-2.5 px-6">
            <div className="flex items-center gap-2 h-9 rounded-full bg-white border border-slate-200 px-4 shadow-sm">
                <span className="text-slate-400 text-xs">🔍</span>
                <span className="h-1.5 w-32 rounded bg-slate-200"></span>
            </div>
            <div className="rounded-xl bg-white border border-purple-200 p-3 shadow-md group-hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded bg-purple-600 text-white text-[9px] font-black">#1</span>
                    <span className="text-[11px] font-black text-blue-700">bharattek.com</span>
                </div>
                <span className="block mt-2 h-1.5 w-full rounded bg-slate-200"></span>
                <span className="block mt-1 h-1.5 w-2/3 rounded bg-slate-100"></span>
            </div>
            <div className="flex gap-1.5">
                {["SEO", "AEO", "GEO"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-purple-50 border border-purple-200 text-[10px] font-black text-purple-700">{t}</span>
                ))}
            </div>
        </div>
    );
}

const SERVICES = [
    {
        id: "mobile",
        short: "Mobile Apps",
        icon: "📱",
        title: "Premium Mobile Engineering",
        desc: "Native Android and iOS applications built with Kotlin and Swift, architected for 120Hz-ready, butter-smooth UIs and infinite scalability.",
        tags: ["Kotlin", "Swift", "Jetpack Compose", "SwiftUI"],
        Visual: MobileVisual,
        panel: "from-orange-50 via-orange-100/70 to-amber-100",
        accent: "bg-orange-500",
        text: "text-orange-500",
        chip: "bg-orange-50 border-orange-200 text-orange-700",
    },
    {
        id: "web",
        short: "Web Platforms",
        icon: "💻",
        title: "Scalable Web Platforms",
        desc: "High-performance React & Next.js frontends powered by secure, robust APIs and edge computing infrastructure designed to handle massive scale.",
        tags: ["React", "Next.js", "Secure APIs", "Edge"],
        Visual: WebVisual,
        panel: "from-blue-50 via-blue-100/70 to-indigo-100",
        accent: "bg-blue-600",
        text: "text-blue-600",
        chip: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
        id: "ai",
        short: "AI & Vision",
        icon: "🧠",
        title: "Applied AI & Vision",
        desc: "Integrating intelligent capabilities from on-device Computer Vision (OpenCV) to custom RAG pipelines and autonomous Agentic AI.",
        tags: ["OpenCV", "RAG Pipelines", "Agentic AI"],
        Visual: AIVisual,
        panel: "from-green-50 via-green-100/70 to-emerald-100",
        accent: "bg-green-600",
        text: "text-green-600",
        chip: "bg-green-50 border-green-200 text-green-700",
    },
    {
        id: "seo",
        short: "GEO · AEO · SEO",
        icon: "🚀",
        title: "Next-Gen GEO , AEO & SEO",
        desc: "Dominating modern search via Technical SEO, Answer Engine Optimization (AEO), and AI-driven Generative Engine Optimization (GEO).",
        tags: ["Technical SEO", "AEO", "GEO"],
        Visual: SEOVisual,
        panel: "from-purple-50 via-purple-100/70 to-fuchsia-100",
        accent: "bg-purple-600",
        text: "text-purple-600",
        chip: "bg-purple-50 border-purple-200 text-purple-700",
    },
];

const SERVICE_DURATION = 5000;

const SERVICE_GLOWS = {
    mobile: "bg-orange-300/50",
    web: "bg-blue-300/50",
    ai: "bg-green-300/50",
    seo: "bg-purple-300/50",
};

// 3D coverflow: the active service sits in front, neighbours turn away on either side.
// Auto-advances; hover pauses, arrows/pills/swipe navigate.
function ServicesShowcase() {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const swipeStart = useRef(null);
    const count = SERVICES.length;
    const current = SERVICES[active];

    const go = (delta) => setActive((i) => (i + delta + count) % count);

    const handlePointerDown = (e) => {
        swipeStart.current = e.clientX;
    };

    const handlePointerUp = (e) => {
        if (swipeStart.current === null) return;
        const dx = e.clientX - swipeStart.current;
        swipeStart.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    };

    return (
        <div
            onPointerEnter={(e) => e.pointerType === "mouse" && setPaused(true)}
            onPointerLeave={() => setPaused(false)}
        >
            {/* Stage */}
            <div
                className="relative h-[470px] sm:h-[460px] lg:h-[450px] select-none touch-pan-y"
                style={{ perspective: "1800px" }}
                onPointerDown={handlePointerDown}
                onPointerUp={handlePointerUp}
            >
                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full blur-[110px] transition-colors duration-700 pointer-events-none ${SERVICE_GLOWS[current.id]}`}></div>
                <div className="absolute left-1/2 bottom-2 -translate-x-1/2 w-[60%] h-10 rounded-[100%] bg-slate-900/10 blur-xl pointer-events-none"></div>

                {SERVICES.map((service, i) => {
                    // offset: 0 = front, ±1 = sides, 2 = hidden behind
                    const offset = ((i - active + count + 1) % count) - 1;
                    const isFront = offset === 0;
                    const hidden = offset === 2;
                    const { Visual } = service;

                    return (
                        <div
                            key={service.id}
                            className="hp-cover absolute left-1/2 top-0 w-[280px] sm:w-[380px] lg:w-[430px] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                            style={{
                                "--x": `${offset * 62}%`,
                                "--z": `${hidden ? -500 : Math.abs(offset) * -260}px`,
                                "--r": `${offset * -38}deg`,
                                opacity: hidden ? 0 : isFront ? 1 : 0.55,
                                zIndex: isFront ? 3 : hidden ? 1 : 2,
                                pointerEvents: hidden ? "none" : "auto",
                            }}
                            onClick={() => !isFront && setActive(i)}
                            aria-hidden={!isFront}
                        >
                            <div className={`group overflow-hidden rounded-[2.25rem] bg-white border transition-shadow duration-700 ${isFront ? "border-slate-200 shadow-[0_50px_100px_-30px_rgba(15,23,42,0.4)] cursor-default" : "border-slate-200/70 shadow-xl cursor-pointer"}`}>
                                <div className={`relative h-[150px] sm:h-[180px] bg-gradient-to-br ${service.panel} overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)", backgroundSize: "18px 18px" }}></div>
                                    <span className="absolute top-3 right-5 text-[4rem] font-black leading-none text-slate-900/[0.06] select-none">0{i + 1}</span>
                                    <div className="relative h-full w-full scale-[0.82] origin-bottom">
                                        <Visual />
                                    </div>
                                </div>

                                <div className="p-5 sm:p-6">
                                    <span className={`flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] ${service.text}`}>
                                        <span className="text-base">{service.icon}</span> Service 0{i + 1}
                                    </span>
                                    <h4 className="mt-2 text-xl sm:text-[1.45rem] font-black text-slate-900 tracking-tight leading-tight">{service.title}</h4>
                                    <p className="mt-2 text-[13.5px] sm:text-[14.5px] text-slate-600 leading-relaxed font-medium">{service.desc}</p>
                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className={`px-2.5 py-0.5 rounded-md border text-[11px] font-bold ${service.chip}`}>{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Auto-advance progress */}
                                <div className="h-1 bg-slate-100">
                                    {isFront && (
                                        <div
                                            key={active}
                                            className={`h-full ${service.accent} hp-progress`}
                                            style={{ animationDuration: `${SERVICE_DURATION}ms`, animationPlayState: paused ? "paused" : "running" }}
                                            onAnimationEnd={() => go(1)}
                                        ></div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center justify-center gap-3">
                <button onClick={() => go(-1)} aria-label="Previous service" className="w-11 h-11 shrink-0 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 font-black hover:bg-slate-900 hover:text-white transition-colors cursor-pointer">←</button>
                <div className="flex flex-wrap justify-center gap-2">
                    {SERVICES.map((service, i) => (
                        <button
                            key={service.id}
                            onClick={() => setActive(i)}
                            className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${i === active ? `${service.accent} border-transparent text-white shadow-lg` : "bg-white border-slate-200 text-slate-500 hover:text-slate-900"}`}
                        >
                            <span>{service.icon}</span>
                            <span className="hidden sm:inline">{service.short}</span>
                        </button>
                    ))}
                </div>
                <button onClick={() => go(1)} aria-label="Next service" className="w-11 h-11 shrink-0 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 font-black hover:bg-slate-900 hover:text-white transition-colors cursor-pointer">→</button>
            </div>
        </div>
    );
}

/* ---------- Process step visuals ---------- */

function DiscoveryVisual() {
    const nodes = [
        { label: "API", style: { left: "6%", top: "12%" } },
        { label: "DB", style: { right: "6%", top: "18%" } },
        { label: "State", style: { left: "34%", bottom: "8%" } },
    ];
    return (
        <div className="relative h-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
                {[[20, 22], [80, 28], [48, 84]].map(([x, y], i) => (
                    <line key={i} x1="50" y1="48" x2={x} y2={y} stroke="#2563eb" strokeWidth="1" strokeDasharray="3 3" className="hp-flow" vectorEffect="non-scaling-stroke" />
                ))}
            </svg>
            <span className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center text-sm shadow-lg">⌘</span>
            {nodes.map((n) => (
                <span key={n.label} className="absolute px-2 py-1 rounded-md bg-white border border-blue-200 text-[10px] font-black text-blue-700 shadow-sm" style={n.style}>{n.label}</span>
            ))}
        </div>
    );
}

function UXVisual() {
    return (
        <div className="relative h-full p-3">
            <div className="h-full rounded-lg bg-white border border-orange-200 p-2 space-y-1.5 shadow-sm">
                <span className="block h-2 w-1/2 rounded bg-slate-800"></span>
                <span className="block h-1.5 w-3/4 rounded bg-slate-200"></span>
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <span className="h-7 rounded bg-orange-100"></span>
                    <span className="h-7 rounded bg-orange-200/70 ring-2 ring-orange-500 ring-offset-1"></span>
                </div>
            </div>
            <span className="hp-cursor absolute left-[58%] top-[58%] flex items-start gap-0.5">
                <svg viewBox="0 0 16 16" className="w-4 h-4 text-orange-600 drop-shadow"><path d="M2 1l11 6-5 1.5L6 14z" fill="currentColor" /></svg>
                <span className="mt-3 px-1.5 py-0.5 rounded bg-orange-500 text-white text-[8px] font-black">Figma</span>
            </span>
        </div>
    );
}

function EngineeringVisual() {
    const layers = [
        { label: "View", className: "bg-white border-green-200 text-green-700" },
        { label: "ViewModel", className: "bg-green-100 border-green-300 text-green-800" },
        { label: "Model", className: "bg-green-600 border-green-600 text-white" },
    ];
    return (
        <div className="h-full flex flex-col justify-center gap-1.5 px-3">
            {layers.map((layer, i) => (
                <div key={layer.label} className={`hp-layer rounded-lg border px-2.5 py-1.5 text-[10px] font-black flex items-center justify-between ${layer.className}`} style={{ marginLeft: `${i * 8}px`, animationDelay: `${i * 0.2}s` }}>
                    {layer.label}
                    <span className="opacity-60">{i < 2 ? "↓" : "✓"}</span>
                </div>
            ))}
            <span className="self-end mt-0.5 text-[9px] font-black text-green-700 uppercase tracking-wider">MVVM · KMP</span>
        </div>
    );
}

function GrowthVisual() {
    return (
        <div className="relative h-full flex items-end gap-2 px-4 pb-4">
            {[30, 45, 40, 62, 78, 95].map((h, i) => (
                <span key={i} className="hp-grow-bar flex-1 rounded-t-md bg-gradient-to-t from-purple-600 to-fuchsia-400" style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}></span>
            ))}
            <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white border border-purple-200 text-[10px] font-black text-purple-700 shadow-sm">↗ SEO</span>
        </div>
    );
}

const STEP_VISUALS = { discovery: DiscoveryVisual, ux: UXVisual, engineering: EngineeringVisual, growth: GrowthVisual };

/* ---------- Team ---------- */

// Members (by TEAM index) placed on two rings around the founder
const ORBIT_RINGS = [
    { radius: 29, duration: 60, members: [1, 2, 3], startAngle: -90 },
    { radius: 45, duration: 90, members: [4, 5, 6, 7, 8], startAngle: -54 },
];

const TEAM_AUTOPLAY_MS = 4500;

const inTeamFilter = (index, filter) => filter === "All" || TEAM[index].group === filter;

function OrbitAvatar({ index, selected, dimmed, onSelect, duration }) {
    const member = TEAM[index];
    return (
        <button
            onClick={() => onSelect(index)}
            className={`group/av relative rounded-full transition-all duration-500 cursor-pointer ${dimmed ? "opacity-25 grayscale" : "opacity-100"}`}
            aria-label={`${member.name}, ${member.role}`}
            aria-pressed={selected}
        >
            {/* Counter-rotates so the avatar stays upright while its ring spins */}
            <span className="tm-counter block" style={{ animationDuration: `${duration}s` }}>
                <span className={`absolute -inset-2 rounded-full bg-gradient-to-br ${member.theme} blur-md transition-opacity duration-500 ${selected ? "opacity-70" : "opacity-0"}`}></span>
                <span className={`relative flex w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${member.theme} items-center justify-center text-sm sm:text-lg font-black text-white ring-4 ring-white shadow-lg transition-transform duration-500 ${selected ? "scale-125" : "group-hover/av:scale-110"}`}>
                    {getInitials(member.name)}
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white shadow flex items-center justify-center text-[10px] sm:text-xs text-slate-800">{member.icon}</span>
                </span>
                <span className="hidden sm:block absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold opacity-0 group-hover/av:opacity-100 transition-opacity pointer-events-none">
                    {member.name.split(" ")[0]}
                </span>
            </span>
        </button>
    );
}

function TeamOrbit() {
    const [selected, setSelected] = useState(0);
    const [filter, setFilter] = useState("All");
    const [autoPlay, setAutoPlay] = useState(true);
    const [hovering, setHovering] = useState(false);

    const order = TEAM.map((_, i) => i).filter((i) => inTeamFilter(i, filter));
    const member = TEAM[selected];
    const position = order.indexOf(selected) + 1;

    const step = (delta) => {
        setSelected((current) => {
            const ids = TEAM.map((_, i) => i).filter((i) => inTeamFilter(i, filter));
            const pos = ids.indexOf(current);
            return ids[(pos + delta + ids.length) % ids.length];
        });
    };

    const pick = (index) => {
        setSelected(index);
        setAutoPlay(false);
    };

    const changeFilter = (next) => {
        setFilter(next);
        setSelected(TEAM.findIndex((_, i) => inTeamFilter(i, next)));
    };

    const playing = autoPlay && !hovering;

    return (
        <>
            {/* Filter Tabs with sliding indicator */}
            <div className="mb-12 flex justify-start md:justify-end">
                <div className="relative inline-grid grid-cols-3 p-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
                    <span
                        className="absolute top-1.5 bottom-1.5 left-1.5 rounded-full bg-slate-900 shadow-md transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        style={{ width: "calc((100% - 0.75rem) / 3)", transform: `translateX(${TEAM_FILTERS.indexOf(filter) * 100}%)` }}
                    ></span>
                    {TEAM_FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => changeFilter(f)}
                            className={`relative z-10 w-24 md:w-28 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 cursor-pointer ${filter === f ? "text-white" : "text-slate-500 hover:text-slate-900"}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Orbit */}
                <div
                    className={`relative mx-auto w-[310px] h-[310px] sm:w-[460px] sm:h-[460px] lg:w-[500px] lg:h-[500px] ${hovering ? "tm-paused" : ""}`}
                    onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
                    onPointerLeave={() => setHovering(false)}
                >
                    <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-orange-200/60 via-blue-200/50 to-green-200/60 blur-[60px] pointer-events-none"></div>

                    {ORBIT_RINGS.map((ring) => (
                        <div key={ring.radius} className="absolute rounded-full border border-dashed border-slate-300/80" style={{ inset: `${50 - ring.radius}%` }}></div>
                    ))}

                    {ORBIT_RINGS.map((ring) => (
                        <div key={`spin-${ring.radius}`} className="tm-spin absolute inset-0" style={{ animationDuration: `${ring.duration}s` }}>
                            {ring.members.map((index, i) => {
                                const angle = (ring.startAngle + (i * 360) / ring.members.length) * (Math.PI / 180);
                                return (
                                    <div
                                        key={index}
                                        className="absolute -translate-x-1/2 -translate-y-1/2"
                                        style={{ left: `${50 + ring.radius * Math.cos(angle)}%`, top: `${50 + ring.radius * Math.sin(angle)}%`, zIndex: selected === index ? 20 : 10 }}
                                    >
                                        <OrbitAvatar
                                            index={index}
                                            duration={ring.duration}
                                            selected={selected === index}
                                            dimmed={!inTeamFilter(index, filter)}
                                            onSelect={pick}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                    {/* Founder at the centre */}
                    <button
                        onClick={() => pick(0)}
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-all duration-500 ${inTeamFilter(0, filter) ? "" : "opacity-30 grayscale"}`}
                        aria-label={`${TEAM[0].name}, ${TEAM[0].role}`}
                        aria-pressed={selected === 0}
                    >
                        <span className={`tm-ripple absolute inset-0 rounded-full bg-gradient-to-br ${TEAM[0].theme}`}></span>
                        <span className={`tm-ripple absolute inset-0 rounded-full bg-gradient-to-br ${TEAM[0].theme}`} style={{ animationDelay: "1.5s" }}></span>
                        <span className={`relative flex w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br ${TEAM[0].theme} items-center justify-center text-3xl sm:text-4xl font-black text-white ring-[6px] ring-white shadow-2xl transition-transform duration-500 ${selected === 0 ? "scale-110" : "hover:scale-105"}`}>
                            {getInitials(TEAM[0].name)}
                        </span>
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-widest whitespace-nowrap shadow-lg">Founder</span>
                    </button>
                </div>

                {/* Selected member details — open typography, no card */}
                <div className="min-h-[360px] flex flex-col justify-center">
                    <div key={selected} className="hp-fade">
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-black tabular-nums text-slate-400">{String(position).padStart(2, "0")} / {String(order.length).padStart(2, "0")}</span>
                            <span className="h-px w-12 bg-slate-300"></span>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">{selected === 0 ? "Founder" : member.group}</span>
                        </div>
                        <h4 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-[1.02]">{member.name}</h4>
                        <p className={`mt-3 text-lg md:text-xl font-black bg-gradient-to-r ${member.theme} bg-clip-text text-transparent`}>{member.role}</p>
                        <p className="mt-6 text-base md:text-lg text-slate-600 font-medium leading-relaxed max-w-lg">{member.desc}</p>
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                            {member.skills.map((skill) => (
                                <span key={skill} className="flex items-center gap-2 text-sm font-black text-slate-800">
                                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${member.theme}`}></span>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10 flex items-center gap-3">
                        <button onClick={() => { step(-1); setAutoPlay(false); }} aria-label="Previous member" className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 font-black hover:bg-slate-900 hover:text-white transition-colors cursor-pointer">←</button>
                        <button onClick={() => { step(1); setAutoPlay(false); }} aria-label="Next member" className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 font-black hover:bg-slate-900 hover:text-white transition-colors cursor-pointer">→</button>
                        <div className="ml-2 flex-1 max-w-[200px] h-[3px] rounded-full bg-slate-200 overflow-hidden">
                            {autoPlay && (
                                <div
                                    key={`${selected}-${filter}`}
                                    className="h-full bg-gradient-to-r from-orange-500 via-blue-600 to-green-600 hp-progress"
                                    style={{ animationDuration: `${TEAM_AUTOPLAY_MS}ms`, animationPlayState: playing ? "running" : "paused" }}
                                    onAnimationEnd={() => step(1)}
                                ></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function StandardCard() {
    const { ref, handlers } = useTilt(14, { rx: 6, ry: -10 });

    return (
        <div className="relative py-6" style={{ perspective: "1400px" }} {...handlers}>
            <div ref={ref} className="relative transition-transform duration-500 ease-out" style={{ transformStyle: "preserve-3d", transform: "rotateX(6deg) rotateY(-10deg)" }}>
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 to-green-500/20 border border-blue-200/50" style={{ transform: "translateZ(-80px) translateX(30px) translateY(24px)" }}></div>
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-orange-400/20 to-blue-400/20 border border-orange-200/50" style={{ transform: "translateZ(-40px) translateX(15px) translateY(12px)" }}></div>

                <div className="relative rounded-[2.5rem] bg-white border border-slate-200 p-6 md:p-12 overflow-hidden shadow-[0_40px_80px_-30px_rgba(15,23,42,0.3)]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/60 rounded-full blur-[80px] pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100/60 rounded-full blur-[80px] pointer-events-none"></div>

                    <h4 className="text-[1.52rem] font-black text-slate-900 mb-6 relative z-10">The BharatTek Standard</h4>
                    <ul className="space-y-5 relative z-10">
                        {STANDARDS.map((item) => (
                            <li key={item.title} className="flex items-start gap-4">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 shadow-lg shadow-green-500/30 flex items-center justify-center text-white font-black shrink-0">✓</div>
                                <div>
                                    <span className="text-[16px] font-bold text-slate-900 block">{item.title}</span>
                                    <span className="text-[13.6px] text-slate-600 font-medium">{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

function SectionBadge({ children, color = "blue" }) {
    const styles = {
        blue: "bg-blue-100/50 border-blue-200/50 text-blue-700",
        orange: "bg-orange-100/50 border-orange-200/50 text-orange-700",
    };
    const dots = { blue: "bg-blue-600", orange: "bg-orange-600" };

    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold tracking-widest uppercase mb-4 ${styles[color]}`}>
            <span className={`w-2 h-2 rounded-full ${dots[color]}`}></span>
            {children}
        </div>
    );
}

function HomePage({ setCurrentPage }) {
    const [processRef, processProgress] = useScrollProgress({ startAt: 0.75 });
    const activeStep = Math.min(Math.floor(processProgress * PROCESS.length), PROCESS.length - 1);

    return (
        <main className="page-enter pt-20 bg-grid overflow-x-clip">
            {/* HERO */}
            <section className="relative pt-16 md:pt-24 pb-24">
                <div className="absolute top-[-10%] left-[-10%] w-250 h-250 bg-linear-to-br from-orange-200/50 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-tl from-green-200/40 via-blue-200/30 to-transparent rounded-full blur-[100px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                    <h1 className="text-[2.3rem] sm:text-5xl md:text-[3.6rem] lg:text-[4.2rem] font-black leading-[1.02] text-slate-900 tracking-tighter">
                        {/* Lines 1 & 2: cascaded char entry, words kept together */}
                        {HERO_LINES.map((line) => {
                            let charIndex = 0;
                            return (
                                <span key={line.text} className={`block pb-1 ${line.className}`}>
                                    {line.text.split(" ").map((word, w) => (
                                        <span key={w} className="inline-block whitespace-nowrap">
                                            {word.split("").map((char) => {
                                                const i = charIndex++;
                                                return (
                                                    <span
                                                        key={i}
                                                        className="inline-block"
                                                        style={{
                                                            opacity: 0,
                                                            animation: "characterReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                                                            animationDelay: `${line.delay + i * 0.03}s`,
                                                        }}
                                                    >
                                                        {char}
                                                    </span>
                                                );
                                            })}
                                            {" "}
                                        </span>
                                    ))}
                                </span>
                            );
                        })}

                        {/* Line 3: MADE IN INDIA (delayed reveal + continuous shimmer) */}
                        <span
                            className="block pt-1 pb-2"
                            style={{ opacity: 0, animation: "characterReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards", animationDelay: "1.4s" }}
                        >
                            <span className="relative inline-block cursor-default">
                                <span
                                    className="relative inline-block font-black drop-shadow-sm"
                                    style={{
                                        backgroundImage: "linear-gradient(to right, #F97316 0%, #2563EB 50%, #16A34A 100%)",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                    }}
                                >
                                    Make In India
                                </span>
                                <span
                                    className="absolute inset-0 font-black pointer-events-none mix-blend-overlay"
                                    style={{
                                        backgroundImage: "linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.9) 50%, transparent 70%)",
                                        backgroundSize: "300% 100%",
                                        WebkitBackgroundClip: "text",
                                        backgroundClip: "text",
                                        color: "transparent",
                                        animation: "lightBeamSweep 12s linear infinite",
                                        animationDelay: "2.5s",
                                    }}
                                    aria-hidden="true"
                                >
                                    Make In India
                                </span>
                            </span>
                        </span>
                    </h1>

                    <div style={{ opacity: 0, animation: "characterReveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards" }}>
                        <p className="mt-6 text-[17px] md:text-[19px] text-slate-700 leading-relaxed font-medium max-w-3xl mx-auto">
                            Bharattek builds scalable web, mobile and cloud-native systems for startups and enterprises. We combine product thinking, design and engineering to ship reliable software that users love.
                        </p>
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Magnetic>
                                <button
                                    onClick={() => setCurrentPage("contact")}
                                    className="group w-full px-9 py-4 bg-gradient-to-b from-orange-400 to-orange-500 text-white border border-orange-500 rounded-2xl font-extrabold hover:from-orange-500 hover:to-orange-600 transition-colors duration-300 shadow-[0_8px_20px_-6px_rgba(249,115,22,0.6)] hover:shadow-[0_12px_24px_-6px_rgba(249,115,22,0.8)] text-lg tracking-wide flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    Start Your Transformation
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>
                            </Magnetic>
                            <Magnetic>
                                <button
                                    onClick={() => setCurrentPage("services")}
                                    className="w-full px-9 py-4 bg-white/80 backdrop-blur text-slate-800 border border-slate-200 rounded-2xl font-extrabold hover:border-green-500 hover:text-green-600 hover:bg-green-50/50 transition-colors duration-300 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.05)] text-lg tracking-wide cursor-pointer"
                                >
                                    Explore Our Services
                                </button>
                            </Magnetic>
                        </div>
                    </div>

                    <div style={{ opacity: 0, animation: "characterReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards" }}>
                        <HeroDashboard />
                    </div>
                </div>
            </section>

            {/* TECH MARQUEE */}
            <div className="relative border-y border-slate-200 bg-white py-6 overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
                <div className="hp-marquee flex w-max">
                    {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
                        <span key={i} className="flex items-center gap-10 pr-10 text-base md:text-lg font-black text-slate-400 uppercase tracking-wider whitespace-nowrap hover:text-slate-900 transition-colors" aria-hidden={i >= TECH_MARQUEE.length}>
                            {tech}
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-blue-600"></span>
                        </span>
                    ))}
                </div>
            </div>

            {/* WHAT WE DO (EXPERTISE) — interactive showcase */}
            <section className="py-24 bg-slate-50 relative border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <Reveal className="mb-8 md:mb-10 md:flex justify-between items-end gap-8">
                        <div className="max-w-2xl">
                            <SectionBadge>Our Expertise</SectionBadge>
                            <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none">End-to-End Digital Dominance</h3>
                        </div>
                        <p className="text-lg text-slate-600 mt-4 md:mt-0 max-w-md font-medium">From writing the first line of code to acquiring your thousandth customer, we handle the entire digital lifecycle.</p>
                    </Reveal>

                    <Reveal>
                        <ServicesShowcase />
                    </Reveal>
                </div>
            </section>

            {/* OUR PROCESS — scroll-driven timeline */}
            <section className="relative bg-white py-24 md:py-32 border-b border-slate-200">
                <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-blue-100/60 rounded-full blur-[130px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100/60 rounded-full blur-[130px] pointer-events-none"></div>

                <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[0.9fr_1.4fr] gap-12 lg:gap-16">
                    {/* Sticky heading + live step indicator */}
                    <div className="lg:sticky lg:top-32 self-start">
                        <SectionBadge color="orange">How We Work</SectionBadge>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none">The Engineering Blueprint</h3>

                        <div className="mt-10 hidden lg:block rounded-[2rem] border border-slate-200 bg-slate-50/70 p-7">
                            <div className="flex items-baseline gap-3">
                                <span key={activeStep} className="hp-fade text-[6rem] font-black leading-none bg-gradient-to-b from-slate-900 to-slate-400 bg-clip-text text-transparent tabular-nums">0{activeStep + 1}</span>
                                <span className="text-2xl font-black text-slate-300">/ 0{PROCESS.length}</span>
                            </div>
                            <p key={`t-${activeStep}`} className="hp-fade mt-3 text-lg font-black text-slate-900">{PROCESS[activeStep].title}</p>
                            <div className="mt-5 grid grid-cols-4 gap-2">
                                {PROCESS.map((step, i) => (
                                    <span key={step.title} className="h-1.5 rounded-full bg-slate-200 overflow-hidden">
                                        <span className={`block h-full rounded-full ${step.bar} transition-all duration-700 ${i <= activeStep && processProgress > 0 ? "w-full" : "w-0"}`}></span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div ref={processRef} className="relative pl-12 md:pl-16">
                        <div className="absolute left-[18px] md:left-[22px] top-2 bottom-2 w-[3px] rounded-full bg-slate-100 overflow-hidden">
                            <div className="w-full rounded-full bg-gradient-to-b from-blue-500 via-orange-500 to-purple-500" style={{ height: `${processProgress * 100}%` }}></div>
                        </div>

                        <div className="space-y-6 md:space-y-8">
                            {PROCESS.map((step, i) => {
                                const active = i <= activeStep && processProgress > 0;
                                const current = i === activeStep && processProgress > 0;
                                const Visual = STEP_VISUALS[step.visual];
                                return (
                                    <div key={step.title} className="relative">
                                        <div className={`absolute -left-12 md:-left-16 top-6 w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center text-sm font-black transition-all duration-500 ${active ? `bg-gradient-to-br ${step.color} text-white shadow-lg ring-4 ring-white` : "bg-white border border-slate-200 text-slate-400 scale-90"}`}>
                                            {current && <span className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} animate-ping opacity-30`}></span>}
                                            <span className="relative">0{i + 1}</span>
                                        </div>

                                        <div className={`group grid sm:grid-cols-[1fr_190px] gap-5 items-center rounded-[1.75rem] border p-5 md:p-6 transition-all duration-500 ${active ? `bg-white shadow-xl ${step.glow}` : "bg-slate-50/60 border-slate-100 opacity-60"}`}>
                                            <div className="md:pl-2">
                                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">Step 0{i + 1}</span>
                                                <h4 className="mt-1 text-2xl md:text-[1.7rem] font-black text-slate-900 tracking-tight">{step.title}</h4>
                                                <p className="mt-3 text-slate-600 text-[15px] md:text-base font-medium leading-relaxed">{step.desc}</p>
                                            </div>
                                            <div className={`relative h-[130px] rounded-2xl bg-gradient-to-br ${step.tint} border border-white overflow-hidden transition-transform duration-500 ${active ? "scale-100" : "scale-95 grayscale"}`}>
                                                <Visual />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM / CORE LEADERSHIP — orbit */}
            <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
                <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                    <Reveal className="max-w-2xl mb-6 md:mb-0">
                        <SectionBadge>Who We Are</SectionBadge>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none">The Minds Behind Bharattek</h3>
                        <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                            A passionate team of engineers, designers and innovators building scalable digital experiences for modern businesses.
                        </p>
                    </Reveal>

                    <Reveal>
                        <TeamOrbit />
                    </Reveal>
                </div>

                <style dangerouslySetInnerHTML={{__html: `
                    .tm-spin { animation: tmSpin linear infinite; }
                    .tm-counter { animation: tmSpin linear infinite reverse; }
                    @keyframes tmSpin { to { transform: rotate(360deg); } }
                    .tm-paused .tm-spin, .tm-paused .tm-counter { animation-play-state: paused; }

                    .tm-ripple { animation: tmRipple 3s cubic-bezier(0.16, 1, 0.3, 1) infinite; opacity: 0; }
                    @keyframes tmRipple {
                        0% { transform: scale(1); opacity: 0.35; }
                        100% { transform: scale(1.9); opacity: 0; }
                    }

                    @media (prefers-reduced-motion: reduce) {
                        .tm-spin, .tm-counter, .tm-ripple { animation: none; }
                    }
                `}} />
            </section>

            {/* INDUSTRIES WE SERVE */}
            <section className="py-24 bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 items-center gap-16">
                    <Reveal>
                        <SectionBadge>Industries We Serve</SectionBadge>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-none">Engineered for <br />Complex Markets.</h3>
                        <p className="text-lg text-slate-600 font-medium mb-8 leading-normal">
                            We specialize in building high-security, scalable applications for sectors where failure isn't an option. Our solutions are designed to handle millions of data points effortlessly.
                        </p>
                        <div className="grid grid-cols-2 gap-3 mb-10">
                            {INDUSTRIES.map((industry) => (
                                <div key={industry.label} className="group flex items-center gap-3 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-white hover:shadow-lg hover:-translate-y-0.5 hover:border-blue-200 transition-all duration-300">
                                    <span className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-lg shadow-sm group-hover:scale-110 transition-transform">{industry.icon}</span>
                                    <span className="text-sm font-bold text-slate-700">{industry.label}</span>
                                </div>
                            ))}
                        </div>
                        <Magnetic className="inline-block">
                            <button onClick={() => setCurrentPage("contact")} className="group px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-blue-600/30 text-lg flex items-center gap-3 cursor-pointer">
                                Discuss Your Vision <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </button>
                        </Magnetic>
                    </Reveal>

                    <Reveal delay={150}>
                        <StandardCard />
                    </Reveal>
                </div>
            </section>

            <style dangerouslySetInnerHTML={{__html: `
                .hp-float { animation: hpFloat 6s ease-in-out infinite; }
                @keyframes hpFloat { 0%, 100% { translate: 0 0; } 50% { translate: 0 -10px; } }

                .hp-marquee { animation: hpMarquee 40s linear infinite; }
                .hp-marquee:hover { animation-play-state: paused; }
                @keyframes hpMarquee { to { transform: translateX(-50%); } }

                .hp-bar { width: 0; animation: hpBar 1.6s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards; }
                @keyframes hpBar { to { width: 78%; } }

                .hp-draw { stroke-dasharray: 400; stroke-dashoffset: 400; animation: hpDash 2.2s ease-out 2s forwards; }
                @keyframes hpDash { to { stroke-dashoffset: 0; } }

                .hp-dot { animation: hpDot 1.2s ease-in-out infinite; }
                @keyframes hpDot { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }

                .hp-flow { animation: hpFlow 1.4s linear infinite; }
                @keyframes hpFlow { to { stroke-dashoffset: -8; } }

                .hp-cover { transform: translateX(calc(-50% + var(--x))) translateZ(var(--z)) rotateY(var(--r)); }

                .hp-progress { width: 0; animation-name: hpProgress; animation-timing-function: linear; animation-fill-mode: forwards; }
                @keyframes hpProgress { to { width: 100%; } }

                .hp-fade { animation: hpFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
                @keyframes hpFadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: none; } }

                .hp-cursor { animation: hpCursor 4s ease-in-out infinite; }
                @keyframes hpCursor {
                    0%, 100% { translate: 0 0; }
                    40% { translate: -34px -26px; }
                    70% { translate: -10px -8px; }
                }

                .hp-layer { animation: hpLayer 3s ease-in-out infinite; }
                @keyframes hpLayer { 0%, 100% { translate: 0 0; } 50% { translate: 4px 0; } }

                .hp-grow-bar { transform-origin: bottom; animation: hpGrowBar 2.4s cubic-bezier(0.16, 1, 0.3, 1) infinite alternate; }
                @keyframes hpGrowBar { from { transform: scaleY(0.35); } to { transform: scaleY(1); } }

                @media (prefers-reduced-motion: reduce) {
                    .hp-cursor, .hp-layer, .hp-grow-bar { animation: none; }
                    .hp-fade { animation: none; }
                    .hp-float, .hp-marquee, .hp-dot, .hp-flow { animation: none; }
                    .hp-bar { width: 78%; animation: none; }
                    .hp-draw { stroke-dashoffset: 0; animation: none; }
                }
            `}} />
        </main>
    );
}

export default HomePage;
