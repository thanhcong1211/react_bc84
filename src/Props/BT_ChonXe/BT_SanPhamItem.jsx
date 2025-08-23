import React from 'react'

const BT_SanPhamItem = (props) => {
    let {dataCar,setStateModal} = props
  return (
    <div className='card'>
        <img src={dataCar.img} alt="..." />
        <div className='card-body'>
            <div className='card-title'>{dataCar.name}</div>
            <div className='card-text'>{dataCar.price}</div>
            <button className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#modalId" onClick={(e)=>{
                setStateModal(dataCar);
            }}>Xem chi tiết</button>
        </div>
    </div>
  )
}

export default BT_SanPhamItem