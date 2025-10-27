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
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
`;

const Name = styled.h3`
  margin: 10px 0;
  word-break: break-word;
`;

const Price = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-weight: bold;
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
