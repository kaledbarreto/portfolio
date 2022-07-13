import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import placeholder from '../../assets/pessoa.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={placeholder} alt="Hero" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Kaled</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Idade: <span className="blue"> 20 </span>,
            </div>
            <div>
              Cidade: <span className="blue">Lauro de Freitas, BA</span>
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'}
            <div>
              Função: <span className="blue">Dev Full-stack</span>,
            </div>
            <div>
              Situação: <span className="blue">Open to work 🚀​</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
