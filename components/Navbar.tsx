"use client";

export default function Navbar() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-[#333]">
            <div className="flex items-center justify-between h-16 px-6 md:px-8">

                {/* Brand */}
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <img src="/logo.png" alt="Deexen" className="h-8 w-auto object-contain" />
                    <span className="text-white text-xl font-bold">Deexen AI</span>
                </div>

                {/* Nav Links + CTA */}
                <div className="flex items-center gap-4">
                    <a
                        href="/beta"
                        className="text-[#888] text-sm font-medium hover:text-orange-500 transition-colors hidden sm:inline"
                    >
                        Beta Program
                    </a>
                    <button
                        onClick={() => scrollTo("hero")}
                        className="bg-white text-black text-sm px-6 py-2 rounded-md font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                    >
                        Join Waitlist
                    </button>
                </div>

            </div>
        </nav>
    );
}
