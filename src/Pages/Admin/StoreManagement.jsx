import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllStoreApiThunk } from '../../redux/storeReducer';

const StoreManagement = () => {
    const { arrStore } = useSelector(state => state.storeReducer);
    const dispatch = useDispatch();
    const getAllStoreApi = async () => {
        const actionThunk = getAllStoreApiThunk();
        dispatch(actionThunk);
    }
    console.log(arrStore,'arrStore');
    useEffect(()=>{
        getAllStoreApi();
    },[])

    return (
        <div>StoreManagement</div>
    )
}

export default StoreManagement