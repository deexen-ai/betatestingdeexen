"use client";

import { useEffect, useRef } from "react";

export default function IDEShowcase() {
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
        <section className="bg-black border-b border-[#333]" id="ide" ref={sectionRef}>
            <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#333]">

                {/* Left: Text */}
                <div className="p-12 lg:p-20 flex flex-col justify-center reveal">
                    <h2 className="text-3xl lg:text-5xl font-bold font-script text-white mb-6 tracking-tight">
                        Complete IDE <br /> Features.
                    </h2>
                    <p className="text-[#888] leading-relaxed mb-8">
                        Deexen is a full IDE, not just a chatbot. It includes file creation,
                        folder management, a built-in terminal, and multi-language support.
                    </p>

                    <ul className="space-y-3 mb-8">
                        {[
                            "File & Folder Creation",
                            "Project File Explorer",
                            "Built-in Terminal",
                            "Multi-language Support",
                            "Secure Login & Profiles"
                        ].map(item => (
                            <li key={item} className="flex items-center gap-3 text-sm text-[#888] group">
                                <div className="w-5 h-5 rounded flex items-center justify-center bg-[#111] border border-[#222] group-hover:border-orange-500/50 group-hover:text-orange-500 transition-colors">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                </div>
                                <span className="group-hover:text-white transition-colors">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Code/UI Representation */}
                <div className="bg-[#050505] p-4 lg:p-6 flex items-center justify-center reveal reveal-delay-2 group">
                    <div className="w-full max-w-md bg-black border border-[#333] rounded-lg shadow-2xl overflow-hidden flex flex-col h-[320px] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,85,0,0.1)] group-hover:border-orange-500/20">
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-[#333] bg-[#0a0a0a]">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-red-500/80 rounded-full" />
                                <div className="w-3 h-3 bg-yellow-500/80 rounded-full" />
                                <div className="w-3 h-3 bg-green-500/80 rounded-full" />
                            </div>
                            <div className="text-xs font-mono text-[#666]">project-root</div>
                        </div>

                        <div className="flex flex-1 overflow-hidden">
                            {/* Sidebar (Explorer) */}
                            <div className="w-32 border-r border-[#333] p-4 hidden md:block bg-[#080808]">
                                <div className="space-y-2 opacity-80">
                                    <div className="text-xs font-mono text-orange-400 flex gap-2">📂 src</div>
                                    <div className="text-xs font-mono text-[#666] pl-4 flex gap-2 hover:text-white cursor-pointer">📄 app.tsx</div>
                                    <div className="text-xs font-mono text-[#666] pl-4 flex gap-2 hover:text-white cursor-pointer">📄 utils.ts</div>
                                </div>
                            </div>

                            {/* Editor (Center) */}
                            <div className="flex-1 p-4 font-mono text-xs text-[#888] overflow-hidden selection:bg-orange-500/30 selection:text-orange-200 border-r border-[#333]">
                                <span className="text-purple-400">const</span> <span className="text-yellow-400">user</span> = <span className="text-blue-400">useAuth</span>();<br />
                                <br />
                                <span className="text-[#808080]">// TODO: Implement Profile Page</span><br />
                                <span className="text-purple-400">if</span> (!user) <span className="text-purple-400">return</span> &lt;<span className="text-orange-400">Login</span> /&gt;;
                            </div>

                            {/* AI Panel (Right) - High Fidelity Minimalist */}
                            <div className="w-40 bg-[#080808] border-l border-[#333] flex flex-col hidden lg:flex font-sans">
                                {/* Panel Header */}
                                <div className="h-10 border-b border-[#222] flex justify-between items-center px-4 bg-[#0a0a0a]">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(255,85,0,0.5)] animate-pulse" />
                                        <span className="text-[10px] font-bold text-[#eee] tracking-widest uppercase">DEEXEN AI</span>
                                    </div>
                                    <span className="text-[9px] text-[#444] font-mono">BETA</span>
                                </div>

                                {/* Chat Area */}
                                <div className="flex-1 p-4 space-y-5 overflow-hidden flex flex-col">
                                    {/* AI Message */}
                                    <div className="flex flex-col gap-1.5 animate-in slide-in-from-bottom-2 duration-500">
                                        <span className="text-[9px] font-mono text-orange-500/80 uppercase tracking-wider pl-1">Deexen</span>
                                        <div className="text-[11px] text-[#ccc] leading-relaxed bg-[#111] p-3 rounded-xl border border-[#222] shadow-sm">
                                            I've detected a potential race condition in <span className="text-orange-300 font-mono bg-orange-500/10 px-1 rounded">useAuth</span>. <br />
                                            Would you like me to implement a mutex lock?
                                        </div>
                                    </div>

                                    {/* User Reply */}
                                    <div className="flex flex-col gap-1.5 items-end animate-in slide-in-from-bottom-2 duration-500 delay-150">
                                        <span className="text-[9px] font-mono text-[#444] uppercase tracking-wider pr-1">You</span>
                                        <div className="text-[11px] text-white leading-relaxed bg-gradient-to-br from-orange-600/20 to-orange-900/10 p-3 rounded-xl border border-orange-500/20 shadow-[0_0_15px_rgba(255,85,0,0.05)] max-w-[90%] text-right">
                                            Yes, go ahead.
                                        </div>
                                    </div>

                                    {/* AI Typing */}
                                    <div className="flex items-center gap-2 pl-1 opacity-50">
                                        <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>

                                {/* Input Area - Floating Command Style */}
                                <div className="p-4 pt-2 bg-[#080808]">
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-500" />
                                        <div className="relative h-9 bg-[#0c0c0c] rounded-lg border border-[#333] flex items-center px-3 gap-2 shadow-xl">
                                            <span className="text-orange-500 text-xs">✨</span>
                                            <span className="text-[10px] text-[#555]">Ask anything...</span>
                                            <div className="ml-auto flex gap-1">
                                                <div className="w-4 h-4 rounded bg-[#222] border border-[#333] flex items-center justify-center text-[8px] text-[#666]">⌘</div>
                                                <div className="w-4 h-4 rounded bg-[#222] border border-[#333] flex items-center justify-center text-[8px] text-[#666]">K</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terminal - Now correctly inside the window flex-col */}
                        <div className="h-1/4 border-t border-[#333] bg-[#0a0a0a] p-3 font-mono text-[10px] text-[#666]">
                            <span className="text-orange-500">➜</span> npm run dev<br />
                            &gt; ready started server on 0.0.0.0:3000 <span className="animate-pulse">_</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
