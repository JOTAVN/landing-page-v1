"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    src: "/images/testimonial-1.jpg",
    alt: "Depoimento de Maicon - Resultados no mercado",
    title: "Maicon - Resultados Consistentes",
  },
  {
    src: "/images/testimonial-2.jpg",
    alt: "Depoimento de Alice - Transformação financeira",
    title: "Alice - Primeira Semana de Lucros",
  },
  {
    src: "/images/testimonial-3.jpg",
    alt: "Depoimento de Mirela - Sucesso no trading",
    title: "Mirela - Estratégia Funcionando",
  },
  {
    src: "/images/testimonial-4.jpg",
    alt: "Depoimento de Alan - Resultados positivos",
    title: "Alan - Mudança de Vida",
  },
  {
    src: "/images/testimonial-5.jpg",
    alt: "Depoimento de Marcos - Lucros reais",
    title: "Marcos - Resultados Impressionantes",
  },
  {
    src: "/images/testimonial-6.jpg",
    alt: "Depoimento de Lucas - Trading profissional",
    title: "Lucas - Trader Profissional",
  },
]

export default function TestimonialGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  const handleRedirectToCheckout = () => {
    window.open("https://pay.kiwify.com.br/BPMXegH", "_blank")
  }

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768)
    }

    checkIsDesktop()
    window.addEventListener("resize", checkIsDesktop)

    return () => window.removeEventListener("resize", checkIsDesktop)
  }, [])

  const openModal = (index: number) => {
    setSelectedImage(index)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % testimonials.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? testimonials.length - 1 : selectedImage - 1)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (isDesktop && e.target === e.currentTarget) {
      closeModal()
    }
  }

  return (
    <>
      {/* Grid de Depoimentos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => openModal(index)}
          >
            <div className="aspect-[4/5] relative bg-[#0C0C0C] rounded-xl overflow-hidden">
              <Image
                src={testimonial.src || "/placeholder.svg"}
                alt={testimonial.alt}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay com efeito hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                  <h3 className="text-white font-bold text-sm md:text-lg mb-1 md:mb-2">{testimonial.title}</h3>
                  <p className="text-[#2FFF4E] text-xs md:text-sm font-medium">Clique para ver completo</p>
                </div>
              </div>

              {/* Ícone de expansão */}
              <div className="absolute top-3 md:top-4 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-[#2FFF4E]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-3 h-3 md:w-4 md:h-4 text-[#2FFF4E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 md:mt-12">
        <p className="text-lg md:text-xl text-[#BFBFBF] mb-4 md:mb-6">
          ✨ <strong className="text-[#2FFF4E]">Estes são apenas alguns</strong> dos centenas de depoimentos que
          recebemos diariamente!
        </p>
        <Button
          size="lg"
          className="bg-[#2FFF4E] hover:bg-[#2FFF4E]/90 text-black font-bold text-base md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-xl shadow-lg hover:shadow-[#2FFF4E]/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
          onClick={handleRedirectToCheckout}
        >
          🚀 Quero Ser o Próximo Depoimento
        </Button>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Botão Fechar */}
            <Button
              onClick={closeModal}
              variant="ghost"
              size="icon"
              className="absolute -top-8 md:-top-12 right-0 text-white hover:text-[#2FFF4E] hover:bg-white/10 z-10"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            {/* Navegação */}
            <Button
              onClick={prevImage}
              variant="ghost"
              size="icon"
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#2FFF4E] hover:bg-white/10 z-10"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </Button>

            <Button
              onClick={nextImage}
              variant="ghost"
              size="icon"
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#2FFF4E] hover:bg-white/10 z-10"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </Button>

            {/* Imagem */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={testimonials[selectedImage].src || "/placeholder.svg"}
                alt={testimonials[selectedImage].alt}
                width={800}
                height={1000}
                className="max-w-full max-h-full object-contain rounded-xl"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            {/* Título */}
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 text-center">
              <h3 className="text-white font-bold text-base md:text-xl bg-black/50 backdrop-blur-sm rounded-lg px-3 md:px-4 py-2">
                {testimonials[selectedImage].title}
              </h3>
            </div>

            {/* Indicadores */}
            <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedImage ? "bg-[#2FFF4E]" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
