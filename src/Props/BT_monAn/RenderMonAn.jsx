
const RenderMonAn = (props) => {
  console.log('props', props)
  const monAn = props.monAn
 

  const renderMonAn = ()=>{
    return monAn.map((item, index)=>{
      return <div key={index} className='bg-dark text-white p-2 m-2'>{item}</div>
    })
  }
  return (
    <div>
      {renderMonAn()}

      <button className='btn btn-success mt-4 p-3' onClick={()=>props.nguoiPhucVu("Lẩu Thái")} >
       Gọi thêm món
      </button>

      <button className='btn btn-danger' onClick={()=> props.nguoiPhucVu("Bia Hà Nội")} >
       Gọi bia
      </button>
    </div>
  )
}

export default RenderMonAn