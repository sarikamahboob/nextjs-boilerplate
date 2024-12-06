"use client"
// import { notFound } from "next/navigation";

// type Params = Promise<{ productId: string; reviewId: string }>;

// function getRandomInt(count:number) {
//   return Math.floor(Math.random() * count)
// }

// const ReviewDetails = async ({params}: { params: Params }): Promise<JSX.Element> => {
//   const { productId, reviewId } = await params;
//   const random = getRandomInt(2)
//   if(random === 1) {
//     throw new Error("Error Loading Review")
//   }
//   if(parseInt(reviewId, 10) > 1000) {
//     notFound()
//   }
//   return (
//     <div>Review {reviewId} for product {productId}</div>
//   )
// }

// export default ReviewDetails

import { notFound } from "next/navigation";
import { useEffect } from "react";

type Params = {
  productId: string;
  reviewId: string;
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const ReviewDetails = ({ params }: { params: Params }): JSX.Element => {
  const { productId, reviewId } = params;

  useEffect(() => {
    const random = getRandomInt(2);
    if (random === 1) {
      throw new Error("Error Loading Review")
    } else if (parseInt(reviewId, 10) > 1000) {
      notFound()
    }
  }, [reviewId]);

  return <div>Review {reviewId} for product {productId}</div>;
};

export default ReviewDetails;