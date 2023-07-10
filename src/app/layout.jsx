import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import imglogo from "../../public/img/logoportal.svg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portal do Funcionario",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* <div className=" items-center bg-red-400 w-full">
          <div className="flex flex-initial bg-blue-400 text-white w-1/4">
            <div className="flex flex-initial items-center bg-lime-500 w-full">
              <div className="flex flex-initial">
                <a className="btn btn-ghost normal-case text-xl" href="/">
                  Portal do funcionario
                </a>
                <figure className="mr-2">
                  <Image src={imglogo} alt="logo" width={50} height={100} />
                </figure>
              </div>
            </div>
          </div>
          <div className="flex flex-initial bg-orange-200 w-1/4">
            <ul className="w-full text-dark text-center mt-3 z-[1] p-2 shadow bg-base-100">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/proporcional">Proporcional</Link>
              </li>
              <li>
                <Link href="/ramais">Ramais</Link>
              </li>
              <li>
                <Link href="http://10.0.9.20/" target="_blank">
                  API Suporte
                </Link>
              </li>
              <li>
                <Link
                  href="https://conect-veiculos.netlify.app/login"
                  target="_blank"
                >
                  Carros
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap-reverse w-full bg-black">
            {children}
          </div>
        </div> */}
        <div className="flex">
          <div className="bg-gray-200 w-sidebar">
            <div className="flex flex-initial">
              <a
                className="btn btn-ghost normal-case text-md font-bold"
                href="/"
              >
                Portal do funcionario
                <figure className="mr-2">
                  <Image src={imglogo} alt="logo" width={40} height={80} />
                </figure>
              </a>
            </div>
            <button className="block w-full py-2 px-4 bg-gray-300 hover:bg-gray-400">
              <Link href="/">Home</Link>
            </button>
            <button className="block w-full py-2 px-4 bg-gray-300 hover:bg-gray-400">
              <Link href="/proporcional">Proporcional</Link>
            </button>
            <button className="block w-full py-2 px-4 bg-gray-300 hover:bg-gray-400">
              <Link href="/listramais">Lista de Ramais</Link>
            </button>
            <button className="block w-full py-2 px-4 bg-gray-300 hover:bg-gray-400">
              <Link href="/ramais">Cadastrar Ramais</Link>
            </button>
            <button className="block w-full py-2 px-4 bg-gray-300 hover:bg-gray-400">
              <Link href="http://10.0.9.20/" target="_blank">
                API Suporte
              </Link>
            </button>
            <button className="block w-full py-2 px-4 bg-gray-300 hover:bg-gray-400">
              <Link
                href="https://conect-veiculos.netlify.app/login"
                target="_blank"
              >
                Carros
              </Link>
            </button>
          </div>
          <main className="flex flex-initial ml-10 p-4 bg-light w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
