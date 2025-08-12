"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="mx-auto w-full max-w-2xl rounded-2xl p-2">
        {faqdata.map((item) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg bg-gray-50 px-4 py-4 text-left text-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-primary/50 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-primary`} // Cor do ícone adaptada
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pb-2 pt-4 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

// Conteúdo do FAQ adaptado para o público médico
const faqdata = [
  {
    question: "Preciso ter redes sociais ativas para a consultoria?",
    answer:
      "Não necessariamente. O método foca em construir sua autoridade onde faz mais sentido para você e seu público. Se você não gosta de redes sociais, vamos traçar estratégias eficazes em outras plataformas, como o Google e seu site profissional.",
  },
  {
    question: "O marketing proposto segue as normas do CFM?",
    answer:
      "Sim, 100%. Todas as estratégias são desenvolvidas com base nas diretrizes do Conselho Federal de Medicina. Nosso foco é em marketing ético, informativo e que valoriza a sua autoridade, sem sensacionalismo ou promessas indevidas.",
  },
  {
    question: "Em quanto tempo vejo os resultados?",
    answer:
      "A construção de autoridade é um processo contínuo, mas os primeiros resultados, como a melhora no seu posicionamento e a chegada de contatos mais qualificados, costumam aparecer nos primeiros 3 meses de aplicação consistente do método.",
  },
  {
    question: "A consultoria é individual ou em grupo?",
    answer:
      "Oferecemos os dois modelos. A consultoria individual é totalmente personalizada para a sua realidade e seus objetivos. As mentorias em grupo são ótimas para networking e aprendizado colaborativo. Verifique qual modalidade está com vagas abertas no momento.",
  },
];