import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './componentes/header/header';
import Principal from './componentes/main/principal';
import Sobre from './componentes/sobre/sobre'; 
import Tickets from './componentes/tickets/tickets';
import { createGlobalStyle } from 'styled-components';
import Cadastro from './componentes/cadastro/cadastro';
import Compra from './componentes/compra/compra';
import Agradecimento from './componentes/agradecimento/agradecimento';
import Confirmacao from './componentes/confirmacao/confirmacao';
import Footer from './componentes/footer/footer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  #root {
    flex: 1;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/compra" element={<Compra />} />
          <Route path="/confirmacao" element={<Confirmacao />} />
          <Route path="/agradecimento" element={<Agradecimento/>} />
        </Routes> 
      </div>
      <Footer />
    </Router>
  );
}

export default App;
