"use client";

import { useEffect, useRef } from "react";

export default function Roadmap() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("visible");
                });
            },
            { threshold: 0.1 }
        );
        sectionRef.current?.querySelectorAll(".reveal")?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-black border-b border-[#333]" id="roadmap" ref={sectionRef}>
            <div className="p-12 text-center border-b border-[#333] reveal">
                <h2 className="text-3xl md:text-4xl font-bold font-script text-white tracking-tight">Upcoming Improvements</h2>
                <p className="text-[#666] mt-2 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    In Development
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#333] items-stretch">
                {[
                    {
                        title: "Improvements",
                        items: ["Real-time code observation", "Intelligent feedback system", "Automated error detection", "Performance optimization"]
                    },
                    {
                        title: "Deployment",
                        items: ["One-click deployment", "Cloud platform integration", "Environment config guidance", "Continuous workflow"]
                    },
                    {
                        title: "Domains & Hosting",
                        items: ["Custom domain integration", "Hosting config assistance", "Scalable infrastructure", "Enterprise support"]
                    }
                ].map((r, i) => (
                    <div key={r.title} className={`p-10 reveal reveal-delay-${i} h-full group hover:bg-[#080808] transition-colors`}>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider text-xs border-b border-[#222] pb-4 group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors">
                            {r.title}
                        </h3>
                        <ul className="space-y-3 text-sm text-[#888]">
                            {r.items.map(item => (
                                <li key={item} className="flex gap-2 group-hover:text-[#aaa] transition-colors">
                                    <span className="text-[#444] group-hover:text-orange-500 transition-colors">—</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
