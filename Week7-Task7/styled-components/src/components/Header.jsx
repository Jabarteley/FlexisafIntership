// src/components/Header.jsx
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Nav = styled.nav`
  background: ${({ theme }) => theme.cardBg};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.cardShadow};
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const Logo = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.cardBg};
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.text};
  font-weight: 500;
  &.active {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    width: 100%;
    text-align: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.text};
  margin: 3px 0;
  transition: 0.3s;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Header({ toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav>
      <Logo>🛍️ StyledShop</Logo>
      <Links $isOpen={isOpen}>
        <StyledLink to="/" onClick={() => window.innerWidth <= 768 && setIsOpen(false)}>Home</StyledLink>
        <StyledLink to="/products" onClick={() => window.innerWidth <= 768 && setIsOpen(false)}>Products</StyledLink>
        <StyledLink to="/about" onClick={() => window.innerWidth <= 768 && setIsOpen(false)}>About</StyledLink>
      </Links>
      <Controls>
        <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
        <MenuButton onClick={toggleMenu}>
          <Bar />
          <Bar />
          <Bar />
        </MenuButton>
      </Controls>
    </Nav>
  );
}
