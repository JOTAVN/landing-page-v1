import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucre com Estratégia",
  description:
    "Curso completo com estratégias práticas para quem quer faturar de verdade no mercado de opções binárias e alcançar a liberdade financeira.",
  keywords: "opções binárias, trading, estratégias, lucro, investimento, curso online",
  authors: [{ name: "Primos Investe" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Lucre com Estratégia",
    description: "Descubra como lucrar com opções binárias mesmo começando do zero!",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
