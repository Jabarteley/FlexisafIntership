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

const HeroSection = styled.div`
  margin-bottom: 3rem;
  padding: 2rem 1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}20, ${({ theme }) => theme.cardBg}20);
  border-radius: 16px;
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export default function Home() {
  return (
    <Wrapper>
      <HeroSection>
        <h1>Welcome to StyledShop 🛒</h1>
        <p>Explore our modern products and experience styled-components in action.</p>
      </HeroSection>
      
      <Content>
        <Features>
          <FeatureCard>
            <FeatureIcon>🚚</FeatureIcon>
            <h3>Free Shipping</h3>
            <p>Free worldwide shipping on all orders over $50</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🔒</FeatureIcon>
            <h3>Secure Payment</h3>
            <p>100% secure payment processing with industry standard encryption</p>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>↩️</FeatureIcon>
            <h3>Easy Returns</h3>
            <p>30-day return policy for all products with no questions asked</p>
          </FeatureCard>
        </Features>
        
        <h2>Why Choose StyledShop?</h2>
        <p>
          At StyledShop, we offer high-quality products with cutting-edge technology 
          and contemporary design. Our mission is to provide an exceptional shopping 
          experience with top-notch customer service and fast delivery.
        </p>
      </Content>
    </Wrapper>
  );
}