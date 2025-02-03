// export const fetchCatch = "default-catch"

import {cookies} from "next/headers"

import React from 'react'

type Product = {
  id: number
  title: string
  price: number
  description: string
}

const ProductsPage = async () => {
  // const response = await fetch("http://localhost:3001/products", {
  //   cache: "no-store",
  // })
  const response = await fetch("http://localhost:3001/products")
  const products: Product[] = await response.json()
  const cookiesStore = cookies()
  const theme = cookiesStore.get("theme")
  console.log({cookiesStore})
  const detailsResponse = await fetch("http://localhost:3001/products/1")
  const details = await detailsResponse.json()
  console.log({details})
 
  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id} className='border border-gray-300 p-4 rounded-md'>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>details: {details.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductsPage