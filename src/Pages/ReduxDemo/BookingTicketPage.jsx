//rafce
import React from 'react'
import HangGhe from '../../components/HangGhe.JSX'
import { useSelector } from 'react-redux'

const BookingTicketPage = () => {
    const {dsGhe,dsGheDangDat} = useSelector(state => state.dsGheReducer);
    
    const tinhTongTien = () => {
        let tongTien = 0;
        for(let gheDangDat of dsGheDangDat){
            tongTien += gheDangDat.gia
        }
        return tongTien.toLocaleString();
    }


    return (
        <div>
            <h3>Booking Ticket Page</h3>
            <div className="container  p-4 rounded" style={{ maxWidth: 1000, marginTop: 30, opacity: 0.97 }}>


                <div className="mb-3 d-flex align-items-center gap-4">
                    <span className="d-flex align-items-center">
                        <span className="bg-success rounded px-3 py-1 me-2"></span>
                        Selected Seat
                    </span>
                    <span className="d-flex align-items-center">
                        <span className="bg-danger rounded px-3 py-1 me-2"></span>
                        Reserved Seat
                    </span>
                    <span className="d-flex align-items-center">
                        <span className="bg-warning rounded px-3 py-1 me-2"></span>
                        Empty Seat
                    </span>
                </div>

                <div className="text-center mb-2">
                    <span className="bg-warning text-dark px-3 py-1 rounded fw-bold w-100 d-block">SCREEN</span>
                </div>

                <div className="table-responsive">
                    <table className="table table-borderless text-center align-middle mb-0">
                        <thead>
                            <tr>
                                <th></th>
                                {dsGhe[0].danhSachGhe.map((ghe, index) => {
                                    return <th key={index} className="text-uppercase">{ghe.soGhe}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>


                            {dsGhe?.slice(1).map((hang, index) => {
                                return <HangGhe key={index} hang={hang} />
                            })}

                        </tbody>
                    </table>
                </div>
        
                <table className='table table-bordered mt-4'>
                    <thead>
                        <tr>
                            <th>Seat Number</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                       {dsGheDangDat.map((ghe, index) => {
                        return <tr key={index}>
                            <td>{ghe.soGhe}</td>
                            <td>{ghe.gia.toLocaleString()}</td>
                        </tr>
                       })}
                    </tbody>
                </table>
                <tfoot>
                    <tr>
                        <td>Tổng tiền</td>
                        <td>{tinhTongTien()}</td>
                    </tr>
                </tfoot>

            </div>
        </div>
    )
}

export default BookingTicketPage