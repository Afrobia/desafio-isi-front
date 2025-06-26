import React, { useState, useEffect } from 'react';
import ProductRow from './ProductRow';

function ProductList() {
  const [minPrice, setMinPrice] = useState('0,00');
  const [maxPrice, setMaxPrice] = useState('999,99');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]); // Estado para armazenar os produtos da API
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado para erros

  // useEffect para buscar os produtos da API quando o componente for montado
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); 
        const response = await fetch('http://localhost:3010/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setProducts(data.products);
      } catch (err) {
        setError(err); 
        console.error("Erro ao buscar produtos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilter = () => {

    console.log('Filtrar por:', { minPrice, maxPrice, searchTerm });

   
    const filtered = products.filter(product => {
      const price = parseFloat(product.price);
      const min = parseFloat(minPrice.replace(',', '.'));
      const max = parseFloat(maxPrice.replace(',', '.'));
      const nameMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const descriptionMatch = product.description.toLowerCase().includes(searchTerm.toLowerCase());

      return (
        price >= min &&
        price <= max &&
        (nameMatch || descriptionMatch)
      );
    });
    setProducts(filtered); 
  };



  if (loading) {
    return (
      <div className="product-list-container">
        <h2 className="text-gray-700">Carregando produtos...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-container">
        <h2 className="text-red-600">Erro ao carregar produtos: {error.message}</h2>
        <p className="text-gray-500">Tente novamente mais tarde.</p>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Produtos</h2>
        <button className="create-product-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Criar Produto
        </button>
      </div>

      <div className="filter-section">
        <label className="text-gray-700 text-sm">Preço mínimo</label>
        <input
          type="text"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="R$ 0,00"
          className="border border-gray-300 rounded-md p-2 outline-none"
        />
        <label className="text-gray-700 text-sm">Preço máximo</label>
        <input
          type="text"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="R$ 999,99"
          className="border border-gray-300 rounded-md p-2 outline-none"
        />
        <button className="filter-button" onClick={handleFilter}>
          Filtrar
        </button>

        <div className="search-input-wrapper flex-grow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar produto..."
            className="border border-gray-300 rounded-md p-2 flex-grow outline-none"
          />
        </div>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Estoque</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;