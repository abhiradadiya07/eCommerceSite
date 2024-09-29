
const AboutUs = () => {
  return (
    <>
      <div className="max-w-5xl bg-background text-foreground p-8 rounded-xl mx-auto my-8 py-8">
        {/* About Us Section */}
        <h1 className="text-center text-3xl font-bold">About Us</h1>
        <hr className="my-4 border-gray-300" />
        <p className="text-center text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          facere doloremque veritatis odit similique sequi. Odit amet fuga nam
          quam quasi facilis sed doloremque saepe sint perspiciatis explicabo
          totam vero quas provident ipsam, veritatis nostrum velit quos
          recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo
          earum unde eligendi autem praesentium, doloremque distinctio nesciunt
          porro tempore quis eaque labore voluptatibus ea necessitatibus
          exercitationem tempora molestias. Ad consequuntur veniam sequi ullam
          tempore vel tenetur soluta dolore sunt maxime aliquam corporis est,
          quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit
          delectus expedita a alias nam recusandae illo debitis repellat libero,
          quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam
          dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum
        </p>

        {/* Products Section */}
        <h2 className="text-center text-2xl font-semibold py-6">Our Products</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Men's Clothing */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
              <img
                className="w-full h-40 object-cover"
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Men's Clothing"
              />
              <div className="p-4">
                <h5 className="text-center text-lg font-medium">Men&apos;s Clothing</h5>
              </div>
            </div>
          </div>

          {/* Women's Clothing */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
              <img
                className="w-full h-40 object-cover"
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women's Clothing"
              />
              <div className="p-4">
                <h5 className="text-center text-lg font-medium">Women&apos;s Clothing</h5>
              </div>
            </div>
          </div>

          {/* Jewelry */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
              <img
                className="w-full h-40 object-cover"
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Jewelry"
              />
              <div className="p-4">
                <h5 className="text-center text-lg font-medium">Jewelry</h5>
              </div>
            </div>
          </div>

          {/* Electronics */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
              <img
                className="w-full h-40 object-cover"
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Electronics"
              />
              <div className="p-4">
                <h5 className="text-center text-lg font-medium">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
