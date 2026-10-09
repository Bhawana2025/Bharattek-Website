import { useEffect, useRef, useState } from "react";
import Reveal from "../Components/Reveal";

const TECH = [
    {
        id: "mobile",
        icon: "📱",
        title: "Mobile OS",
        label: "Native & Multiplatform",
        tags: ["Kotlin", "Swift", "Jetpack Compose", "KMP"],
        paragraphs: [
            "We build uncompromised mobile experiences. For Android, we utilize **Kotlin and Jetpack Compose** for reactive UI. For iOS, we deploy **Swift**.",
            "To maximize efficiency without sacrificing native performance, we implement **Kotlin Multiplatform (KMP)** to share core business logic and state management (MVVM) across both ecosystems seamlessly.",
        ],
        plate: "from-blue-500 to-blue-700",
        text: "text-blue-600",
        chip: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
        id: "web",
        icon: "💻",
        title: "Web Portals",
        label: "Frontend Architecture",
        tags: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
        paragraphs: [
            "Our web interfaces are built for scale and speed. We use **React.js** and **Next.js** to create dynamic, component-driven B2B dashboards and user portals. Combined with **Tailwind CSS** for pixel-perfect utility styling and **TypeScript** for type safety, our web apps are robust, accessible, and fast.",
        ],
        plate: "from-orange-400 to-orange-600",
        text: "text-orange-500",
        chip: "bg-orange-50 border-orange-200 text-orange-700",
    },
    {
        id: "backend",
        icon: "☁️",
        title: "Backend & Cloud",
        label: "Server & Infrastructure",
        tags: ["Python", "AWS S3 & EC2", "PostgreSQL", "Firebase"],
        paragraphs: [
            "The backbone of our applications. We architect secure RESTful APIs and microservices. We leverage **AWS (Amazon Web Services)** for scalable cloud hosting, S3 for heavy media storage (like automated invoice PDFs), and rely on relational databases like **PostgreSQL** for complex data integrity.",
        ],
        plate: "from-green-500 to-green-700",
        text: "text-green-600",
        chip: "bg-green-50 border-green-200 text-green-700",
    },
    {
        id: "ai",
        icon: "🧠",
        title: "AI & Vision",
        label: "Deep Tech & Automation",
        tags: ["OpenCV", "Camera2 API", "Python Deep Learning"],
        paragraphs: [
            "We don't just stick to the basics. We integrate heavy-duty computer vision libraries like **OpenCV** directly into our apps for real-time image processing, background data recording, and visual similarity checks. We heavily utilize native hardware APIs like **Camera2** for granular control over media capture.",
        ],
        plate: "from-purple-500 to-purple-700",
        text: "text-purple-600",
        chip: "bg-purple-50 border-purple-200 text-purple-700",
    },
    {
        id: "seo",
        icon: "🔍",
        title: "GEO, AEO & SEO",
        label: "Visibility & Tech",
        tags: ["Technical SEO (SSR)", "Google Analytics 4", "Generative Engine Optimization", "Answer Engine Optimization", "Meta Graph API"],
        paragraphs: [
            "Building a great product is only half the battle. We engineer our web platforms using **Server-Side Rendering (SSR)** to ensure search engines crawl them instantly. We wire up deep telemetry using **GA4** to track user conversions, and integrate advertising APIs to run targeted, data-driven marketing campaigns that scale.",
        ],
        plate: "from-rose-500 to-rose-700",
        text: "text-rose-500",
        chip: "bg-rose-50 border-rose-200 text-rose-700",
    },
    {
        id: "architecture",
        icon: "🏛️",
        title: "Architecture",
        label: "Code Quality Standards",
        tags: ["Clean Architecture", "MVVM", "CI/CD Pipelines"],
        paragraphs: [
            "Behind every tool is a strict set of rules. We adhere entirely to **Clean Architecture** principles, strictly separating the Presentation, Domain, and Data layers. Using **MVVM** and reactive flows, we guarantee that our codebases remain scalable, testable, and completely resistant to structural decay over time.",
        ],
        plate: "from-slate-700 to-slate-900",
        text: "text-slate-600",
        chip: "bg-slate-900 border-slate-800 text-slate-100",
    },
    {
        id: "design",
        icon: "🎨",
        title: "UI/UX Design",
        label: "Premium Interfaces",
        tags: ["Figma Premium", "Wireframing", "Prototyping"],
        paragraphs: [
            "We believe that great software starts before a single line of code is written. Utilizing advanced **Figma** design systems, we map out perfectly consistent interfaces, intuitive user journeys, and high-fidelity prototypes to align vision with reality.",
        ],
        plate: "from-indigo-500 to-indigo-700",
        text: "text-indigo-500",
        chip: "bg-indigo-50 border-indigo-200 text-indigo-700",
    },
];

const LAYER_GAP = 30;

// Renders **bold** segments inside a plain string
function RichText({ text }) {
    return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? <strong key={i} className="font-black text-slate-900">{part}</strong> : part
    );
}

// Isometric stack of layers — one per tech category; the active layer lifts out
function TechStack({ active, onSelect, compact = false }) {
    const size = compact ? 190 : 250;
    const gap = compact ? 22 : LAYER_GAP;

    return (
        <div className="relative flex items-center justify-center" style={{ height: compact ? 360 : 520 }}>
            <div className="absolute w-[70%] h-[50%] rounded-full bg-gradient-to-br from-orange-200/60 via-blue-200/60 to-green-200/60 blur-[70px] pointer-events-none"></div>

            <div
                className="relative"
                style={{
                    width: size,
                    height: size,
                    transformStyle: "preserve-3d",
                    transform: `rotateX(58deg) rotateZ(-45deg) translateZ(${-((TECH.length - 1) * gap) / 2}px)`,
                }}
            >
                {/* Shadow on the floor */}
                <div className="absolute inset-0 rounded-[2rem] bg-slate-900/15 blur-xl" style={{ transform: "translateZ(-20px)" }}></div>

                {[...TECH].reverse().map((tech) => {
                    const index = TECH.indexOf(tech);
                    const level = TECH.length - 1 - index; // first category on top
                    const isActive = index === active;
                    const lift = isActive ? gap * 1.6 : 0;

                    return (
                        <button
                            key={tech.id}
                            onClick={() => onSelect(index)}
                            className={`absolute inset-0 rounded-[2rem] border transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer text-left ${isActive
                                ? `bg-gradient-to-br ${tech.plate} border-white/40 shadow-[0_30px_60px_-10px_rgba(15,23,42,0.45)]`
                                : "bg-white/85 border-slate-200 shadow-[0_10px_30px_-12px_rgba(15,23,42,0.25)] hover:bg-white"}`}
                            style={{ transform: `translateZ(${level * gap + lift}px)` }}
                            aria-label={`Show ${tech.title}`}
                            aria-pressed={isActive}
                        >
                            {isActive ? (
                                <>
                                    <span className={`absolute left-5 bottom-5 flex items-center gap-2 font-black tracking-tight text-white ${compact ? "text-sm" : "text-base"}`}>
                                        <span className={compact ? "text-lg" : "text-xl"}>{tech.icon}</span>
                                        {tech.title}
                                    </span>
                                    <span className={`absolute right-5 top-5 font-black tabular-nums text-white/80 ${compact ? "text-xs" : "text-sm"}`}>
                                        0{index + 1}
                                    </span>
                                </>
                            ) : (
                                <>
                                    {/* Category-coloured edges — the visible sides of a stacked layer */}
                                    <span className={`absolute left-6 right-6 bottom-2.5 h-1.5 rounded-full bg-gradient-to-r ${tech.plate} opacity-80`}></span>
                                    <span className={`absolute top-6 bottom-6 right-2.5 w-1.5 rounded-full bg-gradient-to-b ${tech.plate} opacity-80`}></span>
                                </>
                            )}
                            {isActive && (
                                <span className="absolute inset-3 rounded-[1.5rem] border border-white/30 pointer-events-none" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.25) 1px, transparent 1px)", backgroundSize: "14px 14px" }}></span>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

function TechPage({ setCurrentPage }) {
    const [active, setActive] = useState(0);
    const sectionRefs = useRef([]);

    // Highlight the last category whose block has reached the middle of the viewport
    useEffect(() => {
        let frame;
        const update = () => {
            const middle = window.innerHeight * 0.5;
            let current = 0;
            sectionRefs.current.forEach((el, i) => {
                if (el && el.getBoundingClientRect().top < middle) current = i;
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

    const scrollTo = (index) => {
        setActive(index);
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    return (
        <main className="page-enter bg-slate-50 pt-20 min-h-screen relative overflow-x-clip">

            {/* HERO */}
            <section className="relative pt-20 pb-16 md:pt-28 md:pb-20">
                <div className="absolute inset-0 bg-grid pointer-events-none"></div>
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute top-10 right-1/4 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.95]">
                        The <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F97316] via-[#2563EB] to-[#16A34A] inline-block">Tech Stack.</span>
                    </h1>
                    <p className="mt-6 text-base md:text-[20px] text-slate-600 max-w-3xl mx-auto font-medium leading-snug">
                        We don't just write code, we engineer solutions. Here is a transparent look at the modern frameworks, languages, and tools powering our digital products today.
                    </p>

                    {/* Category quick-jump */}
                    <div className="mt-10 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
                        {TECH.map((tech, i) => (
                            <button
                                key={tech.id}
                                onClick={() => scrollTo(i)}
                                className="group inline-flex items-center gap-2 pl-2 pr-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                            >
                                <span className={`w-7 h-7 rounded-full bg-gradient-to-br ${tech.plate} flex items-center justify-center text-sm`}>{tech.icon}</span>
                                <span className="text-sm font-bold text-slate-800">{tech.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* STACK + CATEGORIES */}
            <section className="relative bg-white border-y border-slate-200">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-16">

                    {/* Sticky 3D stack (desktop) */}
                    <div className="hidden lg:block">
                        <div className="sticky top-24 py-10">
                            <TechStack active={active} onSelect={scrollTo} />
                            <div className="mt-2 text-center">
                                <p className={`text-xs font-black uppercase tracking-[0.25em] transition-colors duration-500 ${TECH[active].text}`}>{TECH[active].label}</p>
                                <p className="mt-1 text-sm font-bold text-slate-400 tabular-nums">Layer 0{active + 1} / 0{TECH.length}</p>
                            </div>
                        </div>
                    </div>

                    {/* Compact stack (mobile/tablet) */}
                    <div className="lg:hidden pt-10">
                        <TechStack active={active} onSelect={scrollTo} compact />
                    </div>

                    {/* Categories */}
                    <div className="lg:py-24 pb-20">
                        {TECH.map((tech, i) => {
                            const isActive = i === active;
                            return (
                                <article
                                    key={tech.id}
                                    ref={(el) => (sectionRefs.current[i] = el)}
                                    data-index={i}
                                    className={`relative py-12 md:py-16 border-t border-slate-100 first:border-t-0 transition-opacity duration-500 ${isActive ? "lg:opacity-100" : "lg:opacity-35"}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`text-sm font-black tabular-nums ${tech.text}`}>0{i + 1}</span>
                                        <span className={`h-px w-10 bg-gradient-to-r ${tech.plate}`}></span>
                                        <span className={`text-[11px] font-black tracking-[0.2em] uppercase ${tech.text}`}>{tech.label}</span>
                                    </div>

                                    <h3 className="mt-4 flex items-center gap-4 text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
                                        <span className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${tech.plate} flex items-center justify-center text-2xl shadow-lg transition-transform duration-500 ${isActive ? "rotate-0 scale-100" : "-rotate-6 scale-90"}`}>{tech.icon}</span>
                                        {tech.title}
                                    </h3>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {tech.tags.map((tag) => (
                                            <span key={tag} className={`px-3.5 py-1.5 border text-xs font-bold rounded-lg transition-colors duration-500 ${isActive ? tech.chip : "bg-slate-50 border-slate-200 text-slate-600"}`}>{tag}</span>
                                        ))}
                                    </div>

                                    <div className="mt-6 space-y-4">
                                        {tech.paragraphs.map((paragraph, p) => (
                                            <p key={p} className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                                                <RichText text={paragraph} />
                                            </p>
                                        ))}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* BOTTOM CTA */}
            <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 text-center">
                <Reveal>
                    <div className="relative overflow-hidden bg-white border border-slate-200 p-10 md:p-14 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-100/70 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100/70 rounded-full blur-[80px] pointer-events-none"></div>
                        <div className="relative">
                            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Ready to build with this stack?</h3>
                            <p className="text-[15.8px] text-slate-500 font-medium mb-8 max-w-lg mx-auto">
                                Whether you need a scalable MVP or a complex enterprise system, our engineering team is ready to deliver.
                            </p>
                            <button
                                onClick={() => setCurrentPage?.("contact")}
                                className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm transition-all shadow-[0_4px_12px_rgba(15,23,42,0.2)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.3)] hover:-translate-y-0.5 cursor-pointer"
                            >
                                Start Your Project
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </button>
                        </div>
                    </div>
                </Reveal>
            </section>
        </main>
    );
}

export default TechPage;
