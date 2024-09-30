/* eslint-disable react/prop-types */
import { addToCart } from "@/app/features/cart/cartSlice";
import { toast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import Banner from "./Banner";


const ProductDetails = ({ selectedProduct }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const addProduct = (product, quantity) => {
    dispatch(addToCart({ product: product, num: quantity }));
    toast({
      title: "Added to Cart",
      description: `${product.title} has been added to your cart.`,
      variant: "success",
    });
  };

  const handleClick = () => {
    navigate("/cart")
  }
  return (
    <>
      <Banner title={selectedProduct.title} />
      <div className="md:mx-auto m-4 my-10 py-5 max-w-6xl text-foreground">
        <div className="md:grid md:grid-cols-2 border-4 w-full md:m-3 items-center">
          <div className="p-3 bg-white">
            <img
              className="object-contain p-4 mx-auto"
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
          </div>
          <div className="sm:p-6 p-4">
            <h4 className="text-gray-500 uppercase text-xl sm:text-4xl">{selectedProduct.category}</h4>
            <h1 className="md:text-4xl sm:text-2xl text-xl  my-3">{selectedProduct.title}</h1>
            <div className="text-3xl flex items-center gap-[0.5]">
              <div>
                {selectedProduct?.rating?.rate}
              </div>
              <Star strokeWidth={0} fill="orange" size={35} />
            </div>
            <h3 className="text-xl sm:text-3xl  my-4">${selectedProduct.price}</h3>
            <p className="text-sm sm:text-lg ">{selectedProduct.description}</p>
            <Input
              className="w-1/2 my-4"
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <div className="mt-6">
              <Button
                className="border bg-gray-700 border-gray-700 px-6 py-2 rounded hover:bg-gray-800 text-white transition"
                onClick={() => addProduct(selectedProduct, quantity)}
              >
                Add to Cart
              </Button>
              <Button
                onClick={handleClick}
                className="border bg-gray-700 border-gray-700 px-6 py-2 rounded hover:bg-gray-800 text-white transition ml-4"
              >
                Go to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails
