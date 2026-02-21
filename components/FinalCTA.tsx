"use client";

import { useEffect, useRef } from "react";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
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
        <section className="py-32 bg-black border-b border-[#333] text-center" ref={sectionRef}>
            <div className="reveal px-6">
                <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
                    Join the <span className="text-orange-500">Founding 50.</span>
                </h2>
                <p className="text-[#888] mb-10 max-w-md mx-auto">
                    Secure your spot in Cohort 1. <br />
                    Get 1 Month Premium + Official Certificate.
                </p>
                <div className="max-w-xs mx-auto">
                    <WaitlistForm variant="compact" />
                </div>
            </div>
        </section>
    );
}
