/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */

import { addToCart } from "@/app/features/cart/cartSlice";
import { toast } from "@/hooks/use-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Star } from "lucide-react";

const ProductCard = ({ productItem }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/product/${productItem.id}`);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast({
      title: "Added to Cart",
      description: `${productItem.title} has been added to your cart.`,
      variant: "success",
    });
  };

  return (
    <div className="shadow-xl rounded-lg overflow-hidden hover:shadow-2xl dark:text-background mt-4 dark:bg-foreground dark:border-primary m-4 border-2 border-primary" >
      <div className="relative bg-white cursor-pointer border-b-2 border-primary" onClick={handleClick}>
        <img
          src={productItem.image}
          alt={productItem.title}
          className="w-full h-56 object-contain p-4"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">
          {productItem.title}
        </h3>
        <div className="text-xl font-bold mt-4 flex gap-1 items-center">{productItem.rating?.rate}<Star size={20} fill="orange" strokeWidth={0} /></div>
        <div className="flex items-center mt-2 justify-between">
          <div className="text-xl font-bold ">${productItem.price}</div>
          <Button onClick={handleAddToCart} className="text-sm cursor-pointer bg-primary font-bold border-2 border-primary hover:bg-white">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
