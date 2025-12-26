import {
  Menu,
  Home,
  User,
  Download,
  ArrowRight,
  MessageSquare,
  Globe,
  Github,
  Instagram,
  Star,
  Search,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white p-4 md:p-8 font-sans overflow-hidden">
      {/* Container to center and constrain max width */}
      <div className="mx-auto max-w-[1400px] h-full flex flex-col gap-8 relative">

        {/* Header */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden border border-zinc-700">
              <img src="https://github.com/shadcn.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="bg-zinc-800 rounded-full p-1"><div className="w-4 h-4 bg-white rounded-full flex items-center justify-center text-[10px] text-black font-bold">C</div></span>
              <span>Created by Ade Ivan</span>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-center text-xs text-zinc-500">
            <span className="text-zinc-300 font-medium">Sunday</span>
            <span>10:33 AM GMT+7</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-2 text-sm text-zinc-400">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Indonesia</span>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-zinc-800">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </header>

        {/* Main Content Grid */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">

          {/* Left Section - Hero */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8 pl-4 lg:pl-12 pt-12">
            <div>
              <p className="text-[#a3e635] mb-4 text-lg">Hello, I'm</p>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
                Digital <span className="inline-block text-4xl align-top">🌳</span><br />
                Universe<br />
                Designer
              </h1>
            </div>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0A0A] bg-zinc-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-zinc-400">
                <p className="font-bold text-white">10+ Clients</p>
                <p>Helped</p>
              </div>
            </div>

            <div className="max-w-md text-zinc-400 mt-4 relative">
              <p>I hope you will get to know a little bit about me and find value in my work.</p>
              {/* Decorative curved arrow placeholder */}
              <div className="absolute -left-16 top-0 w-12 h-24 border-b-2 border-l-2 border-zinc-700 rounded-bl-3xl opacity-50 hidden lg:block"></div>
            </div>

            <div className="flex items-center gap-6 mt-4">
              <Button className="bg-[#a3e635] text-black hover:bg-[#8cd322] rounded-full px-8 py-6 text-md font-semibold gap-2">
                <MessageSquare className="w-5 h-5" />
                Let's Chat
              </Button>
              <a href="#" className="text-white hover:underline underline-offset-4 decoration-zinc-600">Download CV</a>
            </div>

            <div className="mt-auto pt-12 flex gap-8 text-zinc-400 text-sm">
              <a href="#" className="flex items-center gap-2 hover:text-white"><Github className="w-4 h-4" /> Github</a>
              <a href="#" className="flex items-center gap-2 hover:text-white"><Instagram className="w-4 h-4" /> Instagram</a>
            </div>
          </div>

          {/* Right Section - Cards */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            {/* Top Card - Portfolio */}
            <div className="bg-[#1C1C1E] rounded-[2rem] p-8 min-h-[220px] relative overflow-hidden group">
              {/* Abstract background/character placeholder */}
              <div className="absolute right-[-20px] bottom-[-20px] w-48 h-48 bg-orange-400/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col h-full justify-between items-start">
                <div className="text-blue-400 text-4xl mb-2">*</div>
                <h2 className="text-2xl font-semibold mb-4">
                  Let's <span className="text-blue-400">Explore</span><br />
                  My <span className="text-amber-400">Portfolio</span>
                </h2>
                <Button className="bg-[#3B82F6] hover:bg-blue-600 text-white rounded-full px-6">
                  See More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              {/* Placeholder for 3D character */}
              <div className="absolute right-4 bottom-0 w-32 h-40 bg-gradient-to-t from-orange-300 to-orange-600 rounded-t-full opacity-80 group-hover:scale-105 transition-transform origin-bottom duration-500"></div>
            </div>

            {/* Middle Card - Free Assets */}
            <div className="bg-[#111111] border border-zinc-800 rounded-[2rem] p-8 min-h-[200px] flex items-center relative overflow-hidden">
              <div className="absolute left-[-20px] bottom-[-40px] w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
              <div className="w-1/2 relative z-10">
                {/* Tablet placeholder */}
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl transform rotate-[-12deg] shadow-2xl border border-white/10 flex items-center justify-center">
                  <span className="text-3xl font-bold italic rotate-12">Mini</span>
                </div>
              </div>
              <div className="w-1/2 pl-4 z-10">
                <h3 className="text-xl font-semibold leading-tight">
                  Free <span className="text-purple-400">Assets!</span><br />
                  Free to —<br />
                  <span className="text-amber-400">Download.</span>
                </h3>
              </div>
            </div>

            {/* Bottom Card - Desk Setup */}
            <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[2rem] p-6 flex items-center justify-between min-h-[100px]">
              <span className="text-xl font-medium">Desk Setup</span>
              <Award className="w-6 h-6 text-blue-200" />
            </div>

          </div>

          {/* Sidebar Navigation */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center gap-12 border-l border-zinc-900/50">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-2 -rotate-90 transform origin-center whitespace-nowrap text-zinc-400 font-medium">
                <Home className="w-4 h-4 rotate-90" />
                <span>Home</span>
                <div className="w-1 h-8 bg-[#a3e635] rounded-full ml-2 rotate-90"></div>
              </div>
              <div className="flex items-center gap-2 -rotate-90 transform origin-center whitespace-nowrap text-zinc-600 hover:text-zinc-400 transition-colors cursor-pointer">
                <User className="w-4 h-4 rotate-90" />
                <span>About</span>
              </div>
            </div>

            <div className="mt-auto mb-8">
              <Button variant="outline" size="icon" className="rounded-full w-12 h-12 border-zinc-700 bg-transparent text-white hover:bg-zinc-800">
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>

        </main>
      </div>
    </div>
  )
}
