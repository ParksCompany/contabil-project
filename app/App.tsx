import { Toaster } from "@/app/_components/ui/toaster";
import { Toaster as Sonner } from "@/app/_components/ui/sonner";
import { TooltipProvider } from "@/app/_components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Solicitacao from "./pages/Solicitacao";
import SolicitacaoDetalhe from "./pages/SolicitacaoDetalhe";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Registrar from "./pages/Registrar";
import MinhaConta from "./pages/MinhaConta";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/solicitacao" element={<Solicitacao />} />
          <Route path="/solicitacoes/:servicoId" element={<SolicitacaoDetalhe />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/minha-conta" element={<MinhaConta />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  )
};
