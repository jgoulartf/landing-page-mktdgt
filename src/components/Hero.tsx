import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/ensaio/1/DSC_0030.jpg";
import { ScheduleButton } from "./ScheduleButton";
import logoImg from "../../public/img/logo.png";

export const Hero = () => {
  return (
    <>
      <Container className="relative flex flex-wrap">
        <div className="flex w-full items-center lg:w-1/2">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] -ml-4 sm:-ml-6 lg:-ml-8">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_85%,white_100%),linear-gradient(270deg,transparent_85%,white_100%)] z-10" />
            <Image
              src={heroImg}
              fill
              className="object-cover object-center "
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
            />
          </div>
        </div>

        {/* Wrapper para todo o conteúdo do lado direito */}
        <div className="flex  items-center lg:w-1/2">
          <div className="">
            {/* Header com nome e logo */}
            <div className="flex items-center w-full ">
              <h1 className="text-3xl font-bold  text-gray-800 lg:text-4xl xl:text-7xl mr-28 pr-2">
                CAROL IRRAEL
              </h1>
              <Image
                src={logoImg}
                width={120}
                height={100}
                alt="Logo"
                className="object-contain"
              />
            </div>

            <h2 className="text-3xl leading-snug tracking-tight text-gray-800 lg:text-4xl xl:text-5xl">
              Seja CEO do seu negócio
            </h2>

            <p className="py-5 text-xl text-justify text-gray-500 lg:text-xl xl:text-2xl">
              Atraia os pacientes que você deseja através de um posicionamento
              digital ético e profissional.
            </p>

            <ScheduleButton className="rounded-md w-full bg-primary px-8 py-4 text-center text-lg font-medium text-white">
              Garantir Minha Vaga
            </ScheduleButton>
          </div>
        </div>
      </Container>
      {/* SEÇÃO DE PROVA SOCIAL ADAPTADA */}
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-center text-xl text-gray-700 dark:text-white">
            Estratégias validadas por{" "}
            <span className="text-primary">profissionais de saúde</span> em
            todo o Brasil
          </div>
          {/* Remova ou substitua esta div pelos logos dos seus parceiros/clientes */}
          <div className="mt-10 flex flex-wrap justify-center gap-5 md:justify-around">
            {/* Exemplo de como adicionar um logo:
             <div className="pt-2 text-gray-400 dark:text-gray-400">
               <SeuLogoComponent />
             </div> 
            */}
          </div>
        </div>
      </Container>
    </>
  );
};