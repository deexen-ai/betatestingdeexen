"use client";

import { useEffect, useRef } from "react";

// Icons as components for cleaner usage
const Icons = {
    Debug: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
    ),
    Enhancement: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
    ),
    Expansion: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
    ),
    Strict: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
    ),
    Free: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
    ),
};

export default function Features() {
    const sectionRef = useRef<HTMLElement>(null);

    const features = [
        {
            title: "Debug Mode",
            desc: "Identifies errors, explains why they occur, and provides fixes.",
            icon: <Icons.Debug />
        },
        {
            title: "Enhancement",
            desc: "Improves code quality, suggests refactoring, and optimizations.",
            icon: <Icons.Enhancement />
        },
        {
            title: "Expansion",
            desc: "Adds advanced features and generates additional modules.",
            icon: <Icons.Expansion />
        },
        {
            title: "Strict Teaching",
            desc: "Provides hints and guidance instead of instant answers.",
            icon: <Icons.Strict />
        },
        {
            title: "Free Coding",
            desc: "Code freely with minimal interruption and live monitoring.",
            icon: <Icons.Free />
        },
    ];

    return (
        <section className="bg-black border-b border-[#333]" id="features" ref={sectionRef}>
            <div className="p-12 border-b border-[#333] text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Multiple AI Modes</h2>
                <p className="text-[#666]">Depending on your learning or development preference.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#333]">
                {features.map((feat, i) => (
                    <div
                        key={feat.title}
                        className="p-8 group hover:bg-[#0a0a0a] transition-all duration-300 h-full relative"
                    >
                        {/* Hover Orange Bar */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="w-10 h-10 flex items-center justify-center bg-[#111] border border-[#222] rounded-lg mb-6 text-[#888] group-hover:text-orange-500 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                            {feat.icon}
                        </div>

                        <h3 className="font-medium text-white text-base mb-2 group-hover:text-orange-500 transition-colors duration-300">{feat.title}</h3>
                        <p className="text-[#888] text-sm leading-relaxed group-hover:text-[#aaa] transition-colors">{feat.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
