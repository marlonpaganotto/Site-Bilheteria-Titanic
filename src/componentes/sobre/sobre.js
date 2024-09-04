import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

function Sobre() {
  return (
    <Container>
      <Title>Venda de Ingressos para a Viagem no Titanic</Title>
      <Paragraph>
        Bem-vindo à nossa bilheteira para uma das viagens mais icônicas da história marítima! A seguir, explicamos como funcionaria a venda de ingressos para a viagem a bordo do RMS Titanic, o luxuoso transatlântico que partiu em sua viagem inaugural em 1912.
      </Paragraph>
      <Paragraph>
        <strong>Descrição da Viagem</strong><br />
        O RMS Titanic, conhecido por seu esplendor e grandeza, partiu em sua viagem inaugural no dia 10 de abril de 1912. A viagem começou em Southampton, Inglaterra, e tinha como destino final a cidade de Nova York, EUA. Com uma rota que atravessava o Atlântico Norte, o Titanic era um símbolo de luxo e inovação, prometendo uma travessia confortável e inesquecível.
      </Paragraph>
      <Paragraph>
        <strong>Detalhes da Rota e Paradas</strong>
      </Paragraph>
      <Paragraph>
        <strong>1. Partida de Southampton:</strong><br />
        <i>Data:</i> 10 de abril de 1912<br />
        <i>Descrição:</i> O Titanic partiu de Southampton, um dos principais portos de passageiros da Inglaterra. A cerimônia de partida foi marcada por grande entusiasmo, com centenas de passageiros embarcando para a viagem de suas vidas.
      </Paragraph>
      <Paragraph>
        <strong>2. Escala em Cherbourg:</strong><br />
        <i>Data:</i> 10 de abril de 1912 (mesmo dia da partida)<br />
        <i>Descrição:</i> O Titanic fez uma breve escala no porto de Cherbourg, na França, para embarcar mais passageiros e fornecer uma oportunidade para alguns passageiros franceses embarcarem em sua luxuosa viagem transatlântica.
      </Paragraph>
      <Paragraph>
        <strong>3. Escala em Queenstown (atual Cobh):</strong><br />
        <i>Data:</i> 11 de abril de 1912<br />
        <i>Descrição:</i> A última parada antes da travessia final foi em Queenstown, na Irlanda. Aqui, o Titanic fez uma escala para embarcar mais passageiros e carga, além de oferecer uma oportunidade para alguns passageiros irlandeses se juntarem à viagem.
      </Paragraph>
      <Paragraph>
        <strong>4. Travessia do Atlântico:</strong><br />
        <i>Data:</i> 12 a 14 de abril de 1912<br />
        <i>Descrição:</i> Após a última parada em Queenstown, o Titanic iniciou a travessia do Atlântico Norte, com destino a Nova York. A viagem foi planejada para ser uma travessia direta e contínua até o porto de chegada.
      </Paragraph>
      <Paragraph>
        <strong>5. Chegada a Nova York:</strong><br />
        <i>Data:</i> 17 de abril de 1912 (planejado, mas a viagem foi interrompida devido ao iceberg)<br />
        <i>Descrição:</i> O Titanic estava previsto para chegar ao porto de Nova York em 17 de abril de 1912. Infelizmente, a viagem não chegou ao seu destino final devido ao trágico acidente com um iceberg.
      </Paragraph>
      <Paragraph>
        <strong>Venda de Ingressos</strong>
      </Paragraph>
      <Paragraph>
        Os ingressos para o Titanic eram considerados um verdadeiro luxo e variavam em preço e acomodação. Havia várias classes de cabine, desde a primeira classe, que oferecia o máximo em conforto e requinte, até a terceira classe, que proporcionava acomodações mais simples, mas ainda assim confortáveis.
      </Paragraph>
      <Paragraph>
        <strong>Primeira Classe:</strong> Os bilhetes da primeira classe incluíam acesso a luxuosos salões, restaurantes finamente decorados e uma variedade de comodidades exclusivas.
      </Paragraph>
      <Paragraph>
        <strong>Segunda Classe:</strong> Oferecia um padrão elevado de conforto e serviço, com áreas de lazer e refeições de alta qualidade.
      </Paragraph>
      <Paragraph>
        <strong>Terceira Classe:</strong> Proporcionava acomodações básicas, mas confortáveis, com uma experiência de viagem segura e digna.
      </Paragraph>
      <Paragraph>
        A venda de ingressos para o Titanic era feita através de agentes de viagens e diretamente nos portos de embarque, com uma grande demanda para as luxuosas cabines da primeira classe.
      </Paragraph>
    </Container>
  );
}

export default Sobre;
