import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
    background: linear-gradient(to right, #4169E1, #003366); 
    padding: 10px 0;
    text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row; 
  justify-content: center; 
  align-items: center; 
  padding-left: 5px; /* Correção do erro de digitação */
`;

const List = styled.ul`
  list-style: none; 
  padding: 5px;
  margin: 5px;
  display: flex; 
`;

const ListItem = styled.li`
  margin: 10px; 
`;

const StyledLink = styled(RouterLink)` /* Renomeado para evitar conflito */
  color: white; 
  text-transform: uppercase; 
  text-decoration: none; 
  font-size: 26px; 
  text-shadow: 
    1px 1px 0 white,
    -1px -1px 0 white,
    1px -1px 0 white,
    -1px 1px 0 white;
  &:hover {
    color: #FFD700;
  }
`;

function Header() {
    return (
        <HeaderContainer>
            <Nav>
                <List>
                    <ListItem><StyledLink to="/">Início</StyledLink></ListItem>
                    <ListItem><StyledLink to="/sobre">Sobre</StyledLink></ListItem>
                    <ListItem><StyledLink to="/tickets">Tickets</StyledLink></ListItem>
                    <ListItem><StyledLink to="/cadastro">Cadastro</StyledLink></ListItem>
                </List>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;
