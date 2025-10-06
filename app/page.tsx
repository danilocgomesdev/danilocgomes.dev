"use client"

import { Github, Linkedin, Mail, ArrowRight, Code2, Database, Cloud, Layers, Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-3">
              <img
                src="https://github.com/danilocgomesdev.png"
                alt="Danilo C. Gomes"
                className="w-10 h-10 rounded-full border-2 border-primary/50 hover:border-primary transition-colors"
              />
              <span className="text-xl font-bold text-primary">danilocgomes.dev</span>
            </a>
            {/* </CHANGE> */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Habilidades
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experiência
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projetos
              </a>
              <Button size="sm" asChild>
                <a href="#contact">Contato</a>
              </Button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Sobre
              </a>
              <a
                href="#skills"
                onClick={closeMobileMenu}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Habilidades
              </a>
              <a
                href="#experience"
                onClick={closeMobileMenu}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Experiência
              </a>
              <a
                href="#projects"
                onClick={closeMobileMenu}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Projetos
              </a>
              <Button size="sm" className="w-full" asChild>
                <a href="#contact" onClick={closeMobileMenu}>
                  Contato
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center grid-pattern pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <p className="text-primary text-sm font-mono tracking-wider">{"<developer>"}</p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Danilo C. Gomes</h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light">
                Desenvolvedor Full Stack & Especialista em Quarkus & React Js
              </p>
              <p className="text-primary text-sm font-mono tracking-wider">{"</developer>"}</p>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Desenvolvedor Backend Java | Especialista em Quarkus & React Js | Integro APIs robustas e soluções escaláveis | +10 anos em TI & formação técnica.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/danilocgomesdev/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="gradient-text">Sobre Mim</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
               "Crio pontes entre sistemas complexos e soluções humanas — com Java, React e propósito."
                Sou um desenvolvedor apaixonado por transformar...
              </p>
              <p>
                Sou um desenvolvedor apaixonado por transformar complexidade em soluções simples, eficientes e escaláveis. Com mais de 10 anos de experiência em tecnologia, hoje atuo como Desenvolvedor Backend Java no Cilia Tecnologia,
                criando integrações robustas que impactam diretamente nas infraestruturas de nossos clientes.
                Minha especialidade é integrar tecnologias como Quarkus, Spring e React para desenvolver APIs modernas e interfaces eficientes. 
              </p>
              <p>
                Além da técnica, trago no DNA a missão de educar e compartilhar — fui professor e coordenador de cursos técnicos e universitários, levando conhecimento prático para centenas de alunos.
                Tenho um olhar estratégico voltado para a entrega de valor. Não me limito ao código: entendo a necessidade do negócio, proponho soluções e contribuo para a evolução dos times e produtos com quem trabalho.
                Meu diferencial está na união entre visão sistêmica, habilidade didática e domínio técnico. Gosto de aprender, ensinar e construir junto. Acredito que tecnologia boa é aquela que funciona, gera resultado e é feita por pessoas engajadas com propósito.
              </p>
              <p>
                Se você busca alguém que saiba escrever código limpo, liderar iniciativas e comunicar ideias com clareza, vamos conversar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gradient-text">Habilidades Técnicas</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend */}
              <Card className="p-6 border-border/40 bg-card hover:border-primary/50 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Frontend</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      React.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      TypeScript
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Tailwind CSS
                    </li>
                  </ul>
                </div>
              </Card>
              {/* Backend */}
              <Card className="p-6 border-border/40 bg-card hover:border-primary/50 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Backend</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Java
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Microsserviços
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      REST APIs
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      GraphQL
                    </li>
                  </ul>
                </div>
              </Card>
              {/* Architecture */}
              <Card className="p-6 border-border/40 bg-card hover:border-primary/50 transition-colors">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Arquitetura</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Clean Architecture
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      DDD
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Design Patterns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Keycloak
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="gradient-text">Experiência Profissional</span>
            </h2>
            <div className="space-y-12">
              {/* Experience Item 1 - Placeholder */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold">Analista de Desenvolvimento Sênior</h3>
                    <span className="text-sm text-muted-foreground font-mono">set/2025 — Presente</span>
                  </div>
                  <p className="text-primary font-medium">Cilia Tecnologia</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Responsável pelas integrações estratégicas entre fornecedores, bancos e seguradoras, com o objetivo de fortalecer e expandir o ecossistema da Cilia Tecnologia.
                     Minha função abrange desde a arquitetura e implementação das APIs de integração até a garantia de que as transações sejam robustas, seguras e eficientes.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Java
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Quarkus
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      PostgreSQL
                    </span>
                  </div>
                </div>
              </div>
              {/* Experience Item 2 - Placeholder */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/50"></div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold">Analista de Desenvolvimento Sênior</h3>
                    <span className="text-sm text-muted-foreground font-mono">out/2020 — set/2025</span>
                  </div>
                  <p className="text-primary font-medium">SESI - Departamento Regional de Goiás</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Responsável pelo desenvolvimento e manutenção do sistema financeiro corporativo do Sistema FIEG (SESI, SENAI e IEL), com foco em soluções críticas que integram diretamente com instituições bancárias e meios de pagamento.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Java
                    </span>
                     <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Quarkus
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      React Js
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      TypeScript
                    </span>
                  </div>
                </div>
              </div>
              {/* Experience Item 3 - Placeholder */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/30"></div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold">Professor</h3>
                    <span className="text-sm text-muted-foreground font-mono">jul/2021 — abr/2022</span>
                  </div>
                  <p className="text-primary font-medium">IFG - Instituto Federal de Goiás</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ministrar cursos técnicos de informática, com foco em desenvolvimento de sistemas e lógica de programação, planejando e aplicando conteúdos alinhados ao MEC que combinavam teoria e prática com ferramentas atuais. 
                    Desenvolver materiais didáticos personalizados e atuar como mentor em projetos integradores, auxiliando os alunos a aplicar conhecimentos em problemas reais, utilizando tecnologias como Java, JavaScript e SQL Server, 
                    e promovendo o uso de Git e GitHub para versionamento.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Java
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      React
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Javascript
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Git / Github
                    </span>
                  </div>
                </div>
              </div>
              {/* Experience Item 2 - Placeholder */}
              <div className="relative pl-8 border-l-2 border-primary/30">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/50"></div>
                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-xl font-semibold">Professor</h3>
                    <span className="text-sm text-muted-foreground font-mono">set/2015 — abr/2022</span>
                  </div>
                  <p className="text-primary font-medium">UEG - Universidade Estadual de Goiás</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Atuei como professor de disciplinas de programação, engenharia de software e bancos de dados em cursos de graduação. 
                    Utilizei linguagens como Java, JavaScript e SQL Server para ensinar fundamentos sólidos de desenvolvimento e arquitetura de software.
                    Durante um ano, assumi também a função de coordenador de curso, liderando a reformulação de matrizes curriculares, organização de eventos acadêmicos e 
                    articulação com o mercado local para projetos de extensão.
                 </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Java
                    </span>
                     <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Quarkus
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      React Js
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Docência
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Projects Section */}
      <section id="projects" className="py-24 border-t border-border/40 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="gradient-text">Projetos em Destaque</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Project Card 1 */}
              <Card className="group overflow-hidden border-border/40 bg-card hover:border-primary/50 transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-primary/40" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">A Lista</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Um projeto que tem como objetivo ajudar os usuários a encontrar empresas na cidade de uma forma simples e eficiente.
                      Com uma interface intuitiva, permite pesquisar e categorizar por ramo de ativade. Ideal para quem busca praticidade.
                      Basicamente um guia comercial digital.
                      </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      React
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      React Native
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Node.js
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Mongo DB
                    </span>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/danilocgomesdev/alista" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>                  
                  </div>
                </div>
              </Card>
              {/* Project Card 2 */}
              <Card className="group overflow-hidden border-border/40 bg-card hover:border-primary/50 transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Layers className="w-16 h-16 text-primary/40" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">Arena Fácil</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Uma boa gestão é o primeiro passo para o triunfo, uma plataforma completa de gestão para quadras e campos esportivos. Simplifique suas operações e aumente sua receita de forma inteligente.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Reactjs
                    </span>
                     <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      PostgreSQL
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      TypeScript
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Docker
                    </span>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <Button size="sm" asChild>
                      <a href="https://arenafacil.com.br/" target="_blank" rel="noopener noreferrer">
                        Demo
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-border/40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Vamos Conversar?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte de suas
              visões.
            </p>
            <Button size="lg" className="group" asChild>
              <a href="mailto:contato@danilocgomes.dev">
                <Mail className="w-5 h-5 mr-2" />
                Entre em Contato
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-muted-foreground">© 2025 Danilo C. Gomes. Todos os direitos reservados.</p>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/danilocgomesdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/danilocgomesdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:danilo@example.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
