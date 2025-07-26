import React from 'react';
import BT_MonAn from './BT_MonAn';
const RenderMonAn = (props) => {
    const { danhSachMonAn } = props.monAn;
    const renderMonAn = () => {
        return danhSachMonAn.map((monAn, index) => {
            return (
                <div className='bg-dark text-white p-3' key={index}>
                    <BT_MonAn monAn={monAn} />
                </div>
            );
        });
    }

    return (
        <div className='row'>
            {renderMonAn()}
            <button className='btn btn-success mt-3' onClick={() => {props.
                // Thêm một món ăn mới vào danh sách
                themMonAn({
                    maMonAn: 2,
                    tenMonAn: "Phở",
                    hinhAnh: "/img/pho.jpg",
                    gia: 30000
                })
            }}>
                Thêm món ăn
            </button>
        </div>
    );
}


export default RenderMonAn;
