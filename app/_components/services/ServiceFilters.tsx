"use client";

import { Button } from "@/app/_components/ui/button";
import { useState } from "react";

const filters = [
  { id: "all", label: "Todos os Serviços" },
  { id: "societario", label: "Societário" },
  { id: "pessoal", label: "Departamento Pessoal" },
  { id: "fiscal", label: "Departamento Fiscal" },
  { id: "contabil", label: "Departamento Contábil" },
];

export default function ServiceFilters() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="mb-12 flex flex-wrap justify-center gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
            activeFilter === filter.id
              ? "bg-primary text-primary-foreground shadow-emerald-subtle"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}

