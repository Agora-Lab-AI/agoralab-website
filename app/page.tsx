'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Twitter, ExternalLink, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Page() {
  const [repos, setRepos] = useState([])
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const fetchRepos = async () => {
      const orgs = ['Agora-Lab-AI', 'kyegomez', 'The-Swarm-Corporation']
      const allRepos: any = await Promise.all(orgs.map(async (org) => {
        const response = await fetch(`https://api.github.com/users/${org}/repos?sort=stars&per_page=3`)
        const data = await response.json()
        return data.map(repo => ({ ...repo, org }))
      }))
      setRepos(allRepos.flat())
    }
    fetchRepos()
  }, [])

  return (
    <div className="min-h-screen bg-white text-blue-900">
      <header className="p-6 flex justify-between items-center bg-blue-50 sticky top-0 z-50">
        <h1 className="text-3xl font-bold text-blue-600">AgoraLab.ai</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#join" className="hover:text-blue-600 transition-colors">Join Us</a>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section id="hero" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
          <motion.div
            style={{ opacity, scale }}
            className="text-center z-10"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              The Future of AI Research
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-800">
              Premier Open Source & Decentralized AI Research Lab
            </p>
          </motion.div>
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-200 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-10"
          >
            <ChevronDown size={40} className="text-blue-500" />
          </motion.div>
        </section>

        <section id="about" className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
                    <CardTitle className={`text-4xl font-bold text-${item.color}-600`}>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-blue-800">{item.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-800">Our Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo: any, index: number) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white shadow-md hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-700">{repo.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-600 mb-4">{repo.description}</p>
                    <p className="text-sm">
                      <span className="text-yellow-600 mr-2">★ {repo.stargazers_count}</span>
                      <span className="text-blue-500">{repo.language}</span>
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <span className="text-sm text-blue-400">{repo.org}</span>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                      <Github className="inline mr-1" size={16} />
                      View on GitHub
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="join" className="py-20 text-center">
          <h3 className="text-3xl font-bold mb-8 text-blue-800">Join the Revolution</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <a href="https://discord.gg/agora-999382051935506503" target="_blank" rel="noopener noreferrer">
                Join our Discord
              </a>
            </Button>
            <Button asChild variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              <a href="https://x.com/AgoraLabAI" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2" />
                Follow on Twitter
              </a>
            </Button>
            <Button asChild variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              <a href="https://agoralab.ai" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2" />
                Visit Website
              </a>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-blue-50 py-8 text-center text-blue-600">
        <p>&copy; 2024 AgoraLab.ai. All rights reserved.</p>
      </footer>
    </div>
  )
}