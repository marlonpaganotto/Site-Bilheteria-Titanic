
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  padding: 20px;
  background-color: #f4f4f4;
`;

const Form = styled.form`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: white;
  background-color: #003366;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #4169E1;
  }
`;

const CheckboxContainer = styled.div`
  margin-top: 15px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 1.1rem;
`;

function Confirmacao() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleFinalizeClick = () => {
    setShowConfirmation(true);
  };

  const handleCheckboxChange = () => {
    setTermsAccepted(!termsAccepted);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (termsAccepted) {
      // Redireciona para a página de agradecimento
      window.location.href = '/agradecimento';
    } else {
      alert('Você deve aceitar os termos e condições para finalizar a compra.');
    }
  };

  return (
    <Container>
      {!showConfirmation ? (
        <Button onClick={handleFinalizeClick}>Finalizar Compra</Button>
      ) : (
        <Form onSubmit={handleSubmit}>
          <h1>Confirmar Compra</h1>
          <CheckboxContainer>
            <Checkbox 
              type="checkbox" 
              checked={termsAccepted} 
              onChange={handleCheckboxChange} 
            />
            <Label>Aceito os termos e condições</Label>
          </CheckboxContainer>
          <Button type="submit">Confirmar Pagamento</Button>
        </Form>
      )}
    </Container>
  );
}

export default Confirmacao;
