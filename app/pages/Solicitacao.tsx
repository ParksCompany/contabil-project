import Link from 'next/link';
import Layout from '@/app/_components/layout/Layout';
import { SERVICES } from '@/app/config/services';
import { ArrowRight, Clock, Building2, FileEdit, XCircle, Receipt, UserPlus, UserMinus, FileText, BadgeCheck, TrendingDown, BarChart3, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Building2,
  FileEdit,
  XCircle,
  Receipt,
  UserPlus,
  UserMinus,
  FileText,
  BadgeCheck,
  TrendingDown,
  BarChart3,
};

export default function Solicitacao() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-sm font-semibold text-background/80 mb-4 tracking-wide uppercase">
              Solicitar Serviço
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              O que você precisa hoje?
            </h1>
            <p className="text-xl text-background/80">
              Escolha o serviço desejado e preencha o formulário. Nossa equipe entrará em contato em breve.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || FileText;
              
              return (
                <Link
                  key={service.id}
                  href={`/solicitacoes/${service.slug}`}
                  className="group p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up block"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md mb-1">
                        {service.setorNome}
                      </span>
                      <h3 className="text-lg font-semibold text-foreground">
                        {service.nome}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.descricaoCurta}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{service.prazoEstimado}</span>
                    </div>
                    <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Solicitar
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};