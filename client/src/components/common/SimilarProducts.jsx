/* eslint-disable react/prop-types */
import ProductCard from "./ProductCard";

const SimilarProducts = ({ selectedProduct }) => {

  return (
    <>
      {/* <div className="py-10 my-10"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedProduct.length > 0 && selectedProduct.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            productItem={{
              productName: item.title,
              price: item.price,
              imgUrl: item.image,
              id: item.id,
              rating: item.rating.rate
            }}
          />
        ))}
      </div>
      {/* </div> */}
    </>
  )
}

export default SimilarProducts
