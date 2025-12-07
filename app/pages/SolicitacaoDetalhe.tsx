'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/app/_components/layout/Layout';
import { DynamicServiceForm } from '@/app/_components/forms/DynamicServiceForm';
import { getServiceBySlug } from '@/app/config/services';
import { ArrowLeft, Clock, Building2, FileEdit, XCircle, Receipt, UserPlus, UserMinus, FileText, BadgeCheck, TrendingDown, BarChart3, LucideIcon } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';

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

export default function SolicitacaoDetalhe() {
  const { servicoId } = useParams<{ servicoId: string }>();
  const service = servicoId ? getServiceBySlug(servicoId) : undefined;

  if (!service) {
    return (
      <Layout>
        <section className="section-padding bg-background">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Serviço não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O serviço que você está procurando não existe ou foi removido.
            </p>
            <Link href="/solicitacao">
              <Button>
                <ArrowLeft className="w-5 h-5" />
                Voltar aos Serviços
              </Button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  const Icon = iconMap[service.icon] || FileText;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <Link
            href="/solicitacao"
            className="inline-flex items-center gap-2 text-background/80 hover:text-background mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar aos serviços
          </Link>
          
          <div className="flex items-start gap-6 animate-fade-up">
            <div className="w-16 h-16 rounded-2xl bg-background/10 backdrop-blur-sm flex items-center justify-center shrink-0">
              <Icon className="w-8 h-8 text-background" />
            </div>
            <div>
              <span className="inline-block text-sm font-medium text-background/80 bg-background/10 px-3 py-1 rounded-full mb-3">
                {service.setorNome}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-background mb-3">
                {service.nome}
              </h1>
              <div className="flex items-center gap-2 text-background/80">
                <Clock className="w-5 h-5" />
                <span>Prazo estimado: {service.prazoEstimado}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 animate-fade-up">
              <div className="sticky top-24">
                <div className="p-6 rounded-2xl bg-muted/50 border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Sobre este serviço
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.descricaoDetalhada}
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Prazo</p>
                        <p className="text-sm text-muted-foreground">{service.prazoEstimado}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Setor Responsável</p>
                        <p className="text-sm text-muted-foreground">{service.setorNome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 animate-fade-up delay-100">
              <div className="p-8 rounded-2xl bg-card border border-border shadow-card">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Preencha os dados
                </h2>
                <p className="text-muted-foreground mb-8">
                  Complete o formulário abaixo para solicitar este serviço. Campos marcados com * são obrigatórios.
                </p>
                <DynamicServiceForm service={service} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};