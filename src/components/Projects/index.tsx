import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos Projetos" />
      <section>
        <ProjectItem
          img="https://i.ytimg.com/vi/25zB8JIr71Y/maxresdefault.jpg"
          title="Projeto 01"
          type="Website"
          link="#"
        />
        <ProjectItem
          img="https://i.ytimg.com/vi/25zB8JIr71Y/maxresdefault.jpg"
          title="Projeto 01"
          type="Website"
          link="#"
        />
        <ProjectItem
          img="https://i.ytimg.com/vi/25zB8JIr71Y/maxresdefault.jpg"
          title="Projeto 01"
          type="Website"
          link="#"
        />
      </section>
      <button type="button">
        <Link href="/proojetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
