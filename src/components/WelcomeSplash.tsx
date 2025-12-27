"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

const greetings = [
    { text: "Hello", language: "English" },
    { text: "こんにちは", language: "Japanese" },
    { text: "Bonjour", language: "French" },
    { text: "안녕하세요", language: "Korean" },
    { text: "Ciao", language: "Italian" },
    { text: "こんにちは", language: "Japanese" },
    { text: "Selamat Datang:)", language: "Indonesian" }
];

export default function WelcomeSplash({ children }: { children: ReactNode }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [slideUp, setSlideUp] = useState(false);
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        if (!isAnimating) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;

                // Jika sudah sampai kata terakhir
                if (nextIndex >= greetings.length) {
                    clearInterval(interval);
                    setIsAnimating(false);

                    // Trigger animasi slide up setelah delay sebentar
                    setTimeout(() => {
                        setSlideUp(true);
                        // Hapus dari DOM setelah animasi slide selesai (1 detik)
                        setTimeout(() => {
                            setShowSplash(false);
                        }, 1000);
                    }, 500);

                    return prevIndex;
                }

                return nextIndex;
            });
        }, 300); // Kecepatan ganti teks (ms)

        return () => clearInterval(interval);
    }, [isAnimating]);

    // Animation variants untuk text
    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 },
    };

    return (
        <>
            {/* KONTEN APLIKASI UTAMA (APP) */}
            {/* Dirender di bawah splash screen agar saat splash naik, app sudah siap */}
            {children}

            {/* SPLASH SCREEN OVERLAY */}
            {showSplash && (
                <div
                    className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#1E1E20] transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${slideUp ? "-translate-y-full" : "translate-y-0"
                        }`}
                >
                    <div className="relative flex w-full max-w-4xl h-20 items-center justify-center overflow-hidden min-w-[300px]">
                        {isAnimating ? (
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={currentIndex}
                                    variants={textVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute flex items-center gap-3 font-bold text-4xl md:text-6xl text-white tracking-tight"
                                >
                                    <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-[#a3e635]" />
                                    {greetings[currentIndex].text}
                                </motion.div>
                            </AnimatePresence>
                        ) : (
                            <div className="flex items-center gap-3 font-bold text-4xl md:text-6xl text-white tracking-tight">
                                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-[#a3e635]" />
                                {greetings[greetings.length - 1].text}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}