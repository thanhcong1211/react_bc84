import { Button, Card, Col, Row, Typography } from "antd";
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddToCart, setProductList } from '../../redux/product';

const { Meta } = Card;

const ReduxProductsPage = () => {
  const { list } = useSelector((state) => state.product) // lấy dữ liệu từ store
  const dispatch = useDispatch(); // dùng để gửi action lên store

  const getProductApiAxios = async () => {
    try {
      let res = await axios({
        url: `https://apistore.cybersoft.edu.vn/api/Product`,
        method: 'GET'
      });
      //Sau khi lấy dữ liệu từ api về thì đưa dữ liệu lên trên store
      const products = res.data.content
      dispatch(setProductList(products)) // gọi action setProductList để cập nhật dữ liệu lên store

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => { //function hook useEffect
    //Sau khi html được khởi tạo lần đầu tiên và sau mỗi lần setState (bất kì state nào)
    getProductApiAxios();
  }, []);

  const handleAddToCart = (item)=>{
    dispatch(setAddToCart(item))
  }

  return (
    <div className="container">
      <Typography.Title>Danh sách sản phẩm</Typography.Title>
      <>
        <Row gutter={[32, 32]}>
          {list.map((item) => {
            return (
              <Col span={6} key={item.id}>
                <Card
                  hoverable
                  style={{ width: "100%" }}
                  cover={<img alt={item.name} src={item.image} />}
                >
                  <Meta title={item.name} description={item.description} />
                  <Button type="primary" size="large" className='mt-4 ' onClick={()=> handleAddToCart(item)}>Thêm vào giỏ hàng</Button>
                </Card>
              </Col>
            )
          })}
        </Row>
      </>
    </div>
  )
}

export default ReduxProductsPage