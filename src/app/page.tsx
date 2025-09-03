import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-black/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Logo Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-10-5z"/>
                  <path d="M12 7v5l4-2-4-3z" fill="white"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <Link href="/" className="text-2xl font-black tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  HYPER-VIDEO
                </Link>
                <div className="text-xs text-blue-300 font-medium tracking-wide">AI CREATION STUDIO</div>
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/prompt-studio" className="text-slate-300 hover:text-white font-medium transition-all duration-200 hover:scale-105">
                Prompt Studio
              </Link>
              <Link href="/video-generator" className="text-slate-300 hover:text-white font-medium transition-all duration-200 hover:scale-105">
                Video Generator
              </Link>
              <Link href="/pricing" className="text-slate-300 hover:text-white font-medium transition-all duration-200 hover:scale-105">
                Pricing
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-white/10">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Start Creating
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-900/30 to-purple-900/30"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-20 container mx-auto px-6 py-20 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold shadow-2xl">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                VEO-3 & CLAUDE AI POWERED PLATFORM
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter">
              <span className="block text-white drop-shadow-2xl">
                CREATE
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl">
                CINEMATIC
              </span>
              <span className="block text-white drop-shadow-2xl">
                AI VIDEOS
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-3xl font-light text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Transform simple ideas into 
              <span className="font-bold text-white"> professional-grade videos </span>
              using VEO-3 technology. 
              <span className="block mt-2 text-blue-300">
                From concept to creation in minutes.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/video-generator">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-10 py-5 text-xl font-bold shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_rgba(59,130,246,0.3)] transform hover:scale-110 transition-all duration-300 rounded-xl border border-white/20">
                  🚀 START CREATING NOW
                </Button>
              </Link>
              <Link href="/prompt-studio">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/40 text-white hover:bg-white/10 px-10 py-5 text-xl font-bold backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  ✨ TRY PROMPT STUDIO
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-blue-400 mb-2">VEO-3</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide">Latest Model</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-400 mb-2">4K</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide">Ultra HD</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-pink-400 mb-2">∞</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide">Possibilities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">DUAL-MODE VIDEO CREATION</h2>
            <p className="text-xl text-slate-300">Two powerful ways to create stunning videos</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Text-to-Video */}
            <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">📝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">TEXT-TO-VIDEO</h3>
                <p className="text-slate-300 mb-6">Generate videos from detailed text descriptions using VEO-3 model</p>
                <Link href="/video-generator">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                    Try Text-to-Video →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Image-to-Video */}
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl">🖼️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">IMAGE-TO-VIDEO</h3>
                <p className="text-slate-300 mb-6">Animate your static images into dynamic videos with VEO-3</p>
                <Link href="/video-generator">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3">
                    Try Image-to-Video →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Professional Videos?</h2>
          <p className="text-xl mb-8 text-white/90">Get started with our powerful AI video creation tools</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold shadow-xl">
                View Pricing
              </Button>
            </Link>
            <Link href="/video-generator">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-10-5z"/>
                  </svg>
                </div>
                <div className="text-xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  HYPER-VIDEO
                </div>
              </div>
              <p className="text-slate-400 max-w-md">
                Professional AI video generation platform powered by VEO-3 and Claude AI. Create stunning videos with ease.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Features</h4>
              <ul className="space-y-2 text-slate-400">
                <li>AI Prompt Studio</li>
                <li>VEO-3 Video Generator</li>
                <li>Text-to-Video</li>
                <li>Image-to-Video</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Documentation</li>
                <li>API Guide</li>
                <li>Help Center</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Hyper-Video. All rights reserved. Built with cutting-edge AI technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}