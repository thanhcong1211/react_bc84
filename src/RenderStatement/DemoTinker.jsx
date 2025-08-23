import React, { useState } from 'react'

const DemoTinker = () => {
    let [numRandom,setNumRandom] = useState(30);

    const randomNumber = (e) => {
        //Tạo ra 1 số random
        let soNgauNhien = Math.floor(Math.random() * 100) + 1;
        setNumRandom(soNgauNhien);
    }
    return (
        <div className='container'>
            <div className='card w-25'>
                <div className='card-header bg-danger text-white fs-3'>
                    Tinker app 
                </div>
                <img className='w-100' src={`https://i.pravatar.cc?u=${numRandom}`} alt='avatar' />
                <div className='card-body'>
                    <h3 className='card-title'>Name</h3>
                    <p className='card-text'>Lorem ipsum dolor sit amet.</p>
                    <p>Age: 19</p>
                </div>
                <div className='card-footer d-flex justify-content-between align-items-center'>
                    <button className='btn btn-outline-dark' onClick={randomNumber}>Dislike</button>
                    <button className='btn btn-outline-danger' onClick={randomNumber}>Like</button>
                </div>
            </div>
        </div>
    )
}

export default DemoTinker