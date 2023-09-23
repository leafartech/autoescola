import Contact from "@/components/Contact";
import Dropdown from "@/components/Dropdown";
import Section from "@/components/Section";
import Template from "@/components/Template";
import Text from "@/components/Text";

export default function Novidades() {
    return (
        <Template title="Novidades">
            <Section className="py-12 px-4 sm:px-0">
                <div className="w-full flex justify-start">
                    <Text title="Últimas novidades" topTitle="Acompanhe avisos, promoções e eventos!" />
                </div>
                <div className="w-full flex flex-wrap justify-between gap-6 mt-12">
                    <Dropdown title="Promoção de fim de ano!">
                        <p>aq</p>
                    </Dropdown>
                    <Dropdown title="Abertura de novas turmas">
                        <p>aq</p>
                    </Dropdown>
                    <Dropdown title="Serviço de Direção defensiva">
                        <p>aq</p>
                    </Dropdown>
                    <Dropdown title="Expansão do pátio">
                        <p>aq</p>
                    </Dropdown>
                    <Dropdown title="Promoção de fim de ano!">
                        <p>aq</p>
                    </Dropdown>
                    <Dropdown title="Treinamento dos instrutores">
                        <p>aq</p>
                    </Dropdown>
                    <Dropdown title="Serviço de Direção defensiva">
                        <p>aq</p>
                    </Dropdown>
                    <Dropdown title="Treinamento dos instrutores">
                        <p>aq</p>
                    </Dropdown>
                </div>
            </Section>
            <section>
                <Contact />
            </section>
        </Template>
    )
}