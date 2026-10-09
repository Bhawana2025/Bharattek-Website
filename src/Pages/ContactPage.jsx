import { useState } from "react";
import Reveal from "../Components/Reveal";

const CONTACT_EMAIL = "help@bharattek.com";

const CHANNELS = [
    {
        label: "Email Us",
        value: CONTACT_EMAIL,
        href: `mailto:${CONTACT_EMAIL}`,
        color: "text-blue-600",
        hover: "group-hover:text-blue-600",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
    {
        label: "Live Chat",
        value: "+91 94678 73151",
        href: "https://wa.me/919467873151",
        external: true,
        color: "text-green-600",
        hover: "group-hover:text-green-600",
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    },
    {
        label: "Headquarters",
        value: "Near BMG Mall, Rewari, Haryana, India",
        color: "text-orange-600",
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </>
        ),
    },
];

const PROJECT_TYPES = [
    { value: "mobile", label: "Native / KMP Mobile App", icon: "📱", gradient: "from-orange-400 to-orange-600" },
    { value: "web", label: "Scalable Web Platform", icon: "💻", gradient: "from-blue-500 to-blue-700" },
    { value: "ai", label: "Applied AI & Vision", icon: "🧠", gradient: "from-green-500 to-green-700" },
    { value: "seo", label: "SEO & Digital Marketing", icon: "🚀", gradient: "from-purple-500 to-purple-700" },
    { value: "full", label: "Full Suite (Dev + Marketing)", icon: "✨", gradient: "from-slate-700 to-slate-900" },
];

const NEXT_STEPS = [
    "We review your requirements within 24 hours.",
    "Schedule a quick technical discovery call.",
    "Receive a detailed architecture and growth proposal.",
];

const FAQS = [
    { q: "Do you sign NDAs?", a: "Absolutely. We prioritize your intellectual property. We sign strict Non-Disclosure Agreements before discussing any proprietary app ideas or data structures." },
    { q: "What is your tech stack?", a: "We specialize in Native Android/iOS, Kotlin Multiplatform (KMP), React, Next.js, and Python FastAPI. We utilize Clean Architecture to ensure enterprise-level scalability." },
    { q: "Do you work with startups?", a: "Yes. We partner with both early-stage startups building their MVP to secure funding, and established enterprises looking to digitize their legacy operations." },
    { q: "How do you handle maintenance?", a: "We offer comprehensive SLA-based maintenance packages post-launch, covering server monitoring, OS version updates, bug fixes, and continuous SEO optimization." },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass = "w-full px-5 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 hover:border-slate-300 transition-all bg-white font-medium text-[16px] text-slate-900 placeholder:text-slate-400";

/* ---------- Pieces ---------- */

// Step-by-step project inquiry. Submitting opens the visitor's email app with the inquiry pre-filled.
function InquiryForm() {
    const [step, setStep] = useState(0);
    const [sent, setSent] = useState(false);
    const [form, setForm] = useState({ firstName: "", lastName: "", email: "", type: "", details: "" });

    const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

    const steps = [
        { title: "What should we call you?", valid: form.firstName.trim().length > 0 },
        { title: "Where can we reach you?", valid: EMAIL_PATTERN.test(form.email.trim()) },
        { title: "What are we building?", valid: form.type !== "" },
        { title: "Tell us about your project.", valid: form.details.trim().length > 0 },
    ];
    const current = steps[step];
    const isLast = step === steps.length - 1;

    const submit = () => {
        const type = PROJECT_TYPES.find((t) => t.value === form.type)?.label ?? "";
        const name = `${form.firstName} ${form.lastName}`.trim();
        const subject = `Project Inquiry — ${type}`;
        const body = `Name: ${name}\nWork Email: ${form.email}\nProject Type: ${type}\n\nProject Details:\n${form.details}`;
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!current.valid) return;
        if (isLast) submit();
        else setStep((s) => s + 1);
    };

    if (sent) {
        return (
            <div className="relative bg-white/90 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-2xl shadow-slate-300/40 text-center min-h-[480px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 text-white text-3xl flex items-center justify-center shadow-lg shadow-green-500/30">✓</div>
                <h3 className="mt-6 text-3xl font-black text-slate-900">Almost there, {form.firstName}!</h3>
                <p className="mt-3 text-[15.5px] text-slate-500 font-medium max-w-sm">
                    Your email app should now be open with your inquiry ready — just hit send. If it didn't open, email us at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-blue-600 hover:underline">{CONTACT_EMAIL}</a>.
                </p>
                <button onClick={() => { setSent(false); setStep(0); }} className="mt-8 text-sm font-bold text-slate-500 hover:text-slate-900 cursor-pointer">← Start a new inquiry</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="relative bg-white/90 backdrop-blur-2xl p-8 sm:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-2xl shadow-slate-300/40 min-h-[480px] flex flex-col">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Project Inquiry</h3>
                    <p className="mt-1 text-[14.5px] text-slate-500 font-medium">Fill out the form below and our technical lead will get back to you directly.</p>
                </div>
                <span className="shrink-0 text-sm font-black text-slate-400 tabular-nums">{step + 1} / {steps.length}</span>
            </div>

            {/* Progress */}
            <div className="mt-6 grid grid-cols-4 gap-2">
                {steps.map((s, i) => (
                    <span key={s.title} className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <span className={`block h-full rounded-full bg-gradient-to-r from-blue-600 to-orange-500 transition-all duration-500 ${i <= step ? "w-full" : "w-0"}`}></span>
                    </span>
                ))}
            </div>

            {/* Step */}
            <div key={step} className="ct-step mt-10 flex-1">
                <p className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{current.title}</p>

                {step === 0 && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label className="block">
                            <span className="text-xs font-bold tracking-widest text-slate-700 mb-2 block uppercase">First Name <span className="text-red-500">*</span></span>
                            <input autoFocus type="text" value={form.firstName} onChange={update("firstName")} className={inputClass} placeholder="John" required />
                        </label>
                        <label className="block">
                            <span className="text-xs font-bold tracking-widest text-slate-700 mb-2 block uppercase">Last Name</span>
                            <input type="text" value={form.lastName} onChange={update("lastName")} className={inputClass} placeholder="Doe" />
                        </label>
                    </div>
                )}

                {step === 1 && (
                    <label className="mt-6 block">
                        <span className="text-xs font-bold tracking-widest text-slate-700 mb-2 block uppercase">Work Email <span className="text-red-500">*</span></span>
                        <input autoFocus type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="john@company.com" required />
                    </label>
                )}

                {step === 2 && (
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Project Type">
                        {PROJECT_TYPES.map((type) => {
                            const selected = form.type === type.value;
                            return (
                                <button
                                    key={type.value}
                                    type="button"
                                    role="radio"
                                    aria-checked={selected}
                                    onClick={() => setForm((f) => ({ ...f, type: type.value }))}
                                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${type.value === "full" ? "sm:col-span-2" : ""} ${selected ? "border-transparent bg-slate-900 text-white shadow-lg -translate-y-0.5" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:shadow-md"}`}
                                >
                                    <span className={`w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center text-base`}>{type.icon}</span>
                                    <span className="text-sm font-bold">{type.label}</span>
                                    {selected && <span className="ml-auto text-sm">✓</span>}
                                </button>
                            );
                        })}
                    </div>
                )}

                {step === 3 && (
                    <label className="mt-6 block">
                        <span className="text-xs font-bold tracking-widest text-slate-700 mb-2 block uppercase">Project Details <span className="text-red-500">*</span></span>
                        <textarea autoFocus rows="5" value={form.details} onChange={update("details")} className={`${inputClass} resize-none text-[15.5px]`} placeholder="Tell us about your requirements, timeline, and current challenges..." required></textarea>
                    </label>
                )}
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center gap-3">
                {step > 0 && (
                    <button type="button" onClick={() => setStep((s) => s - 1)} className="px-5 py-4 rounded-2xl border border-slate-200 bg-white text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                        ← Back
                    </button>
                )}
                <button
                    type="submit"
                    disabled={!current.valid}
                    className="group flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-base sm:text-lg shadow-[0_8px_30px_rgb(15,23,42,0.15)] hover:shadow-[0_12px_40px_rgb(15,23,42,0.25)] hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none cursor-pointer"
                >
                    {isLast ? "Send Inquiry" : "Continue"}
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isLast
                            ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />}
                    </svg>
                </button>
            </div>
            <p className="text-center text-xs font-medium text-slate-500 mt-4 flex items-center justify-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Your information is secure and encrypted.
            </p>
        </form>
    );
}

function FaqItem({ faq, open, onToggle, index }) {
    return (
        <div className="border-b border-slate-200">
            <button onClick={onToggle} className="w-full flex items-center gap-5 py-6 text-left cursor-pointer group" aria-expanded={open}>
                <span className="text-sm font-black text-slate-300 tabular-nums">0{index + 1}</span>
                <span className={`flex-1 text-lg md:text-xl font-black transition-colors ${open ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"}`}>{faq.q}</span>
                <span className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-lg font-black transition-all duration-300 ${open ? "bg-slate-900 text-white rotate-45" : "bg-slate-100 text-slate-500"}`}>+</span>
            </button>
            <div className={`grid transition-all duration-500 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                    <p className="pb-6 pl-10 md:pl-11 pr-12 text-slate-600 font-medium text-[15px] leading-relaxed">{faq.a}</p>
                </div>
            </div>
        </div>
    );
}

/* ---------- Page ---------- */

function ContactPage() {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <main className="page-enter bg-slate-50 min-h-screen pt-20 relative overflow-x-clip">

            {/* HERO + FORM */}
            <section className="relative pt-16 md:pt-24 pb-24">
                <div className="absolute inset-0 bg-grid pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-14 lg:gap-20 relative z-10">
                    {/* Left: pitch + channels */}
                    <div className="lg:col-span-5">
                        <h1 className="text-5xl md:text-[4.2rem] font-black text-slate-900 tracking-tighter leading-[1.02]">
                            Let's build <br />the next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">big thing.</span>
                        </h1>
                        <p className="mt-6 text-[17.5px] text-slate-600 leading-relaxed font-medium">
                            From discovering the perfect architecture to deploying the final production build and scaling your marketing, we are ready to engineer your vision.
                        </p>

                        <div className="mt-10 border-t border-slate-200">
                            {CHANNELS.map((channel) => {
                                const Tag = channel.href ? "a" : "div";
                                return (
                                    <Tag
                                        key={channel.label}
                                        {...(channel.href ? { href: channel.href } : {})}
                                        {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
                                        className="group flex items-center gap-4 py-5 border-b border-slate-200"
                                    >
                                        <span className={`w-11 h-11 shrink-0 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center ${channel.color} group-hover:scale-110 transition-transform`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">{channel.icon}</svg>
                                        </span>
                                        <span className="flex-1 min-w-0">
                                            <span className="block text-[11px] font-bold tracking-widest text-slate-400 uppercase">{channel.label}</span>
                                            <span className={`block mt-0.5 text-base md:text-lg font-black text-slate-900 transition-colors ${channel.hover ?? ""}`}>{channel.value}</span>
                                        </span>
                                        {channel.href && (
                                            <span className="w-9 h-9 shrink-0 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-[-45deg] transition-all duration-300">→</span>
                                        )}
                                    </Tag>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: step form */}
                    <div className="lg:col-span-7 relative">
                        <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/40 via-transparent to-orange-200/40 rounded-[3rem] blur-2xl pointer-events-none"></div>
                        <InquiryForm />
                    </div>
                </div>
            </section>

            {/* WHAT HAPPENS NEXT */}
            <section className="bg-white border-y border-slate-200 py-20">
                <div className="max-w-6xl mx-auto px-6 md:px-12">
                    <Reveal>
                        <h3 className="text-center text-sm font-black text-slate-900 uppercase tracking-[0.25em]">What happens next?</h3>
                        <div className="relative mt-12 grid md:grid-cols-3 gap-10 md:gap-6">
                            <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-500 via-orange-500 to-green-500 opacity-40"></div>
                            {NEXT_STEPS.map((text, i) => (
                                <div key={text} className="relative flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center">
                                    <span className={`relative z-10 w-12 h-12 shrink-0 rounded-2xl text-white font-black flex items-center justify-center shadow-lg ring-8 ring-white bg-gradient-to-br ${["from-blue-500 to-blue-700", "from-orange-400 to-orange-600", "from-green-500 to-green-700"][i]}`}>
                                        {i + 1}
                                    </span>
                                    <p className="md:mt-6 text-[16px] font-bold text-slate-700 leading-snug md:max-w-[240px] pt-2.5 md:pt-0">{text}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24">
                <div className="max-w-6xl mx-auto px-6 md:px-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
                    <Reveal>
                        <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none">Common Inquiries</h3>
                        <p className="text-[16px] text-slate-500 font-medium mt-4">Everything you need to know before we start.</p>
                    </Reveal>
                    <Reveal delay={100}>
                        <div className="border-t border-slate-200">
                            {FAQS.map((faq, i) => (
                                <FaqItem key={faq.q} faq={faq} index={i} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* JOIN OUR ECOSYSTEM */}
            <section className="max-w-4xl mx-auto px-6 md:px-12 pb-28 text-center">
                <Reveal>
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 text-white text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
                        Join Our Ecosystem
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Not looking for a project?</h3>
                    <p className="text-slate-500 font-medium text-base max-w-lg mx-auto mb-10 leading-relaxed">
                        We are always looking for elite engineering talent and strategic partners to help us shape the future of BharatTek.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Careers at BharatTek")}`} className="relative px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 overflow-hidden group">
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl p-[2px]">
                                <span className="block w-full h-full bg-white rounded-[14px]"></span>
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600 font-black tracking-wide group-hover:text-white transition-all">Join the Team</span>
                        </a>
                        <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Partnership Inquiry")}`} className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-sm transition-all shadow-md hover:shadow-lg">
                            Partnerships
                        </a>
                    </div>
                </Reveal>
            </section>

            <style dangerouslySetInnerHTML={{__html: `
                .ct-step { animation: ctStep 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }
                @keyframes ctStep { from { opacity: 0; transform: translateX(16px); } to { opacity: 1; transform: none; } }
                @media (prefers-reduced-motion: reduce) { .ct-step { animation: none; } }
            `}} />
        </main>
    );
}

export default ContactPage;
