import React, { useState, useEffect } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const result = await response.json();
      setProducts(result.products);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Set loading to false if there's an error
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Product Titles</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {products.map(product => (
            <div key={product.id} >
              <li key={product.id}>{product.title}</li>
              <img src={product.images[0]} alt="" />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;