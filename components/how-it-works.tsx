import { Sun, Battery, Home, Zap } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Sun,
      title: "Solar Panels Absorb Sunlight",
      description: "Premium solar panels capture sunlight and convert it to direct current (DC) electricity",
      color: "from-yellow-400 to-orange-400",
    },
    {
      icon: Zap,
      title: "Inverter Converts Power",
      description: "The inverter converts DC power to alternating current (AC) that powers your home",
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: Home,
      title: "Power Your Home",
      description: "Your home runs on clean, free solar energy during the day",
      color: "from-green-400 to-emerald-400",
    },
    {
      icon: Battery,
      title: "Extra Stored or Sold",
      description: "Excess energy is fed back to the grid and you earn credits from your electricity company",
      color: "from-purple-400 to-pink-400",
    },
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            How Solar Power Works
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Simple, efficient, and reliable technology powering homes since decades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative group animate-fade-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-secondary to-background rounded-xl border border-border p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 overflow-hidden">
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-accent/30">{String(idx + 1).padStart(2, "0")}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${step.color} rounded-lg mb-4`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold text-primary mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Arrow connector (hidden on last) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/3 text-accent text-2xl animate-pulse">→</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
