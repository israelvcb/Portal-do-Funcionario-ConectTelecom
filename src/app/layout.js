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
      <body className={`{inter.className} bg-light`}>
        <div
          className="navbar  bg-black text-white
        "
        >
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu text-dark menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
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
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl" href="/">
              Portal do funcionario
            </a>
          </div>
          <div className="navbar-end">
            <figure>
              <Image src={imglogo} alt="logo" width={50} height={100} />
            </figure>
          </div>
        </div>
        <hr />
        {children}
      </body>
    </html>
  );
}
