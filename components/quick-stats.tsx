"use client"

import { Zap, Shield, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Zap,
    value: "500+",
    label: "Installations",
    description: "Happy families saving energy",
  },
  {
    icon: Shield,
    value: "25",
    label: "Years Warranty",
    description: "Complete peace of mind",
  },
  {
    icon: TrendingUp,
    value: "100%",
    label: "Subsidy Support",
    description: "Government incentives included",
  },
]

export default function QuickStats() {
  return (
    <section className="w-full py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-background via-green-50/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float-up" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-float-up stagger-2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <span className="inline-block text-sm font-semibold text-green-600 uppercase tracking-widest mb-4 bg-green-100/60 px-4 py-2 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Industry-Leading Results & Support
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers across Jaipur enjoying clean energy and maximum savings
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white via-secondary to-background rounded-2xl p-8 sm:p-10 text-center hover:shadow-2xl transition-all duration-500 border border-green-200/40 hover:border-accent/60 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-green-400/10 rounded-2xl mb-6 group-hover:from-accent/30 group-hover:to-green-400/20 transition-all duration-300 border border-green-200/50">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </h3>
                  <p className="font-bold text-lg text-primary mb-3">{stat.label}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{stat.description}</p>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-green-400/10 transition-colors duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
