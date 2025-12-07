import Link from 'next/link';
import { Building2, Users, FileText, BarChart3, ArrowRight } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

const featuredServices = [
  {
    icon: Building2,
    title: 'Societário',
    description: 'Abertura, alteração e encerramento de empresas com toda documentação necessária.',
    href: '/servicos',
  },
  {
    icon: Users,
    title: 'Departamento Pessoal',
    description: 'Folha de pagamento, admissões, rescisões e toda gestão de colaboradores.',
    href: '/servicos',
  },
  {
    icon: FileText,
    title: 'Departamento Fiscal',
    description: 'Declarações, certidões e planejamento tributário para otimizar sua carga fiscal.',
    href: '/servicos',
  },
  {
    icon: BarChart3,
    title: 'Contabilidade',
    description: 'Balanços, demonstrações e relatórios contábeis completos para sua empresa.',
    href: '/servicos',
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Soluções completas para sua empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços contábeis, organizados por setores especializados para melhor atendê-lo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link 
                href={service.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/servicos">
            <Button size="lg">
              Ver Todos os Serviços
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
