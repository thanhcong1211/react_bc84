import React, { memo } from 'react'

/*
    Memo nhận biết được props thay đổi hay không để quyết định render lại giao diện hay không
    + So sánh props thay đổi là so sánh primitive (string, number, boolean)
*/
const CartMemo = (props) => {

console.log('cart memo render')
console.log(props.cartData)

return (
    <div className="container mt-4">
        <h2>Cart</h2>
        <table className="table table-bordered table-hover">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/* Example row */}
                {props.cartData.map((item, index) => {
                    return <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>1</td>
                        <td>{item.price}</td>
                        <td>{item.price}</td>
                        <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
)
}

export default memo(CartMemo);