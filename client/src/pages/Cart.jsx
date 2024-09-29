import { addToCart, decreaseQty, deleteProduct, clearCart } from "@/app/features/cart/cartSlice";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="text-center bg-gray-100 p-8 rounded-lg">
          <h4 className="text-2xl font-semibold mb-4 text-black">Your Cart is Empty</h4>
          <Link to="/products" className="text-gray-700 flex gap-1 py-2 px-6 border border-gray-700 hover:bg-gray-700 hover:text-white transition rounded-lg">
            <ShoppingBag /><span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addItem = (item) => {
    dispatch(addToCart({ product: item, num: 1 }));
  };
  const decreaseItem = (product) => {
    dispatch(decreaseQty(product));
  };
  const removeItem = (product) => {
    dispatch(deleteProduct(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    console.log(cartList);
    cartList.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <section className="h-full py-4 bg-background w-full">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col md:flex-row justify-center my-8">
            {/* Order Summary - Now first in mobile view */}
            <div className="w-full md:w-1/3 md:order-2 mb-8 md:mb-0 text-black">
              <div className="bg-white shadow-md rounded-lg mb-8">
                <div className="bg-gray-100 p-4 rounded-t-lg">
                  <h5 className="text-lg font-semibold">Order Summary</h5>
                </div>
                <div className="p-6">
                  <ul className="mb-6">
                    <li className="flex justify-between items-center py-2">
                      <span>Products ({totalItems})</span>
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span>Shipping</span>
                      <span>${shipping}</span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span>Total Amount</span>
                      <span className="text-xl font-bold">${Math.round(subtotal + shipping)}</span>
                    </li>
                  </ul>
                  <Link
                    to="/checkout"
                    className="block text-center bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900 transition mb-4"
                  >
                    Go to Checkout
                  </Link>
                  <button
                    onClick={handleClearCart}
                    className="block w-full text-center bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition"
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>
            {/* Cart Items */}
            <div className="w-full md:w-2/3 md:order-1 md:pr-4">
              <div className="bg-white shadow-md rounded-lg">
                <div className="bg-gray-100 p-4 rounded-t-lg">
                  <h5 className="text-lg font-semibold dark:text-background">Item List</h5>
                </div>
                <div className="p-6">
                  {cartList.map((item) => {
                    return (
                      <div key={item.id} className="border-b pb-4 mb-4 relative text-black">
                        <button
                          onClick={() => removeItem(item)}
                          className="absolute top-0 right-0 text-gray-500 hover:text-red-500"
                        >
                          <X size={20} />
                        </button>
                        <div className="flex flex-col sm:flex-row items-center">
                          <div className="w-full sm:w-1/4 mb-4 sm:mb-0 cursor-pointer"
                            onClick={() => navigate(`/product/${item.id}`)}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full rounded min-h-48 object-contain"
                            />
                          </div>
                          <div className="w-full sm:w-1/2 sm:pl-6 mb-4 sm:mb-0 cursor-pointer"
                            onClick={() => navigate(`/product/${item.id}`)}>
                            <p className="text-lg font-semibold">{item.title}</p>
                          </div>
                          <div className="w-full sm:w-1/4 flex flex-col items-center">
                            <div className="flex items-center mb-4">
                              <Button className="" onClick={() => decreaseItem(item)}><Minus /></Button>
                              <p className="mx-4">{item.qty}</p>
                              <Button onClick={() => addItem(item)}><Plus /></Button>
                            </div>
                            <p className="text-lg">
                              <strong>{item.qty} x ${item.price}</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="mx-auto w-full bg-background text-foreground">
      <h1 className="text-center text-5xl font-bold mt-8 max-w-5xl mx-auto">Cart</h1>
      <hr className="my-4 max-w-5xl mx-auto" />
      {cartList.length > 0 ? <ShowCart /> : <EmptyCart />}
    </div>
  );
};

export default Cart;