import React, { useState } from "react";
const DemoTinder = () => {
  let [likeDislike, setLikeDislike] = useState(Math.floor(Math.random() * 100));
    // Khởi tạo state với giá trị ngẫu nhiên từ 0 đến 99
  const randomNumber = () => {
        //Tạo ra 1 số random
        let soNgauNhien = Math.floor(Math.random() * 100) + 1;
        setLikeDislike(soNgauNhien);
    }

  // Math.floor(Math.random() * 70) => random từ 0 đến 69
  return (
    <div className='text-center container'>
            <div className=' text-center card w-25'>
                <div className='card-header bg-danger text-white fs-3'>
                    Tinker app
                </div>
                <img className='w-100' src={`https://i.pravatar.cc?u=${likeDislike}`} alt='avatar' />
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
  );
};
export default DemoTinder;
