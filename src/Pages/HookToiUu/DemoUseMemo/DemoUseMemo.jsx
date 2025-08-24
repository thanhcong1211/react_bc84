import React, { useMemo, useState } from 'react'
import CartMemo from './CartMemo';

const DemoUseMemo = () => {
    const [number, setNumber] = useState(0);
    const [like, setLike] = useState(0);
    const cartData = [
        { id: 1, name: 'Iphone', price: 1000 },
        { id: 2, name: 'Samsung', price: 2000 },
        { id: 3, name: 'Xiaomi', price: 3000 }
    ];
    const cartDataMemo = useMemo(()=> cartData, []); // tương đương: pure component trong class component
    return (
        <div className='container py-5'>
            <h3 className='text-center'>Demo useMemo</h3>
            <div className='bg-dark text-white p-3 fs-2'>
                Number: {number}
                <div className='mt-3'>
                    <button className='btn btn-success me-2' onClick={() => {
                        setNumber(number + 1)
                    }}>+</button>
                    <button className='btn btn-danger' onClick={() => {
                        setNumber(number - 1)
                    }}>-</button>
                </div>
                Like: {like} <i className='fa fa-heart text-danger' style={{ cursor: 'pointer' }} onClick={() => {
                    setLike(like + 1);
                }}></i>
            </div>
            <CartMemo cartData={cartDataMemo} />
        </div>
    )
}

export default DemoUseMemo