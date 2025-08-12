import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/ensaio/1/DSC_0030.jpg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex w-full items-center lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
          <div className="mb-8 max-w-2xl">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Vire CEO do seu negócio
            </h1>
            {/* TEXTO ADAPTADO PARA O PÚBLICO-ALVO */}
            <p className="py-5 text-xl leading-normal text-justify text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl">
              Atraia os pacientes que você deseja através de um posicionamento
              digital ético e profissional, sem precisar de estratégias que não
              combinam com a seriedade da sua profissão.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              {/* BOTÃO PRINCIPAL ADAPTADO */}
              <a
                href="#offer" // Mude o link para a seção de oferta/contato
                className="rounded-md bg-primary px-8 py-4 text-center text-lg font-medium text-white"
              >
                Agendar Análise Estratégica
              </a>
              {/* BOTÃO SECUNDÁRIO ADAPTADO PARA WHATSAPP */}
              <a
                href="https://wa.me/SEUNUMERO" // Coloque o link do WhatsApp aqui
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                {/* Ícone do WhatsApp */}
                <svg
                  role="img"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.45 16.86L2.05 22L7.31 20.6C8.75 21.42 10.36 21.88 12.04 21.88C17.5 21.88 21.95 17.43 21.95 11.97C21.95 9.31 20.95 6.82 19.05 4.92C17.15 3.02 14.66 2 12.04 2ZM12.04 20.13C10.56 20.13 9.11 19.73 7.85 19L7.54 18.82L4.44 19.6L5.25 16.58L5.06 16.27C4.24 14.93 3.83 13.43 3.83 11.91C3.83 7.37 7.51 3.7 12.04 3.7C14.28 3.7 16.32 4.56 17.84 6.08C19.36 7.6 20.25 9.64 20.25 11.88C20.25 16.42 16.57 20.13 12.04 20.13ZM16.56 14.45C16.36 14.35 15.11 13.75 14.91 13.67C14.71 13.59 14.56 13.55 14.41 13.75C14.26 13.95 13.78 14.55 13.63 14.7C13.48 14.85 13.33 14.9 13.03 14.8C12.73 14.7 11.91 14.45 10.91 13.55C10.12 12.85 9.58 12.03 9.43 11.73C9.28 11.43 9.39 11.31 9.51 11.19C9.62 11.08 9.76 10.9 9.88 10.75C10 10.6 10.06 10.48 10.18 10.28C10.3 10.08 10.25 9.91 10.18 9.78C10.1 9.66 9.68 8.63 9.51 8.18C9.33 7.73 9.16 7.81 9.03 7.81C8.9 7.81 8.75 7.81 8.6 7.81C8.45 7.81 8.2 7.85 8 8.05C7.8 8.25 7.28 8.73 7.28 9.85C7.28 10.98 8.03 12.03 8.15 12.18C8.28 12.33 9.68 14.55 12 15.53C12.55 15.78 12.98 15.93 13.33 16.03C13.93 16.2 14.43 16.18 14.83 16.13C15.28 16.05 16.31 15.48 16.51 14.9C16.71 14.33 16.71 13.85 16.63 13.75C16.56 13.65 16.48 13.6 16.36 13.55"></path>
                </svg>
                <span>Falar no WhatsApp</span>
              </a>
            </div>
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
}