// src/components/ProductCard.jsx
import styled from "styled-components";
import { fadeIn } from "../styles/animations";
import { cardShadow } from "../styles/mixins";

const Card = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 16px;
  padding: 1.5rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  ${cardShadow};
  animation: ${fadeIn} 0.4s ease;
  transition: 0.3s;
  &:hover {
    transform: translateY(-8px);
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  margin: 10px 0;
  word-break: break-word;
  font-size: 1.1rem;
  min-height: 40px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0.5rem;
`;

export default function ProductCard({ product, onClick }) {
  return (
    <Card onClick={() => onClick(product)}>
      <Image src={product.img} alt={product.name} />
      <Name>{product.name}</Name>
      <Price>${product.price}</Price>
    </Card>
  );
}
