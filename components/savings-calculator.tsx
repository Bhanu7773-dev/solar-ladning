"use client"

import { useState, useEffect } from "react"
import { Zap, TrendingUp } from "lucide-react"

export default function SavingsCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(5000)
  const [annualSavings, setAnnualSavings] = useState(0)

  useEffect(() => {
    const yearlySavings = monthlyBill * 12 * 0.9
    setAnnualSavings(Math.round(yearlySavings))
  }, [monthlyBill])

  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-20 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-float-up" />
        <div className="absolute -bottom-40 right-10 w-96 h-96 bg-accent/6 rounded-full blur-3xl animate-float-up stagger-4" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4 bg-accent/10 px-4 py-2 rounded-full">
            Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">See Your Savings Potential</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Slide your monthly bill to instantly calculate annual and lifetime savings
          </p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-accent/20 p-10 sm:p-14 shadow-2xl hover:shadow-3xl transition-shadow duration-500 overflow-hidden animate-scale-up">
          <div className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            {/* Input Section */}
            <div className="mb-12">
              <label className="block text-lg font-bold text-primary mb-6">Your Monthly Electricity Bill</label>
              <div className="relative mb-8">
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl font-bold text-accent pl-4">
                  ₹
                </span>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-border rounded-full appearance-none cursor-pointer accent-accent"
                  style={{
                    background: `linear-gradient(to right, #10b981 0%, #10b981 ${((monthlyBill - 1000) / (50000 - 1000)) * 100}%, #e8ecf1 ${((monthlyBill - 1000) / (50000 - 1000)) * 100}%, #e8ecf1 100%)`,
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="flex-1 px-14 py-4 bg-secondary border-2 border-accent/30 rounded-xl text-primary font-bold text-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                  placeholder="5000"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {/* Annual Savings */}
              <div className="group relative bg-primary rounded-2xl p-8 sm:p-10 text-center border-2 border-accent/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/20 rounded-full mb-4">
                    <Zap className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-accent text-xs font-bold uppercase tracking-wider mb-2">Annual Savings</p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">₹{annualSavings.toLocaleString()}</h3>
                  <p className="text-white/80 text-sm">per year with 90% reduction</p>
                </div>
              </div>

              {/* 25 Year Returns */}
              <div className="group relative bg-accent rounded-2xl p-8 sm:p-10 text-center border-2 border-accent/80 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">Lifetime Returns</p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    ₹{(annualSavings * 25).toLocaleString()}
                  </h3>
                  <p className="text-white/80 text-sm">over 25 years warranty</p>
                </div>
              </div>

              {/* Payback Period */}
              <div className="group relative bg-accent rounded-2xl p-8 sm:p-10 text-center border-2 border-accent/60 hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-full mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">Payback Period</p>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">3-4 Years</h3>
                  <p className="text-white/80 text-sm">then pure savings</p>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-8 font-medium">
              *Based on 90% bill reduction, ₹3.5L avg system cost, and government subsidy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
