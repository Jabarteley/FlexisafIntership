// src/pages/About.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export default function About() {
  return (
    <Wrapper>
      <Content>
        <h1>About StyledShop</h1>
        <p>This project demonstrates advanced usage of styled-components in React.</p>
      </Content>
    </Wrapper>
  );
}