"use client";

import { useState, FormEvent } from "react";

interface WaitlistFormProps {
    variant?: "hero" | "compact";
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setStatus("error");
            setMessage("Enter a valid email.");
            return;
        }
        setStatus("loading");
        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();
            if (res.ok) {
                setStatus("success");
                setMessage("Joined.");
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error || "Error.");
            }
        } catch {
            setStatus("error");
            setMessage("Error.");
        }
    };

    const handleShare = (platform: "twitter" | "linkedin" | "copy") => {
        const url = "https://betatestingdeexen.vercel.app";
        const text = "Just secured my spot in the Founding 50 for Deexen - the first AI IDE that teaches you as you code. 🚀";

        const links = {
            twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
            copy: ""
        };

        if (platform === "copy") {
            navigator.clipboard.writeText(url);
            setMessage("Link copied!");
            setTimeout(() => setMessage(""), 2000);
        } else {
            window.open(links[platform], "_blank");
        }
    };

    if (status === "success") {
        return (
            <div className="w-full max-w-sm mx-auto bg-[#000] border border-dashed border-[#333] rounded-xl p-8 text-center animate-in fade-in zoom-in duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10 shadow-inner">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>

                    <h3 className="text-white font-medium text-lg mb-2 tracking-tight">You're on the list</h3>
                    <p className="text-[#666] text-sm mb-8 leading-relaxed">
                        Secure spot in <span className="text-white font-medium">Founding 50</span>. <br />
                        We'll be in touch.
                    </p>

                    <p className="text-[#fff] text-md mb-4 leading-relaxed">Share the word</p>
                    <div className="flex gap-4 justify-center">
                        {/* X (Twitter) */}
                        <button onClick={() => handleShare("twitter")} className="group p-2 rounded-md hover:bg-[#1a1a1a] transition-all text-[#666] hover:text-white" title="Share on X">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" /></svg>
                        </button>
                        {/* LinkedIn */}
                        <button onClick={() => handleShare("linkedin")} className="group p-2 rounded-md hover:bg-[#1a1a1a] transition-all text-[#666] hover:text-white" title="Share on LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                        </button>
                        {/* Copy Link */}
                        <button onClick={() => handleShare("copy")} className="group p-2 rounded-md hover:bg-[#1a1a1a] transition-all text-[#666] hover:text-white relative" title="Copy Link">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                            {message === "Link copied!" && <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] px-2 py-1 rounded whitespace-nowrap animate-in zoom-in font-medium">Copied</span>}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-sm mx-auto">
            <form onSubmit={handleSubmit} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500 pointer-events-none" />
                <input
                    autoFocus={true}
                    type="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (status !== "idle") setStatus("idle");
                    }}
                    placeholder="join the waitlist"
                    disabled={status === "loading"}
                    className="w-full h-12 bg-[#0a0a0a] border border-[#333] rounded-lg pl-4 pr-24 text-white placeholder:text-[#444] text-sm outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all shadow-xl"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="absolute right-1 top-1 bottom-1 px-4 bg-white text-black rounded-md text-xs font-medium uppercase tracking-wide hover:bg-orange-500 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? (
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                        "Join"
                    )}
                </button>
            </form>

            {status === "error" && message && (
                <div className="mt-3 text-xs flex items-center justify-center gap-1.5 text-red-400 animate-in slide-in-from-top-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    {message}
                </div>
            )}
        </div>
    );
}
