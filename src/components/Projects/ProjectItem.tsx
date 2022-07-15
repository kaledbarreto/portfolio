import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProjectContainer } from './styles';

interface ProjectProps {
  title: string;
  type: string;
  link: string;
  img: string;
}

export default function ProjectItem({ title, type, link, img }: ProjectProps) {
  return (
    <ProjectContainer imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1># {title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projetos/${link}`}>
          <a>
            Ver Mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
