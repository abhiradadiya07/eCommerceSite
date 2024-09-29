import Loading from "@/components/common/Loading";
import ProductDetails from "@/components/common/ProductDetails";
import SimilarProducts from "@/components/common/SimilarProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const getProduct = async () => {
    setLoading(true);
    setLoading2(true);
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    setLoading(false);
    const response2 = await fetch(
      `https://fakestoreapi.com/products/category/${data.category}`
    )
    const data2 = await response2.json();
    setSimilarProducts(data2);
    setLoading2(false);
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  return (

    <div className="mx-auto bg-background w-full">
      <div >{loading ? <Loading /> : <ProductDetails selectedProduct={product} />}</div>
      <div className="my-16 py-10">
        <h2 className="sm:text-6xl text-foreground text-4xl font-bold text-center">You may also like</h2>
        <div className="mx-auto max-w-5xl mt-14">
          {loading2 ? <Loading /> : <SimilarProducts selectedProduct={similarProducts} />}
        </div>
      </div>
    </div>
  )
}

export default Product


