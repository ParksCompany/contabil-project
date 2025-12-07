import Layout from '@/app/_components/layout/Layout';
import { Target, Heart, Users, Shield, Lightbulb, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Comprometimento',
    description: 'Dedicação total aos nossos clientes, buscando sempre superar expectativas.',
  },
  {
    icon: Shield,
    title: 'Ética',
    description: 'Atuação transparente e íntegra em todas as nossas relações.',
  },
  {
    icon: Users,
    title: 'Trabalho em Equipe',
    description: 'Colaboração entre setores para oferecer soluções completas.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Atualização constante com as melhores práticas e tecnologias.',
  },
];

const sectors = [
  {
    name: 'Setor Societário',
    description: 'Responsável por abertura, alteração e encerramento de empresas, além de toda documentação societária.',
  },
  {
    name: 'Departamento Pessoal',
    description: 'Cuida de folha de pagamento, admissões, demissões, férias e toda gestão de recursos humanos.',
  },
  {
    name: 'Departamento Fiscal',
    description: 'Gerencia declarações fiscais, certidões, planejamento tributário e obrigações acessórias.',
  },
  {
    name: 'Departamento Contábil',
    description: 'Elabora balanços, demonstrações contábeis e relatórios gerenciais para tomada de decisão.',
  },
];

export default function Sobre() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-background/5 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-block text-sm font-semibold text-background/80 mb-4 tracking-wide uppercase">
              Sobre Nós
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Conheça a Contabilidade Modelo
            </h1>
            <p className="text-xl text-background/80">
              Há mais de 15 anos transformando a contabilidade em parceria estratégica para o sucesso do seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
                Nossa História
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Uma trajetória de excelência
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Contabilidade Modelo foi fundada em 2009 com um objetivo claro: tornar a contabilidade acessível, compreensível e estratégica para empresas de todos os portes.
                </p>
                <p>
                  Ao longo dos anos, construímos uma equipe de profissionais altamente qualificados e apaixonados pelo que fazem. Cada colaborador é especialista em sua área, garantindo que você receba sempre o melhor atendimento.
                </p>
                <p>
                  Hoje, atendemos mais de 500 clientes ativos, entre empresas e pessoas físicas, sempre com o mesmo compromisso de excelência que nos trouxe até aqui.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-up delay-200">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/30 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Award className="w-24 h-24 text-primary mx-auto mb-4" />
                  <div className="text-5xl font-bold text-foreground mb-2">15+</div>
                  <div className="text-muted-foreground">Anos de experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border card-hover animate-fade-up">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Oferecer soluções contábeis de excelência, contribuindo para o crescimento sustentável de nossos clientes através de um atendimento personalizado, ético e inovador.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-card border border-border card-hover animate-fade-up delay-100">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Nossa Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência nacional em contabilidade empresarial, reconhecida pela qualidade dos serviços, pela inovação tecnológica e pelo impacto positivo nos negócios de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Nossos Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              O que nos guia
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-card border border-border card-hover text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
              Nossa Estrutura
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Setores especializados
            </h2>
            <p className="text-muted-foreground text-lg">
              Organizamos nossa equipe em departamentos especializados para oferecer o melhor atendimento em cada área.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={sector.name}
                className="p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {sector.name}
                </h3>
                <p className="text-muted-foreground">
                  {sector.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};