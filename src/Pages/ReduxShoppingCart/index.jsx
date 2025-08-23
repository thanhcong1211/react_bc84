import { Table, Typography } from 'antd'
import { useSelector } from "react-redux"


const ReduxShoppingCartPage = () => {
  const  { carts } = useSelector((state)=> state.product)
  console.log('🔥 ~ ReduxShoppingCartPage ~ carts:', carts)

  const columns = [
    { title: "Tên sản phẩm" , dataIndex: "name"},
    { title: "Giá", dataIndex: "price" },
    { title: "Mô tả" , dataIndex: "shortDescription" , render: (value) =>
    <Typography.Text  ellipsis style={{ width: "250px"}}>{value}</Typography.Text> },
    { title: "Hình ảnh", dataIndex: "image",  render: (value)=> <img src={value} style={{ width: '40px', height: '40px' }} />},
  ]

  return (
    <div className='container mt-5'>
      <Typography.Title>
        Sản phẩm trong giỏ hàng ({carts.length})
      </Typography.Title>

      {/*  Table antd  */}
      <Table 
      dataSource={carts} 
      columns={columns}  
      onRow={(record)=>{
        return {
          onClick: () => {
            console.log('Row clicked:', record);
          }
        }
      }}/>
    </div>
  )
}

export default ReduxShoppingCartPage