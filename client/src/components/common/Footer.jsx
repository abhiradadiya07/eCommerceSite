const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <ion-icon name="bag" className="text-4xl text-white"></ion-icon>
              <h1 className="text-2xl font-bold ml-2">Multimart</h1>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
          </div>

          {/* About Us */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Customer Care</h2>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate & Bulk Purchasing</li>
              <li>Returns & Refunds</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-gray-400">
              <li>70 Washington Square South, New York, NY 10012, United States</li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        Made By Abhishek Radadiya
      </div>
    </footer>
  );
};

export default Footer;
