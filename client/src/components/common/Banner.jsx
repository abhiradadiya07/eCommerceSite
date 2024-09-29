import productBg from "../../Images/table.jpg";

// eslint-disable-next-line react/prop-types
const Banner = ({ title }) => {
  return (
    <div className="relative w-full h-96">
      <img
        src={productBg}
        alt="Product-bg"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
