import { MousePointer2, FileEdit, Send, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MousePointer2,
    step: '01',
    title: 'Escolha o Serviço',
    description: 'Navegue pela nossa lista de serviços e selecione o que melhor atende sua necessidade.',
  },
  {
    icon: FileEdit,
    step: '02',
    title: 'Preencha os Dados',
    description: 'Complete o formulário com as informações necessárias para a realização do serviço.',
  },
  {
    icon: Send,
    step: '03',
    title: 'Envie a Solicitação',
    description: 'Sua solicitação é direcionada automaticamente para o setor responsável.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Acompanhe o Status',
    description: 'Receba atualizações e acompanhe o andamento da sua solicitação.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-3 tracking-wide uppercase">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Processo simples e transparente
          </h2>
          <p className="text-muted-foreground text-lg">
            Em poucos passos você solicita um serviço e nossa equipe cuida de todo o resto.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="relative animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-border" />
              )}
              
              <div className="relative z-10 text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center shadow-card">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
