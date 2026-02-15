"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ─── SVG Icons ─── */
const Icons = {
    Lightbulb: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
    ),
    Globe: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
    ),
    Code: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
    ),
    Brain: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M12 18v-5" /></svg>
    ),
    Rocket: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /></svg>
    ),
    Bot: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="10" x="3" y="11" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" x2="8" y1="16" y2="16" /><line x1="16" x2="16" y1="16" y2="16" /></svg>
    ),
    Hand: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" /><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" /><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" /><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" /></svg>
    ),
    Music: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
    ),
    Wallet: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" /><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" /></svg>
    ),
    Chart: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
    ),
    Shield: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
    ),
    Puzzle: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707 2.402 2.402 0 0 1 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" /></svg>
    ),
    Image: () => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
    ),
};

/* ─── Project Ideas Data ─── */
const projectIdeas = [
    { title: "AI Chatbot", desc: "Build an intelligent conversational assistant with NLP and context awareness.", icon: <Icons.Bot />, tag: "AI / ML" },
    { title: "Sign Language Translator", desc: "Real-time AI-powered sign language recognition using computer vision.", icon: <Icons.Hand />, tag: "Computer Vision" },
    { title: "Music Streaming App", desc: "A full-stack music player with playlists, search, and audio streaming.", icon: <Icons.Music />, tag: "Full Stack" },
    { title: "Expense Tracker", desc: "Track spending, set budgets, and visualize financial data with charts.", icon: <Icons.Wallet />, tag: "Web App" },
    { title: "Real-time Dashboard", desc: "Live analytics dashboard with WebSocket updates and interactive graphs.", icon: <Icons.Chart />, tag: "Data Viz" },
    { title: "Auth System", desc: "Secure authentication with OAuth, JWT, and role-based access control.", icon: <Icons.Shield />, tag: "Security" },
    { title: "Browser Extension", desc: "Build a productivity tool that extends browser functionality.", icon: <Icons.Puzzle />, tag: "Extension" },
    { title: "AI Image Generator", desc: "Generate images from text prompts using generative AI models.", icon: <Icons.Image />, tag: "AI / ML" },
];

export default function BetaPage() {
    const [mounted, setMounted] = useState(false);
    const whyRef = useRef<HTMLElement>(null);
    const showcaseRef = useRef<HTMLElement>(null);
    const projectsRef = useRef<HTMLElement>(null);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.1 }
        );
        [whyRef, showcaseRef, projectsRef].forEach((ref) => {
            ref.current?.querySelectorAll(".reveal")?.forEach((el) => observer.observe(el));
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="app-full-screen">
            <Navbar />

            <main>
                {/* ──────────────── SUB-PAGE HEADER (updated) ──────────────── */}
                <section className="border-b border-[#333] bg-black">
                    {/* Breadcrumb bar */}
                    <div className="px-6 md:px-10 py-3 flex items-center gap-2 text-xs text-[#555] mt-5">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <span>&gt;</span>
                        <span className="text-orange-500">Beta Program</span>
                    </div>

                    {/* Compact header */}
                    <div className="px-6 md:px-10 py-8 md:py-10">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-[10px] font-mono text-orange-400 tracking-widest uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                Cohort 1
                            </div>
                            <span className="text-[#333]">·</span>
                            <span className="text-[#555] text-xs font-mono">50 spots</span>
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold font-script text-white tracking-tight mb-2">
                            Founding Beta Tester Program
                        </h1>
                        <p className="text-[#666] text-sm max-w-xl">
                            Build real projects with AI guidance. Not vibe coding — skill building. Validate the platform, give feedback, earn rewards.
                        </p>
                    </div>

                    {/* Stats strip */}
                    <div className="grid grid-cols-4 border-t border-[#222]">
                        {[
                            { value: "50", label: "Beta Testers" },
                            { value: "#1", label: "Cohort" },
                            { value: "Free", label: "1 Month Premium" },
                            { value: "✓", label: "Certificate" },
                        ].map((stat, i) => (
                            <div key={i} className={`py-4 px-6 text-center ${i < 3 ? "border-r border-[#222]" : ""}`}>
                                <p className={`text-sm font-bold ${stat.value === "Free" ? "text-orange-500" : "text-white"}`}>{stat.value}</p>
                                <span className="text-[10px] font-mono text-[#555] uppercase tracking-widest">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ──────────────── PROGRAM DETAILS ──────────────── */}
                {/* ──────────────── PROGRAM DETAILS (Creative Redesign) ──────────────── */}
                <section className="bg-black border-b border-[#333] relative overflow-hidden group/section">

                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#222]">

                        {/* LEFT: MISSION (What You Do) */}
                        <div className="p-8 md:p-14 relative">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-orange-500/10 rounded-lg border border-orange-500/20 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                                    <Icons.Code />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block mb-1">The Mission</span>
                                    <h3 className="text-xl md:text-2xl font-bold font-script text-white tracking-tight">What You Build</h3>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { title: "Ship Real Apps", desc: "No more tutorial clones. Build portfolio-ready projects." },
                                    { title: "Write Logic, Not Syntax", desc: "Use AI to handle boilerplate while you focus on problem-solving." },
                                    { title: "Stress Test The Platform", desc: "Push Deexen to its limits. Report bugs. Request features." },
                                    { title: "Join The Feedback Loop", desc: "Your direct input shapes the product roadmap." },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 border border-dashed border-[#222] bg-[#050505] hover:border-orange-500/30 hover:bg-[#0a0a0a] transition-all duration-300 group/item">
                                        <div className="font-mono text-[#333] group-hover/item:text-orange-500/50 transition-colors text-sm pt-0.5">0{i + 1}</div>
                                        <div>
                                            <h4 className="text-white text-sm font-bold mb-1 group-hover/item:text-orange-400 transition-colors">{item.title}</h4>
                                            <p className="text-[#666] text-xs leading-relaxed group-hover/item:text-[#888] transition-colors">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: REWARDS (What You Get) */}
                        <div className="bg-[#050505] p-8 md:p-14 relative overflow-hidden">
                            {/* Glow effect */}
                            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="p-3 bg-[#111] rounded-lg border border-[#333] text-white shadow-lg">
                                    <Icons.Wallet />
                                </div>
                                <div>
                                    <span className="text-[10px] font-mono text-[#666] uppercase tracking-widest block mb-1">The Bounties</span>
                                    <h3 className="text-xl md:text-2xl font-bold font-script text-white tracking-tight">What You Earn</h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                <div className="p-5 border border-dashed border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10 transition-all duration-300 group cursor-default">
                                    <div className="mb-4 text-orange-500"><Icons.Shield /></div>
                                    <p className="text-orange-500/70 text-[10px] uppercase tracking-widest font-mono mb-1">Certificate</p>
                                    <p className="text-white text-sm font-bold">Founding Beta Tester</p>
                                </div>

                                <div className="p-5 border border-dashed border-[#222] bg-[#0a0a0a] hover:border-[#333] hover:bg-[#111] transition-all duration-300 group cursor-default">
                                    <div className="mb-4 text-white"><Icons.Wallet /></div>
                                    <p className="text-[#555] text-[10px] uppercase tracking-widest font-mono mb-1">Premium</p>
                                    <p className="text-[#ccc] text-sm font-bold group-hover:text-white transition-colors">1 Month Free Access</p>
                                </div>

                                <div className="p-5 border border-dashed border-[#222] bg-[#0a0a0a] hover:border-[#333] hover:bg-[#111] transition-all duration-300 group cursor-default">
                                    <div className="mb-4 text-white"><Icons.Rocket /></div>
                                    <p className="text-[#555] text-[10px] uppercase tracking-widest font-mono mb-1">Access</p>
                                    <p className="text-[#ccc] text-sm font-bold group-hover:text-white transition-colors">Early Features First</p>
                                </div>

                                <div className="p-5 border border-dashed border-[#222] bg-[#0a0a0a] hover:border-[#333] hover:bg-[#111] transition-all duration-300 group cursor-default">
                                    <div className="mb-4 text-white"><Icons.Bot /></div>
                                    <p className="text-[#555] text-[10px] uppercase tracking-widest font-mono mb-1">Influence</p>
                                    <p className="text-[#ccc] text-sm font-bold group-hover:text-white transition-colors">Direct Roadmap Voice</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ──────────────── WHY IT MATTERS (System Diff Redesign) ──────────────── */}
                <section className="bg-black border-b border-[#333]" ref={whyRef}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#222]">

                        {/* LEFT: THE TRAP (Most Students) */}
                        <div className="p-8 md:p-14 relative group/trap bg-[#030000]">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-red-500/10 border border-dashed border-red-500/20 text-red-500">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                                </div>
                                <div className="relative">
                                    <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block mb-1">System Failure</span>
                                    <h3 className="text-xl md:text-2xl font-bold font-script text-white tracking-tight relative z-10">Tutorial Purgatory</h3>
                                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-red-500/10 -skew-x-12"></div>
                                </div>
                            </div>

                            <div className="space-y-3 relative pl-4 border-l border-dashed border-[#222]">
                                {[
                                    "Copy generic code from YouTube",
                                    "Use AI to generate without understanding",
                                    "Never learn to debug hard problems",
                                    "Build projects that look like everyone else's",
                                    "Fail technical interviews",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-3 border border-transparent hover:border-red-900/30 hover:bg-red-500/5 transition-all duration-300 group/item relative">
                                        <div className="w-6 h-6 border border-dashed border-red-900/50 flex items-center justify-center shrink-0 text-red-700 font-mono text-xs group-hover/item:text-red-500 group-hover/item:border-red-500 transition-colors">
                                            <span>✕</span>
                                        </div>
                                        <p className="text-sm text-[#666] group-hover/item:text-[#aaa] transition-colors pt-0.5 font-mono">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: THE PATH (With Deexen) */}
                        <div className="bg-[#050505] p-8 md:p-14 relative group/path">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-orange-500/10 border border-dashed border-orange-500/20 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                                    <Icons.Lightbulb />
                                </div>
                                <div className="relative">
                                    <span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest block mb-1">System Online</span>
                                    <h3 className="text-xl md:text-2xl font-bold font-script text-white tracking-tight relative z-10">Builder's Momentum</h3>
                                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-orange-500/20 -skew-x-12"></div>
                                </div>
                            </div>

                            <div className="space-y-3 relative pl-4 border-l border-dashed border-orange-500/20">
                                {[
                                    "Write legitimate logic yourself",
                                    "Use AI to unblock, not replace",
                                    "Master the art of debugging",
                                    "Build unique features that solve real problems",
                                    "Confidently explain your code",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-3 border border-transparent hover:border-orange-500/20 hover:bg-orange-500/5 transition-all duration-300 group/item relative">
                                        <div className="w-6 h-6 border border-dashed border-orange-500/30 flex items-center justify-center shrink-0 text-orange-500 font-mono text-xs group-hover/item:border-orange-500 group-hover/item:bg-orange-500/10 transition-colors shadow-[0_0_5px_rgba(249,115,22,0.1)]">
                                            <span>✓</span>
                                        </div>
                                        <p className="text-sm text-white font-medium group-hover/item:text-orange-100 transition-colors pt-0.5">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    {/* Bottom Banner */}
                    <div className="border-t border-[#222] bg-[#050505] py-4 px-6 flex justify-between items-center text-xs font-mono text-[#444]">
                        <span className="hidden md:inline">SYSTEM STATUS: <span className="text-orange-500">OPERATIONAL</span></span>
                        <div className="flex gap-4 mx-auto md:mx-0">
                            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-red-900 rounded-sm"></span> ERROR</span>
                            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-orange-500 rounded-sm animate-pulse"></span> ACTIVE</span>
                        </div>
                    </div>
                </section>

                {/* ──────────────── SHOWCASE ──────────────── */}
                <section className="bg-black border-b border-[#333]" ref={showcaseRef}>
                    {/* Section header */}
                    <div className="p-10 md:p-12 text-center border-b border-[#333] reveal">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="w-8 h-8 flex items-center justify-center text-orange-500">
                                <Icons.Globe />
                            </div>
                            <h2 className="text-2xl font-bold font-script text-white tracking-tight">Showcase Where It Matters</h2>
                        </div>
                        <p className="text-[#666] text-sm">Publish your work where it actually counts.</p>
                    </div>

                    {/* Three columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#333]">
                        {[
                            {
                                platform: "LinkedIn",
                                desc: "Share your learning journey and project breakdowns with your professional network.",
                                color: "text-blue-400",
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                                ),
                            },
                            {
                                platform: "GitHub",
                                desc: "Display clean, structured repositories that reflect real understanding — not cloned tutorials.",
                                color: "text-white",
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                ),
                            },
                            {
                                platform: "Portfolio Website",
                                desc: "Build your own portfolio — a personal showcase of everything you've learned and created.",
                                color: "text-orange-400",
                                icon: <Icons.Code />,
                            },
                        ].map((item) => (
                            <div key={item.platform} className="p-10 md:p-12 reveal group hover:bg-[#080808] transition-colors relative">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className={`w-12 h-12 flex items-center justify-center bg-[#111] border border-[#222] rounded-lg mb-6 ${item.color} group-hover:border-orange-500/30 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-all duration-300`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-orange-500 transition-colors">{item.platform}</h3>
                                <p className="text-[#888] text-sm leading-relaxed group-hover:text-[#aaa] transition-colors">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Tagline banner */}
                    <div className="border-t border-[#333] p-8 md:p-10 text-center reveal">
                        <p className="text-[#666] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
                            Not <span className="text-[#555] line-through">&quot;Here&apos;s a clone tutorial.&quot;</span>
                            <br />
                            But <span className="text-white font-medium">&quot;Here&apos;s what I built, here&apos;s what I learned, here&apos;s how it works.&quot;</span>
                        </p>
                        <p className="text-orange-500 text-sm font-semibold mt-4">That hits differently.</p>
                    </div>
                </section>

                {/* ──────────────── PROJECT IDEAS ──────────────── */}
                <section className="bg-black border-b border-[#333]" ref={projectsRef}>
                    {/* Section header */}
                    <div className="p-10 md:p-12 text-center border-b border-[#333] reveal">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="w-8 h-8 flex items-center justify-center text-orange-500">
                                <Icons.Rocket />
                            </div>
                            <h2 className="text-2xl font-bold font-script text-white tracking-tight">Project Ideas to Get Started</h2>
                        </div>
                        <p className="text-[#666] text-sm">Real projects. Real skills. Guided by AI, built by you.</p>
                    </div>

                    {/* Project grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0">
                        {projectIdeas.map((project, i) => (
                            <div
                                key={project.title}
                                className={`p-8 reveal group hover:bg-[#0a0a0a] transition-all duration-300 relative border-b sm:border-b-0 border-[#333] ${i % 4 !== 3 ? "sm:border-r sm:border-[#333]" : ""} ${i < 4 ? "lg:border-b lg:border-[#333]" : ""}`}
                            >
                                {/* Hover bar */}
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Tag */}
                                <span className="inline-block text-[10px] font-mono text-[#555] uppercase tracking-widest mb-4 group-hover:text-orange-500/60 transition-colors">
                                    {project.tag}
                                </span>

                                {/* Icon */}
                                <div className="w-10 h-10 flex items-center justify-center bg-[#111] border border-[#222] rounded-lg mb-5 text-[#888] group-hover:text-orange-500 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                                    {project.icon}
                                </div>

                                <h3 className="font-bold text-white text-base mb-2 group-hover:text-orange-500 transition-colors">{project.title}</h3>
                                <p className="text-[#888] text-xs leading-relaxed group-hover:text-[#aaa] transition-colors">{project.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* More ideas teaser */}
                    <div className="border-t border-[#333] p-8 text-center reveal">
                        <p className="text-[#555] text-sm">
                            And <span className="text-orange-500 font-semibold">many more</span> project ideas inside the platform.
                        </p>
                    </div>
                </section>

                {/* ──────────────── BOTTOM CTA ──────────────── */}
                <section className="py-28 bg-black border-b border-[#333] text-center">
                    <div className={`px-6 opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-out ${mounted ? "opacity-100 translate-y-0" : ""}`}>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-4 tracking-tight">
                            Ready to build something{" "}
                            <span className="text-orange-500">real?</span>
                        </h2>
                        <p className="text-[#888] mb-10 max-w-md mx-auto text-sm">
                            Join the Founding 50 beta and start building a portfolio that actually means something.
                        </p>
                        <button
                            onClick={() => window.location.href = "/"}
                            className="bg-white text-black text-sm px-8 py-3 rounded-md font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                        >
                            Join the Waitlist →
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
