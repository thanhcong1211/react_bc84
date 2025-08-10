import React from 'react'
import { NavLink } from 'react-router-dom';

const ItemProduct = (props) => {
    const { item } = props;
    return (
        <div className="card h-100 border-0 shadow-sm">
            <img
                src={item.image}
                className="card-img-top"
                alt="Sản phẩm 1"
            />
            <div className="card-body p-2">
                <p className="card-title mb-1 text-truncate">
                    {item.name}
                </p>
                <div className="text-danger fw-bold">{item.price} $</div>
                <div className="text-muted small text-decoration-line-through">
                    {item.price * 130 / 100}
                </div>
                <div className="text-muted small mt-1">⭐ 4.7 | Đã bán 3k+</div>
                <NavLink className='btn btn-dark' to={`/demo-use-param/${item.id}`}>View detail</NavLink>
            </div>
        </div>
    )
}

export default ItemProduct