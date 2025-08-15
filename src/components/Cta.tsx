import React from "react";
import { Container } from "@/components/Container";
import { ScheduleButton } from "./ScheduleButton";

export const Cta = () => {
  return (
    <Container>
      {/* O fundo agora usa a sua cor primária */}
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-5 rounded-xl bg-primary px-7 py-7 text-white lg:flex-nowrap lg:px-12 lg:py-12">
        <div className="flex-grow text-center lg:text-left">
          {/* Título e subtítulo adaptados para um CTA final */}
          <h2 className="text-2xl font-medium lg:text-3xl">
            Pronto(a) para levar seu consultório para o próximo nível?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Agende uma análise estratégica e descubra o potencial do seu negócio.
          </p>
        </div>
        <div className="w-full flex-shrink-0 text-center lg:w-auto">
          <ScheduleButton
            className="mx-auto inline-block rounded-md bg-white px-7 py-3 text-lg font-medium text-center text-primary lg:px-10 lg:py-5"
          >
            Garantir Minha Vaga
          </ScheduleButton>
        </div>
      </div>
    </Container>
  );
};