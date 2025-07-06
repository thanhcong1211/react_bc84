import React, { useState } from 'react';

const DemoChangeColor = () => {
    // Khởi tạo state với giá trị mặc định là 'black'
    let [color, setColor] = useState('black');
    return (

       <div className='container'>
        <h3>Change color car</h3>
        <div className='d-flex'>
            <div className='car w-50'>
                <img className='w-100' src={`/img/${color}-car.jpg`} alt="car" />
            </div>
            <div className='w-50'>
                <button className='mx-2 btn btn-danger' onClick={() => setColor('red')}>Red color</button>
                <button className='mx-2 btn btn-dark' onClick={() => setColor('black')}>Black color</button>
                <button className='mx-2 btn btn-secondary' onClick={() => setColor('silver')}>Silver color</button>
                <button className='mx-2 btn btn-primary' onClick={() => setColor('steel')}>Steel color</button>
            </div>
        </div>
    </div>
    )
}

export default DemoChangeColor