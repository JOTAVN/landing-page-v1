"use client"

import { useState, useEffect } from "react"

export default function LiveViewerCounter() {
  // Inicializa o contador com um número aleatório entre 700 e 1500
  const [viewerCount, setViewerCount] = useState(() => {
    const min = 700
    const max = 1500
    return Math.floor(Math.random() * (max - min + 1)) + min
  })

  useEffect(() => {
    const interval = setInterval(
      () => {
        // Gera variação aleatória entre -15 e +25
        const variation = Math.floor(Math.random() * 40) - 15
        const newCount = Math.max(700, Math.min(1500, viewerCount + variation))
        setViewerCount(newCount)
      },
      3000 + Math.random() * 4000,
    ) // Intervalo entre 3-7 segundos

    return () => clearInterval(interval)
  }, [viewerCount])

  return (
    <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-[#BFBFBF]">
      <div className="flex items-center space-x-1">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-xs sm:text-sm transition-all duration-500">
          <strong className="text-red-400">{viewerCount.toLocaleString()}</strong> pessoas assistindo agora
        </span>
      </div>
    </div>
  )
}
