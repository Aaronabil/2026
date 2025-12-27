import { useState, useEffect } from "react";

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
    // 1. Logika Waktu dipindah ke sini (karena hanya Header yang butuh jam)
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Asia/Jakarta",
    }).format(time) + " GMT+7";

    return (
        // 2. JSX Header dipindah ke sini
        <header
            className={`sticky top-0 z-[100] flex items-center justify-between py-4 bg-[#0E0E10]/90 backdrop-blur-md border-b border-white/5 mb-4 transition-opacity duration-300 ${isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-700 bg-zinc-800">
                    <img
                        src="https://github.com/shadcn.png"
                        alt="Avatar"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[10px] text-black font-extrabold">
                        C
                    </span>
                    <span className="font-medium tracking-wide">
                        Created by Muhamad Nabil
                    </span>
                </div>
            </div>

            <div className="hidden md:flex flex-col items-center text-xs tracking-wider gap-0.5">
                <span className="text-zinc-400 font-medium">
                    {formattedTime.split(" ")[0]}
                </span>
                <span className="text-zinc-600">
                    {formattedTime.split(" ")[1] +
                        " " +
                        formattedTime.split(" ")[2]}{" "}
                    {formattedTime.split(" ")[3]}
                </span>
            </div>

            <div className="flex items-center gap-10">
                <div className="hidden md:flex items-center gap-2 text-sm text-zinc-300 font-medium">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_12px_rgba(255,255,255,0.9)]"></div>
                    <span>Indonesia</span>
                </div>

                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="cursor-pointer hover:bg-zinc-800/50 p-2 rounded-full transition-colors group relative"
                >
                    <div className="w-7 flex flex-col justify-between gap-1.5 items-end group-hover:gap-2 transition-all">
                        <div className="w-7 h-[2px] bg-white rounded-full"></div>
                        <div className="w-7 h-[2px] bg-white rounded-full group-hover:w-5 transition-all"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}