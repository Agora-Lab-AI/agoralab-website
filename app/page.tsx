'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Twitter, ExternalLink, ChevronDown, Brain, Code, Server, Rocket } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'


export default function Page() {
  const [repos, setRepos] = useState([])
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const reposPerPage = 12 // Show 4 rows of 3 repos

  useEffect(() => {
    const fetchRepos = async () => {
      const orgs = ['Agora-Lab-AI', 'kyegomez', 'The-Swarm-Corporation']
      try {
        setIsLoading(true)
        const allRepos: any = await Promise.all(orgs.map(async (org) => {
          const response = await fetch(`https://api.github.com/users/${org}/repos?per_page=100`)
          const data = await response.json()
          return data.map(repo => ({ ...repo, org }))
        }))

        const sortedRepos = allRepos
          .flat()
          .sort((a, b) => b.stargazers_count - a.stargazers_count)

        setRepos(sortedRepos)
      } catch (error) {
        console.error('Error fetching repos:', error)
        setRepos([])
      } finally {
        setIsLoading(false)
      }
    }
    fetchRepos()
  }, [])


  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    benefits: useRef(null),
    positions: useRef(null),
    apply: useRef(null),
  }


  // Calculate pagination
  const indexOfLastRepo = currentPage * reposPerPage
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage
  const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo)
  const totalPages = Math.ceil(repos.length / reposPerPage)
  return (
    <div className="min-h-screen bg-white text-blue-900">
      <header className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center bg-blue-50 sticky top-0 z-50">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4 md:mb-0">Agora Labs</h1>
        <nav className="flex flex-wrap justify-center gap-4 md:space-x-4">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#values" className="hover:text-blue-600 transition-colors">Values</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#join" className="hover:text-blue-600 transition-colors">Join Us</a>
          <a href="/blog" className="hover:text-blue-600 transition-colors">Blog</a>
          <a href="/careers" className="hover:text-blue-600 transition-colors">Careers</a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-16 md:py-0">
          <motion.div
            style={{ opacity, scale }}
            className="text-center z-10 px-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Advancing Humanity with Open-Source AI Research
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-800">
              Premier Open Source & Decentralized AI Research Lab
            </p>
            <a
              href="https://discord.gg/qUtxnK2NMf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-3 text-base sm:text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
            >
              Join 9,000+ Researchers
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </motion.div>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-200 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                }}
                animate={{
                  y: [0, Math.random() * 50 - 25],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10 hidden md:block"
          >
            <ChevronDown size={40} className="text-blue-500" />
          </motion.div>
        </section>

        <section id="about" className="py-12 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-center">
            {[
              { title: "~9,000", subtitle: "Community Members", color: "blue" },
              { title: "1000+", subtitle: "Foundation Models Built", color: "indigo" },
              { title: "100+", subtitle: "Papers Implemented", color: "sky" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`bg-${item.color}-50 border-${item.color}-200 border-2 hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <CardTitle className={`text-3xl md:text-4xl font-bold text-${item.color}-600`}>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base md:text-lg text-blue-800">{item.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>


        <section id="about" ref={sectionRefs.about} className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-12 text-center">About Agora Lab</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-lg">
                <CardContent className="p-8">
                  <Brain className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">All-New AI Research</h3>
                  <p className="text-gray-600">We're at the forefront of AI innovation, constantly pushing the boundaries of what's possible.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-white border-none shadow-lg">
                <CardContent className="p-8">
                  <Code className="w-12 h-12 text-purple-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Open Source Foundation Models</h3>
                  <p className="text-gray-600">We build and train cutting-edge foundation models, making them accessible to the world.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-white border-none shadow-lg">
                <CardContent className="p-8">
                  <Server className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">High-Performance Training</h3>
                  <p className="text-gray-600">Our state-of-the-art infrastructure allows us to train models at unprecedented scales.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-yellow-50 to-white border-none shadow-lg">
                <CardContent className="p-8">
                  <Rocket className="w-12 h-12 text-yellow-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">Rapid Innovation</h3>
                  <p className="text-gray-600">We move fast, iterate quickly, and aren't afraid to challenge the status quo.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="values" className="py-12 md:py-20 bg-blue-50">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-blue-800">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md"
            >
              <h4 className="text-lg md:text-xl font-bold text-blue-700 mb-3 md:mb-4">Radical Open Source</h4>
              <p className="text-sm md:text-base text-blue-600">We believe in complete transparency and collaboration. Every line of code, every research finding, and every breakthrough is shared with the global community.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md"
            >
              <h4 className="text-lg md:text-xl font-bold text-blue-700 mb-3 md:mb-4">Pioneering Innovation</h4>
              <p className="text-sm md:text-base text-blue-600">We're pushing the boundaries of AI with novel foundation models and tackling challenges that have never been solved before.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md"
            >
              <h4 className="text-lg md:text-xl font-bold text-blue-700 mb-3 md:mb-4">Global Community</h4>
              <p className="text-sm md:text-base text-blue-600">From Palo Alto to Miami, we host hackathons and events worldwide, bringing together the brightest minds in AI research.</p>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-blue-800">
            Our Projects
            <span className="text-base md:text-lg ml-2 text-blue-600">({repos.length} total)</span>
          </h3>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {currentRepos.map((repo: any, index: number) => (
                  <motion.div
                    key={repo.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg md:text-xl font-semibold text-blue-700 break-words">{repo.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-xs md:text-sm text-blue-600 mb-4 line-clamp-2">{repo.description}</p>
                        <p className="text-xs md:text-sm">
                          <span className="text-yellow-600 mr-2">★ {repo.stargazers_count}</span>
                          <span className="text-blue-500">{repo.language}</span>
                        </p>
                      </CardContent>
                      <CardFooter className="flex flex-col sm:flex-row justify-between gap-2">
                        <span className="text-xs md:text-sm text-blue-400">{repo.org}</span>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs md:text-sm">
                          <Github className="inline mr-1" size={16} />
                          View on GitHub
                        </a>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Pagination Controls */}
              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-full sm:w-auto"
                >
                  Previous
                </Button>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {[...Array(totalPages)].map((_, idx) => (
                    <Button
                      key={idx}
                      variant={currentPage === idx + 1 ? "default" : "outline"}
                      onClick={() => setCurrentPage(idx + 1)}
                      className="w-8 h-8 md:w-10 md:h-10"
                    >
                      {idx + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-full sm:w-auto"
                >
                  Next
                </Button>
              </div>

              {/* Showing results count */}
              <p className="text-center mt-4 text-blue-600 text-sm md:text-base">
                Showing {indexOfFirstRepo + 1}-{Math.min(indexOfLastRepo, repos.length)} of {repos.length} repositories
              </p>
            </>
          )}
        </section>

        <section id="join" className="py-12 md:py-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-blue-800">Join the Revolution</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://discord.gg/agora-999382051935506503" target="_blank" rel="noopener noreferrer">
                Join our Discord
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto border-blue-500 text-blue-600 hover:bg-blue-50">
              <a href="https://x.com/AgoraLabAI" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2" />
                Follow on Twitter
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto border-blue-500 text-blue-600 hover:bg-blue-50">
              <a href="https://agoralab.ai" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" />
                Visit Website
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-50 py-6 md:py-8 text-center text-blue-600 text-sm md:text-base">
        <p>&copy; 2024 agoralab.ai All rights reserved.</p>
      </footer>
    </div>
  )
}