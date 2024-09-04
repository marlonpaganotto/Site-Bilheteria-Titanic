import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #4169E1, #003366);
  color: white;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

function Footer() {
  return (
    <FooterContainer>
      <p><strong>Bilheteria Titanic</strong></p>
      <p>Email: contato@bilheteriatic.com.br</p>
      <p>Telefone: (61) 1234-5678</p>
      <p>CEP: 72000-000</p>
      <p>Localização: Brasília, DF</p>
    </FooterContainer>
  );
}

export default Footer;
