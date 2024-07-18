import React, { useEffect, useState } from 'react'
import { PRO_API } from './constants'

const useProductMenu = (proId) => {
    const [proInfo,setProInfo] = useState([])
    useEffect(()=>{
       fetchMenu();
    },[])

    const fetchMenu = async () => {
          try {
            const response = await fetch(PRO_API + proId);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            // console.log(data);
            setProInfo(data);
          } catch (error) {
            console.error("Failed to fetch the product data:", error);
          }
        };
  return proInfo
  
}

export default useProductMenu