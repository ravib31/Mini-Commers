import React from "react";
import {useDispatch} from "react-redux";
import { addItems } from "../../utils/cartSlice";

// const URL = "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?nutrition-type=cooking"

function RestaurantCard(props) {
  const { resData } = props;
  const { title, price, rating, image } = resData;

 
  return (
    <div>
      <div className="m-4 p-4 w-[200px] h-96 bg-slate-400 rounded-lg hover:bg-gray-600">
        <img className="rounded-lg w-full h-52" src={image} />
        <h6 className="font-bold py-2 text-lg">
          {" "}
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </h6>
        <h5 className="text-md">Price-{price * 100} ₹</h5>
        <p>Ratings - {rating.rate}</p>
      </div>
      
       
   
    </div>
  );
}

export default RestaurantCard;
