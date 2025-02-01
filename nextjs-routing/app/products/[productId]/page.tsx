
export const dynamic = 'false'
import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  }
}

// type Props = Promise<{ productId: string }>

// export const generateMetadata = ({params}: Props): Metadata => {
//   return {
//     title: `Product ${params?.productId}`
//   }
// }

export const generateStaticParams = async (): Promise<{ productId: string }[]> => {
  // Replace this with your actual logic to fetch product IDs
  const productIds = ["1", "2", "3"]; // Example product IDs
  return productIds.map((id) => ({ productId: id }));
};

// asynchronous 
export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Shoe ${productId}`)
    }, 1000 )
  })
  return {
    title: `Product ${title}`
  }
}


const ProductDetails = async ({params}: {params : Props}): Promise<JSX.Element> => {
  const { productId } = await params;
  return (
    <div>Product Details of {productId}</div>
  )
}

export default ProductDetails