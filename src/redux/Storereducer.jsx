//Tạo reducer -> xây dựng giao diện -> lấy dữ liệu từ reducer về component qua useSelector -> tạo action thunk call api lấy dữ liệu -> dispatch dữ liệu lên reducer -> reducer cập nhật state mới -> component nhận state mới từ redux về
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';


const initialState = {
    arrStore: []
}

const storeReducer = createSlice({
  name: 'storeReducer',
  initialState,
  reducers: {
    getAllStoreAction: (state, action) => { 
        state.arrStore = action.payload;
    }
  }
});

export const {getAllStoreAction} = storeReducer.actions

export default storeReducer.reducer

//action thunk
//--------------------------------------------------
export const getAllStoreApiThunk = () => {

    return async (dispatch, getState) => {
        try {
            //call api lấy dữ liệu về
            const res = await axios({
                url: 'https://apistore.cybersoft.edu.vn/api/Store/getAll',
                method: 'GET'
            });
            //Sau khi có dữ liệu từ api => dispatch lên reducer
            const action = getAllStoreAction(res.data.content);
            dispatch(action)

        } catch (err) {
            console.log(err);
        }
    }
}