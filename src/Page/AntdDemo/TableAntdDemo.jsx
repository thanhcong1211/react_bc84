import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const TableAntdDemo = () => {
    const [arrProduct,setArrayProduct] = useState([]);
    const dataColumns = [
        {
            title:"id",
            dataIndex:"id",
            index: "id"
        },
        {
            title:"Tên sản phẩm",
            dataIndex:"name",
            index: "name"
        },
        {
            title:"Hình ảnh",
            dataIndex:"image",
            index: "image",
            render: (value,item) => {
                // console.log('item',item);
                // console.log('value',value);
                return <NavLink to={`/demo-use-param/${item.id}`}>
                        <img src={value} alt={item.alias} width={50} height={50} />
                </NavLink>
            }
        },
        {
            title:"Action",
            dataIndex:"action",
            index:"action",
            render: (value,item) =>{
                return <>
                    <button className='btn btn-primary' onClick={()=>{
                        console.log(item.id,'edit');
                    }}>Edit</button>
                    <button className='btn btn-danger mx-2' onClick={()=>{
                        console.log(item.id,'delete');
                    }}>Del</button>
                </>
            }
        }
    ]


    console.log(arrProduct);
    //call api lấy danh sách giày -> hiển thị ra table của antd
    const getAllProductApi = async () => {
        try {
            const res = await axios({
                url:`https://apistore.cybersoft.edu.vn/api/Product`,
                method:'GET'
            });

            setArrayProduct(res.data.content);
        }catch(err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        getAllProductApi();//Gọi api đưa vào state
    },[]);

  return (
    <div>
        <Table columns={dataColumns} dataSource={arrProduct} />
    </div>
  )
}

export default TableAntdDemo