// src/pages/Products.jsx
import { useState } from "react";
import styled from "styled-components";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled.button`
  background: ${({ active, theme }) => (active ? theme.primary : theme.cardBg)};
  color: ${({ active, theme }) => (active ? "#fff" : theme.text)};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
`;

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filtered = selectedCategory === "All" ? products : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <FilterBar>
        {categories.map((cat) => (
          <FilterButton
            key={cat}
            active={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </FilterButton>
        ))}
      </FilterBar>

      <Container>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onClick={setSelectedProduct} />
        ))}
      </Container>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}
