// import { useSelector, useDispatch } from "react-redux";
// import { addCart, delCart } from "../redux/action";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const state = useSelector((state) => state.handleCart);
//   const dispatch = useDispatch();

//   const EmptyCart = () => {
//     return (
//       <div className="container mx-auto">
//         <div className="flex justify-center items-center h-screen">
//           <div className="text-center bg-gray-100 p-8 rounded-lg">
//             <h4 className="text-2xl font-semibold mb-4">Your Cart is Empty</h4>
//             <Link to="/" className="btn btn-outline-dark text-gray-700 py-2 px-6 border border-gray-700 hover:bg-gray-700 hover:text-white transition">
//               <i className="fa fa-arrow-left"></i> Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const addItem = (product) => {
//     dispatch(addCart(product));
//   };
//   const removeItem = (product) => {
//     dispatch(delCart(product));
//   };

//   const ShowCart = () => {
//     let subtotal = 0;
//     let shipping = 30.0;
//     let totalItems = 0;
//     state.forEach((item) => {
//       subtotal += item.price * item.qty;
//       totalItems += item.qty;
//     });

//     return (
//       <section className="h-full gradient-custom py-12">
//         <div className="container mx-auto">
//           <div className="flex flex-wrap justify-center my-8">
//             {/* Cart Items */}
//             <div className="w-full md:w-2/3 px-4">
//               <div className="bg-white shadow-md rounded-lg mb-8">
//                 <div className="bg-gray-100 p-4 rounded-t-lg">
//                   <h5 className="text-lg font-semibold">Item List</h5>
//                 </div>
//                 <div className="p-6">
//                   {state.map((item) => {
//                     return (
//                       <div key={item.id} className="border-b pb-4 mb-4">
//                         <div className="flex items-center">
//                           <div className="w-1/4">
//                             <img
//                               src={item.image}
//                               alt={item.title}
//                               className="w-full rounded"
//                             />
//                           </div>
//                           <div className="w-1/2 pl-6">
//                             <p className="text-lg font-semibold">{item.title}</p>
//                           </div>
//                           <div className="w-1/4 flex flex-col items-center">
//                             <div className="flex items-center mb-4">
//                               <button
//                                 className="text-gray-700 px-3 py-2 border border-gray-300 rounded"
//                                 onClick={() => removeItem(item)}
//                               >
//                                 <i className="fas fa-minus"></i>
//                               </button>
//                               <p className="mx-4">{item.qty}</p>
//                               <button
//                                 className="text-gray-700 px-3 py-2 border border-gray-300 rounded"
//                                 onClick={() => addItem(item)}
//                               >
//                                 <i className="fas fa-plus"></i>
//                               </button>
//                             </div>
//                             <p className="text-lg">
//                               <strong>{item.qty} x ${item.price}</strong>
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//             {/* Order Summary */}
//             <div className="w-full md:w-1/3 px-4">
//               <div className="bg-white shadow-md rounded-lg mb-8">
//                 <div className="bg-gray-100 p-4 rounded-t-lg">
//                   <h5 className="text-lg font-semibold">Order Summary</h5>
//                 </div>
//                 <div className="p-6">
//                   <ul className="mb-6">
//                     <li className="flex justify-between items-center py-2">
//                       <span>Products ({totalItems})</span>
//                       <span>${Math.round(subtotal)}</span>
//                     </li>
//                     <li className="flex justify-between items-center py-2">
//                       <span>Shipping</span>
//                       <span>${shipping}</span>
//                     </li>
//                     <li className="flex justify-between items-center py-2">
//                       <span>Total Amount</span>
//                       <span className="text-xl font-bold">${Math.round(subtotal + shipping)}</span>
//                     </li>
//                   </ul>
//                   <Link
//                     to="/checkout"
//                     className="block text-center bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900 transition"
//                   >
//                     Go to Checkout
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

//   return (
//     <>
//       <div className="container mx-auto my-12">
//         <h1 className="text-center text-3xl font-semibold">Cart</h1>
//         <hr className="my-6" />
//         {state.length > 0 ? <ShowCart /> : <EmptyCart />}
//       </div>
//     </>
//   );
// };

// export default Cart;


const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart