//rxslice
import { createSlice } from '@reduxjs/toolkit'
import { dsGhe } from '../data/DanhSachGhe';

const initialState = {
    dsGhe: dsGhe,
    dsGheDangDat: [
        { "soGhe": "A1", "gia": 75000, "daDat": false },
        { "soGhe": "A2", "gia": 75000, "daDat": false },
        { "soGhe": "A3", "gia": 75000, "daDat": false },
    ]
}


const dsGheReducer = createSlice({
    name: "dsGheReducer",
    initialState,
    reducers: {
        datGheAction: (state,action) => {
            const {payload} = action;
            //Kiểm tra ghế đã được đặt hay chưa
            const indexGheDangDat = state.dsGheDangDat.findIndex(ghe => ghe.soGhe === payload.soGhe);
            if(indexGheDangDat !== -1) {
                state.dsGheDangDat.splice(indexGheDangDat,1);
            }else {
                state.dsGheDangDat.push(payload);  
            }
            // return {...state,dsGheDangDat: [...state.dsGheDangDat]}; 

        }
    }
});

export const { datGheAction} = dsGheReducer.actions

export default dsGheReducer.reducer