import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

// Lembre-se de substituir estas imagens pelas fotos reais dos seus clientes
import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {/* Depoimento 1 (em destaque) */}
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-white px-14 py-14 shadow-lg dark:bg-trueGray-800">
            {/* MUDANÇA AQUI: Aspas substituídas por entidades HTML */}
            <p className="text-2xl leading-normal ">
              &ldquo;A consultoria foi um divisor de águas. Aprendi a me posicionar
              como <Mark>autoridade</Mark> e hoje minha agenda está lotada com
              os pacientes que eu realmente queria atender.&rdquo;
            </p>

            <Avatar
              image={userOneImg}
              name="Dra. Ana Carolina"
              title="Dermatologista em São Paulo, SP"
            />
          </div>
        </div>
        
        {/* Depoimento 2 */}
        <div className="">
          <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-white px-14 py-14 shadow-lg dark:bg-trueGray-800">
            {/* MUDANÇA AQUI: Aspas substituídas por entidades HTML */}
            <p className="text-2xl leading-normal ">
              &ldquo;Eu não tinha tempo para redes sociais. O método me deu um
              direcionamento claro e hoje gasto <Mark>muito menos tempo</Mark>{" "}
              para ter resultados melhores.&rdquo;
            </p>

            <Avatar
              image={userTwoImg}
              name="Dr. Ricardo Mendes"
              title="Cardiologista em Belo Horizonte, MG"
            />
          </div>
        </div>

        {/* Depoimento 3 */}
        <div className="">
          <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-white px-14 py-14 shadow-lg dark:bg-trueGray-800">
            {/* MUDANÇA AQUI: Aspas substituídas por entidades HTML */}
            <p className="text-2xl leading-normal ">
              &ldquo;Finalmente entendi que meu consultório é um negócio. As
              estratégias de gestão e marketing <Mark>dobraram meu faturamento</Mark> em 6 meses.&rdquo;
            </p>

            <Avatar
              image={userThreeImg}
              name="Dra. Juliana Ferreira"
              title="Ginecologista em Curitiba, PR"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

// Interface do Avatar (sem mudanças)
interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

// Componente Avatar (sem mudanças)
function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="mt-8 flex items-center space-x-3">
      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

// Componente Mark (sem mudanças)
function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="rounded-md bg-primary/20 text-primary ring-4 ring-primary/20 dark:bg-primary/30 dark:text-primary dark:ring-primary/30">
        {props.children}
      </mark>{" "}
    </>
  );
}