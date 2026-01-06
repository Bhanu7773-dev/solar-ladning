"use client"

import { Zap, Leaf, DollarSign, Home, Shield, TrendingUp } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Maximum Savings",
      description: "Reduce electricity bills by up to 90% from day one",
      color: "from-accent/25 to-accent/5",
      borderColor: "border-accent/30",
    },
    {
      icon: Leaf,
      title: "Eco Friendly",
      description: "Go green and help save the environment for future generations",
      color: "from-green-500/25 to-green-500/5",
      borderColor: "border-green-400/30",
    },
    {
      icon: Home,
      title: "Increase Property Value",
      description: "Solar installations increase your home's market value significantly",
      color: "from-blue-500/20 to-blue-500/5",
      borderColor: "border-blue-300/30",
    },
    {
      icon: Shield,
      title: "25-Year Warranty",
      description: "Complete protection with industry-leading warranty coverage",
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-300/30",
    },
    {
      icon: Zap,
      title: "Zero Upfront Cost",
      description: "100% subsidy support means you pay nothing to start",
      color: "from-accent/25 to-accent/5",
      borderColor: "border-accent/30",
    },
    {
      icon: TrendingUp,
      title: "Government Benefits",
      description: "Avail all government schemes, tax benefits, and incentives",
      color: "from-green-500/25 to-green-500/5",
      borderColor: "border-green-400/30",
    },
  ]

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float-up" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float-up stagger-3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <span className="inline-block text-sm font-semibold text-green-600 uppercase tracking-widest mb-4 bg-green-100/60 px-4 py-2 rounded-full">
            Our Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-balance">
            Complete Solar Solution
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Experience the ultimate solar energy solution with unmatched benefits, superior support, and guaranteed
            returns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br from-white to-secondary rounded-2xl border-2 ${benefit.borderColor} p-8 sm:p-10 hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in hover:-translate-y-2`}
                style={{ animationDelay: `${idx * 0.12}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent/20 to-green-400/10 rounded-xl mb-6 group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-300 border border-green-200/50">
                    <Icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-green-400/20 transition-colors duration-500 opacity-0 group-hover:opacity-70" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
