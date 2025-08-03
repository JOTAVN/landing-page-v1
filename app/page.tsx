"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Play, Instagram, Youtube, Shield, Clock, Users, Target, BarChart3 } from "lucide-react"
import Image from "next/image"
import TestimonialCarousel from "./testimonial-carousel"
import LiveViewerCounter from "./live-viewer-counter"

export default function LandingPage() {
  const handleRedirectToCheckout = () => {
    window.open("https://pay.kiwify.com.br/BPMXegH", "_blank")
  }

  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      {/* Header */}
      <header className="border-b border-[#1A1A1A] bg-[#0C0C0C]/95 backdrop-blur-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/primos-investe-logo.jpg"
              alt="Primos Investe Logo"
              width={32}
              height={32}
              className="rounded-lg md:w-10 md:h-10"
            />
            <span className="text-lg md:text-xl font-bold">PRIMOS INVESTE</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-[#BFBFBF] hover:text-[#2FFF4E] transition-colors">
              Início
            </a>
            <a href="#curso" className="text-[#BFBFBF] hover:text-[#2FFF4E] transition-colors">
              Curso
            </a>
            <a href="#resultados" className="text-[#BFBFBF] hover:text-[#2FFF4E] transition-colors">
              Resultados
            </a>
            <a href="#contato" className="text-[#BFBFBF] hover:text-[#2FFF4E] transition-colors">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center pt-16 md:pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Descubra como <span className="text-[#2FFF4E]">lucrar</span> com opções binárias mesmo começando do{" "}
                  <span className="text-[#2FFF4E]">zero!</span>
                </h1>
                <p className="text-lg md:text-xl text-[#BFBFBF] leading-relaxed">
                  Curso completo com estratégias práticas para quem quer faturar de verdade no mercado e alcançar a
                  liberdade financeira.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-[#2FFF4E] hover:bg-[#2FFF4E]/90 text-black font-bold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl shadow-lg hover:shadow-[#2FFF4E]/25 transition-all duration-300 hover:scale-105 max-w-full"
                  onClick={handleRedirectToCheckout}
                >
                  <span className="text-center leading-tight">
                    👉 Quero garantir
                    <br className="sm:hidden" /> minha vaga agora
                  </span>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <Image
                src="/images/traders-working.jpg"
                alt="Primos Investe - Traders trabalhando"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl object-cover w-full max-w-md lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section id="curso" className="py-16 md:py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">🎓 O que é o curso "Lucre com estratégia"?</h2>
            <p className="text-lg md:text-xl text-[#BFBFBF] max-w-4xl mx-auto">
              É um treinamento 100% em vídeo desenvolvido especialmente para iniciantes e para quem já tentou mas não
              teve resultados no mercado de opções binárias.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Play, title: "Aulas passo a passo", desc: "Conteúdo didático e progressivo" },
              { icon: Target, title: "Estratégias validadas", desc: "Métodos testados e aprovados" },
              { icon: Clock, title: "Acesso vitalício", desc: "Estude no seu ritmo, para sempre" },
              { icon: Users, title: "Suporte direto", desc: "Tire dúvidas com nossa equipe" },
              { icon: Shield, title: "Bônus exclusivos", desc: "Materiais complementares" },
              { icon: BarChart3, title: "Análise técnica", desc: "Domine os gráficos como um pro" },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-[#0C0C0C] border-[#2FFF4E]/20 hover:border-[#2FFF4E]/50 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#2FFF4E]/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#2FFF4E]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2">✅ {item.title}</h3>
                  <p className="text-sm md:text-base text-[#BFBFBF]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* VSL - Video Sales Letter */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">🎥 Assista ao vídeo completo</h2>
            <p className="text-lg md:text-xl text-[#BFBFBF] max-w-3xl mx-auto">
              Descubra exatamente como funciona nossa metodologia e veja resultados reais de alunos que já transformaram
              suas vidas financeiras.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#1A1A1A] rounded-2xl p-4 md:p-8 border border-[#2FFF4E]/20">
              <div className="aspect-video bg-black rounded-xl overflow-hidden relative">
                {/* Wistia Player Embed com novo ID */}
                <iframe
                  src="https://fast.wistia.net/embed/iframe/f8h14ug8s7?videoFoam=true"
                  title="Curso Lucre com Estratégia - Vídeo Completo"
                  className="w-full h-full rounded-xl"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  frameBorder="0"
                ></iframe>
              </div>

              {/* Call to Action abaixo do vídeo */}
              <div className="text-center mt-6 md:mt-8">
                <p className="text-base md:text-lg text-[#BFBFBF] mb-4 md:mb-6">
                  ⚠️ <strong className="text-red-500">ATENÇÃO!</strong> Este vídeo pode sair do ar a qualquer momento.
                  Assista agora!
                </p>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-[#2FFF4E] hover:bg-[#2FFF4E]/90 text-black font-bold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl shadow-lg hover:shadow-[#2FFF4E]/25 transition-all duration-300 hover:scale-105 max-w-full"
                    onClick={handleRedirectToCheckout}
                  >
                    <span className="text-center leading-tight">
                      🚀 Quero começar agora
                      <br className="sm:hidden" /> - acesso imediato
                    </span>
                  </Button>
                </div>

                <LiveViewerCounter />
              </div>
            </div>

            {/* Elementos de urgência e escassez */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
              <Card className="bg-[#1A1A1A] border-[#2FFF4E]/20 text-center">
                <CardContent className="p-4 md:p-6">
                  <div className="text-xl md:text-2xl font-bold text-[#2FFF4E] mb-2">⏰</div>
                  <h4 className="font-bold mb-2 text-sm md:text-base">Oferta limitada</h4>
                  <p className="text-[#BFBFBF] text-xs md:text-sm">Apenas 50 vagas disponíveis neste mês</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1A1A] border-[#2FFF4E]/20 text-center">
                <CardContent className="p-4 md:p-6">
                  <div className="text-xl md:text-2xl font-bold text-[#2FFF4E] mb-2">🎯</div>
                  <h4 className="font-bold mb-2 text-sm md:text-base">Acesso imediato</h4>
                  <p className="text-[#BFBFBF] text-xs md:text-sm">Comece a estudar em menos de 2 minutos</p>
                </CardContent>
              </Card>

              <Card className="bg-[#1A1A1A] border-[#2FFF4E]/20 text-center sm:col-span-2 lg:col-span-1">
                <CardContent className="p-4 md:p-6">
                  <div className="text-xl md:text-2xl font-bold text-[#2FFF4E] mb-2">🛡️</div>
                  <h4 className="font-bold mb-2 text-sm md:text-base">Garantia total</h4>
                  <p className="text-[#BFBFBF] text-xs md:text-sm">7 dias para testar sem riscos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center lg:text-left">
                💸 Por que este curso vai explodir sua mente:
              </h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  "Vamos juntos dominar sua mentalidade.",
                  "Aprenda de verdade como um trader profissional se comporta em situações reais.",
                  "Você vai aprender a dominar o gráfico.",
                  "Você vai entender por que toma loss e como evitar.",
                  "Você vai aprender, de uma vez por todas, a verdadeira gestão de risco.",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#2FFF4E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-black" />
                    </div>
                    <p className="text-base md:text-lg text-[#BFBFBF]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex justify-center">
              <Image
                src="/images/lifestyle-success.jpg"
                alt="Estilo de vida de sucesso - Primos Investe"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full max-w-sm lg:max-w-none object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resultados e Provas Sociais */}
      <section id="resultados" className="py-16 md:py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            📈 Resultados reais, estratégias que funcionam
          </h2>
          <p className="text-lg md:text-xl text-[#BFBFBF] mb-8 md:mb-12 max-w-4xl mx-auto">
            Nós aplicamos diariamente tudo o que ensinamos no curso. Não é teoria — são métodos que já geraram
            faturamento e continuam funcionando.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              { value: "R$ 50.000+", label: "Faturamento mensal médio" },
              { value: "1.200+", label: "Alunos transformados" },
              { value: "95%", label: "Taxa de satisfação" },
            ].map((stat, index) => (
              <Card key={index} className="bg-[#0C0C0C] border-[#2FFF4E]/20">
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#2FFF4E] mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-[#BFBFBF]">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-[#2FFF4E] hover:bg-[#2FFF4E]/90 text-black font-bold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-xl"
            onClick={() => {
              document.getElementById("depoimentos")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            Ver mais resultados
          </Button>
        </div>
      </section>

      {/* Quem Está por Trás */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <Image
                src="/images/creators-office.jpg"
                alt="Primos Investe - Criadores do curso"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full max-w-sm lg:max-w-none"
              />
            </div>

            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">👤 Conheça o criador do curso</h2>
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-[#BFBFBF]">
                <p>
                  Somos os <strong className="text-white">Primos Investe</strong>, traders especialistas em opções
                  binárias com mais de 5 anos de experiência no mercado financeiro.
                </p>
                <p>
                  Nossa missão é democratizar o conhecimento sobre trading e mostrar que qualquer pessoa pode alcançar a
                  liberdade financeira através das estratégias certas.
                </p>
                <p>
                  Já ajudamos mais de 1.200 pessoas a transformarem suas vidas financeiras, e agora queremos ajudar você
                  também.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos e Resultados */}
      <section id="depoimentos" className="py-16 md:py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">💬 Depoimentos reais dos nossos alunos</h2>
            <p className="text-lg md:text-xl text-[#BFBFBF] max-w-3xl mx-auto">
              Veja os resultados e feedbacks de quem já está transformando sua vida financeira com nosso método.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Chamada Final */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              🛒 Você está a um clique de mudar sua vida financeira
            </h2>
            <p className="text-lg md:text-xl text-[#BFBFBF] mb-8 md:mb-12">
              Não espere mais. Aprenda a lucrar com estratégias reais e comece agora sua jornada no mercado de opções
              binárias.
            </p>

            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-[#2FFF4E] hover:bg-[#2FFF4E]/90 text-black font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 rounded-xl shadow-lg hover:shadow-[#2FFF4E]/25 transition-all duration-300 hover:scale-105 max-w-full"
                onClick={handleRedirectToCheckout}
              >
                <span className="text-center leading-tight">
                  🔥 Quero me inscrever
                  <br className="sm:hidden" /> no curso agora
                </span>
              </Button>
            </div>

            <div className="mt-6 md:mt-8 flex items-center justify-center space-x-4 text-[#BFBFBF]">
              <Shield className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Garantia de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-[#1A1A1A] border-t border-[#2FFF4E]/20 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-6 md:space-y-8">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/primos-investe-logo.jpg"
                alt="Primos Investe Logo"
                width={32}
                height={32}
                className="rounded-lg md:w-10 md:h-10"
              />
              <span className="text-lg md:text-xl font-bold">PRIMOS INVESTE</span>
            </div>
            <p className="text-[#BFBFBF] text-center text-sm md:text-base">
              Transformando vidas através do conhecimento em trading.
            </p>

            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/primosinvestem_oficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFBFBF] hover:text-[#2FFF4E] transition-colors"
              >
                <Instagram className="w-6 h-6 md:w-8 md:h-8" />
              </a>
              <a
                href="https://www.youtube.com/@Primosinvestem_1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#BFBFBF] hover:text-[#2FFF4E] transition-colors"
              >
                <Youtube className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </div>

            <div className="border-t border-[#2FFF4E]/20 pt-6 md:pt-8 w-full text-center">
              <p className="text-[#BFBFBF] text-xs md:text-sm">© 2025 Primos Investe. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
