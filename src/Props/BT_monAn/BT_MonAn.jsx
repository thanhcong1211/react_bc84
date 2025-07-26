import React, { useState } from 'react';
import RenderMonAn from './RenderMonAn';
const BT_MonAn = (props) => {
    const [monAn, setMonAn] = useState({
        maMonAn: 1,
        tenMonAn: "Bánh mì",
        hinhAnh: "/img/banhmi.jpg",
        gia: 20000
    });
    return (<RenderMonAn danhSachMonAn={monAn} />)
}

export default BT_MonAn;
