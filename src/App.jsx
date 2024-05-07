import React, { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setProducts(result.products);
      console.log(result.products)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Titles</h1>
      <ul>
        {products.map(product => (
          <div>
            <li key={product.id}>{product.title}</li>
            <img src={product.images[0]} alt="" />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
