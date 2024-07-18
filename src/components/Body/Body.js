import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../ShimmerUi/Shimmer";

function Body() {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    // console.log(res)
    setListOfProducts(res);
    setFilteredProducts(res);
  };

  // if (listOfProducts.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="offlineImage">
        You are offline please check your Internet connection
      </h1>
    );
  return listOfProducts.length === 0 ? (
    <Shimmer />
  ) : (
    // listOfProducts===0?"Loading":
    <div className="px-20">
      <div className="flex ">
        <div className="m-4 p-2">
          <input
            type="text"
            className="border border-solid border-black p-2"
            placeholder="Search Product"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-2 rounded-lg bg-green-300 m-4"
            onClick={() => {
              // setSearchText(searchText)
              const searchResultProducts = listOfProducts.filter((res) =>
                res.title.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredProducts(searchResultProducts);
              // console.log(searchText)
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 rounded-lg bg-gray-400 "
            onClick={() => {
              const filteredList = listOfProducts.filter(
                (res) => res.rating.rate > 4
              );
              setFilteredProducts(filteredList);
              // console.log("i am clicked")
            }}
          >
            Top Rated Products
          </button>
        </div>
      </div>
      <div className="flex flex-wrap items-center">
        {filteredProducts.map((restaurant) => (
          <Link key={restaurant.id} to={"/products/" + restaurant.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
