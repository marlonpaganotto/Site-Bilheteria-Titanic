import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importando o Link para navegação

const Container = styled.main`
  padding: 20px;
  background-color: #f4f4f4;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const TextContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
`;

const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
`;

const Button = styled(Link)` /* Estilize o Link como um botão */
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #003366;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #4169E1;
  }
`;

function Tickets() {
  return (
    <Container>
      <Section>
        <TextContent>
          <h2>Primeira Classe</h2>
          <p>Experimente o luxo e conforto da primeira classe com cabines espaçosas, refeições gourmet e serviços exclusivos. Ideal para aqueles que desejam viajar com estilo.</p>
          <Price>R$ 5000</Price>
          <Button to="/compra">Comprar Primeira Classe</Button> {/* Link para a página de compra */}
        </TextContent>
        <Image src="https://ogimg.infoglobo.com.br/in/25029220-03b-f7c/FT1086A/Wish-Tower-SuiteLiving-Room.jpg" alt="Primeira Classe" />
      </Section>

      <Section>
        <TextContent>
          <h2>Segunda Classe</h2>
          <p>Desfrute de uma viagem confortável na segunda classe, com cabines aconchegantes e uma ótima seleção de refeições e entretenimento.</p>
          <Price>R$ 4000</Price>
          <Button to="/compra">Comprar Segunda Classe</Button> {/* Link para a página de compra */}
        </TextContent>
        <Image src="https://s2-epocanegocios.glbimg.com/a-pgkUJ09QmRbWiQft2Tc5MBFZY=/0x0:980x732/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e536e40f1baf4c1a8bf1ed12d20577fd/internal_photos/bs/2022/w/0/wF4BYmRA2RNi2YeBPpHw/screenshot-2022-11-16t125839.429.png" alt="Segunda Classe" />
      </Section>

      <Section>
        <TextContent>
          <h2>Terceira Classe</h2>
          <p>A opção mais acessível para sua jornada épica, a terceira classe oferece conforto essencial e uma experiência autêntica de viagem.</p>
          <Price>R$ 3500</Price>
          <Button to="/compra">Comprar Terceira Classe</Button> {/* Link para a página de compra */}
        </TextContent>
        <Image src="https://vounomundo.com.br/wp-content/uploads/2019/07/quarto-carnival-vista.jpg" alt="Terceira Classe" />
      </Section>
    </Container>
  );
}

export default Tickets;
