import { SectionTitle } from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="02 Anos" description="de eperiência" />
      <section>
        <ExperienceItem
          year="2020"
          title="Dev Back-end"
          description="Desenvolvimento do back-end das aplicações web para diversas empresas na Empresa Júnior de Ciências e Tecnologia da UFBA."
        />
        <ExperienceItem
          year="2021"
          title="Anotação de Dados"
          description="Serviços de anotação de dados qualificados para aprendizado de máquina e para solicitações personalizadas."
        />
        <ExperienceItem
          year="2022"
          title="Residência de Software"
          description="Desenvolvimento de um projeto web responsivo, para um cliente real, na qual atuei principalmente no Front-end, utilizando tecnologias como React, Material UI e SASS."
        />
      </section>
    </Container>
  );
}
