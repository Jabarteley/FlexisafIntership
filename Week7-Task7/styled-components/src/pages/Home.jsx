// src/pages/Home.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default function Home() {
  return (
    <Wrapper>
      <Content>
        <h1>Welcome to StyledShop 🛒</h1>
        <p>Explore our modern products and experience styled-components in action.</p>
      </Content>
    </Wrapper>
  );
}