import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios';
import { httClientStoreApi } from '../../settings/setting';
const RegisterAuth = () => {
   const frmRegister = useFormik({
    initialValues: {
        name:'',
        email:'',
        password:'',
        gender:'',
        phone:''
    },
    onSubmit: async (userRegister) => {
        try {
            const res = await httClientStoreApi.post(`/Users/signup`,userRegister);

            
            console.log(res.data.content);

        }catch (err){
            console.log(err);
        }
    }
   })


   return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
            <div className="card p-4 shadow" style={{ width: '400px', borderRadius: '10px' }}>
                <h2 className="text-center mb-4" style={{ color: '#1877f2' }}>Đăng ký</h2>
                <form onSubmit={frmRegister.handleSubmit}>
                   
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Họ và tên</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Nhập họ và tên" onChange={frmRegister.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Nhập email" onChange={frmRegister.handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Nhập mật khẩu" onChange={frmRegister.handleChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Giới tính</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="male" value="true" onChange={frmRegister.handleChange}/>
                                <label className="form-check-label" htmlFor="male">Nam</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="female" value="false"  onChange={frmRegister.handleChange}/>
                                <label className="form-check-label" htmlFor="female">Nữ</label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Số điện thoại</label>
                        <input type="text" className="form-control" id="phone" name="phone" placeholder="Nhập số điện thoại" onChange={frmRegister.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100" style={{ background: '#1877f2', border: 'none' }}>Đăng ký</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterAuth