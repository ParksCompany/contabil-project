import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

const highlights = [
  'Mais de 15 anos de experiência',
  'Atendimento personalizado',
  'Equipe especializada',
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-background/5 rounded-full blur-3xl" />
      
      <div className="container-custom py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm border border-background/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-background animate-pulse-soft" />
            <span className="text-sm text-background/90 font-medium">
              Contabilidade de confiança para sua empresa
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6 animate-fade-up delay-100">
            Simplificamos a contabilidade para você
            <span className="block text-background/80">crescer sem preocupações</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-background/80 mb-8 max-w-2xl animate-fade-up delay-200">
            Oferecemos soluções contábeis completas e personalizadas. Da abertura à gestão fiscal, cuidamos de tudo para você focar no que realmente importa: o seu negócio.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-10 animate-fade-up delay-300">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-background/90">
                <CheckCircle2 className="w-5 h-5 text-background/70" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
            <Link href="/solicitacao">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background text-primary hover:bg-background/90">
                Solicitar Serviço
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/servicos">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Conhecer Serviços
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
