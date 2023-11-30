import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 16px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: midnightblue;
  }

  .button{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
button{
  border-radius: 5px;
  border: none;
  background-color: orchid;
  color: white;
  padding: 10px 20px;}

  .icon {
    color: red; 
    margin-right: 5px;
    font-size: 25px;
  }
`;

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://northwind.vercel.app/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <ProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <h2>{product.name}</h2>
            <p>ID: {product.id}</p>
            <p>QPU: {product.quantityPerUnit}</p>
            <p>Unit Price: {product.unitPrice}</p>
            <div className='button'>
              <button>Detail</button>
              <button>Add To Cart</button>
              <FontAwesomeIcon icon={faHeart} className="icon" />
            </div>
          </ProductCard>
        ))}
      </ProductContainer>
    </div>
  );
};

export default Home;
