"use client"

import { MapPin, FileCheck, Wrench, Zap, Headphones } from "lucide-react"

export default function ProcessFlow() {
  const steps = [
    {
      number: "1",
      title: "Free Site Visit",
      description: "Our expert visits your home to assess solar potential",
      icon: MapPin,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "2",
      title: "Design & Quote",
      description: "Get a customized solar system design and transparent quote",
      icon: FileCheck,
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "3",
      title: "Documentation",
      description: "We handle all subsidy paperwork and government approvals",
      icon: FileCheck,
      color: "from-pink-500 to-pink-600",
    },
    {
      number: "4",
      title: "Installation",
      description: "Professional installation by certified engineers",
      icon: Wrench,
      color: "from-orange-500 to-orange-600",
    },
    {
      number: "5",
      title: "Testing & Go-Live",
      description: "Complete system testing and connection to grid",
      icon: Zap,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      number: "6",
      title: "24/7 Support",
      description: "Ongoing monitoring and lifetime customer support",
      icon: Headphones,
      color: "from-green-500 to-green-600",
    },
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4 bg-accent/10 px-4 py-2 rounded-full">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Simple 6-Step Solar Journey</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From consultation to going solar - we handle everything with expertise and care
          </p>
        </div>

        {/* Desktop: Horizontal flow */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Animated connecting line */}
            <div className="absolute top-20 left-12 right-12 h-1 bg-accent/20 rounded-full overflow-hidden">
              <div className="h-full bg-accent animate-shimmer" style={{ width: "100%", animationDuration: "3s" }} />
            </div>

            <div className="grid grid-cols-6 gap-6 relative z-10">
              {steps.map((step, idx) => {
                const IconComponent = step.icon
                return (
                  <div key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="flex flex-col items-center text-center h-full">
                      <div
                        className={`relative mb-6 transform transition-all duration-300 hover:scale-110 hover:-translate-y-2 group cursor-pointer`}
                      >
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:shadow-accent/40 transition-all duration-300`}
                        >
                          <IconComponent className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                          {step.number}
                        </div>
                      </div>

                      <h3 className="font-bold text-primary mb-2 text-base group-hover:text-accent transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-snug">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical flow */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon
            return (
              <div
                key={idx}
                className="relative flex gap-4 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Vertical line connector */}
                {idx < steps.length - 1 && (
                  <div className="absolute left-10 top-24 w-1 h-16 bg-gradient-to-b from-accent to-transparent" />
                )}

                <div className="flex-shrink-0 relative">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xs shadow-md">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 pt-2 pb-4">
                  <h3 className="font-bold text-primary mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl border-2 border-accent/20 text-center animate-scale-up">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">Ready to Start Your Solar Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get your free site visit and personalized quote within 48 hours
          </p>
          <button className="bg-accent text-white px-8 py-3 rounded-lg font-bold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/40">
            Schedule Your Free Visit
          </button>
        </div>
      </div>
    </section>
  )
}
