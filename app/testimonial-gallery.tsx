"use client"

import { useState } from "react"
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

  return (
    <>
      {/* Grid de Depoimentos */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              />

              {/* Overlay com efeito hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{testimonial.title}</h3>
                  <p className="text-[#2FFF4E] text-sm font-medium">Clique para ver completo</p>
                </div>
              </div>

              {/* Ícone de expansão */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-[#2FFF4E]/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4 text-[#2FFF4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="text-center mt-12">
        <p className="text-xl text-[#BFBFBF] mb-6">
          ✨ <strong className="text-[#2FFF4E]">Estes são apenas alguns</strong> dos centenas de depoimentos que
          recebemos diariamente!
        </p>
        <Button
          size="lg"
          className="bg-[#2FFF4E] hover:bg-[#2FFF4E]/90 text-black font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-[#2FFF4E]/25 transition-all duration-300 hover:scale-105"
        >
          🚀 Quero Ser o Próximo Depoimento
        </Button>
      </div>

      {/* Modal/Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Botão Fechar */}
            <Button
              onClick={closeModal}
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-[#2FFF4E] hover:bg-white/10 z-10"
            >
              <X className="w-6 h-6" />
            </Button>

            {/* Navegação */}
            <Button
              onClick={prevImage}
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#2FFF4E] hover:bg-white/10 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <Button
              onClick={nextImage}
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#2FFF4E] hover:bg-white/10 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            {/* Imagem */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={testimonials[selectedImage].src || "/placeholder.svg"}
                alt={testimonials[selectedImage].alt}
                width={800}
                height={1000}
                className="max-w-full max-h-full object-contain rounded-xl"
              />
            </div>

            {/* Título */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-white font-bold text-xl bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                {testimonials[selectedImage].title}
              </h3>
            </div>

            {/* Indicadores */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
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
