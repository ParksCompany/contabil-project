import Link from 'next/link';
import { Award, Users, Building, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

const stats = [
  { icon: Award, value: '15+', label: 'Anos de experiência' },
  { icon: Users, value: '500+', label: 'Clientes atendidos' },
  { icon: Building, value: '1000+', label: 'Empresas abertas' },
  { icon: TrendingUp, value: '98%', label: 'Satisfação' },
];

export default function AboutPreview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sua parceira de confiança em soluções contábeis
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A Contabilidade Modelo nasceu com o propósito de simplificar a gestão contábil e fiscal das empresas brasileiras. Com mais de 15 anos de experiência, nossa equipe de especialistas trabalha incansavelmente para oferecer soluções personalizadas.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Organizados em setores especializados — Societário, Pessoal, Fiscal e Contábil — garantimos atendimento ágil e preciso para cada necessidade do seu negócio.
            </p>
            <Link href="/sobre">
              <Button size="lg">
                Conheça Nossa História
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-fade-up delay-200">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-card border border-border card-hover text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
