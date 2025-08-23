import React from 'react'

const ChildComponent = (props) => {

  return (
    <div className='bg-dark text-white p-3 rounded my-2'>
        {props.noiDung}
    </div>
  )
}

export default ChildComponent