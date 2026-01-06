"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Zap, Sun, ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const particleArray = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
    }))
    setParticles(particleArray)
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-background flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/solar-panel-installation-rooftop-sunny-day.jpg"
          alt="Solar installation"
          className="w-full h-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/70" />
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl -mr-48 -mt-48 animate-float-up" />
      <div
        className="absolute bottom-20 left-0 w-80 h-80 bg-accent/8 rounded-full blur-3xl -ml-40 animate-float-up"
        style={{ animationDelay: "0.5s" }}
      />
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse stagger-3" />

      {/* Floating particle effects */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-accent rounded-full animate-particle-float"
          style={{
            left: `${particle.left}%`,
            bottom: "-20px",
            animationDelay: `${particle.delay}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center space-y-8 sm:space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-accent/10 rounded-full border border-accent/40 hover:border-accent/60 transition-all duration-300 animate-bounce-gentle">
            <Sun className="w-5 h-5 text-accent animate-rotate-slow" />
            <span className="text-sm font-semibold text-primary">Trusted by 500+ Families in Jaipur</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight tracking-tight">
              <span className="block animate-fade-in">Jaipur's Most Trusted</span>
              <span className="block text-accent font-bold">Rooftop Solar Experts</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-2">
              Save up to <span className="font-bold text-accent">90% on electricity bills</span> with zero upfront cost.
              Go green, save more!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="bg-accent text-white hover:bg-accent/90 font-bold text-base h-14 px-10 rounded-xl gap-2 flex items-center justify-center transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 hover:scale-105 animate-scale-up stagger-3"
            >
              <MessageCircle className="w-6 h-6" />
              Get Free Quote on WhatsApp
            </Button>
            <Button
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold text-base h-14 px-10 rounded-xl transition-all duration-300 bg-transparent hover:shadow-lg stagger-4"
            >
              <Zap className="w-6 h-6 mr-2" />
              Learn More
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-10">
            {[
              { label: "25 Years Warranty", icon: "✓", delay: "0s" },
              { label: "100% Subsidy Support", icon: "✓", delay: "0.1s" },
              { label: "Zero Upfront Cost", icon: "✓", delay: "0.2s" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/50 border border-accent/50 backdrop-blur-sm hover:bg-white/70 transition-all animate-fade-in hover:border-accent"
                style={{ animationDelay: item.delay }}
              >
                <span className="text-accent font-bold text-xl">{item.icon}</span>
                <span className="text-sm sm:text-base font-medium text-primary">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ArrowDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  )
}
