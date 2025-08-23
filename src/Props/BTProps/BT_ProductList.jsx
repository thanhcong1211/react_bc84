//rafce
import React from 'react'
import { dataProduct } from '../../data/dataProduct'
import BT_ProductItem from './BT_ProductItem';
console.log(dataProduct)
const BT_ProductList = () => {

    const renderProduct = () => {
        let arrJSX = [];
        for(let item of dataProduct){
            let divProductItem = <div className='col-md-4 mt-2' key={item.id}>
                <BT_ProductItem dataItem={item} />
            </div>;
            //Thêm thẻ jsx vào arrJSX
            arrJSX.push(divProductItem);
        }
        return arrJSX; //[<div1 key="1">,<div2 key="2">,<div3 key="3">]
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