import { useEffect, useRef, useState } from "react";

const SERVICES = [
    {
        id: "mobile",
        word: "MOBILE",
        badge: "Mobile",
        icon: "📱",
        title: "Premium Mobile Engineering",
        intro: "Native-first development for iOS and Android, delivering butter-smooth, 120Hz-ready applications with highly scalable architectures.",
        items: [
            { title: "iOS Apps (Swift/SwiftUI)", desc: "Flawless Apple ecosystem experiences utilizing Swift, UIKit, and modern SwiftUI paradigms." },
            { title: "Kotlin Multiplatform (KMP)", desc: "Write core business logic once and deploy seamlessly across multiple platforms without UI compromise." },
            { title: "Android Apps (Kotlin/Java/CMP)", desc: "Seamless Android experiences utilizing Kotlin, traditional XML, and modern Jetpack Compose paradigms." },
            { title: "Deep Hardware APIs", desc: "Low-level system access including Camera2 API, touch event tracking, and persistent background records." },
        ],
        gradient: "from-orange-400 to-orange-600",
        tint: "from-orange-50 via-orange-100/60 to-amber-100",
        text: "text-orange-600",
        badgeStyle: "bg-orange-100 text-orange-700",
    },
    {
        id: "web",
        word: "WEB",
        badge: "Web & Backend",
        icon: "💻",
        title: "Scalable Web Platforms",
        intro: "High-performance web applications, dynamic enterprise dashboards, and secure backend systems built to handle massive scale.",
        items: [
            { title: "React & Next.js Frontends", desc: "Lightning-fast, SEO-optimized, and highly interactive web interfaces mapped out flawlessly from Figma designs." },
            { title: "Robust Backend Systems", desc: "Secure APIs and microservices built with Python, FastAPI, and .NET to power complex business logic." },
            { title: "Edge & Serverless Computing", desc: "AWS/GCP edge deployments, scalable media storage (S3), and automated CI/CD pipelines for zero-downtime updates." },
        ],
        gradient: "from-blue-500 to-blue-700",
        tint: "from-blue-50 via-blue-100/60 to-indigo-100",
        text: "text-blue-600",
        badgeStyle: "bg-blue-100 text-blue-700",
    },
    {
        id: "ai",
        word: "AI",
        badge: "AI & Data",
        icon: "🧠",
        title: "Applied AI & Vision",
        intro: "Integrating intelligent capabilities into your products to automate workflows, process visual data, and create magical user experiences.",
        items: [
            { title: "Computer Vision (OpenCV)", desc: "Advanced image processing, facial recognition, and structural similarity checks executed on-device." },
            { title: "RAG & Agentic AI", tag: "ADVANCED", desc: "Connecting secure LLMs to your enterprise data via Retrieval-Augmented Generation to build autonomous agents." },
            { title: "Data Automation", desc: "Automated invoice generation, OCR extraction, and intelligent parsing of user-submitted documents." },
            { title: "Predictive Analytics", desc: "Leveraging user data pipelines to forecast trends and optimize internal business operations." },
        ],
        gradient: "from-green-500 to-green-700",
        tint: "from-green-50 via-green-100/60 to-emerald-100",
        text: "text-green-600",
        badgeStyle: "bg-green-100 text-green-700",
    },
    {
        id: "growth",
        word: "GROWTH",
        badge: "Next-Gen Marketing",
        icon: "🚀",
        title: "Search & Digital Growth",
        intro: "Traditional SEO is evolving. We engineer your digital presence to dominate modern search engines, AI overviews, and voice assistants.",
        items: [
            { title: "Technical SEO", desc: "Core web vitals optimization, metadata engineering, and high-speed infrastructure to dominate Google rankings." },
            { title: "GEO Optimization", lead: "Generative Engine Optimization:", desc: "Structuring your brand's content to be cited by AI Overviews, ChatGPT, and Perplexity." },
            { title: "AEO Optimization", lead: "Answer Engine Optimization:", desc: "Engineering FAQ schemas and entity data to capture zero-click voice searches and smart assistants." },
            { title: "Performance Marketing", desc: "Data-driven PPC campaigns on Google and Meta tailored for maximum ROI and lower customer acquisition costs." },
        ],
        gradient: "from-purple-500 to-purple-700",
        tint: "from-purple-50 via-purple-100/60 to-fuchsia-100",
        text: "text-purple-600",
        badgeStyle: "bg-purple-100 text-purple-700",
    },
];

/* ---------- Visuals ---------- */

function MobileVisual() {
    return (
        <div className="relative flex items-center justify-center gap-5">
            <div className="w-[190px] h-[390px] rounded-[2.4rem] bg-slate-900 p-2 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.5)] -rotate-6" style={{ transform: "translateZ(30px) rotate(-6deg)" }}>
                <div className="relative h-full rounded-[2rem] bg-white overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-full z-10"></div>
                    <div className="h-28 bg-gradient-to-br from-orange-400 to-orange-600 px-4 pt-9 text-white">
                        <p className="text-[9px] font-bold uppercase tracking-widest opacity-80">Welcome back</p>
                        <p className="text-base font-black">Your Dashboard</p>
                    </div>
                    <div className="-mt-6 mx-3 rounded-2xl bg-white shadow-lg border border-slate-100 p-3 flex justify-between">
                        {["120Hz", "Swift", "KMP"].map((k) => (
                            <div key={k} className="text-center">
                                <span className="block w-8 h-8 mx-auto rounded-xl bg-orange-50 border border-orange-100"></span>
                                <span className="block mt-1 text-[8px] font-black text-slate-600">{k}</span>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 space-y-2">
                        {["bg-blue-100", "bg-green-100", "bg-purple-100", "bg-orange-100"].map((c, i) => (
                            <div key={i} className="flex items-center gap-2 rounded-xl bg-slate-50 p-2">
                                <span className={`w-7 h-7 rounded-lg ${c}`}></span>
                                <span className="flex-1 space-y-1">
                                    <span className="block h-1.5 w-3/4 rounded bg-slate-200"></span>
                                    <span className="block h-1.5 w-1/2 rounded bg-slate-100"></span>
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute bottom-0 inset-x-0 h-12 border-t border-slate-100 bg-white flex items-center justify-around">
                        {[0, 1, 2, 3].map((i) => <span key={i} className={`w-5 h-5 rounded-md ${i === 0 ? "bg-orange-500" : "bg-slate-200"}`}></span>)}
                    </div>
                </div>
            </div>
            <div className="hidden sm:block w-[170px] h-[340px] rounded-[2.2rem] bg-slate-800 p-2 shadow-2xl translate-y-10" style={{ transform: "translateZ(-20px) translateY(40px) rotate(4deg)" }}>
                <div className="h-full rounded-[1.8rem] bg-gradient-to-b from-slate-50 to-white overflow-hidden p-3 pt-8 space-y-2">
                    <span className="block h-20 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500"></span>
                    <span className="block h-2 w-3/4 rounded bg-slate-300"></span>
                    <span className="block h-2 w-1/2 rounded bg-slate-200"></span>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                        {[0, 1, 2, 3].map((i) => <span key={i} className="h-14 rounded-lg bg-slate-100"></span>)}
                    </div>
                </div>
            </div>
            <span className="sv-float absolute -top-2 right-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-lg text-xs font-black text-slate-800" style={{ transform: "translateZ(80px)" }}>⚡ 120Hz Ready</span>
        </div>
    );
}

function WebVisual() {
    return (
        <div className="relative w-full max-w-[460px]">
            <div className="rounded-2xl bg-white border border-slate-200 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.35)] overflow-hidden">
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                    <span className="ml-3 flex-1 h-5 rounded-md bg-white border border-slate-200"></span>
                </div>
                <div className="flex">
                    <div className="w-14 bg-slate-900 py-4 flex flex-col items-center gap-3">
                        <span className="w-6 h-6 rounded-lg bg-blue-500"></span>
                        {[0, 1, 2, 3].map((i) => <span key={i} className="w-5 h-1.5 rounded-full bg-slate-700"></span>)}
                    </div>
                    <div className="flex-1 p-4">
                        <div className="grid grid-cols-3 gap-2">
                            {["Users", "Revenue", "Uptime"].map((k, i) => (
                                <div key={k} className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                                    <p className="text-[8px] font-bold text-slate-400 uppercase">{k}</p>
                                    <span className={`block mt-1.5 h-2.5 w-3/4 rounded ${["bg-blue-500", "bg-green-500", "bg-orange-500"][i]}`}></span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-3 rounded-xl border border-slate-100 p-3">
                            <svg viewBox="0 0 200 60" className="w-full h-20">
                                <path d="M0 50 L25 42 L50 46 L75 30 L100 34 L125 18 L150 22 L175 10 L200 6" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M0 55 L40 50 L80 44 L120 40 L160 30 L200 26" fill="none" stroke="#f97316" strokeWidth="2" strokeDasharray="4 5" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sv-float absolute -bottom-8 -left-6 rounded-xl bg-slate-900 px-4 py-3 font-mono text-[11px] shadow-2xl" style={{ transform: "translateZ(80px)" }}>
                <p className="text-slate-400">$ deploy --edge</p>
                <p className="text-green-400">✓ zero-downtime · CI/CD</p>
            </div>
            <span className="sv-float absolute -top-5 -right-4 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-lg text-xs font-black text-slate-800" style={{ transform: "translateZ(60px)", animationDelay: "-2s" }}>⚛️ React · Next.js</span>
        </div>
    );
}

function AIVisual() {
    return (
        <div className="relative w-[320px] h-[320px] sm:w-[360px] sm:h-[360px]">
            <div className="absolute inset-0 rounded-[2.5rem] bg-slate-900 overflow-hidden shadow-[0_40px_80px_-20px_rgba(15,23,42,0.5)]">
                <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(34,197,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.4) 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
                {/* Lens */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-slate-700 to-slate-950 ring-8 ring-slate-800 shadow-inner flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400/40 via-emerald-600/40 to-slate-900 ring-4 ring-slate-700 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-slate-950 ring-2 ring-green-400/50"></div>
                    </div>
                </div>
                {/* Detection boxes */}
                <div className="absolute left-[12%] top-[14%] w-20 h-16 border-2 border-green-400 rounded-md">
                    <span className="absolute -top-5 left-0 px-1.5 py-0.5 rounded bg-green-500 text-[8px] font-black text-white">FACE 98%</span>
                </div>
                <div className="absolute right-[10%] bottom-[16%] w-24 h-14 border-2 border-emerald-300 rounded-md">
                    <span className="absolute -top-5 left-0 px-1.5 py-0.5 rounded bg-emerald-400 text-[8px] font-black text-slate-900">OCR · INVOICE</span>
                </div>
                <div className="sv-scan absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent shadow-[0_0_12px_rgba(74,222,128,0.9)]"></div>
            </div>
            <div className="sv-float absolute -right-8 top-8 rounded-xl bg-white border border-slate-200 p-3 shadow-2xl w-44" style={{ transform: "translateZ(80px)" }}>
                <p className="text-[10px] font-black text-slate-900">🤖 RAG Agent</p>
                <p className="mt-1 text-[9px] font-medium text-slate-500 leading-snug">Answer grounded in your enterprise data.</p>
            </div>
        </div>
    );
}

function GrowthVisual() {
    return (
        <div className="relative w-full max-w-[420px]">
            <div className="rounded-[1.75rem] bg-white border border-slate-200 p-5 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.3)]">
                <div className="flex items-center gap-2 h-10 rounded-full bg-slate-50 border border-slate-200 px-4">
                    <span className="text-sm">🔍</span>
                    <span className="h-2 w-40 rounded bg-slate-200"></span>
                </div>
                <div className="mt-4 rounded-2xl bg-gradient-to-br from-purple-50 to-fuchsia-50 border border-purple-200 p-4">
                    <p className="text-[10px] font-black text-purple-700 uppercase tracking-wider">✨ AI Overview</p>
                    <span className="block mt-2 h-2 w-full rounded bg-purple-200/70"></span>
                    <span className="block mt-1.5 h-2 w-5/6 rounded bg-purple-200/70"></span>
                    <span className="inline-flex mt-3 items-center gap-1 px-2 py-1 rounded-md bg-white border border-purple-200 text-[10px] font-black text-purple-700">Cited: your brand</span>
                </div>
                <div className="mt-4 space-y-2.5">
                    {[1, 2, 3].map((rank) => (
                        <div key={rank} className={`flex items-center gap-3 rounded-xl p-2.5 ${rank === 1 ? "bg-slate-900 text-white" : "bg-slate-50"}`}>
                            <span className={`w-6 h-6 rounded-md text-[10px] font-black flex items-center justify-center ${rank === 1 ? "bg-purple-500" : "bg-slate-200 text-slate-500"}`}>#{rank}</span>
                            <span className={`h-2 flex-1 rounded ${rank === 1 ? "bg-white/40" : "bg-slate-200"}`}></span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="sv-float absolute -left-8 -bottom-6 rounded-xl bg-white border border-slate-200 p-3 shadow-2xl" style={{ transform: "translateZ(70px)" }}>
                <div className="flex items-end gap-1 h-10">
                    {[30, 45, 60, 80, 100].map((h, i) => (
                        <span key={i} className="w-3 rounded-t bg-gradient-to-t from-purple-600 to-fuchsia-400" style={{ height: `${h}%` }}></span>
                    ))}
                </div>
                <p className="mt-1 text-[9px] font-black text-slate-700">ROI ↗</p>
            </div>
            <span className="sv-float absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-lg text-xs font-black text-slate-800" style={{ transform: "translateZ(60px)", animationDelay: "-3s" }}>🎙️ Voice · AEO</span>
        </div>
    );
}

const VISUALS = { mobile: MobileVisual, web: WebVisual, ai: AIVisual, growth: GrowthVisual };

/* ---------- Pieces ---------- */

// Where each annotation sits around the mockup, and where its connector meets the mockup (stage %)
const CALLOUT_SLOTS = {
    4: [
        { side: "left", style: { left: 0, top: "6%" }, from: [24, 16], to: [37, 32] },
        { side: "right", style: { right: 0, top: "6%" }, from: [76, 16], to: [63, 32] },
        { side: "left", style: { left: 0, bottom: "6%" }, from: [24, 84], to: [37, 68] },
        { side: "right", style: { right: 0, bottom: "6%" }, from: [76, 84], to: [63, 68] },
    ],
    3: [
        { side: "left", style: { left: 0, top: "8%" }, from: [24, 18], to: [36, 34] },
        { side: "right", style: { right: 0, top: "38%" }, from: [76, 48], to: [64, 50] },
        { side: "left", style: { left: 0, bottom: "8%" }, from: [24, 82], to: [36, 66] },
    ],
};

// Mockup that tilts toward the cursor
function TiltMockup({ children }) {
    const ref = useRef(null);

    const handleMove = (e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        ref.current.style.transform = `rotateX(${-y * 16}deg) rotateY(${x * 20}deg)`;
    };

    const reset = () => {
        if (ref.current) ref.current.style.transform = "rotateX(6deg) rotateY(-8deg)";
    };

    return (
        <div className="relative flex items-center justify-center py-6" style={{ perspective: "1200px" }} onPointerMove={handleMove} onPointerLeave={reset}>
            <div ref={ref} className="relative transition-transform duration-500 ease-out scale-[0.78] sm:scale-90 lg:scale-[0.85] xl:scale-95" style={{ transformStyle: "preserve-3d", transform: "rotateX(6deg) rotateY(-8deg)" }}>
                {children}
            </div>
        </div>
    );
}

function Callout({ item, service, align = "left" }) {
    return (
        <div className={align === "right" ? "lg:text-left" : "lg:text-right"}>
            <p className={`flex items-center gap-2 flex-wrap text-[15px] font-black text-slate-900 leading-snug ${align === "right" ? "" : "lg:justify-end"}`}>
                <span className={`lg:hidden w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></span>
                {item.title}
                {item.tag && <span className="text-white bg-green-600 text-[8px] font-black px-1.5 py-0.5 rounded-sm">{item.tag}</span>}
            </p>
            <p className="mt-1.5 text-[13.5px] text-slate-600 leading-relaxed font-medium">
                {item.lead && <span className={`font-bold ${service.text}`}>{item.lead} </span>}
                {item.desc}
            </p>
        </div>
    );
}

function ServiceSection({ service, index, sectionRef }) {
    const Visual = VISUALS[service.id];
    const slots = CALLOUT_SLOTS[service.items.length];

    return (
        <section
            ref={sectionRef}
            id={`service-${service.id}`}
            className={`relative py-20 md:py-28 overflow-hidden scroll-mt-36 ${index % 2 ? "bg-white" : "bg-slate-50"}`}
        >
            {/* Giant outlined word behind everything */}
            <span className="sv-outline absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 text-[22vw] lg:text-[16rem] font-black leading-none tracking-tighter whitespace-nowrap select-none pointer-events-none">
                {service.word}
            </span>
            <div className={`absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-gradient-to-br ${service.tint} blur-[90px] opacity-90 pointer-events-none`}></div>

            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-3">
                        <span className={`text-sm font-black tabular-nums ${service.text}`}>0{index + 1}</span>
                        <span className={`h-px w-10 bg-gradient-to-r ${service.gradient}`}></span>
                        <span className={`px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest ${service.badgeStyle}`}>{service.badge}</span>
                    </div>
                    <h2 className="mt-5 text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.02]">{service.title}</h2>
                    <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed font-medium">{service.intro}</p>
                </div>

                {/* Annotated stage (desktop) */}
                <div className="hidden lg:block relative mt-14 h-[560px]">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none">
                        {slots.map((slot, i) => (
                            <line
                                key={i}
                                x1={slot.from[0]} y1={slot.from[1]} x2={slot.to[0]} y2={slot.to[1]}
                                stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5"
                                vectorEffect="non-scaling-stroke"
                                className={`sv-dash ${service.text} opacity-60`}
                            />
                        ))}
                    </svg>
                    {slots.map((slot, i) => (
                        <span
                            key={`dot-${i}`}
                            className={`absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full bg-gradient-to-br ${service.gradient} ring-4 ring-white shadow`}
                            style={{ left: `${slot.to[0]}%`, top: `${slot.to[1]}%` }}
                        ></span>
                    ))}

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <TiltMockup>
                            <Visual />
                        </TiltMockup>
                    </div>

                    {service.items.map((item, i) => (
                        <div key={item.title} className="absolute w-[23%]" style={slots[i].style}>
                            <Callout item={item} service={service} align={slots[i].side === "left" ? "left" : "right"} />
                        </div>
                    ))}
                </div>

                {/* Stacked (mobile / tablet) */}
                <div className="lg:hidden mt-8">
                    <TiltMockup>
                        <Visual />
                    </TiltMockup>
                    <div className="mt-6 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                        {service.items.map((item) => (
                            <Callout key={item.title} item={item} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Page ---------- */

function ServicesPage() {
    const sectionRefs = useRef([]);
    const [active, setActive] = useState(0);

    // Scroll-spy for the sticky service menu
    useEffect(() => {
        let frame;
        const update = () => {
            const line = window.innerHeight * 0.4;
            let current = 0;
            sectionRefs.current.forEach((el, i) => {
                if (el && el.getBoundingClientRect().top < line) current = i;
            });
            setActive(current);
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
    }, []);

    const jumpTo = (index) => {
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <main className="page-enter bg-slate-50 pt-20 min-h-screen relative overflow-x-clip">

            {/* HERO */}
            <section className="relative pt-20 pb-14 md:pt-28 md:pb-16">
                <div className="absolute inset-0 bg-grid pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-orange-100/60 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95]">
                        Services & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Solutions.</span>
                    </h1>
                    <p className="mt-6 text-base md:text-[22px] text-slate-600 max-w-3xl mx-auto font-medium leading-snug">
                        Comprehensive technical and marketing solutions designed to transform complex business ideas into market-leading products.
                    </p>
                </div>
            </section>

            {/* Sticky service menu */}
            <div className="sticky top-20 z-30 py-3">
                <div className="mx-auto w-max max-w-[calc(100%-2rem)] overflow-x-auto rounded-full bg-white/85 backdrop-blur-xl border border-slate-200 shadow-lg shadow-slate-200/60 p-1.5 flex gap-1" style={{ scrollbarWidth: "none" }}>
                    {SERVICES.map((service, i) => (
                        <button
                            key={service.id}
                            onClick={() => jumpTo(i)}
                            className={`shrink-0 flex items-center gap-2 px-3.5 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${i === active ? `bg-gradient-to-r ${service.gradient} text-white shadow-md` : "text-slate-500 hover:text-slate-900"}`}
                        >
                            <span>{service.icon}</span>
                            <span className={i === active ? "" : "hidden sm:inline"}>{service.badge}</span>
                        </button>
                    ))}
                </div>
            </div>

            {SERVICES.map((service, i) => (
                <ServiceSection
                    key={service.id}
                    service={service}
                    index={i}
                    sectionRef={(el) => (sectionRefs.current[i] = el)}
                />
            ))}

            <style dangerouslySetInnerHTML={{__html: `
                .sv-float { animation: svFloat 6s ease-in-out infinite; }
                @keyframes svFloat { 0%, 100% { translate: 0 0; } 50% { translate: 0 -10px; } }

                .sv-scan { animation: svScan 3s ease-in-out infinite; }
                @keyframes svScan { 0%, 100% { top: 12%; } 50% { top: 86%; } }

                .sv-dash { animation: svDash 1.5s linear infinite; }
                @keyframes svDash { to { stroke-dashoffset: -20; } }

                .sv-outline { color: transparent; -webkit-text-stroke: 2px rgba(148, 163, 184, 0.28); }

                @media (prefers-reduced-motion: reduce) {
                    .sv-float, .sv-scan, .sv-dash { animation: none; }
                }
            `}} />
        </main>
    );
}

export default ServicesPage;
