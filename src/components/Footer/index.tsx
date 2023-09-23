import Link from "next/link";
import Contact from "../Contact";

export default function Footer() {
    return (
        <>
            {/* <Contact /> */}
            <footer className="relative bg-my flex items-center justify-center pt-12 pb-16 px-4 sm:px-0">
                <div className="w-full max-w-5xl flex flex-col sm:flex-row justify-between">
                    <div className="flex sm:hidden items-center mb-4 sm:mb-0">
                        <p>LOGO</p>
                    </div>
                    <nav className="text-white/80 flex justify-start mb-4 sm:mb-0">
                        <ul>
                            <li>
                                <h6 className="font-medium text-white mb-2">Navegação rápida</h6>
                            </li>
                            <li>
                                <Link className="hover:text-white" href="/inicio">Início</Link>
                            </li>
                            <li>
                                <Link className="hover:text-white" href="/servicos">Serviços</Link>
                            </li>
                            <li>
                                <Link className="hover:text-white" href="/simulado">Simulado</Link>
                            </li>
                            <li>
                                <Link className="hover:text-white" href="/novidades">Novidades</Link>
                            </li>
                            <li>
                                <Link className="hover:text-white" href="">Entrar em contato</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="sm:flex items-center hidden">
                        <p>LOGO</p>
                    </div>
                    {/* <div className="text-white/80">
                        <h6 className="font-medium text-white mb-2">Entre em contato</h6>
                        <div className="flex flex-col mb-1">
                            <p>Email:</p>
                            <p>exemplo@hotmail.com</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Whatsapp:</p>
                            <p>(XXX) 9 XXXX-XXXX</p>
                        </div>
                    </div> */}
                </div>
                <div className="absolute bottom-4 text-white/80 flex justify-start sm:justify-center w-full">
                    <p className="font-medium text-xs px-4">2023 © Todos os direitos reservados - Autoescola Tropical</p>
                </div>
            </footer>
        </>
    )
}