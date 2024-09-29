/* eslint-disable react/prop-types */

import ProductCard from "./ProductCard";

const Section = ({ title, bgColor, productItems }) => {
  return (
    <section className={`py-8`} style={{ background: bgColor }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {productItems.map((productItem) => (
            <ProductCard
              key={productItem.id}
              title={title}
              productItem={productItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
