import { notFound } from "next/navigation"

const ReviewDetails = ({params}: {params: {
  productId: string,
  reviewId: string
}}) => {
  if(parseInt(params?.reviewId, 10) > 1000) {
    notFound()
  }
  return (
    <div>Review {params?.reviewId} for product {params?.productId}</div>
  )
}

export default ReviewDetails