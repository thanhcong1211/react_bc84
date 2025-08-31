//rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { httClientStoreApi } from '../settings/setting';

const initialState = {
  arrProduct: [],
  productEdit: {}
  // https://apistore.cybersoft.edu.vn/api/Product/getid?id=1

}

const ProductReducer = createSlice({
  name: 'ProductReducer',
  initialState,
  reducers: {
    getAllProductAction: (state, action) => {
      //Lấy dữ liệu từ action.payload => gán vào state.arrProduct
      state.arrProduct = action.payload;
      // return {...state,arrProduct: [...state.arrProduct]} 
    },
    getProductEditAction: (state, action) => {
      state.productEdit = action.payload;
    }
  }
});

export const { getAllProductAction,getProductEditAction} = ProductReducer.actions

export default ProductReducer.reducer
//----------------------------- action thunk -----------------------

export const getAllProductActionThunk = async (dispatch, getState) => {
  try {
    const rootReducer = getState();
    console.log(rootReducer)
    const res = await httClientStoreApi.get(`/Product`);
    
    //Sau khi có dữ liệu từ api => dispatch lên reducer
    const action = {
      type: 'ProductReducer/getAllProductAction',
      payload: res.data.content
    }
    //Gửi dữ liệu lên reducer
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
}


export const getAllProductEditApiThunk = (idProduct) => {
  
  return async (dispatch, getState) => {
  
    try {
 
      const res = await httClientStoreApi.get(`/Product/getid?id=${idProduct}`);
    
      //Sau khi có dữ liệu từ api => dispatch lên reducer
      const action = getProductEditAction(res.data.content);
      //Gửi dữ liệu lên reducer
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  }
}


