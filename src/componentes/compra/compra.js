import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
`;

const FormWrapper = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #4169E1;
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #4169E1;
  }
`;

const Button = styled(Link)` 
  padding: 10px;
  font-size: 18px;
  color: white;
  background-color: #003366;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  display: block; /* Faz o Link ocupar a largura total do contêiner pai */
  margin: 0 auto; /* Centraliza o Link */
  width: fit-content; /* Ajusta a largura do Link ao conteúdo */
  &:hover {
    background-color: #4169E1;
  }
`;

function Compra() {
  const [formData, setFormData] = useState({
    produto: '',
    quantidade: 1,
    pagamento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Compra de Ticket</Title>
        <Form onSubmit={handleSubmit}>
          <Select
            name="produto"
            value={formData.produto}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o ticket</option>
            <option value="primeira-classe">Primeira Classe - R$5000</option>
            <option value="segunda-classe">Segunda Classe - R$4000</option>
            <option value="terceira-classe">Terceira Classe - R$3500</option>
          </Select>
          <Input
            type="number"
            name="quantidade"
            placeholder="Quantidade"
            value={formData.quantidade}
            onChange={handleChange}
            min="1"
            required
          />
          <Select
            name="pagamento"
            value={formData.pagamento}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o meio de pagamento</option>
            <option value="cartao-credito">Cartão de Crédito</option>
            <option value="boleto">Boleto</option>
            <option value="pix">PIX</option>
          </Select>
          <Button to = "/confirmacao">Finalizar Compra</Button>
        </Form>
      </FormWrapper>
    </Container>
  );
}

export default Compra;
