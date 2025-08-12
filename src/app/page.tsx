import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

// Este componente SectionTitle agora usa sua cor primária.
const SectionTitle = (props: {
  preTitle?: string;
  title?: string;
  align?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Container
      className={`mt-4 flex w-full flex-col ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.preTitle && (
        // COR VERIFICADA E CORRIGIDA AQUI
        <div className="text-sm font-bold uppercase tracking-wider text-primary">
          {props.preTitle}
        </div>
      )}

      {props.title && (
        <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </Container>
  );
};


export default function Home() {
  return (
    <Container>
      <Hero />

      {/* Este SectionTitle agora usará a cor primária corretamente */}
      <SectionTitle
        preTitle="O MÉTODO"
        title="A jornada para se tornar uma autoridade digital"
      >
        Entenda os pilares que sustentam um posicionamento médico de sucesso,
        desde a atração de pacientes qualificados até a gestão de um negócio
        lucrativo e ético.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="UMA MENSAGEM PARA VOCÊ"
        title="Assista e entenda a minha filosofia de trabalho"
      >
        Aperte o play e descubra em poucos minutos como podemos, juntos,
        construir a sua autoridade no digital de forma ética e profissional.
      </SectionTitle>
      
      {/* Lembre-se de trocar o videoId por um vídeo da sua irmã */}
      <Video videoId="fZ0D0cnR88E" />

      <SectionTitle
        preTitle="RESULTADOS REAIS"
        title="O que médicos dizem sobre a consultoria"
      >
        A maior prova de que o método funciona são os resultados. Veja o que
        profissionais como você estão dizendo sobre a transformação em seus
        consultórios.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="DÚVIDAS FREQUENTES" title="Respostas para suas perguntas">
        Tire todas as suas dúvidas aqui. Se a sua pergunta não estiver na
        lista, entre em contato diretamente conosco.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}