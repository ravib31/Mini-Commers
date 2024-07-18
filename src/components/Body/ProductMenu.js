import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRO_API } from "../../utils/constants";
import useProductMenu from "../../utils/useProductMenu";
import Shimmer from "../ShimmerUi/Shimmer";
import {useDispatch} from "react-redux";
import { addItems } from "../../utils/cartSlice";


const ProductMenu = () => {
  // const [proInfo, setProInfo] = useState(null);
  const { proId } = useParams();
  const proInfo = useProductMenu(proId)
 
 const dispatch = useDispatch();
  const handleCart = (proInfo)=>{
      dispatch(addItems(proInfo))
  }
  // console.log(handleCart)

  if (proInfo == null) {
    return <Shimmer />;
  }

  const { title, image, price,rating } = proInfo; 

  return (
    <div className="px-96 m-auto items-center">
      <div className='m-4 p-4 w-[400px] h-[450px] bg-slate-400 rounded-lg hover:bg-gray-600 '>
      <button className="absolute bg-black text-white rounded-lg ml-24 w-20 p-2" onClick={()=>handleCart(proInfo)}>
          Add To Cart{" "}
        </button>
        <img className="rounded-lg w-96  h-80 " src={image} alt="product" />
        <h1 className="font-bold py-2 text-lg">{title?.length > 30 ? `${title.substring(0, 30)}...` : title}</h1>
        <h3 className="text-zinc-50">Price - {price} ₹</h3>
        <p>Rating-{rating?.rate}</p>
      </div>
    </div>
  );
};

export default ProductMenu;
