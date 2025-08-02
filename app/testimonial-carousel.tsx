"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    src: "/images/feedback-leticia.png",
    alt: "Depoimento de Letícia - Saldo de R$ 3.197,79",
    title: "Letícia - Primeiro saque",
  },
  {
    src: "/images/feedback-julia.png",
    alt: "Depoimento de Julia - Comprando pizza com lucros do trading",
    title: "Julia - Vivendo com os lucros",
  },
  {
    src: "/images/feedback-camila.png",
    alt: "Depoimento de Camila - Maior resultado até agora",
    title: "Camila - Maior resultado",
  },
  {
    src: "/images/feedback-gustavo-new.png",
    alt: "Depoimento de Gustavo - Primeiro lucro consistente",
    title: "Gustavo - Primeiro lucro",
  },
  {
    src: "/images/feedback-renan.png",
    alt: "Depoimento de Renan - Primeira semana no lucro",
    title: "Renan - Primeira semana",
  },
  {
    src: "/images/feedback-diego.png",
    alt: "Depoimento de Diego - Pagando conta de luz com lucros",
    title: "Diego - Contas em dia",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const handleRedirectToCheckout = () => {
    window.open("https://pay.kiwify.com.br/BPMXegH", "_blank")
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Touch/Mouse drag functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX)
    e.preventDefault()
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const currentX = e.pageX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setIsDragging(false)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentX = e.touches[0].pageX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
      setIsDragging(false)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Sync scroll position with current index
  useEffect(() => {
    if (carouselRef.current && !isDragging) {
      const slideWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: "smooth",
      })
    }
  }, [currentIndex, isDragging])

  return (
    <>
      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto">
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full flex justify-center px-4">
              <div className="relative max-w-sm w-full">
                <Image
                  src={testimonial.src || "/placeholder.svg"}
                  alt={testimonial.alt}
                  width={400}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover w-full h-auto select-none"
                  draggable={false}
                  sizes="(max-width: 768px) 100vw, 400px"
                />

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                    {testimonial.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          onClick={prevSlide}
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white hover:text-[#2FFF4E] hover:bg-white/10 z-10 bg-black/20 backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </Button>

        <Button
          onClick={nextSlide}
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white hover:text-[#2FFF4E] hover:bg-white/10 z-10 bg-black/20 backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#2FFF4E]" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 md:mt-12">
        <p className="text-lg md:text-xl text-[#BFBFBF] mb-4 md:mb-6">
          ✨ <strong className="text-[#2FFF4E]">Estes são apenas alguns</strong> dos centenas de depoimentos que
          recebemos diariamente!
        </p>
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-[#2FFF4E] hover:bg-[#2FFF4E]/90 text-black font-bold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl shadow-lg hover:shadow-[#2FFF4E]/25 transition-all duration-300 hover:scale-105 max-w-full"
            onClick={handleRedirectToCheckout}
          >
            <span className="text-center leading-tight">
              🚀 Quero ser o<br className="sm:hidden" /> próximo depoimento
            </span>
          </Button>
        </div>
      </div>
    </>
  )
}
