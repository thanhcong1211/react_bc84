//rafce
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductActionThunk } from '../redux/ProductReducer';

const DemoGetApiThunk = () => {
    const { arrProduct } = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    //Gọi api get all product => action => reducer => store
    const getAllProductApi = async () => {
       dispatch(getAllProductActionThunk);
    }
    useEffect(() => {
        //Khi trang vừa load xong thì gọi api
        getAllProductApi();
    }, [])


    return (
        <div className='container'>
            <h2 className="my-4">Danh sách sản phẩm</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {arrProduct.map((product, index) => {
                    return <div className="col" key={index}>
                        <div className="card h-100">
                            <img src={product.image}className="card-img-top" alt="Air Jordan 1 Mid" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text fw-bold">{product.price}</p>
                                <a href="#" className="btn btn-dark">Mua ngay</a>
                            </div>
                        </div>
                    </div>

                })}

            </div>
        </div>
    )
}

export default DemoGetApiThunk