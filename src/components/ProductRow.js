import React from 'react';

function ProductRow({ product }) {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.category}</td>
      <td className="product-price-cell">
        {product.oldPrice && (
          <span className="old-price">{formatCurrency(product.oldPrice)}</span>
        )}
        <span className="new-price">
          {formatCurrency(product.currentPrice)}
        </span>
        {product.discount && (
          <span className="discount-tag">{product.discount}%</span>
        )}
      </td>
      <td>{product.stock}</td>
      <td className="action-buttons">
        <button title="Detalhes">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.104c.75.184 1.406.455 2.035.77A4.5 4.5 0 0 0 22.5 18.75V12a2.25 2.25 0 0 0-2.25-2.25H15M12 18.75v-7.5m-6 7.5V6" />
          </svg>
        </button>
        <button title="Editar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </button>
        <button title="Deletar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.927a2.25 2.25 0 0 1-2.244-2.077L4.747 5.94a.97.97 0 0 1 .347-.037m5.947-.577 4.5 0m-4.5 0c-.171 0-.342.02-.514.053M12 4.5v.75m6 2.25H6" />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;