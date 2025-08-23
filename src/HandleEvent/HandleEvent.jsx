//rafce
import React from 'react'

const HandleEvent = () => {

    const handleClick = (e) => {
        e.target.className = "btn btn-dark";
        console.log(123);
    }

    const sayHello = (name) => {
        console.log(`hello ${name}`)
    }

    return (
        <div className='container'>
            <h3>HandleEvent</h3>
            <button className='btn btn-success' onClick={(e) => {
                e.target.className = "btn btn-dark";
                console.log(123);
                //Gọi hàm khác thực thi
                sayHello('Khải');
            }}>Click me !</button>

            <button className='btn btn-primary' onClick={handleClick}>Click dạng callback</button>

              <button className='btn btn-danger' onClick={handleClick}>Click dạng callback</button>
        </div>
    )
}

export default HandleEvent


// document.getElementById("id").onclick = (e) => {

// }