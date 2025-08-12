import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

export function Footer() {
  // Ícones de redes sociais que vamos usar
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/carolirrael",
      icon: Instagram,
    },
    {
      name: "Linkedin",
      href: "https://linkedin.com/in/seu-linkedin-aqui", // Adicione o link do LinkedIn se houver
      icon: Linkedin,
    },
  ];

  return (
    <div className="relative">
      <Container>
        <div className="mx-auto mt-5 grid max-w-screen-xl grid-cols-1 gap-10 border-t border-gray-100 pt-10 dark:border-trueGray-700 md:grid-cols-3">
          {/* Coluna 1: Logo e Informações */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100"
            >
              <Image
                src="/img/logo.jpeg" // Use o mesmo logo da Navbar
                alt="Logo Carol Irrael"
                width="32"
                height="32"
                className="w-8 rounded-full"
              />
              <span>Carol Irrael</span>
            </Link>
            <div className="mt-4 max-w-md text-gray-500 dark:text-gray-400">
              Estrategista de Marketing Digital para profissionais da saúde.
              <br />
              CNPJ: 00.000.000/0001-00
            </div>
          </div>

          {/* Coluna 2: Links Úteis */}
          <div>
            <div className="flex w-full flex-wrap">
              <Link
                href="#benefits"
                className="w-full rounded-md px-4 py-2 text-gray-500 hover:text-primary dark:text-gray-300"
              >
                O Método
              </Link>
              <Link
                href="#testimonials"
                className="w-full rounded-md px-4 py-2 text-gray-500 hover:text-primary dark:text-gray-300"
              >
                Depoimentos
              </Link>
              <Link
                href="#faq"
                className="w-full rounded-md px-4 py-2 text-gray-500 hover:text-primary dark:text-gray-300"
              >
                Dúvidas
              </Link>
            </div>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="">
            <div className="font-medium">Siga nas redes</div>
            <div className="mt-5 flex space-x-5 text-gray-400 dark:text-gray-500">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener"
                  className="hover:text-primary"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-center text-sm text-gray-600 dark:text-gray-400">
          Copyright © {new Date().getFullYear()} Carol Irrael. Todos os direitos reservados.
        </div>
      </Container>
      {/* O Backlink é um requisito do template para uso gratuito, não remova */}
      <Backlink />
    </div>
  );
}

// Definições dos ícones (mantidas do arquivo original)
const Instagram = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
  </svg>
);

const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
  </svg>
);

const Backlink = () => {
  return (
    <a
      href="https://web3templates.com"
      target="_blank"
      rel="noopener"
      className="absolute bottom-5 left-5 z-10 flex place-items-center space-x-2 rounded border border-gray-300 bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm dark:border-trueGray-700 dark:bg-trueGray-900 dark:text-trueGray-300"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="29.5385" rx="2.76923" fill="#362F78" />
        <path
          d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
          fill="#F7FAFC"
        />
      </svg>
      <span>Web3Templates</span>
    </a>
  );
};