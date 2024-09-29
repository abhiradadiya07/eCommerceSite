import Loading from "@/components/common/Loading";
import ProductCard from "@/components/common/ProductCard"
import axios from "axios";
import { useCallback } from "react";
import { useEffect, useState } from "react";


const Products = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products", error);
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products[0]);
  return (
    <div className="bg-background">
      <div className="max-w-5xl mx-auto">
        {loading ? (
          <div><Loading /></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.length > 0 &&
              products.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  productItem={{
                    productName: item.title,
                    price: item.price,
                    imgUrl: item.image,
                    id: item.id,
                    rating : item.rating.rate
                  }}
                />
              ))}
          </div>
        )}
      </div>
    </div>

  )
}

export default Products