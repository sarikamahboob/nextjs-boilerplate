import React from 'react'

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const productResponse = await fetch('https://fakestoreapi.com/products')
  const products = await productResponse.json()
  console.log({ products })
  return (
    <div>{children}</div>
  )
}

export default Layout