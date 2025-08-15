"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";
import useEmblaCarousel from "embla-carousel-react";
import { ScheduleButton } from "./ScheduleButton";

// Interface para definir o formato de cada pacote
interface Package {
  name: string;
  price: string;
  priceId: string | null;
  isFeatured?: boolean;
  features: string[];
}

// Interface para as propriedades do componente
interface PackagesProps {
  data: Package[];
}

export const Packages = ({ data }: PackagesProps) => {
  // Hook para o carrossel
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  // Estado para controlar o loading do botão clicado
  const [isLoading, setIsLoading] = useState<string | null>(null);

  // Função para iniciar o checkout via Stripe
  const handleCheckout = async (priceId: string) => {
    setIsLoading(priceId); // Ativa o loading para o botão específico
    try {
      const response = await fetch('/api/checkout-sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url; // Redireciona o usuário para a página de pagamento do Stripe
      } else {
        throw new Error("URL de checkout não recebida.");
      }
    } catch (error) {
      console.error('Falha ao criar a sessão de checkout:', error);
      alert('Ocorreu um erro ao iniciar o pagamento. Tente novamente.');
    } finally {
      setIsLoading(null); // Desativa o loading, mesmo se der erro
    }
  };

  return (
    <Container>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
          Pacotes feitos para você
        </h2>
        <p className="py-4 text-lg text-gray-500 dark:text-gray-300">
          Escolha o plano ideal para transformar seu consultório.
        </p>
      </div>

      {/* Estrutura do Carrossel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex space-x-4 py-8">
          {data.map((pkg, index) => (
            <div key={index} className="flex-[0_0_90%] sm:flex-[0_0_40%] lg:flex-[0_0_31%]">
              <div
                className={`flex h-full flex-col justify-between rounded-lg p-8 shadow-lg ${
                  pkg.isFeatured
                    ? "border-2 border-primary bg-primary/5"
                    : "bg-white dark:bg-trueGray-800"
                }`}
              >
                <div>
                  <h3 className="text-2xl font-bold text-primary">{pkg.name}</h3>
                  <p className="mt-4 text-4xl font-bold text-gray-800 dark:text-white">
                    {pkg.price}
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg className="mr-2 h-5 w-5 flex-shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ScheduleButton
                  className={`mt-8 w-full rounded-lg px-6 py-3 text-lg font-semibold text-white transition-colors ${
                    pkg.priceId
                      ? "bg-primary hover:bg-primary/90"
                      : "cursor-not-allowed bg-gray-400"
                  }`}
                >
                  Garantir Minha Vaga
                </ScheduleButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};