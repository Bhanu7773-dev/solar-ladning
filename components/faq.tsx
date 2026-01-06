"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const faqs = [
    {
      question: "How much can I save with solar?",
      answer:
        "Most homeowners save 70-90% on their electricity bills depending on system size and consumption. You can use our calculator to get an accurate estimate for your home.",
    },
    {
      question: "What if I produce extra electricity?",
      answer:
        "Excess solar power is fed back to the grid and you earn credits from your electricity company. This is called net metering, and it can significantly reduce your annual costs.",
    },
    {
      question: "Do solar panels work on cloudy days?",
      answer:
        "Yes! Solar panels produce electricity even on cloudy days, though at reduced efficiency. India gets excellent sunlight throughout the year making solar highly viable.",
    },
    {
      question: "What is the installation timeline?",
      answer:
        "Typically, from consultation to full installation takes 4-6 weeks, depending on government approvals and subsidy processing. The actual installation takes just 2-3 days.",
    },
    {
      question: "Is government subsidy really 100%?",
      answer:
        "Under various schemes like PM-KUSUM, you can get subsidies covering 40-60% of cost depending on eligibility. We handle all documentation to maximize your benefits.",
    },
    {
      question: "What warranty do you provide?",
      answer:
        "We offer 25-year performance warranty on panels, 10-year warranty on inverters, and 5-year comprehensive installation warranty covering all components.",
    },
  ]

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-background overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Got questions? We've got answers. Learn more about solar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ faq, index }: { faq: any; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="bg-secondary rounded-lg border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/5 transition-colors duration-200"
      >
        <h3 className="font-semibold text-primary pr-8">{faq.question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-6 py-4 bg-background border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  )
}
