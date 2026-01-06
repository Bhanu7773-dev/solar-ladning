"use client"

import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Vaishali Nagar, Jaipur",
      rating: 5,
      text: "Sundaram Solar transformed my electricity bills! From ₹8000/month to just ₹800. Amazing service and professional team.",
      savings: "₹86,400/year",
      image: "/customer-avatar-1.jpg",
    },
    {
      name: "Priya Sharma",
      location: "Malviya Nagar, Jaipur",
      rating: 5,
      text: "Best investment I made! The installation was quick, and their support team is always available. Highly recommended!",
      savings: "₹54,000/year",
      image: "/customer-avatar-2.jpg",
    },
    {
      name: "Vikram Singh",
      location: "Bani Park, Jaipur",
      rating: 5,
      text: "Professional installation, transparent pricing, and government subsidy handled completely. No hidden charges!",
      savings: "₹72,000/year",
      image: "/customer-avatar-3.jpg",
    },
    {
      name: "Meera Patel",
      location: "C-Scheme, Jaipur",
      rating: 5,
      text: "I was skeptical at first, but Sundaram Solar's team answered all my questions. Now my house is completely solar-powered!",
      savings: "₹60,000/year",
      image: "/customer-avatar-4.jpg",
    },
  ]

  return (
    <section className="relative w-full py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-secondary/30 via-background to-green-50/20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-green-400/8 rounded-full blur-3xl animate-float-up stagger-2" />
        <div className="absolute -bottom-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-up stagger-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <span className="inline-block text-sm font-semibold text-green-600 uppercase tracking-widest mb-4 bg-green-100/60 px-4 py-2 rounded-full">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 text-balance">
            Happy Customers Say It Best
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join 500+ satisfied families who have transformed their homes and saved thousands
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl border-2 border-green-200/50 p-8 sm:p-10 hover:border-accent/60 hover:shadow-2xl transition-all duration-500 overflow-hidden animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                {/* Savings badge */}
                <div className="inline-block bg-gradient-to-r from-green-500/20 to-accent/20 text-green-700 text-xs font-bold px-4 py-2 rounded-full mb-6 border border-green-300/40 group-hover:border-green-300 transition-colors">
                  💰 Saves {testimonial.savings}
                </div>

                {/* Name & Location */}
                <div className="border-t border-green-200/30 pt-6">
                  <p className="font-bold text-primary text-base">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
