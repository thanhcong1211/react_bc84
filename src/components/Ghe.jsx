import React from 'react'
import '../Pages/ReduxDemo/BaiTapBookingTicket.css'; // Assuming you have a CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { datGheAction } from '../redux/dsGheReducer';
const Ghe = (props) => {
  const { dsGheDangDat } = useSelector(state => state.dsGheReducer)
  const { ghe } = props;
  const dispatch = useDispatch();

  const renderGhe = () => {
    if (ghe.daDat) {
      return <td>
        <span className="gheDuocChon">
          {ghe.soGhe}
        </span>
      </td>
    } else {
      let classGhe = "ghe";
      let index = dsGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
      if (index !== -1) {
        classGhe = "gheDangChon";
      }
      //Xử lí đặt ghế
      return <td>
        <span className={classGhe} onClick={()=>{
            // Tạo action thủ công
            //  const action = {
            //   type: 'dsGheReducer/datGheAction',
            //   payload: ghe
            //  };
            //Tạo thông qua hàm actionCreator
            const action = datGheAction(ghe);
            console.log(action);
             dispatch(action);


        }}>
          {ghe.soGhe}
        </span>
      </td>
    }

  }
  return (
    <>
      {renderGhe()}
    </>
  )
}

export default Ghe