'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Clock, MapPin, Zap, Brain, Code, Server, Rocket, Github, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CareersPage() {
  const [activeSection, setActiveSection] = useState('hero')
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    benefits: useRef(null),
    positions: useRef(null),
    apply: useRef(null),
  }

  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 100], [1, 0])
  const scale = useTransform(scrollY, [0, 100], [1, 0.98])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section in sectionRefs) {
        const element = sectionRefs[section].current
        if (element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const positions = [
    { title: "Model Engineer", description: "Design and implement cutting-edge AI models" },
    { title: "Training Engineer", description: "Optimize training processes for large-scale models using PyTorch" },
    { title: "Research Scientist", description: "Push the boundaries of AI with novel algorithms and approaches" },
    { title: "Infrastructure Engineer", description: "Build and maintain our high-performance computing infrastructure" },
    { title: "Open Source Advocate", description: "Manage our open-source projects and community engagement" }
  ]
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 transition-all duration-300">
        <nav className="container mx-auto px-4 py-3">
          <ul className="flex flex-wrap justify-center gap-4 text-center">
            {Object.keys(sectionRefs).map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`text-sm font-medium transition-colors px-2 py-1 ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        <section id="hero" ref={sectionRefs.hero} className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
          <motion.div style={{ opacity, scale }} className="text-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Advance Humanity with Novel AI Research
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-600 px-4">
              Shape Humanity's future with all-new foundation models and cutting-edge research!
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto">
              <a href="#apply">Apply Now</a>
            </Button>
          </motion.div>
        </section>

        <section id="about" ref={sectionRefs.about} className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">About Agora Lab</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
              <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">All-New AI Research</h3>
                  <p className="text-gray-600 text-sm sm:text-base">We're at the forefront of AI innovation, constantly pushing the boundaries of what's possible.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-white border-none shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <Code className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Open Source Foundation Models</h3>
                  <p className="text-gray-600 text-sm sm:text-base">We build and train cutting-edge foundation models, making them accessible to the world.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-white border-none shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <Server className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">High-Performance Training</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Our state-of-the-art infrastructure allows us to train models at unprecedented scales.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-50 to-white border-none shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Rapid Innovation</h3>
                  <p className="text-gray-600 text-sm sm:text-base">We move fast, iterate quickly, and aren't afraid to challenge the status quo.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="benefits" ref={sectionRefs.benefits} className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Why Join Agora Lab?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Cutting-Edge Work</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Be at the forefront of AI research and development, working on projects that shape the future.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Prime Locations</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Work from our offices in the heart of Silicon Valley - Palo Alto and Menlo Park.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-none shadow-lg sm:col-span-2 md:col-span-1">
                <CardContent className="p-6 sm:p-8">
                  <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-green-500 mb-4" />
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Intense Schedule</h3>
                  <p className="text-gray-600 text-sm sm:text-base">For those who live and breathe AI, our work hours are 9am to 10pm. We're committed to pushing boundaries.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="positions" ref={sectionRefs.positions} className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {positions.map((position, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-50 to-white border-none shadow-lg">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{position.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" ref={sectionRefs.apply} className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">How to Join</h2>
            <div className="max-w-2xl mx-auto">
              <ol className="space-y-6 sm:space-y-8">
                <li className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 text-base sm:text-lg font-semibold">1</span>
                  <span className="text-lg sm:text-xl">Fill out our <a href="https://docs.google.com/forms/d/e/1FAIpQLSckxUnxydu4ijX0nnDR10BfnX8Ncb1ID4wzFeoxqcm1M6FReQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">application form</a></span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 text-base sm:text-lg font-semibold mt-1">2</span>
                  <span className="text-lg sm:text-xl">Submit 3 PRs to our repos with explanation videos and documentation:
                    <div className="mt-2 flex flex-col sm:flex-row gap-2 sm:space-x-4">
                      <a href="https://github.com/Agora-Lab-AI" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> Agora-Lab-AI
                      </a>
                      <a href="https://github.com/kyegomez" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                        <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1" /> kyegomez
                      </a>
                    </div>
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center mr-3 sm:mr-4 text-base sm:text-lg font-semibold">3</span>
                  <span className="text-lg sm:text-xl">Join our <a href="https://discord.gg/agora-999382051935506503" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Discord community</a></span>
                </li>
              </ol>
            </div>
            <div className="text-center mt-12 sm:mt-16">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl w-full sm:w-auto">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSckxUnxydu4ijX0nnDR10BfnX8Ncb1ID4wzFeoxqcm1M6FReQ/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-base sm:text-lg mb-4">&copy; 2024 Agora Lab. Pushing the boundaries of AI, one model at a time.</p>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a href="https://agoralab.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a href="https://github.com/Agora-Lab-AI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}