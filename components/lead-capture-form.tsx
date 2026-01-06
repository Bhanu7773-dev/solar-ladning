"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, CheckCircle } from "lucide-react"

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    monthlyBill: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", phone: "", monthlyBill: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-background via-green-50/25 to-secondary/40 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-20 w-96 h-96 bg-accent/12 rounded-full blur-3xl animate-float-up stagger-1" />
        <div className="absolute -bottom-40 left-10 w-80 h-80 bg-green-400/8 rounded-full blur-3xl animate-float-up stagger-4" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 animate-fade-in">
          <span className="inline-block text-sm font-semibold text-green-600 uppercase tracking-widest mb-4 bg-green-100/60 px-4 py-2 rounded-full">
            Free Quote
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Get Your Personalized Solar Quote
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden charges. No obligations. Just honest solar advice tailored to your needs.
          </p>
        </div>

        {submitted ? (
          <div className="bg-gradient-to-br from-green-500/10 to-accent/10 border-2 border-green-400/60 rounded-2xl p-12 text-center animate-scale-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6 animate-bounce-gentle">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-3">Thank You!</h3>
            <p className="text-muted-foreground text-lg">
              We've received your request and will contact you shortly with your personalized solar quote.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-white via-secondary/30 to-background rounded-3xl p-10 sm:p-14 border-2 border-green-200/40 shadow-2xl hover:shadow-3xl transition-shadow duration-500 overflow-hidden animate-scale-up"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/3 to-accent/3 opacity-0 hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-8">
              {/* Name */}
              <div className="animate-fade-in stagger-1">
                <label className="block text-sm font-bold text-primary mb-3">Your Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-secondary border-2 border-green-200/50 rounded-xl text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-medium text-base hover:border-green-300"
                />
              </div>

              {/* Phone */}
              <div className="animate-fade-in stagger-2">
                <label className="block text-sm font-bold text-primary mb-3">WhatsApp Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-6 py-4 bg-secondary border-2 border-green-200/50 rounded-xl text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-medium text-base hover:border-green-300"
                />
              </div>

              {/* Monthly Bill */}
              <div className="animate-fade-in stagger-3">
                <label className="block text-sm font-bold text-primary mb-3">Approx Monthly Bill (₹)</label>
                <input
                  type="number"
                  name="monthlyBill"
                  value={formData.monthlyBill}
                  onChange={handleChange}
                  required
                  placeholder="5000"
                  className="w-full px-6 py-4 bg-secondary border-2 border-green-200/50 rounded-xl text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-medium text-base hover:border-green-300"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-accent to-green-500 hover:from-accent/90 hover:to-green-600 text-accent-foreground font-bold py-4 rounded-xl h-auto text-base transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 hover:scale-105 animate-scale-up stagger-4"
              >
                <Mail className="w-5 h-5 mr-3" />
                Send Me Free Quote Now
              </Button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-8 font-medium">
              We respect your privacy. 100% secure. No spam guaranteed.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
