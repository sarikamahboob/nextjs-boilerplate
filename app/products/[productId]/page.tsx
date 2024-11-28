import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  }
}

// export const generateMetadata = ({params}: Props): Metadata => {
//   return {
//     title: `Product ${params?.productId}`
//   }
// }

// asynchronous 
export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Shoe ${params?.productId}`)
    }, 1000 )
  })
  return {
    title: `Product ${title}`
  }
}


const ProductDetails = ({params}: Props) => {
  return (
    <div>Product Details of {params.productId}</div>
  )
}

export default ProductDetails