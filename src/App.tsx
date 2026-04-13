import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import HowItWorks from './components/HowItWorks'
import Differentiator from './components/Differentiator'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import FloatingCTA from './components/FloatingCTA'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  return (
    <>
      <Navbar onCta={openModal} />
      <main>
        <Hero onCta={openModal} />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Differentiator />
        <FinalCTA onCta={openModal} />
      </main>
      <Footer />
      <FloatingCTA onCta={openModal} />
      <ContactModal open={modalOpen} onClose={closeModal} />
    </>
  )
}
