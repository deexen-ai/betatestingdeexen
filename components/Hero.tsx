"use client";

import { useEffect, useState } from "react";
import WaitlistForm from "./WaitlistForm";
import LetterGlitch from "./LetterGlitch";

export default function Hero() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <section id="hero" className="relative pt-32 pb-32 border-b border-[#333] overflow-hidden text-center bg-black">

            {/* Letter Glitch Background - Faded */}
            <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
                <LetterGlitch
                    glitchColors={['#2b4539', '#61dca3', '#61b3dc', '#FF5500']} // Added Orange
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={true}
                    smooth={true}
                />
            </div>

            {/* Grid Background Inside Box - Kept very subtle */}
            <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none z-0" />

            {/* Conic Gradient - Added Orange Tint */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-conic from-transparent via-orange-500/10 to-transparent opacity-30 blur-3xl rounded-full pointer-events-none animate-pulse z-0"
                style={{ background: "conic-gradient(from 180deg at 50% 50%, #000 0deg, #FF5500 180deg, #000 360deg)" }}
            />

            <div className="relative z-10 px-6 flex flex-col items-center">

                {/* Badge - Orange Accent */}
                <div className={`mb-8 inline-flex opacity-0 translate-y-4 transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0" : ""}`}>
                    <span className="px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-xs font-mono text-orange-400 tracking-widest uppercase shadow-[0_0_10px_rgba(255,85,0,0.2)] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                        LIMITED BETA: FOUNDING 50
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className={`text-[3rem] md:text-[4.5rem] font-bold tracking-tighter text-white mb-6 leading-[1.1] opacity-0 translate-y-4 transition-all duration-700 delay-100 ease-out ${mounted ? "opacity-100 translate-y-0" : ""}`}>
                    Code Smarter. Learn Faster. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
                        Join the Waitlist.
                    </span>
                </h1>

                {/* Subhead */}
                <p className={`text-lg text-[#888] max-w-3xl mx-auto mb-10 leading-relaxed opacity-0 translate-y-4 transition-all duration-700 delay-200 ease-out ${mounted ? "opacity-100 translate-y-0" : ""}`}>
                    Deexen is the first AI-Powered IDE that teaches you as you build. <br />
                    We are currently accepting applications for our <span className="text-orange-400 font-script text-2xl">Founding 50 Beta Cohort</span>.
                </p>

                <div className={`w-full max-w-sm mx-auto opacity-0 translate-y-4 transition-all duration-700 delay-300 ease-out ${mounted ? "opacity-100 translate-y-0" : ""}`}>
                    <WaitlistForm variant="hero" />
                </div>

            </div>
        </section>
    );
}
