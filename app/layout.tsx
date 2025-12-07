import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";
import "./Index.css";

export const metadata: Metadata = {
  title: "Contabilidade Modelo - Soluções Contábeis Completas",
  description: "Contabilidade Modelo oferece soluções contábeis completas para sua empresa. Abertura de empresa, folha de pagamento, declarações fiscais e muito mais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

