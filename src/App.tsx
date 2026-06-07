import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import RolesSection from './components/RolesSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import TechStack from './components/TechStack'
import QuoteSection from './components/QuoteSection'
import WhySection from './components/WhySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <RolesSection />
        <AboutSection />
        <ProjectsSection />
        <TechStack />
        <QuoteSection />
        <WhySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}