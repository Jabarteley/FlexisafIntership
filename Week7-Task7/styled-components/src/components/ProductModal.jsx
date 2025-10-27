// src/components/ProductModal.jsx
import styled from "styled-components";
import { fadeIn } from "../styles/animations";
import { flexCenter } from "../styles/mixins";

const Overlay = styled.div`
  ${flexCenter};
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.6);
  animation: ${fadeIn} 0.3s ease;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: ${({ theme }) => theme.cardBg};
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  text-align: center;
  max-height: 90vh;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

export default function ProductModal({ product, onClose }) {
  if (!product) return null;
  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ProductImage src={product.img} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalBox>
    </Overlay>
  );
}
