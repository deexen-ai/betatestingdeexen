"use client";

import { useEffect, useRef } from "react";

export default function BetaProgram() {
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
        <section className="bg-black border-b border-[#333]" id="beta" ref={sectionRef}>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#333]">

                {/* Left: Info */}
                <div className="p-12 lg:p-20 reveal">
                    <div className="inline-block px-3 py-1 rounded-full border border-orange-900/30 bg-orange-900/10 text-orange-500 text-xs font-bold uppercase tracking-widest mb-6">
                        Limited Access
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-script text-white mb-6">Founding Beta Tester Program</h2>
                    <p className="text-[#888] mb-8 leading-relaxed">
                        We are launching a structured beta testing program (Cohort 1) to validate product quality
                        and gather feedback before public release.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold text-sm mb-2">Objective</h4>
                            <p className="text-[#666] text-sm">Validate product quality, gather real feedback, and refine platform.</p>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm mb-2">Plan</h4>
                            <p className="text-[#666] text-sm">Select 50 testers. Provide early access. Collect feedback.</p>
                        </div>
                    </div>

                    <a
                        href="/beta"
                        className="inline-flex items-center gap-1.5 mt-8 text-orange-500 text-sm font-medium hover:text-orange-400 transition-colors group"
                    >
                        Learn more about the program
                        <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </a>
                </div>

                {/* Right: Incentives */}
                <div className="bg-[#050505] p-12 lg:p-20 reveal reveal-delay-2">
                    <h3 className="text-xl font-bold text-white mb-8">Incentives</h3>
                    <ul className="space-y-6">
                        {[
                            { title: "1 Month Premium", desc: "Free access upon active participation." },
                            { title: "Official Certificate", desc: "'Founding Beta Tester' verification." },
                            { title: "Early Access", desc: "Try upcoming features before anyone else." },
                            { title: "Future Campaigns", desc: "Priority for collaborations." }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                                <div>
                                    <h4 className="text-white font-medium text-sm">{item.title}</h4>
                                    <p className="text-[#666] text-sm">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
