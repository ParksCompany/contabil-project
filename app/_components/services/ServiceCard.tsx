import { Button } from "@/app/_components/ui/button";
import Link from "next/link";

interface ServiceCardProps {
  category: string;
  title: string;
  description: string;
  deadline: string;
  icon: React.ReactNode;
  href: string;
  animationDelay?: "0ms" | "100ms" | "200ms" | "300ms" | "400ms";
}

const delayClassMap: Record<string, string> = {
  "0ms": "delay-0",
  "100ms": "delay-100",
  "200ms": "delay-200",
  "300ms": "delay-300",
  "400ms": "delay-400",
};

export default function ServiceCard({
  category,
  title,
  description,
  deadline,
  icon,
  href,
  animationDelay = "0ms",
}: ServiceCardProps) {
  const delayClass = delayClassMap[animationDelay] || "delay-0";
  
  return (
    <div
      className={`group bg-card border-border card-hover animate-fade-up ${delayClass} rounded-2xl border p-6`}
    >
      <div className="mb-4 flex items-start gap-4">
        <div className="bg-primary/10 group-hover:bg-primary flex h-14 w-14 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110">
          <div className="text-primary group-hover:text-primary-foreground h-7 w-7 transition-colors">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <span className="text-primary bg-primary/10 mb-2 inline-block rounded-md px-2 py-1 text-xs font-medium">
            {category}
          </span>
          <h3 className="text-foreground text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <p className="text-foreground/70 mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <div className="text-foreground/70 mb-6 flex items-center gap-2 text-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-clock h-4 w-4"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        <span>Prazo: {deadline}</span>
      </div>
      <Link href={href}>
        <Button className="ring-offset-background focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 shadow-emerald-subtle hover:shadow-emerald-glow group/btn inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
          Solicitar Serviço
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover/btn:translate-x-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Button>
      </Link>
    </div>
  );
}

