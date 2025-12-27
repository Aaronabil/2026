import {
  Home,
  User,
  ArrowDown,
  ArrowUp,
  MessageSquare,
  Github,
  Instagram,
  Award,
  Globe,
  Linkedin,
  ContactRound,
  MessageCircleHeart,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Magnet from "@/components/reactbits/Magnet"
import { useState, useEffect } from "react";
import Header from "./Layouts/Header";

export default function App() {
  // const [time, setTime] = useState(new Date());
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear: number = new Date().getFullYear();

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(new Date());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // const formattedTime = new Intl.DateTimeFormat("en-US", {
  //   weekday: "long",
  //   hour: "numeric",
  //   minute: "numeric",
  //   hour12: true,
  //   timeZone: "Asia/Jakarta",
  // }).format(time) + " GMT+7";

  const getCardClasses = (id: string) => {
    if (hoveredCard && hoveredCard !== id) {
      return "brightness-[0.8] scale-[0.98] blur-[0.5px] opacity-80";
    }
    return "brightness-100 scale-100 opacity-100";
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (isScrolled) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white font-sans selection:bg-[#a3e635] selection:text-black relative">

      {/* --- MENU OVERLAY START --- */}

      {/* LAYER 1: KARTU BELAKANG (Decoration: 2025 & Trusted By) */}
      {/* Tinggi 85vh (Lebih panjang dari layer depan) & Z-Index lebih kecil */}
      <div
        className={`fixed top-0 left-0 w-full h-[100vh] bg-[#121214] z-[110] flex flex-col justify-end p-6 rounded-b-[4rem] shadow-none transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen
          ? 'translate-y-0 delay-0'
          : '-translate-y-full delay-[200ms]'
          }`}
      >
        {/* Footer Layer 1: Trusted By & 2025 */}
        <div className="flex items-end justify-between w-full relative mb-8 px-2 md:px-8">
          <div className="flex flex-col gap-4 z-10">
            <h3 className="text-white/80 text-base font-bold">Made with {" "}
              <span className="inline-block align-top text-[3rem] md:text-[5rem]">
                <img
                  src="/face_emoji.png"
                  alt="face"
                  className="w-5 h-5 md:w-5 md:h-5 object-contain"
                />
              </span>
              {" "} & a lot of {" "}
              <span className="inline-block align-top text-[3rem] md:text-[5rem]">
                <img
                  src="/coffe_emoji.png"
                  alt="coffee"
                  className="w-5 h-5 md:w-5 md:h-5 object-contain"
                />
              </span>.
            </h3>
          </div>

          {/* Text Besar 2025 - Posisinya akan terlihat di bagian bawah kartu yg "nongol" */}
          <h1 className="absolute bottom-[-20px] right-0 md:right-20 text-[20vw] md:text-[15vw] font-bold leading-none text-[#2A2A2C] select-none pointer-events-none z-0">
            ©{currentYear}
          </h1>
        </div>
      </div>

      {/* LAYER 2: KARTU DEPAN (Main Content: Header & Links) */}
      {/* Tinggi 75vh (Lebih pendek) & Punya Background Sendiri agar menutupi Layer 1 */}
      <div
        className={`fixed top-0 left-0 w-full h-[75vh] bg-[#1E1E20] z-[120] flex flex-col rounded-b-[3rem] shadow-2xl transition-transform duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${isMenuOpen
          ? 'translate-y-0 delay-[150ms]' // Delay sedikit biar Layer 1 turun duluan
          : '-translate-y-full delay-0'
          }`}
      >
        {/* HEADER MENU (Pindah ke sini agar ada di kartu depan) */}
        <div className="flex items-center justify-between p-6 md:p-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-700 bg-zinc-800">
              <img src="https://github.com/shadcn.png" alt="Avatar" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="flex flex-col text-sm">
              <span className="text-zinc-400 text-xs">Designed by</span>
              <span className="font-semibold text-white">Muhamad Nabil</span>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-white transition-colors group pointer-events-auto"
          >
            <X className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Navigation Links Wrapper */}
        <div className="flex-1 flex flex-col justify-center items-end pr-8 md:pr-24 pb-10 w-full">
          <div className="flex flex-col items-start text-left gap-6 w-fit">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-4xl md:text-5xl font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer">
              Back to Home
            </a>
            <a href="#" className="text-4xl md:text-5xl font-bold text-zinc-400 hover:text-white transition-colors flex items-center gap-4 cursor-pointer">
              Keycha Studio
              <span className="bg-zinc-800 text-zinc-400 text-xs px-2 py-1 rounded-full border border-zinc-700">©</span>
            </a>
            <a href="#" className="text-4xl md:text-5xl font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer">
              Contact
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" className="w-12 h-12 bg-[#a3e635] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-[#a3e635] rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 hidden md:block pointer-events-none opacity-80 md:opacity-100 transition-opacity duration-500">
          <img
            src="/3d_peoplemenu.webp"
            alt="3D Decoration"
            className="w-[380px] md:w-[550px] h-auto object-contain transform scale-110 translate-y-21 translate-x-6 md:translate-x-26 -scale-x-100"
          />
        </div>
      </div>
      {/* --- MENU OVERLAY END --- */}


      <div className="mx-auto max-w-[1280px] h-full flex flex-col relative px-4 md:px-6">

        {/* HEADER UTAMA HALAMAN */}
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-[600px]">

          {/* KOLOM KIRI (Hero) */}
          <div className="lg:col-span-7 flex flex-col justify-start gap-2 relative pl-4 md:pl-30 overflow-hidden lg:sticky lg:top-24 lg:h-[calc(100vh-100px)] lg:pt-4">

            {/* Hover Reveal Image Overlay */}
            <div
              className="absolute inset-0 z-40 flex items-start justify-center pt-8 pointer-events-none"
              style={{
                clipPath: hoveredCard === 'portfolio' ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
                transition: 'clip-path 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              <img
                src="/stapp_compact.png"
                alt="Project Preview"
                className="w-auto h-auto max-w-[90%] max-h-[500px] object-contain border-2 border-zinc-700/50 rounded-[2rem] shadow-2xl"
              />
            </div>

            <div
              className="absolute inset-0 z-40 flex items-start justify-center pt-8 pointer-events-none"
              style={{
                clipPath: hoveredCard === 'assets' ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
                transition: 'clip-path 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              <img
                src="/deskmat.png"
                alt="Design Preview"
                className="w-auto h-auto max-w-[90%] max-h-[500px] object-contain border-2 border-zinc-700/50 rounded-[2rem] shadow-2xl"
              />
            </div>

            {/* Main Hero Content */}
            <div className={`flex flex-col justify-center gap-2 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${hoveredCard ? '-translate-y-[150%] opacity-0' : 'translate-y-0 opacity-100'}`}>
              <p className="text-[#a3e635] text-lg font-medium tracking-wide mb-1 pl-1">Hello, I'm</p>

              <div className="relative z-20 flex items-start gap-8">
                <div className="flex flex-col -space-y-2 md:-space-y-4">
                  <div className="flex items-center gap-4">
                    <h1 className="text-5xl md:text-[5.5rem] font-bold leading-none tracking-tight text-white/90">
                      Web3
                    </h1>
                    <span className="inline-block align-top text-[3rem] md:text-[5rem]">
                      <img
                        src="/tree_emoji.png"
                        alt="Tree"
                        className="w-12 h-12 md:w-20 md:h-20 object-contain"
                      />
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-[5.5rem] font-bold leading-none tracking-tight text-white/90 mt-5 mb-1">
                    Frontend
                  </h1>
                  <h1 className="text-5xl md:text-[5.5rem] font-light leading-none tracking-tight text-zinc-300">
                    Developer
                  </h1>
                </div>

                <div className="relative pt-2 hidden md:block">
                  <div className="bg-[#1C1C1E] border border-zinc-800 rounded-[50px] py-2 px-2 flex flex-col items-center gap-3">
                    <div className="flex flex-col items-center -space-y-3">
                      {[0, 1, 2].map((i) => (
                        <div key={i} className="w-17 h-17 rounded-full border-2 border-[#1C1C1E] bg-zinc-800 overflow-hidden z-[10]">
                          <img src={`https://i.pravatar.cc/100?img=${i + 12}`} alt="User" className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-[105%] left-1/2 -translate-x-1/2 w-[120px] text-center mt-2">
                    <p className="text-white font-bold text-sm whitespace-nowrap">10+ Clients</p>
                    <p className="text-zinc-500 text-sm">Helped</p>
                  </div>
                </div>

                <div className="absolute left-[-2rem] bottom-[2rem] text-zinc-50 hidden xl:block scale-75 origin-bottom-left">
                  <svg width="80" height="120" viewBox="0 0 100 150" fill="none" className="opacity-40" stroke="currentColor" strokeWidth="2">
                    <path d="M40 10 Q 10 70 40 130" strokeDasharray="5,5" />
                    <path d="M30 120 L 40 130 L 55 120" />
                  </svg>
                </div>
              </div>

              <div className="max-w-lg text-zinc-500 text-large mt-4 leading-relaxed">
                <p>I hope you will get to know a little bit <br /> about me and find value in my work.</p>
              </div>

              <div className="flex items-center gap-6 mt-4">
                <Magnet padding={50} disabled={false} magnetStrength={10}>
                  <Button className="bg-[#a3e635] text-black hover:bg-[#8cd322] rounded-full px-7 py-7 text-base font-bold flex items-center gap-2 transition-transform hover:scale-105">
                    <MessageSquare className="w-4 h-4 fill-black stroke-black" />
                    Let's Chat
                  </Button>
                </Magnet>
                <a href="#" className="text-white font-medium hover:text-[#a3e635] transition-colors text-sm">Download CV</a>
              </div>
            </div>

            <div className="mt-auto pt-8 flex gap-6 text-white font-medium text-base">
              <a href="#" className="flex items-center gap-2 hover:text-[#a3e635] transition-colors"><Github className="w-5 h-5" /> Github</a>
              <a href="#" className="flex items-center gap-2 hover:text-[#a3e635] transition-colors"><Instagram className="w-5 h-5" /> Instagram</a>
            </div>
          </div>

          {/* KOLOM KANAN */}
          <div className="lg:col-span-5 flex gap-4 mt-3">
            <div className="flex flex-col gap-4 flex-1 w-full pb-20">

              {/* CARD 1: PORTFOLIO */}
              <div
                className={`bg-[#0f1012] border border-blue-500/40 rounded-[1rem] p-6 h-[220px] relative overflow-hidden group cursor-pointer hover:border-amber-500/80 transition-all duration-500 ease-in-out hover:scale-[1.02] ${getCardClasses('portfolio')}`}
                onMouseEnter={() => setHoveredCard('portfolio')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/10 via-transparent to-transparent opacity-50"></div>
                <div className="relative z-20 flex flex-col h-full items-start justify-between">
                  <div>
                    <div className="text-blue-500/80 text-5xl font-mono  font-bold">*</div>
                    <h2 className="text-2xl font-bold leading-tight text-white/90 font-sans tracking-wide">
                      Let's <span className="text-[#3b82f6]/80">Explore</span><br />
                      My <span className="text-amber-500/80">Portfolio</span>
                    </h2>
                  </div>
                  <Button className="bg-[#2f66d6]/60 hover:bg-blue-600 text-white rounded-full px-6 py-2 h-10 text-sm font-medium transition-transform hover:scale-105">
                    See More
                  </Button>
                </div>
                <div className="absolute right-[-70px] bottom-[-110px] h-[165%] w-[95%] z-10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 group-hover:translate-x-2">
                  <img src="/3d_peoplebike.webp" alt="3D Character" className="w-full h-full object-contain drop-shadow-2xl" />
                </div>
              </div>

              {/* CARD 2: ASSETS */}
              <div
                className={`bg-[#0f1012] border border-zinc-800 rounded-[1rem] p-6 h-[180px] flex items-center relative overflow-hidden group cursor-pointer hover:border-purple-500/50 transition-all duration-500 ease-in-out hover:scale-[1.02] ${getCardClasses('assets')}`}
                onMouseEnter={() => setHoveredCard('assets')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-[55%] relative z-10 pr-2">
                  <div className="w-24 h-32 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-xl transform -rotate-12 shadow-2xl border-2 border-zinc-700/50 flex flex-col items-center justify-center relative overlow-hidden group-hover:-rotate-6 transition-transform duration-300">
                    <div className="absolute inset-1 bg-black/20 rounded-lg"></div>
                    <span className="font-bold text-xl italic text-white z-10 font-mono rotate-12">Mini</span>
                  </div>
                </div>
                <div className="w-[45%] z-10">
                  <h3 className="text-lg font-bold leading-tight text-white/90">
                    Free <span className="text-purple-400">Assets!</span><br />
                    Free to —<br />
                    <span className="text-amber-500">Download.</span>
                  </h3>
                </div>
              </div>

              {/* CARD 3: COMING SOON */}
              <div
                className={`bg-gradient-to-r from-[#2a62b8] to-[#1e4685] rounded-[1rem] p-5 flex items-center justify-between h-[80px] cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] ${getCardClasses('desk')}`}
              >
                <span className="text-lg font-semibold text-white">Coming Soon</span>
                <Award className="w-6 h-6 text-blue-200/80" strokeWidth={1.5} />
              </div>

              {/* LINK LIST */}
              <div className={`flex flex-col gap-6 mt-4 pl-2 transition-all duration-500 ${getCardClasses('list')}`}>
                <h3 className="text-zinc-500 font-medium text-sm">Explore More</h3>

                <a href="https://linkedin.com/in/muhamad-nabil-faiz-amrullah" target="_blank">
                  <div className="flex items-center gap-5 group cursor-pointer">
                    <div className="w-20 h-20 rounded-full border border-zinc-800 bg-[#0f1012] flex items-center justify-center group-hover:border-blue-500 transition-colors">
                      <Linkedin className="w-8 h-8 text-zinc-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold text-lg">Linkedin</span>
                        <span className="bg-blue-500/10 text-blue-500 text-[10px] px-2 py-0.5 rounded-full font-bold">Connect</span>
                      </div>
                      <span className="text-zinc-500 text-sm">Professional network</span>
                      <span className="text-blue-500 text-xs mt-1">Active Now</span>
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-20 h-20 rounded-full border border-zinc-800 bg-[#0f1012] flex items-center justify-center group-hover:border-purple-500 transition-colors">
                    <Globe className="w-8 h-8 text-zinc-400 group-hover:text-purple-500 transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-lg">Old Portfolio</span>
                    <span className="text-zinc-500 text-sm">Previous works archive</span>
                    <span className="text-purple-500 text-xs mt-1">2023 - 2024</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-20 h-20 rounded-full border border-zinc-800 bg-[#0f1012] flex items-center justify-center group-hover:border-amber-500 transition-colors">
                    <Instagram className="w-8 h-8 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-lg">Instagram</span>
                    <span className="text-zinc-500 text-sm">Social Media</span>
                  </div>
                </div>
                <div className="flex items-center gap-5 group cursor-pointer">
                  <div className="w-20 h-20 rounded-full border border-zinc-800 bg-[#0f1012] flex items-center justify-center group-hover:border-[#a3e635] transition-colors">
                    <Github className="w-8 h-8 text-zinc-400 group-hover:text-[#a3e635] transition-colors" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-semibold text-lg">Github</span>
                    <span className="text-zinc-500 text-sm">Code Repository</span>
                  </div>
                </div>
              </div>

              <h3 className="text-zinc-500 font-medium text-sm">More</h3>
              <div
                className={`bg-gradient-to-r from-amber-500/80 to-amber-500/40 rounded-[1rem] p-5 flex items-center justify-between h-[80px] cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] ${getCardClasses('desk')}`}
              >
                <span className="text-lg font-semibold text-white/80">About</span>
                <ContactRound className="w-6 h-6 text-white/80" strokeWidth={1.5} />
              </div>
              <div
                className={`bg-gradient-to-r from-purple-500/80 to-purple-500/40 rounded-[1rem] p-5 flex items-center justify-between h-[80px] cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.02] ${getCardClasses('desk')}`}
              >
                <span className="text-lg font-semibold text-white/80">Contact</span>
                <MessageCircleHeart className="w-6 h-6 text-white/80" strokeWidth={1.5} />
              </div>
              <h3 className="text-zinc-500 font-medium text-sm">Design & Develop with {" "}
                <span className="inline-block align-top text-[3rem] md:text-[5rem]">
                  <img
                    src="/love_emoji.png"
                    alt="love"
                    className="w-4 h-4 md:w-4 md:h-4 object-contain"
                  />
                </span>
                {" "}by Muhamad Nabil
              </h3>
            </div>

            {/* SIDEBAR VERTIKAL */}
            <div className="hidden xl:flex w-14 flex-col items-center justify-start pt-4 gap-12 sticky top-24 h-[calc(100vh-100px)]">
              <div className="flex flex-col gap-12 items-center">
                <div className="group flex flex-col items-center gap-3 cursor-pointer">
                  <span className="text-white font-medium tracking-widest text-xs" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>Home</span>
                  <div className="w-1 h-6 bg-[#a3e635] rounded-full shadow-[0_0_15px_rgba(163,230,53,0.5)]"></div>
                  <Home className="w-4 h-4 text-white" />
                </div>

                <div className="group flex flex-col items-center gap-3 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                  <span className="text-zinc-600 group-hover:text-zinc-400 font-medium tracking-widest text-xs" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}>About</span>
                  <User className="w-4 h-4 text-zinc-400" />
                </div>
              </div>

              {/* Floating Button Segaris Sidebar */}
              <div className="mt-40 pb-10">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleScrollAction}
                  className="rounded-full w-10 h-10 border-zinc-700 bg-[#1C1C1E] text-white hover:bg-zinc-700 hover:border-zinc-500 transition-all shadow-2xl hover:scale-110"
                >
                  {isScrolled ? <ArrowUp className="w-6 h-6" /> : <ArrowDown className="w-6 h-6" />}
                </Button>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  )
}