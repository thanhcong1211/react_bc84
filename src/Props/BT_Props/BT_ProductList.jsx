//rafce
import React from 'react'
import { dataProduct } from '../../data/dataProduct'
const BT_ProductList = () => {
    const renderProduct = () => {
        let arrJSX = []
        for (let item in dataProduct)
        {
            let divProductItem = <div className='col-md-4 mt-2' key={item.id}>
                <BT_ProductItem />
            </div>;
            //Thêm thẻ jsx vào arrJSX
            arrJSX.push(divProductItem);
        }
            return arrJSX
        }
    
 return (
        <div className='container'>
            <h3>Bài tập product list</h3>
            <div className='row'>
                {renderProduct()}
            </div>
        </div>
    )
}

export default BT_ProductList