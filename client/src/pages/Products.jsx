import Filter from "@/components/common/Filter";
import Loading from "@/components/common/Loading";
import ProductCard from "@/components/common/ProductCard"
import SearchBar from "@/components/common/SearchBar";
import SortByPrice from "@/components/common/SortByPrice";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState("All");

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
      setFilteredProducts(response.data);  // Initially set to all products
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Filter products by category, search query and sort by price
  useEffect(() => {
    let updatedProducts = [...products];

    // If category is not "All", filter by the selected category
    if (selectedCategory !== "All") {
      updatedProducts = updatedProducts.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      updatedProducts = updatedProducts.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort by price if an order is selected
    if (selectedOrder !== "All") {
      updatedProducts = selectedOrder === "Ascending"
        ? updatedProducts.sort((a, b) => Number(a.price) - Number(b.price))
        : updatedProducts.sort((a, b) => Number(b.price) - Number(a.price));
    }


    setFilteredProducts(updatedProducts);
  }, [selectedCategory, searchQuery, products, selectedOrder]);

  const handleFilterSelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handlePrice = (order) => {
    setSelectedOrder(order); // Set the selected order and trigger sorting
  };

  // Extract unique categories from the products
  const categories = [...new Set(products.map((product) => product.category))];
  const orderBy = ["Ascending", "Descending"];
  return (
    <div className="bg-background">
      <h1 className="text-center text-5xl  mt-8 max-w-5xl mx-auto text-foreground">Latest Products</h1>
      <hr className="my-4 max-w-5xl mx-auto" />
      <div className="max-w-5xl mx-auto m-2 flex flex-col items-center sm:flex-row sm:justify-evenly gap-4 px-4  *:w-full">
        <Filter categories={categories} onSelect={handleFilterSelect} />
        <SortByPrice orderBy={orderBy} onSelect={handlePrice} />
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="max-w-5xl mx-auto">
        {loading ? (
          <div><Loading /></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.length > 0 &&
              filteredProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  productItem={item}
                />
              ))
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
