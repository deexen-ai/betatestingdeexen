export default function Footer() {
    return (
        <footer className="bg-black py-8 px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Deexen" className="h-6 w-auto" />
                    <span className="text-xs text-[#444]">© 2026 Deexen AI</span>
                </div>
                <div className="text-xs text-orange-500">
                    built in India
                </div>
            </div>
        </footer>
    );
}
