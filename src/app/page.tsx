import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import Footer from "@/components/Footer";
import HeroFlex from "@/components/HeroFlex";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import TransparentCard from "@/components/TransparentCard";
import { ArrowLongRightIcon, CheckCircleIcon, DocumentTextIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <header className="relative min-h-screen flex items-center justify-center">
                <img src="./images/bg.png" alt="" className="absolute hidden sm:block top-0 w-full h-full -z-10" />
                <img src="./images/bg4.png" alt="" className="absolute block sm:hidden top-0 w-full h-full -z-10" />
                <div className="absolute top-0 left-0 w-full h-full sm:h-5/6 bg-gradient-to-b from-black to-black/0"></div>
                <Navbar />
                <div className="w-full max-w-5xl flex justify-start">
                    <div className="px-4 sm:px-0 flex flex-col gap-3 z-10 max-w-lg">
                        <h1 className="text-3xl sm:text-5xl text-white font-bold tracking-wider">Autoescola Tropical</h1>
                        <p className="text-white/80 sm:text-lg">Na nossa autoescola, estamos comprometidos em preparar você para a estrada da vida com confiança, segurança e habilidades excepcionais de direção.</p>
                        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 w-full sm:w-9/12">
                            <Link href="" className="shadow-2xl py-3 text-center w-full rounded-md text-white font-medium bg-my hover:bg-my2">Contato</Link>
                            <Link href="" className="shadow-2xl py-3 text-center w-full rounded-md text-white font-medium border border-white hover:bg-my hover:border-my transition">Fazer simulado</Link>
                        </div>
                    </div>
                </div>
            </header>
            <div className="relative h-12 bg-gradient-to-l from-my/60 to-my2 flex items-center justify-center gap-2 overflow-hidden">
                <p className="text-white">Contato: (73) 9 9959-9911</p>
                <div className="absolute -right-16 h-[600%] sm:w-2/12 bg-black/50 rotate-[15deg]"></div>
                <div className="absolute -left-16 h-[600%] sm:w-2/12 bg-black/50 rotate-[15deg]"></div>
            </div>
            <main className="bg-zinc-50">
                <Section className="pt-24 mb-12 sm:mb-24">
                    <HeroFlex
                        imagePath="1"
                        mainTitle="Nossos Serviços"
                        topTitle="Conheça nossos serviços"
                        reverse={true}
                    >
                        <div className="flex flex-col gap-5">
                            <Dropdown
                                title="Aulas Teóricas">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                            <Dropdown
                                title="Treinamento em Direção Defensiva">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                            <Dropdown
                                title="Treinamento de Primeiros Socorros">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                            <Dropdown
                                title="Aulas de Direção Práticas">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                            <Dropdown
                                title="Renovação da CNH ">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                        </div>
                    </HeroFlex>
                </Section>
                <Section className="mb-12 sm:mb-24">
                    <h2></h2>
                    <div className="px-4 w-full flex flex-col sm:grid sm:grid-cols-4">
                        <Card
                            Icon={UserGroupIcon}
                            title="Instrutores experientes"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus."
                        />
                        <Card
                            bg="bg-my"
                            Icon={CheckCircleIcon}
                            title="Alto índicede aprovação"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus."
                        />
                        <Card
                            Icon={DocumentTextIcon}
                            title="Frota ampla e completa"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus."
                        />
                        <Card
                            Icon={DocumentTextIcon}
                            title="Frota ampla e completa"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus."
                        />
                    </div>
                </Section>
                <Section className="mb-12 sm:mb-24">
                    <HeroFlex
                        imagePath="2"
                        mainTitle="História"
                        topTitle="Sobre a Autoescola Tropical"
                    >
                        <div className="flex flex-col gap-4 text-gray-600">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        </div>
                    </HeroFlex>
                </Section>
                <section className="px-4 sm:px-0 mb-12 sm:mb-24 relative parallax pb-12 sm:pb-0 min-h-[600px] sm:min-h-[600px] w-full flex flex-col items-center justify-center sm:gap-8">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
                    <div className="z-10 text-center pt-8 pb-6 sm:py-0">
                        <h2 className="text-white font-semibold text-2xl sm:text-3xl tracking-wider">Nosso Diferencial</h2>
                        <p className="text-zinc-300 text-sm sm:text-base">Entenda o porquê a Autoescola Tropical é a sua melhor opção</p>
                    </div>
                    <div className="flex justify-center flex-wrap gap-3 sm:gap-6 z-10 w-full max-w-6xl">
                        <TransparentCard
                            title="Título 1"
                            text="Este é o nosso primeiro diferencial"
                        />
                        <TransparentCard
                            title="Título 1"
                            text="Este é o nosso primeiro diferencial"
                        />
                        <TransparentCard
                            title="Título 1"
                            text="Este é o nosso primeiro diferencial"
                        />
                        <TransparentCard
                            title="Título 1"
                            text="Este é o nosso primeiro diferencial"
                        />
                        <TransparentCard
                            title="Título 1"
                            text="Este é o nosso primeiro diferencial"
                        />
                        <TransparentCard
                            title="Título 1"
                            text="Este é o nosso primeiro diferencial"
                        />
                        <TransparentCard
                            title="Título 1"
                            text="Este é o nosso primeiro diferencial"
                        />
                        <TransparentCard
                            title="Título 1"
                            text="Este é o nosso primeiro diferencial"
                        />
                    </div>
                </section>
                <Section className="mb-12 sm:mb-24">
                    <HeroFlex
                        imagePath="3"
                        mainTitle="Novidades"
                        topTitle="Confira as útlimas novidades"
                        reverse={true}
                    >
                        <div className="flex flex-col gap-5">
                            <Dropdown
                                title="Promoção de fim de ano!">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                            <Dropdown
                                title="Abertura de novas turmas">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                            <Dropdown
                                title="Serviço de Direção defensiva">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                            <Dropdown
                                title="Expansão do pátio">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                            <Dropdown
                                title="Treinamento dos instrutores">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                            </Dropdown>
                            <div className="w-full flex justify-start">
                                <Link href="/novidades" className="bg-my hover:bg-my2 py-2 px-8 text-white text-center rounded-md">Ver todas</Link>
                            </div>
                        </div>
                    </HeroFlex>
                </Section>
                <Section className="mb-12 sm:mb-24">
                    <HeroFlex
                        imagePath="4"
                        mainTitle="Contato"
                        topTitle="Entre em contato"
                    >
                        <div className="flex flex-col gap-4 text-black">
                            <div className="flex mb-2 items-center gap-6">
                                <img src="./images/contact/1.png" alt="ícone de contato" className="h-12 w-12" />
                                <div className="flex flex-col">
                                    <h4 className="text-base text-zinc-600">Telefone:</h4>
                                    <p className="text-lg">(73) 99959-9911</p>
                                </div>
                            </div>
                            <div className="flex mb-2 items-center gap-6">
                                <img src="./images/contact/2.png" alt="ícone de contato" className="h-12 w-12" />
                                <div className="flex flex-col">
                                    <h4 className="text-base text-zinc-600">Instagram:</h4>
                                    <p className="text-lg">@meuinstagram</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <img src="./images/contact/3.png" alt="ícone de contato" className="h-12 w-12" />
                                <div className="flex flex-col">
                                    <h4 className="text-base text-zinc-600">Email:</h4>
                                    <p className="text-lg">exemplo@hotmail.com</p>
                                </div>
                            </div>
                            <div className="w-full flex justify-start">
                                <a href="/" className="bg-my hover:bg-my2 py-2 px-8 text-white text-center rounded-md flex gap-1 items-center">Whastapp <ArrowLongRightIcon className="h-4 w-4 text-white" /></a>
                            </div>
                        </div>
                    </HeroFlex>
                </Section>
                <section className="text-center border-t border-gray-300">
                    <div className="z-10 text-left sm:text-center py-10 px-4">
                        <h2 className="font-semibold text-2xl sm:text-3xl tracking-wider">Localização</h2>
                        <p className="text-zinc-600 text-sm sm:text-base">Saiba mais sobre o nosso espaço físico e venha nos visitar!</p>
                    </div>
                    <iframe className="w-full sm:sm:h-96 h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14452.728092323721!2d-50.17423058261719!3d-25.095698999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81a41ae9fd7f7%3A0x5588b5242ed1a260!2sAuto%20Escola%20Tropical!5e0!3m2!1spt-BR!2sbr!4v1695483193848!5m2!1spt-BR!2sbr" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">

                    </iframe>
                </section>
            </main>
            <Footer />
        </div>
    )
}