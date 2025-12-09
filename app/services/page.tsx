"use client";

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ServiceCard from "@/app/_components/services/ServiceCard";
import ServiceFilters from "@/app/_components/services/ServiceFilters";
import ServicesHero from "@/app/_components/services/ServicesHero";
import { useState } from "react";

const Building2Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
    <path d="M10 6h4"></path>
    <path d="M10 10h4"></path>
    <path d="M10 14h4"></path>
    <path d="M10 18h4"></path>
  </svg>
);

const FilePenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    <path d="M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path>
  </svg>
);

const CircleXIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="m15 9-6 6"></path>
    <path d="m9 9 6 6"></path>
  </svg>
);

const ReceiptIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path>
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
    <path d="M12 17.5v-11"></path>
  </svg>
);

const UserPlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="19" x2="19" y1="8" y2="14"></line>
    <line x1="22" x2="16" y1="11" y2="11"></line>
  </svg>
);

const UserMinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="22" x2="16" y1="11" y2="11"></line>
  </svg>
);

const FileTextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
    <path d="M10 9H8"></path>
    <path d="M16 13H8"></path>
    <path d="M16 17H8"></path>
  </svg>
);

const BadgeCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

const TrendingDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
    <polyline points="16 17 22 17 22 11"></polyline>
  </svg>
);

const ChartColumnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>
);

const services = [
  {
    id: 1,
    category: "Societário",
    categoryId: "societario",
    title: "Abertura de Empresa",
    description:
      "Constituição completa do seu negócio com toda documentação necessária.",
    deadline: "5 a 10 dias úteis",
    icon: <Building2Icon />,
    href: "/solicitacoes/abertura-empresa",
    animationDelay: "0ms" as const,
  },
  {
    id: 2,
    category: "Societário",
    categoryId: "societario",
    title: "Alteração Contratual",
    description: "Modificações no contrato social da sua empresa.",
    deadline: "3 a 7 dias úteis",
    icon: <FilePenIcon />,
    href: "/solicitacoes/alteracao-contratual",
    animationDelay: "100ms" as const,
  },
  {
    id: 3,
    category: "Societário",
    categoryId: "societario",
    title: "Encerramento de Empresa",
    description: "Baixa completa da empresa em todos os órgãos.",
    deadline: "15 a 30 dias úteis",
    icon: <CircleXIcon />,
    href: "/solicitacoes/encerramento-empresa",
    animationDelay: "200ms" as const,
  },
  {
    id: 4,
    category: "Departamento Pessoal",
    categoryId: "pessoal",
    title: "Folha de Pagamento",
    description: "Processamento completo da folha de pagamento mensal.",
    deadline: "2 a 3 dias úteis",
    icon: <ReceiptIcon />,
    href: "/solicitacoes/folha-pagamento",
    animationDelay: "300ms" as const,
  },
  {
    id: 5,
    category: "Departamento Pessoal",
    categoryId: "pessoal",
    title: "Admissão de Funcionário",
    description: "Registro e documentação para contratação de colaboradores.",
    deadline: "1 a 2 dias úteis",
    icon: <UserPlusIcon />,
    href: "/solicitacoes/admissao-funcionario",
    animationDelay: "400ms" as const,
  },
  {
    id: 6,
    category: "Departamento Pessoal",
    categoryId: "pessoal",
    title: "Rescisão de Contrato",
    description: "Cálculo e processamento de rescisões trabalhistas.",
    deadline: "2 a 5 dias úteis",
    icon: <UserMinusIcon />,
    href: "/solicitacoes/rescisao-contrato",
    animationDelay: "0ms" as const,
  },
  {
    id: 7,
    category: "Departamento Fiscal",
    categoryId: "fiscal",
    title: "Declaração IRPF",
    description: "Elaboração da declaração de Imposto de Renda Pessoa Física.",
    deadline: "3 a 5 dias úteis",
    icon: <FileTextIcon />,
    href: "/solicitacoes/declaracao-irpf",
    animationDelay: "100ms" as const,
  },
  {
    id: 8,
    category: "Departamento Fiscal",
    categoryId: "fiscal",
    title: "Certidões Negativas",
    description: "Emissão de certidões de regularidade fiscal.",
    deadline: "1 a 3 dias úteis",
    icon: <BadgeCheckIcon />,
    href: "/solicitacoes/certidoes-negativas",
    animationDelay: "200ms" as const,
  },
  {
    id: 9,
    category: "Departamento Fiscal",
    categoryId: "fiscal",
    title: "Planejamento Tributário",
    description: "Análise e otimização da carga tributária.",
    deadline: "5 a 10 dias úteis",
    icon: <TrendingDownIcon />,
    href: "/solicitacoes/planejamento-tributario",
    animationDelay: "300ms" as const,
  },
  {
    id: 10,
    category: "Departamento Contábil",
    categoryId: "contabil",
    title: "Balanço Patrimonial",
    description: "Elaboração de balanço e demonstrações contábeis.",
    deadline: "5 a 10 dias úteis",
    icon: <ChartColumnIcon />,
    href: "/solicitacoes/balanco-patrimonial",
    animationDelay: "400ms" as const,
  },
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((service) => service.categoryId === activeFilter);

  return (
    <main className="flex-1 pt-16 md:pt-20">
      <Header />
      <ServicesHero />

      <section className="bg-background py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                category={service.category}
                title={service.title}
                description={service.description}
                deadline={service.deadline}
                icon={service.icon}
                href={service.href}
                animationDelay={service.animationDelay}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
