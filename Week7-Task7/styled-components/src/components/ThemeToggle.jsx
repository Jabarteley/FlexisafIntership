// src/components/ThemeToggle.jsx
import styled from "styled-components";

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 0.9rem;
  }
`;

export default function ThemeToggle({ toggleTheme, isDark }) {
  return (
    <ToggleButton onClick={toggleTheme}>
      {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </ToggleButton>
  );
}
