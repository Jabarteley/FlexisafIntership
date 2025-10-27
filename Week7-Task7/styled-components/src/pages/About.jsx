// src/pages/About.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Content = styled.div`
  margin: 0 auto;
`;

const Section = styled.section`
  margin: 2rem 0;
  padding: 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const TeamMember = styled.div`
  text-align: center;
  background: ${({ theme }) => theme.cardBg};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const MissionStatement = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.primary}20, ${({ theme }) => theme.cardBg}20);
  padding: 2rem;
  border-radius: 16px;
  margin: 2rem 0;
  text-align: center;
`;

export default function About() {
  return (
    <Wrapper>
      <Content>
        <Section>
          <h1>About StyledShop</h1>
          <p>
            StyledShop is a modern e-commerce platform built with React and styled-components.
            We specialize in offering technology products with a focus on design, quality, and user experience.
          </p>
        </Section>
        
        <MissionStatement>
          <h2>Our Mission</h2>
          <p>
            To provide customers with the latest technology products at competitive prices,
            while ensuring a seamless shopping experience through innovative design and 
            cutting-edge frontend technologies.
          </p>
        </MissionStatement>
        
        <Section>
          <h2>Our Story</h2>
          <p>
            Founded in 2023, StyledShop began as a small project to demonstrate the power 
            of styled-components in React applications. Today, we've grown into a comprehensive 
            e-commerce platform featuring hundreds of products across multiple categories.
          </p>
          
          <p>
            Our journey is built on the foundation of modern web development practices, 
            with a focus on responsive design, accessibility, and performance.
          </p>
        </Section>
        
        <Section>
          <h2>Meet Our Team</h2>
          <TeamGrid>
            <TeamMember>
              <h3>John Smith</h3>
              <p>Founder & CEO</p>
              <p>10+ years experience in e-commerce</p>
            </TeamMember>
            <TeamMember>
              <h3>Sarah Johnson</h3>
              <p>Lead Designer</p>
              <p>Specialist in user experience design</p>
            </TeamMember>
            <TeamMember>
              <h3>Michael Chen</h3>
              <p>Head of Development</p>
              <p>React and Node.js expert</p>
            </TeamMember>
          </TeamGrid>
        </Section>
        
        <Section>
          <h2>Our Technology</h2>
          <p>
            StyledShop is built using modern web technologies including React, 
            styled-components for dynamic styling, React Router for navigation, 
            and various other libraries to ensure a robust and performant 
            application.
          </p>
          <p>
            The project demonstrates advanced usage of styled-components including 
            theming, animations, and responsive design patterns.
          </p>
        </Section>
      </Content>
    </Wrapper>
  );
}