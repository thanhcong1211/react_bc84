import { createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, getStoreText, httClientStoreApi } from '../settings/setting';
import axios from 'axios';


const initialState = {
    userProfile : {

    }
}

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setUserProfileAction: (state,action)=>{
        state.userProfile = action.payload
    }
  }
});

export const { setUserProfileAction } = userReducer.actions

export default userReducer.reducer

// ------------------- viết action thunk gọi api --------------
export const getUserProfileApi = () => {

    return async (dispatch) => {
        try {
            const accessToken = getStoreText(ACCESS_TOKEN)
            const res = await httClientStoreApi.post('/Users/getProfile');
            // const res = await axios({
            //     url:'getprofile',
            //     method:'POST',
            //     data:null,
            //     headers:{
            //         Authorization: accessToken
            //     }
            // })
            const action = setUserProfileAction(res.data.content);
            dispatch(action);
        }catch (err) {
            console.log(err)
        
        }
    }

}

