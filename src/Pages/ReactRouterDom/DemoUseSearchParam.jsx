import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ItemProduct from './ItemProduct';

const DemoUseSearchParam = () => {
  const [arrProdSearch,setArrProdSearch] = useState([]);
  const frmSearch = useFormik({
    initialValues: {
      keyword: ''
    },
    onSubmit: (value) => {
      let { keyword } = value;
      console.log(keyword);
      //Đưa dữ liệu keyword lên thanh url
      setSearchParam({
        k: keyword
      })
    }
  })
  const [searchParam, setSearchParam] = useSearchParams();
  const keyword = searchParam.get('k');

  const getProductByKeyword = async () =>{
    try {
        const res = await axios({
          url:`https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyword}`,
          method:'GET'
        });
        setArrProdSearch(res.data.content);
    }catch(err){
      console.log(err);
    }
  } 

  useEffect(()=>{
    getProductByKeyword()
  },[keyword]);


  return (
    <div>
      <div className="container py-4">
        {/* Thanh tìm kiếm */}
        <div className="mb-4">
          <form onSubmit={frmSearch.handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tìm kiếm sản phẩm..."
                aria-label="Search"
                name="keyword"
                id="keyword"
                onChange={frmSearch.handleChange}
              />
              <button className="btn btn-primary" type="submit">
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>

        {/* Kết quả tìm kiếm giả lập */}
        <h5 className="mb-3">Kết quả cho từ khoá: <strong>"{keyword}"</strong></h5>
        <div className="row">
            {arrProdSearch.map((item,index)=>{
                return <div className='col-3 mt-2' key={index}>
                  <ItemProduct item={item} />
                </div>
            })}


         
          </div>
      </div>


    </div>
  )

}

export default DemoUseSearchParam










