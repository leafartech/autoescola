import Contact from "@/components/Contact";
import HeroFlex from "@/components/HeroFlex";
import Section from "@/components/Section";
import Template from "@/components/Template";

export default function Simulado() {
    return (
        <Template title="Simulado">
            <Section>
                <div className="w-full text-left sm:text-center">
                    <h2 className="font-semibold text-3xl tracking-wider pt-12 pb-8 px-4 sm:px-0">Simulado</h2>
                    <div className="w-full h-[624px] border border-zinc-300 border-dashed shadow-xl rounded">

                    </div>
                </div>
            </Section>
            <Section className="py-12">
                <HeroFlex
                    imagePath="5"
                    mainTitle="Documentos Obrigatórios"
                    topTitle="Quais documentos são necessários?"
                >
                    <div className="flex flex-col gap-4">
                        <div>
                            <h4 className="font-semibold text-xl text-black">CNH</h4>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl text-black">CNH</h4>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-xl text-black">CNH</h4>
                            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        </div>
                    </div>
                </HeroFlex>
            </Section>
            <section>
                <Contact />
            </section>
        </Template>
    )
}