"use client";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importe o useRouter corretamente
import { useState } from "react";
import imglogo from "../../public/img/logoportal.svg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Portal do Funcionario",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <div className={`${inter.className} `}>
        <head className="flex  h-full">
          <div className="flex col-span-3 h-full bg-neutral items-center w-full text-white dm:hidden ">
            <button
              className="flex-col w-1/3 justify-center items-center  lg:flex"
              onClick={handleClick}
            >
              <span
                className={`bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm  ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </button>
            <Link href="/" className="flex w-full items-center justify-center">
              <p className="w-full text-center ">Portal do Funcionario</p>
            </Link>

            <div className="w-1/3 justify-center">
              <figure className="mr-2 ">
                <Image
                  className="justify-center"
                  src={imglogo}
                  alt="logo"
                  width={40}
                  height={80}
                />
              </figure>
            </div>
            {isOpen ? (
              <motion.div
                initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
                animate={{ scale: 1, opacity: 1 }}
                className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-dark/90 rounded-lg backdrop-blur-sm py-32"
              >
                <nav className="flex items-center flex-col justify-center">
                  <Link href="/">
                    <button
                      className={`rounded-md block  mb-1 mt-5 w-[25vh] py-2 px-4 "
                      } hover:bg-gray-500`}
                      onClick={handleClick}
                    >
                      Home
                    </button>
                  </Link>
                  <Link href="/proporcional">
                    <button
                      className={`rounded-md block mb-1  w-[25vh] py-2 px-4 "
                     `}
                      onClick={handleClick}
                    >
                      Proporcional
                    </button>
                  </Link>
                  <Link href="/trocadeplano">
                    <button
                      className={`rounded-md block mb-1  w-[25vh] py-2 px-4 "
                      } hover:bg-gray-500`}
                      onClick={handleClick}
                    >
                      Troca de Plano
                    </button>
                  </Link>
                  <Link href="/listramais">
                    <button
                      className={`rounded-md block mb-1  w-[25vh] py-2 px-4  hover:bg-gray-500`}
                      onClick={handleClick}
                    >
                      Lista de Ramais
                    </button>
                  </Link>
                  <Link href="http://10.0.9.20/" target="_blank">
                    <button
                      className={`rounded-md block mb-1  w-[25vh] py-2 p-4`}
                      onClick={handleClick}
                    >
                      API Suporte
                    </button>{" "}
                  </Link>
                  <Link
                    href="https://conect-veiculos.netlify.app/login"
                    target="_blank"
                  >
                    <button
                      className={`rounded-md block mb-1  w-[25vh] py-2 px-4`}
                      onClick={handleClick}
                    >
                      Carros
                    </button>
                  </Link>
                </nav>
              </motion.div>
            ) : null}
          </div>
        </head>
        <div className="flex  ">
          <div className="bg-neutral pt-5 flex flex-col col-span-1 items-center text-white w-sidebar md:hidden">
            <div>
              <a
                className="btn  btn-ghost normal-case rounded-none w-full  text-md font-bold"
                href="/"
              >
                Portal do funcionario
                <figure className="mr-2">
                  <Image src={imglogo} alt="logo" width={40} height={80} />
                </figure>
              </a>
            </div>
            <Link href="/">
              <button
                className={`rounded-md block  mb-1 mt-5 w-[25vh] py-2 px-4 shadow- ${
                  currentPath === "/" ? "bg-gray-500 text-white" : "bg-neutral"
                } hover:bg-gray-500`}
                onClick={handleClick}
              >
                Home
              </button>
            </Link>
            <Link href="/proporcional">
              <button
                className={`rounded-md block mb-1  w-[25vh] py-2 px-4 ${
                  currentPath === "/proporcional" ? "bg-gray-500" : "bg-neutral"
                } hover:bg-gray-500`}
              >
                Proporcional
              </button>
            </Link>
            <Link href="/trocadeplano">
              <button
                className={`rounded-md block mb-1  w-[25vh] py-2 px-4 ${
                  currentPath === "/trocadeplano" ? "bg-gray-500" : "bg-neutral"
                } hover:bg-gray-500`}
              >
                Troca De Plano
              </button>
            </Link>
            <Link href="/listramais">
              <button
                className={`rounded-md block mb-1  w-[25vh] py-2 px-4 ${
                  currentPath === "/listramais" ? "bg-gray-500" : "bg-neutral"
                } hover:bg-gray-500`}
              >
                Lista de Ramais
              </button>
            </Link>
            {/* <Link href="/ramais">
              <button
                className={`rounded-md block mb-1  w-[25vh] py-2 px-4 ${
                  currentPath === "/ramais" ? "bg-gray-500" : "bg-neutral"
                } hover:bg-gray-500`}
                onClick={() => notFound()}
              >
                Cadastrar Ramais
              </button>
            </Link> */}
            <Link href="http://10.0.9.20/" target="_blank">
              <button
                className={`rounded-md block mb-1  w-[25vh] py-2 px-4 ${
                  currentPath === "http://10.0.9.20/"
                    ? "bg-gray-500"
                    : "bg-neutral"
                } hover:bg-gray-500`}
              >
                API Suporte
              </button>{" "}
            </Link>
            <Link
              href="https://conect-veiculos.netlify.app/login"
              target="_blank"
            >
              <button
                className={`rounded-md block mb-1  w-[25vh] py-2 px-4 ${
                  currentPath === "https://conect-veiculos.netlify.app/login"
                    ? "bg-gray-500"
                    : "bg-neutral"
                } hover:bg-gray-500`}
              >
                Carros
              </button>
            </Link>

            <footer className="absolute bottom-0  text-white py-4 px-8 text-center">
              <Link
                className="text-sm"
                href={"https://dev-felipe-justus-portfolio.netlify.app"}
                target="_blank"
              >
                <p>Felipe Justus</p>
              </Link>
              <p className="text-sm">&copy; {currentYear} Portal</p>
            </footer>
          </div>

          <main className="flex flex-initial ml-10 sm:ml-0 min-h-screen rounded-tl-3xl w-screen md:ml-0 md:pt-0">
            {children}
          </main>
        </div>
      </div>
    </html>
  );
}
