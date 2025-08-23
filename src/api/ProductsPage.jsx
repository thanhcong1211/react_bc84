//rafce
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductsPage = (props) => {

    const [arrProduct,setArrProduct] = useState([]); //function hook useState


    const getAllProductApi = async () => {
        //Gọi api từ backend
        try {
            let res = await fetch(`https://apistore.cybersoft.edu.vn/api/Product`);
            let data = await res.json();
            console.log(data.content);
            
        } catch (err) {
            console.log(err);
        }

    }
    const getProductApiAxios = async () => {
        try {
            let res = await axios({
                url: `https://apistore.cybersoft.edu.vn/api/Product`,
                method: 'GET'
            });
            //Sau khi lấy dữ liệu từ api về thì setState
            setArrProduct(res.data.content);
            console.log(res.data.content);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => { //function hook useEffect
        //Sau khi html được khởi tạo lần đầu tiên và sau mỗi lần setState (bất kì state nào)
        getProductApiAxios();
    },[]); 
    //state dependencies: thì state nào liệt kê trong mảng thay đổi thì hàm này mới gọi lại. Nếu là mảng rỗng (không phụ thuộc vào state nào ) nên chỉ gọi 1 lần  




    return (
        <div className='container'>
            <button onClick={() => {
                // getAllProductApi();
                getProductApiAxios();
            }}>Call api product</button>
            <h3>Product List</h3>
            <div className='row'>
                {arrProduct.map((item, index)=>{
                    return  <div className='col-3 mt-2' key={index}>
                    <div className='card'>
                        <img src={item.image} />
                        <div className='card-body'>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                            <button className='btn btn-success'>Detail</button>
                        </div>
                    </div>
                </div>
                })}
               
            </div>
        </div>
    )
}

export default ProductsPage