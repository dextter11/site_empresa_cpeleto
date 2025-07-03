"use client"



import type React from "react"

import { useState, useEffect } from "react"
import { Camera, Lock, Phone, Mail, Menu, X, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SecurityWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Camera,
      title: "Câmeras de Segurança",
      description: "Monitoramento 24h com câmeras HD e visão noturna para proteção completa do seu patrimônio.",
      features: ["HD 1080p", "Visão Noturna", "App Mobile"],
    },
    {
      icon: Lock,
      title: "Sistemas de Alarme",
      description: "Alarmes inteligentes com sensores de movimento e resposta imediata em caso de emergência.",
      features: ["Sensores Inteligentes", "Central 24h", "Resposta Rápida"],
    },
    {
      icon: Lock,
      title: "Controle de Acesso",
      description: "Sistemas modernos de controle por cartão, biometria ou código para máxima segurança.",
      features: ["Biometria", "Cartão RFID", "Histórico de Acesso"],
    },
  ]

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5521992075129", "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent("Solicitação de Orçamento - CP Eletrônica")
    const body = encodeURIComponent(`
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}

Mensagem:
${formData.message}
    `)

    const mailtoLink = `mailto:cpeletronica.sac@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <title>Nome do Site</title>
  <link rel="icon" type="image/png" href="favicon.png"></link>
      <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gray-900">CP Eletrônica</span>
              <div className="text-xs text-blue-600 font-medium">Segurança Eletrônica</div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Início
              </a>
              <a href="#servicos" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Serviços
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Sobre
              </a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Contato
              </a>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
              >
                Orçamento Grátis
              </Button>
            </nav>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-100 pt-4">
              <a href="#inicio" className="block text-gray-600 hover:text-blue-600 font-medium">
                Início
              </a>
              <a href="#servicos" className="block text-gray-600 hover:text-blue-600 font-medium">
                Serviços
              </a>
              <a href="#sobre" className="block text-gray-600 hover:text-blue-600 font-medium">
                Sobre
              </a>
              <a href="#contato" className="block text-gray-600 hover:text-blue-600 font-medium">
                Contato
              </a>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
                CP Eletrônica - Mais de 40 clientes protegidos
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Segurança Profissional
                <span className="text-blue-600 block">Para Sua Tranquilidade</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Protegemos o que é mais importante para você com soluções completas em segurança eletrônica, tecnologia
                avançada e atendimento especializado.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all group"
                >
                  Solicitar Orçamento
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              
              </div>

              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">70+</div>
                  <div className="text-sm text-gray-600">Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">8/6</div>
                  <div className="text-sm text-gray-600">Suporte</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-gray-600">Anos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos soluções completas em segurança eletrônica com tecnologia de ponta e atendimento especializado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-10 w-10 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-gray-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Produtos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trabalhamos com equipamentos de alta qualidade das melhores marcas do mercado
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Sistema de Facial",
                image: "/images/sistema-facial.png",
                description: "Reconhecimento facial avançado para controle de acesso",
              },
              {
                title: "Câmera",
                image: "/images/camera-sistema.jpg",
                description: "Câmeras de alta resolução com visão noturna",
              },
              {
                title: "Controle de Acesso",
                image: "/images/acesso.jpg",
                description: "Fechaduras e leitores biométricos",
              },
              {
                title: "Central de Alarme",
                image: "/images/alarme.jpg",
                description: "Centrais inteligentes com conectividade",
              },
              {
                title: "Interfone",
                image: "/images/interfone.webp",
                description: "Porteiros eletrônicos com vídeo",
              },
              {
                title: "LPR",
                image: "/images/lpr.webp",
                description: "Sistema de reconhecimento de placas veiculares",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md overflow-hidden h-full flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{product.title}</h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Nossos Parceiros</h2>
            <p className="text-gray-600">Trabalhamos com as melhores marcas do mercado</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center">
            {[
              {
                name: "Intelbras",
                logo: (
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-3 sm:p-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg text-center min-w-[80px] sm:min-w-[100px]">
                    INTELBRAS
                  </div>
                ),
              },
              {
                name: "Hikvision",
                logo: (
                  <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-3 sm:p-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg text-center min-w-[80px] sm:min-w-[100px]">
                    HIKVISION
                  </div>
                ),
              },
              {
                name: "ControlID",
                logo: (
                  <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white p-3 sm:p-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg text-center min-w-[80px] sm:min-w-[100px]">
                    CONTROL ID
                  </div>
                ),
              },
              {
                name: "Giga Security",
                logo: (
                  <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-3 sm:p-4 rounded-lg font-bold text-xs sm:text-sm lg:text-base text-center min-w-[80px] sm:min-w-[100px]">
                    GIGA
                  </div>
                ),
              },
              {
                name: "JFL",
                logo: (
                  <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-3 sm:p-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg text-center min-w-[80px] sm:min-w-[100px]">
                    JFL
                  </div>
                ),
              },
              {
                name: "Tecvoz",
                logo: (
                  <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-3 sm:p-4 rounded-lg font-bold text-sm sm:text-base lg:text-lg text-center min-w-[80px] sm:min-w-[100px]">
                    TECVOZ
                  </div>
                ),
              },
            ].map((partner, index) => (
              <div key={index} className="flex flex-col items-center group w-full">
                <div className="grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110 cursor-pointer w-full flex justify-center">
                  {partner.logo}
                </div>
                <span className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">E muitas outras marcas de qualidade reconhecida no mercado</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Por que escolher a CP Eletrônica?</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Com mais de 20 anos de experiência no mercado, a CP Eletrônica é referência em segurança eletrônica.
                Nossa equipe especializada oferece soluções personalizadas para cada necessidade.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "Equipe técnica certificada e experiente",
                  "Atendimento especializado 8 horas por dia",
                  "Equipamentos de última geração",
                  "Suporte técnico completo e manutenção",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nossos Resultados</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-2">70+</div>
                    <div className="text-gray-600 font-medium">Clientes Ativos</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600 mb-2">8/6</div>
                    <div className="text-gray-600 font-medium">Atendimento</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
                    <div className="text-gray-600 font-medium">Anos Mercado</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-gray-600 font-medium">Dedicação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600">
              Solicite um orçamento gratuito e descubra como podemos proteger você
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                {
                  icon: Phone,
                  title: "Telefone",
                  info: "(21) 99207-5129",
                  desc: "Atendimento 8 horas",
                  action: handleWhatsAppClick,
                },
                { icon: Mail, title: "Email", info: "cpeletronica.sac@gmail.com", desc: "Resposta em até 2 horas" },
              ].map((contact, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-4 p-4 bg-gray-50 rounded-xl ${contact.action ? "cursor-pointer hover:bg-gray-100 transition-colors" : ""}`}
                  onClick={contact.action}
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <contact.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{contact.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{contact.info}</p>
                    <p className="text-gray-500 text-sm">{contact.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Seu nome"
                  className="bg-white border-gray-200"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Seu email"
                  className="bg-white border-gray-200"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Input
                name="phone"
                placeholder="Telefone"
                className="bg-white border-gray-200"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Conte-nos sobre seu projeto..."
                rows={4}
                className="bg-white border-gray-200"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <span className="text-xl font-bold">CP Eletrônica</span>
                <div className="text-xs text-blue-400">Segurança Eletrônica</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Protegendo o que é mais importante para você com tecnologia avançada e atendimento especializado.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Câmeras de Segurança</li>
                <li>Sistemas de Alarme</li>
                <li>Controle de Acesso</li>
                <li>Monitoramento</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p className="cursor-pointer hover:text-blue-400 transition-colors" onClick={handleWhatsAppClick}>
                  (21) 99207-5129
                </p>
                <p>cpeletronica.sac@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 CP Eletrônica. Todos os direitos reservados.</p>
            <p className="text-gray-500 text-sm">Desenvolvido com segurança e tecnologia</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
