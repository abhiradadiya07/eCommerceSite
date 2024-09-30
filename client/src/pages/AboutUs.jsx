import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="p-8 mx-auto bg-background text-foreground w-full">
        {/* About Us Section */}
        <h1 className="text-center text-5xl font-bold">About Us</h1>
        <hr className="my-4 border-gray-300 max-w-5xl mx-auto" />
        <div className="max-w-5xl mx-auto">
        <p className="text-center text-xl leading-relaxed">
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

        <h2 className="text-center text-2xl  font-semibold py-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center text-black gap-6">
          {[
            { src: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Men's Clothing", title: "Men's Clothing" },
            { src: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Women's Clothing", title: "Women's Clothing" },
            { src: "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Jewellery", title: "Jewellery" },
            { src: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Electronics", title: "Electronics" }
          ].map((product, index) => (
            <Link to={'/products'} key={index} className="w-3/4 px-3 mx-auto   mb-6 cursor-pointer">
              <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
                <img
                  className="w-full h-40 object-cover"
                  src={product.src}
                  alt={product.alt}
                />
                <div className="p-4">
                  <h5 className="text-center text-lg font-medium">{product.title}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
