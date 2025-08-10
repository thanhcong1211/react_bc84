import React from 'react'
import { useSelector } from 'react-redux'

const ChangeNumberRedux = () => {
 //Lấy dữ liệu từ redux về component
 const number = useSelector(state => state.numberReducer );


  return (
    <div className='container'>
        <h3>Change number redux</h3>
        <h3>number : {number}</h3>
        <button className='btn btn-success'>+</button>
        <button className='btn btn-success mx-2'>-</button>
    </div>
  )
}

export default ChangeNumberRedux