import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFetchData from '../Hooks/useFetchData';
import useRoute from '../Hooks/useRoute';
import useRedux from '../Hooks/useRedux';

const DemoCustomHook = () => {
    const { params,
        searchParam,
        setSearchParam,
        location } = useRoute();
    const { state, dispatch } = useRedux();
    const data = useFetchData('https://apistore.cybersoft.edu.vn/api/Product');

    const arrProduct = data?.content ?? [];
    console.log(state);
    console.log(dispatch);





    return (
        <div className="container mt-4">
            <h2 className="mb-4">Demo CustomHook</h2>
            <div className="row">
                {arrProduct.map((item) => (
                    <div className="col-md-3 mb-4" key={item.id}>
                        <div className="card">
                            <img src={item.image} alt='...' />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DemoCustomHook;
