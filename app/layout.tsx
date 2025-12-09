import type { Metadata } from "next";
import { ThemeProvider } from "@/app/_components/Providers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Children } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Contabilidade Modelo - Soluções Contábeis Completas",
  description: "Contabilidade Modelo oferece soluções contábeis completas para sua empresa. Abertura de empresa, folha de pagamento, declarações fiscais e muito mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          
        </ThemeProvider>
      </body>
    </html>
  );
}