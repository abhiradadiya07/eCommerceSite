/* eslint-disable react/prop-types */
const SlideCard = ({ title, desc }) => {
  return (
    <div className="box p-6 bg-white bg-opacity-80 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-4 text-white">{title}</h1>
          <p className="text-xl text-gray-200 mb-6">{desc}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Visit Collections
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideCard;
