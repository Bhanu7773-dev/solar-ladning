import HeroSection from "@/components/hero-section"
import QuickStats from "@/components/quick-stats"
import ProjectGallery from "@/components/project-gallery"
import LeadCaptureForm from "@/components/lead-capture-form"
import TrustSignals from "@/components/trust-signals"
import FloatingWhatsApp from "@/components/floating-whatsapp"
import HowItWorks from "@/components/how-it-works"
import ProcessFlow from "@/components/process-flow"
import BenefitsSection from "@/components/benefits-section"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import CTASection from "@/components/cta-section"
import AnimatedSectionDivider from "@/components/animated-section-divider"

export default function Home() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <HeroSection />
      <AnimatedSectionDivider height={140} variant="flowing" />
      <QuickStats />
      <AnimatedSectionDivider height={140} variant="particles" />
      <BenefitsSection />
      <AnimatedSectionDivider height={140} variant="flowing" />
      <ProcessFlow />
      <AnimatedSectionDivider height={140} variant="wire" />
      <HowItWorks />
      <AnimatedSectionDivider height={140} variant="particles" />
      <ProjectGallery />
      <AnimatedSectionDivider height={140} variant="particles" />
      <Testimonials />
      <AnimatedSectionDivider height={140} variant="flowing" />
      <LeadCaptureForm />
      <AnimatedSectionDivider height={140} variant="wire" />
      <FAQ />
      <AnimatedSectionDivider height={140} variant="particles" />
      <TrustSignals />
      <AnimatedSectionDivider height={140} variant="flowing" />
      <CTASection />
      <FloatingWhatsApp />
    </main>
  )
}
