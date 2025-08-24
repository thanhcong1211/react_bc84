import axios from 'axios';
import React, { useEffect, useState } from 'react'
//Custom hook tương tự react component tuy nhiên kết quả trả về sẽ là 1 giá trị thay vì jsx
//custom hook có thể sử dụng được các hook khác từ react hoặc từ thư viện
const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const getDataApi = async () => {
    try {
      const res = await axios({
        url: url,
        method: 'GET'
      });
      setData(res.data);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getDataApi();
  }, []);



  return data;
}

export default useFetchData