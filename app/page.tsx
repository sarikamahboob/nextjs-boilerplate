import Link from "next/link"

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <div className="flex gap-2">
        <Link href="/blog">
          Blog
        </Link>
        <Link href="/products">
          Products
        </Link> 
        <Link href="/order-product">
          Order-Product
        </Link>
      </div>
    </div>
  )
}

export default Home