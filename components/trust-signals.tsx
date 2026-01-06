import { Star, Award, Users, BarChart3 } from "lucide-react"

const certifications = [
  {
    icon: Award,
    title: "MNRE Certified",
    description: "Ministry of New & Renewable Energy",
  },
  {
    icon: BarChart3,
    title: "ISO 9001:2015",
    description: "Quality Management Certified",
  },
  {
    icon: Users,
    title: "CREDAI Member",
    description: "Real Estate Association Member",
  },
]

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Malviya Nagar",
    text: "Sundaram Solar reduced my electricity bill by 85%. Outstanding service and professional installation!",
    rating: 5,
  },
  {
    name: "Priya Singh",
    location: "C-Scheme",
    text: "Best investment for my house. The team was very supportive throughout the subsidy process.",
    rating: 5,
  },
  {
    name: "Arun Patel",
    location: "Vaishali Nagar",
    text: "25 years warranty gives me complete peace of mind. Highly recommended!",
    rating: 5,
  },
]

export default function TrustSignals() {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Industry Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div
                  key={index}
                  className="bg-secondary rounded-xl p-6 sm:p-8 text-center border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-6 sm:p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-primary mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
