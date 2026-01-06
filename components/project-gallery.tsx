"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Residential Rooftop - Malviya Nagar",
    type: "Residential",
    image: "/modern-residential-solar-panels-on-roof.jpg",
    savings: "₹86,400/year",
  },
  {
    id: 2,
    title: "Commercial Building - Civil Lines",
    type: "Commercial",
    image: "/large-commercial-solar-installation.jpg",
    savings: "₹2,40,000/year",
  },
  {
    id: 3,
    title: "Residential Complex - Vaishali Nagar",
    type: "Residential",
    image: "/residential-solar-panels-installation.jpg",
    savings: "₹72,000/year",
  },
  {
    id: 4,
    title: "Factory Rooftop - Industrial Area",
    type: "Commercial",
    image: "/industrial-solar-panels-on-factory-roof.jpg",
    savings: "₹5,40,000/year",
  },
]

export default function ProjectGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section className="w-full py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-secondary/50 via-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-green-400/8 rounded-full blur-3xl animate-float-up stagger-1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <span className="inline-block text-sm font-semibold text-green-600 uppercase tracking-widest mb-4 bg-green-100/60 px-4 py-2 rounded-full">
            Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Our Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real installations from satisfied customers across Jaipur showcasing our expertise
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-background border-2 border-green-200/40 hover:border-accent/60 transition-all duration-500 shadow-lg hover:shadow-2xl animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-end justify-end p-6">
                <div className="w-full">
                  <p className="text-xs font-bold text-accent mb-2 uppercase tracking-wider">{project.type}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="inline-block bg-green-500/90 text-white text-sm font-semibold px-4 py-2 rounded-lg">
                    Saves {project.savings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative mb-8 animate-fade-in">
            <div className="aspect-video overflow-hidden rounded-2xl bg-background border-2 border-green-200/40">
              <img
                src={projects[currentIndex].image || "/placeholder.svg"}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent flex flex-col items-end justify-end p-6 rounded-2xl">
              <div className="w-full">
                <p className="text-xs font-bold text-accent mb-2 uppercase">{projects[currentIndex].type}</p>
                <h3 className="text-lg font-bold text-white mb-3">{projects[currentIndex].title}</h3>
                <div className="inline-block bg-green-500/90 text-white text-sm font-semibold px-4 py-2 rounded-lg">
                  Saves {projects[currentIndex].savings}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-accent text-primary hover:bg-accent/90 border-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2 flex-1 justify-center">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-accent w-8" : "bg-border w-2 hover:bg-green-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-accent text-primary hover:bg-accent/90 border-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
