import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-r from-primary to-primary/90 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -mr-48 -mt-48 animate-float-up" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -ml-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in">
          Ready to Save on Your Electricity Bill?
        </h2>

        <p
          className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Join thousands of happy customers and get your free solar quote today. Installation at zero cost!
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base h-12 px-8 rounded-lg gap-2 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us Now
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-base h-12 px-8 rounded-lg transition-all bg-transparent"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call +91-XXXXX-XXXXX
          </Button>
        </div>

        <p className="text-white/70 text-sm mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          ✓ Free consultation ✓ Free site visit ✓ Zero hidden charges
        </p>
      </div>
    </section>
  )
}
