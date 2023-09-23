import Contact from "@/components/Contact";
import Section from "@/components/Section";
import Template from "@/components/Template";
import Text from "@/components/Text";

export default function Servicos() {
    return (
        <Template title="Serviços">
            <Section className="py-12 px-4 sm:px-0">
                <div className="flex justify-start w-full">
                    <Text title="Nossos serviços" topTitle="Saiba quais são os nossos serviços" />
                </div>
                <div className="flex flex-col justify-start gap-12 w-full mt-12">
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-semibold mb-2">Aulas teóricas</h3>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit. Vest Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                    </div>
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-semibold mb-2">Treinamento em Direção Defensiva</h3>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit. Vest Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                    </div>
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-semibold mb-2">Treinamento de Primeiros Socorros</h3>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit. Vest Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                    </div>
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-semibold mb-2">Aulas de Direção Práticas</h3>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit. Vest Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                    </div>
                    <div className="max-w-xl">
                        <h3 className="text-2xl font-semibold mb-2">Renovação da CNH</h3>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet, consectetur adipiscing elit. Vest Vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p className="mb-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus vestibulum nec libero nec elit pellentesque faucibus.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec libero nec elit pellentesque faucibus.</p>
                    </div>
                </div>
            </Section>
            <section>
                <Contact />
            </section>
        </Template>
    )
}