"use client"

import { useRouter } from "next/navigation"

const OrderProduct = () => {
  const router = useRouter()
  const handleClick = () => {
    // router.push("/")
    // router.replace("/")
    router.back()
    // router.forward();
  }
  return (
    <div>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="bg-slate-700 p-2 mb-2"
      >
        Place Order
      </button>
    </div>
  )
}

export default OrderProduct