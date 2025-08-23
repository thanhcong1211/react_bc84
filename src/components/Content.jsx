import React from 'react'
import CardProduct from './CardProduct'

const Content = () => {
  return (
    <div className='bg-primary display-4 p-5 text-center text-dark'>
        <div class="row">
            
            <div className='col-4'>
                <CardProduct />
            </div>
            <div className='col-4'>
                <CardProduct />
            </div>
            <div className='col-4'>
                <CardProduct />
            </div>
        </div>

    </div>
  )
}

export default Content