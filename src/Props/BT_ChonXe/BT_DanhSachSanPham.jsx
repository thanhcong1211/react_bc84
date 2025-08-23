import React from 'react'
import BT_SanPhamItem from './BT_SanPhamItem'
const products = [
    { id: 1, name: 'black car', img: '/img/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: '/img/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: '/img/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: '/img/steel-car.jpg', price: 4000 }
];
const BT_DanhSachSanPham = (props) => {

    const {setStateModal} = props;

    return (
        <div>
            <div className='row'>
                {products.map((item,index)=>{
                    return <div className='col-md-3 mt-2' key={index}>
                    <BT_SanPhamItem dataCar={item} setStateModal={setStateModal} />
                
                </div>
                })}
            </div>
        </div>
    )
}

export default BT_DanhSachSanPham