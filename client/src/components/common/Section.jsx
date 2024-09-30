/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loading from "./Loading";

const Section = ({ title, bgColor}) => {

  const [productItems, setProductItems] = useState([])
  const [loading, setLoading] = useState(false);
  const getProductByCategory = async () => {
    setLoading(true);
    const response = await axios.get(`https://fakestoreapi.com/products/category/${title}?limit=6`);
    const data = response.data;
    setProductItems(data);
    setLoading(false)
  }

  useEffect(() => {
    getProductByCategory()
  }, [title])
  return (
    <section className={`${bgColor} w-full mt-10 p-4 pt-16`} >
      <div className="text-center mb-8">
        <h1 className="text-3xl text-foreground ">{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h1>
      </div>
      {/* <div className="flex flex-wrap justify-center"> */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? <Loading /> :
            productItems.length > 0 &&
            productItems.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                productItem={item}
              />
            ))
          }

        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Section;
