import Link from 'next/link';
import { ArrowRight, Clock, Building2, FileEdit, XCircle, Receipt, UserPlus, UserMinus, FileText, BadgeCheck, TrendingDown, BarChart3, LucideIcon } from 'lucide-react';
import { Button } from '@/app/_components/ui/button';
import { Service } from '@/app/config/services';

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

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export default function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || FileText;

  return (
    <div
      className="group p-6 rounded-2xl bg-card border border-border card-hover animate-fade-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
        </div>
        <div className="flex-1">
          <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md mb-2">
            {service.setorNome}
          </span>
          <h3 className="text-xl font-semibold text-foreground">
            {service.nome}
          </h3>
        </div>
      </div>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {service.descricaoCurta}
      </p>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Clock className="w-4 h-4" />
        <span>Prazo: {service.prazoEstimado}</span>
      </div>
      
      <Link href={`/solicitacoes/${service.slug}`}>
        <Button className="w-full group/btn">
          Solicitar Serviço
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </div>
  );
}
