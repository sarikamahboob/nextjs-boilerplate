
const ProductDetails = ({params}: {params: {productId: string}}) => {
  return (
    <div>Product Details of {params.productId}</div>
  )
}

export default ProductDetails