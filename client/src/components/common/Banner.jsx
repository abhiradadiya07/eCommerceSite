
// eslint-disable-next-line react/prop-types
const Banner = ({ title }) => {
  return (
    <div className="w-full h-52 bg-gray-300 flex flex-col text-center items-center justify-center">
      <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">{title}</h2>
    </div>
  );
};

export default Banner;
