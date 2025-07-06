import React from 'react'

const CardComponent = (props) => {
    let product = props.product;
    console.log(product);

  return (
    <div className='card'>
        <img src={product?.img} alt='...' />
        <div className='card-body'>
            <h3 className='card-title'>{product?.name}</h3>
            <p className='card-text'>{product?.price}</p>
            <button className='btn btn-success'>Detail</button>
        </div>
    </div>
  )
}

export default CardComponent