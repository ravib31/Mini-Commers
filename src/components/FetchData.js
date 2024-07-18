import React, { useEffect, useState } from "react";

const FetchData = () => {
  const [resData, setResData] = useState([]);

  const URL = "https://fakestoreapi.com/products";
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = async () => {
    const data = await fetch(URL);
    const res = await data.json();
    setResData(res);
    console.log(res);
  };

  const filtered = () => {
    const filterData = resData.filter((res) => res?.price > 50);
    setResData(filterData);

    console.log("click");
    console.log(filterData);
  };

  const lowToHigh = ()=>{
    const loToHighData = resData.slice().sort((a,b)=>a.price-b.price)
    console.log(loToHighData)
    setResData(loToHighData)

  }
  const highToLow =()=>{
    const hiToLowData = resData.slice().sort((a,b)=>b.price-a.price)

    setResData(hiToLowData)
  }
  return (
    <div>
      <h1>Products</h1>
      <div className="flex justify-between">

      <button className="bg-black text-white " onClick={filtered}>
        Top Products
      </button>
      <div className="flex justify-between ">
        <button className="bg-green-900 text-white m-2 p-4" onClick={lowToHigh}>Low To High</button>
        <button className="bg-red-700 text-black m-2 p-4" onClick={highToLow}>High To Low</button>
      </div>
      </div>
      <ul>
        {resData.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width="100px" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            {/* <p>{product.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
