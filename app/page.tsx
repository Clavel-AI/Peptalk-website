import Header from "@/components/header"
import Hero from "@/components/hero"
import PhoneMockup from "@/components/phone-mockup"
import ConnectivitySection from "@/components/connectivity-section"
import MessagingFeatures from "@/components/messaging-features"
import DownloadSection from "@/components/DownloadSection"
import Footer from "@/components/Footer"
import AnimatedVideo from "@/components/AnimatedVideo"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 scroll-smooth">
      <Header />
      <Hero />
      <PhoneMockup />
      <ConnectivitySection />
      <AnimatedVideo />
      <section id="features">
        <MessagingFeatures />
      </section>
      <section id="download">
        <DownloadSection />
      </section>
      <Footer />
    </main>
  )
}
