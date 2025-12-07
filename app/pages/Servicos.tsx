import { useState } from 'react';
import Layout from '@/app/_components/layout/Layout';
import ServiceCard from '@/app/_components/services/ServiceCard';
import { SERVICES, SECTORS } from '@/app/config/services';
import { cn } from '@/app/_lib/utils';

export default function Servicos() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredServices = activeFilter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.setorId === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-sm font-semibold text-background/80 mb-4 tracking-wide uppercase">
              Nossos Serviços
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Soluções completas para seu negócio
            </h1>
            <p className="text-xl text-background/80">
              Conheça todos os serviços que oferecemos, organizados por setores especializados para melhor atendê-lo.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            <button
              onClick={() => setActiveFilter('all')}
              className={cn(
                'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                activeFilter === 'all'
                  ? 'bg-primary text-primary-foreground shadow-emerald-subtle'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              )}
            >
              Todos os Serviços
            </button>
            {SECTORS.map((sector) => (
              <button
                key={sector.id}
                onClick={() => setActiveFilter(sector.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                  activeFilter === sector.id
                    ? 'bg-primary text-primary-foreground shadow-emerald-subtle'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                {sector.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum serviço encontrado nesta categoria.</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};