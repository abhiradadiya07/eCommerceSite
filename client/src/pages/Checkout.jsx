import { clearCart } from '@/app/features/cart/cartSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cartList } = useSelector((state) => state.cart)
  const cartItems = cartList;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    address2: '',
    country: '',
    state: '',
    zip: '',
    ccName: '',
    ccNumber: '',
    ccExpiration: '',
    ccCvv: '',
  });
  const [errors, setErrors] = useState({});
  // const [test, setTest] = useState('');
  // console.log("test :", test);
  const calculateTotals = () => {
    let subtotal = 0;
    let totalItems = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });
    return { subtotal, totalItems };
  };

  const { subtotal, totalItems } = calculateTotals();
  const shipping = 30.0;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleInputChange = useCallback((e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // }, []);
  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'Zip code is required';
    if (!formData.ccName) newErrors.ccName = 'Name on card is required';
    if (!formData.ccNumber) newErrors.ccNumber = 'Credit card number is required';
    if (!formData.ccExpiration) newErrors.ccExpiration = 'Expiration date is required';
    if (!formData.ccCvv) newErrors.ccCvv = 'CVV is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the checkout
      dispatch(clearCart());
      toast({
        title: "Order Confirmed.",
        description: `Order will be delivered soon.`,
        variant: "success",
      });
      console.log('Form submitted:', formData);
    }
  };

  const EmptyCart = () => {
    return (
      <div className="mx-auto">
        <div className="flex justify-center items-center h-screen">
          <div className="text-center bg-gray-100 p-8 rounded-lg">
            <h4 className="text-2xl  mb-4 text-black">Your Cart is Empty</h4>
            <Link to="/products" className="text-gray-700 flex gap-1 py-2 px-6 border border-gray-700 hover:bg-gray-700 hover:text-white transition rounded-lg">
              <ShoppingBag /><span>Continue Shopping</span>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => (
    <div className="mx-auto p-4 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-center my-8 gap-4">
        <div className="w-full md:w-1/3 md:order-2 mb-8 md:mb-0 text-black">
          {/* Order Summary Box */}
          <div className="bg-background text-foreground shadow-xl border-2 border-primary rounded-lg">
            <div className="p-4 rounded-t-lg border-b-2 border-primary">
              <h5 className="text-2xl">Order Summary</h5>
            </div>
            <div className="p-4">
              <ul>
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
                  <span className="text-xl ">${Math.round(subtotal + shipping)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-background text-foreground w-full lg:w-2/3 md:order-1">
          <div className="rounded-lg border-2 border-primary">
            <div className="p-4 rounded-t-lg border-primary border-b-2">
              <h5 className="text-2xl">Billing Details</h5>
            </div>
            <div className='p-4 rounded-b-lg shadow-xl'>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First name</Label>
                    {/* <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="FirstName"
                      onChange={(e) => setTest(e.target.value)}
                      value={test}
                      className={`mt-1 ${errors?.firstName ? 'border-red-500' : ''}`}
                    /> */}
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="FirstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`mt-1 ${errors?.firstName ? 'border-red-500' : ''}`}
                    />
                    {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="LastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange(e)}
                      className={`mt-1 ${errors.lastName ? 'border-red-500' : ''}`}
                    />
                    {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                  </div>
                </div>
                <div className='mt-2'>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange(e)}
                    className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div className='mt-2'>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    placeholder="23, Apartment Name"
                    onChange={(e) => handleInputChange(e)}
                    className={`mt-1 ${errors.address ? 'border-red-500' : ''}`}
                  />
                  {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                </div>
                <div className='mt-2'>
                  <Label htmlFor="address2">Address 2 (Optional)</Label>
                  <Input
                    type="text"
                    id="address2"
                    value={formData.address2}
                    name="address2"
                    placeholder="Area"
                    onChange={(e) => handleInputChange(e)}
                    className={`mt-1 ${errors.address2 ? 'border-red-500' : ''}`}
                  />
                  {errors.address2 && <p className="mt-1 text-sm text-red-500">{errors.address2}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      placeholder="E.g.: India"
                      onChange={(e) => handleInputChange(e)}
                      className={`mt-1 ${errors.country ? 'border-red-500' : ''}`}
                    />
                    {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      placeholder="Maharashtra"
                      onChange={(e) => handleInputChange(e)}
                      className={`mt-1 ${errors.state ? 'border-red-500' : ''}`}
                    />
                    {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
                  </div>
                  <div>
                    <Label htmlFor="zip">Zip</Label>
                    <Input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      placeholder="395001"
                      onChange={(e) => handleInputChange(e)}
                      className={`mt-1 ${errors.zip ? 'border-red-500' : ''}`}
                    />
                    {errors.zip && <p className="mt-1 text-sm text-red-500">{errors.zip}</p>}
                  </div>
                </div>

                <hr className='my-8 border-52 border-primary' />

                <div className='text-2xl pb-4'>
                  Payment
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="ccName">Name on card</Label>
                    <Input
                      type="text"
                      id="ccName"
                      name="ccName"
                      placeholder="Sarthak Patel"
                      value={formData.ccName}
                      onChange={(e) => handleInputChange(e)}
                      className={`mt-1 ${errors.ccName ? 'border-red-500' : ''}`}
                    />
                    {errors.ccName && <p className="mt-1 text-sm text-red-500">{errors.ccName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="ccNumber">Credit card number</Label>
                    <Input
                      type="text"
                      id="ccNumber"
                      name="ccNumber"
                      placeholder="1234 5678 8956"
                      value={formData.ccNumber}
                      onChange={(e) => handleInputChange(e)}
                      className={`mt-1 ${errors.ccNumber ? 'border-red-500' : ''}`}
                    />
                    {errors.ccNumber && <p className="mt-1 text-sm text-red-500">{errors.ccNumber}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div>
                    <Label htmlFor="ccExpiration">Expiration</Label>
                    <Input
                      type="text"
                      id="ccExpiration"
                      name="ccExpiration"
                      placeholder="06/25"
                      value={formData.ccExpiration}
                      onChange={(e) => handleInputChange(e)}
                      className={`mt-1 ${errors.ccExpiration ? 'border-red-500' : ''}`}
                    />
                    {errors.ccExpiration && <p className="mt-1 text-sm text-red-500">{errors.ccExpiration}</p>}
                  </div>
                  <div>
                    <Label htmlFor="ccCvv">CVV</Label>
                    <Input
                      type="text"
                      id="ccCvv"
                      name="ccCvv"
                      placeholder="123"
                      value={formData.ccCvv}
                      onChange={(e) => handleInputChange(e)}
                      className={`mt-1 ${errors.ccCvv ? 'border-red-500' : ''}`}
                    />
                    {errors.ccCvv && <p className="mt-1 text-sm text-red-500">{errors.ccCvv}</p>}
                  </div>
                </div>
                <hr className='mt-8 border-10 border-primary' />
                <Button onClick={(e) => handleSubmit(e)} className="mt-6 w-full">
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto w-full bg-background text-foreground min-h-screen">
      <h1 className="text-5xl text-center mt-8 max-w-5xl mx-auto">Checkout</h1>
      <hr className="my-4 max-w-5xl mx-auto" />
      {cartItems.length ? <ShowCheckout /> : <EmptyCart />}
    </div>
  );
};

export default Checkout;