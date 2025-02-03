import React from 'react'

type Product = {
  id: number
  title: string
  price: number
  description: string
}

const ProductsPage = async () => {
  const response = await fetch("http://localhost:3001/products")
  const products: Product[] = await response.json()
  console.log({products})
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id} className='border border-gray-300 p-4 rounded-md'>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductsPage