"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ScheduleButton } from "./ScheduleButton";

export const Navbar = () => {
  // Links de navegação que apontam para seções da página
  const navigation = [
    { name: "O Método", href: "#benefits" },
    { name: "Quem Sou", href: "#authority" },
    { name: "Depoimentos", href: "#testimonials" },
  ];

  return (
    // Adicionado `sticky top-0 z-50` para fixar no topo e `bg-white dark:bg-trueGray-900 shadow-md` para estilo
    <div className="sticky top-0 z-50 w-full bg-white shadow-md dark:bg-trueGray-900">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-4 lg:justify-between xl:px-0">
        {/* Logo */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-primary dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.jpeg" // Mantenha seu logo
                        width="50" // Ajustei o tamanho para um visual mais refinado
                        height="50"
                        alt="Logo Carol Irrael"
                        className="rounded-full" // Um logo redondo pode ficar elegante
                      />
                    </span>
                    <span className="hidden sm:block">Carol Irrael</span>
                  </span>
                </Link>

                {/* Botão do Menu Mobile */}
                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="rounded-md px-2 py-1 text-gray-500 hover:text-primary focus:text-primary focus:outline-none dark:text-gray-300 lg:hidden"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                {/* Painel do Menu Mobile */}
                <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="-ml-4 w-full rounded-md px-4 py-2 text-gray-500 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none dark:text-gray-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="#offer"
                      className="mt-3 w-full rounded-md bg-primary px-6 py-2 text-center text-white lg:ml-5"
                    >
                      Garantir Minha Vaga
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* Menu Desktop */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((menu, index) => (
              <li className="nav__item mr-3" key={index}>
                <Link
                  href={menu.href}
                  className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-primary focus:text-primary focus:outline-none dark:text-gray-200"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Botão CTA Desktop */}
        <div className="nav__item hidden space-x-4 lg:flex">
          <ScheduleButton 
            className="rounded-md bg-primary px-6 py-2 text-white md:ml-5"
          >
            Garantir Minha Vaga
          </ScheduleButton>
        </div>
      </nav>
    </div>
  );
};