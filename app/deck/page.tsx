'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Brain, Code, Server, Rocket, Github, Twitter, ExternalLink, ChevronDown, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const milestoneData = [
  { name: 'Researchers', value: 9000 },
  { name: 'Models Built', value: 1000 },
  { name: 'Papers Implemented', value: 100 },
]

const impactData = [
  { name: 'NLP', value: 35 },
  { name: 'Computer Vision', value: 25 },
  { name: 'Speech Recognition', value: 20 },
  { name: 'Cross-modal AI', value: 20 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function FullPitchDeckLandingPage() {
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const scale = useTransform(scrollY, [0, 200], [1, 0.95])

  const sectionRefs = {
    hero: useRef(null),
    problem: useRef(null),
    solution: useRef(null),
    milestones: useRef(null),
    approach: useRef(null),
    impact: useRef(null),
    team: useRef(null),
    roadmap: useRef(null),
    join: useRef(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      for (const section in sectionRefs) {
        const element = sectionRefs[section].current
        if (element && element.offsetTop <= scrollPosition && element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900 font-sans">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Agora</h1>
          <nav className="hidden md:flex space-x-4">
            {Object.keys(sectionRefs).map((section) => (
              <button
                key={section}
                className={`text-sm font-medium transition-colors ${
                  activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {Object.keys(sectionRefs).map((section) => (
                  <button
                    key={section}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => {
                      scrollToSection(section)
                      document.querySelector('[data-radix-focus-guard]')?.setAttribute('data-click', 'true') // Close the sheet
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="pt-20">
        <section id="hero" ref={sectionRefs.hero} className="min-h-screen flex items-center justify-center px-4">
          <motion.div style={{ opacity, scale }} className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Agora: Pioneering the Future of Foundation Models
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto">
              Revolutionizing AI through open collaboration and innovation
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-lg">
              <a href="#join" onClick={(e) => { e.preventDefault(); scrollToSection('join'); }}>Join the Revolution</a>
            </Button>
          </motion.div>
        </section>

        <section id="problem" ref={sectionRefs.problem} className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">The Challenge</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Limited Modalities", description: "Traditional AI models are confined to single data types, limiting their versatility and applicability." },
                { title: "Lack of Integration", description: "Insufficient integration between different types of data and inputs hinders comprehensive AI understanding." },
                { title: "Inefficient Resources", description: "Current approaches often lead to inefficient use of computational resources in model training and deployment." },
              ].map((item, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="solution" ref={sectionRefs.solution} className="py-20 bg-blue-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Solution</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "All-New Foundation Models", description: "Pushing the boundaries of AI with state-of-the-art performance across various tasks." },
                { title: "Multi-Modality Models", description: "Seamlessly integrating text, image, audio, and video for enhanced understanding and generation." },
                { title: "Omni-Modality Models", description: "Creating unified AI systems capable of processing and understanding any input type." },
              ].map((item, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p>{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="milestones" ref={sectionRefs.milestones} className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Milestones</h2>
            <div className="h-[300px] md:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={milestoneData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        <section id="approach" ref={sectionRefs.approach} className="py-20 bg-blue-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Brain, title: "Cutting-Edge Research", description: "Implementing 100+ research papers" },
                { icon: Code, title: "Open Source", description: "Building 1,000+ foundation models" },
                { icon: Server, title: "High-Performance Computing", description: "State-of-the-art infrastructure" },
                { icon: Rocket, title: "Rapid Innovation", description: "Continuous improvement cycles" },
              ].map((item, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="impact" ref={sectionRefs.impact} className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 h-[300px] md:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={impactData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius="80%"
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <h3 className="text-2xl font-semibold mb-4">Revolutionizing AI Applications</h3>
                <ul className="space-y-2">
                  <li>• Advanced Natural Language Processing</li>
                  <li>• Cutting-edge Computer Vision</li>
                  <li>• Improved Speech Recognition</li>
                  <li>• Innovative Cross-modal AI Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="team" ref={sectionRefs.team} className="py-20 bg-blue-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Kye Gomez", role: "Founder & Lead AI Researcher", bio: "10 years of AI research experience, pioneering work in multi-modal foundation models" },
                { name: "Peyton Tolbert", role: "AI Security Specialist", bio: "Former AI researcher at the Department of Defense, expertise in securing large-scale AI models" },
                { name: "Jack", role: "Senior Research Scientist", bio: "Leading AI researcher from Australia, specializes in omni-modality model architectures" },
              ].map((member, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-blue-600 mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" ref={sectionRefs.roadmap} className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Future Roadmap</h2>
            <div className="space-y-8">
              {[
                { title: "Expand Researcher Community", description: "Grow to 15,000+ active researchers" },
                { title: "Next-Gen Omni-Modality Models", description: "Develop groundbreaking models that seamlessly integrate all data types" },
                { title: "Implement 200+ Research Papers", description: "Continue to push the boundaries of AI research" },
                { title: "Launch AI-as-a-Service Platform", description: "Provide easy access to our advanced models for researchers and developers" },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="join" ref={sectionRefs.join} className="py-20 bg-blue-50 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Join the AI Revolution</h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Be part of shaping the future of AI. Collaborate with world-class researchers and access cutting-edge foundation models.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                <a href="https://discord.gg/agora-999382051935506503" target="_blank" rel="noopener noreferrer">
                  Join our Discord
                </a>
              </Button>
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSckxUnxydu4ijX0nnDR10BfnX8Ncb1ID4wzFeoxqcm1M6FReQ/viewform" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Agora</h3>
              <p className="text-gray-400">Pushing the boundaries of AI, one model at a time.</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://twitter.com/AgoraLabAI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com/Agora-Lab-AI" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://agoralab.ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink className="w-6 h-6" />
                <span className="sr-only">Website</span>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Agora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}