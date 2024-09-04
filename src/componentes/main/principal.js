import React from 'react';
import styled from 'styled-components';

// Estilização dos contêineres
const PrincipalContainer = styled.main`
  padding: 20px;
  background-color: #f4f4f4;
  min-height: calc(100vh - 60px); /* Ajuste a altura mínima para garantir que o footer fique no fundo */
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 40px; /* Aumente a margem para criar mais espaço entre as seções */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px; /* Adiciona padding para garantir que o conteúdo não fique muito apertado */
`;

const TextContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%; /* Ajuste a largura da imagem para preencher o espaço disponível */
  max-width: 400px; /* Limite a largura máxima da imagem */
  height: auto;
  object-fit: cover;
`;

function Principal() {
  return (
    <PrincipalContainer>
      <Section>
        <TextContent>
          <h2>Bem-vindo ao Titanic</h2>
          <p>Explore a história do Titanic e mergulhe em um dos eventos mais icônicos da navegação.
             Descubra detalhes fascinantes sobre o famoso transatlântico, suas viagens e o legado que deixou.</p>
        </TextContent>
        <Image src="https://img.freepik.com/fotos-premium/navio-titanic-da-beleza-mundial-a-noite_952161-36.jpg" alt="Foto titanic" />
      </Section>
      <Section>
        <TextContent>
          <h2>Reviva o Passado</h2>
          <p>Navegue por nosso conteúdo exclusivo, com imagens históricas, relatos e dados sobre o Titanic. Esta é a sua oportunidade de reviver o passado e entender melhor a magnitude desta tragédia marítima.</p>
        </TextContent>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9t8eUZa0wCTQjzMi5Eip6_Ro1S7vwhYI2NQ&s" alt="Foto titanic" />
      </Section>
    </PrincipalContainer>
  );
}

export default Principal;
