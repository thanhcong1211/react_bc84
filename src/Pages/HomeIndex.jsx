import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import ItemProduct from './ReactRouterDom/ItemProduct';

const HomeIndex = () => {
  const [arrProduct,setArrProduct] = useState([]);
  const getAllProductApi = async () => {
    try {
      const res = await axios({
        url:'https://apistore.cybersoft.edu.vn/api/Product',
        method:'GET'
      })
      console.log(res.data);
      //Lấy data đưa vào state arrProduct
      setArrProduct(res.data.content);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getAllProductApi();
  },[]);

  

  return (
     <div className="container py-4">
      <h4 className="mb-4 fw-bold">Danh sách sản phẩm</h4>
      <div className="row g-3">
        {arrProduct.map((item,index)=>{
          return  <div className="col-6 col-md-3 mt-2" key={index}>
            <ItemProduct item={item} />
        </div>
        })}
        {/* Sản phẩm 1 */}
       

      
      </div>
    </div>
  )
}

export default HomeIndex