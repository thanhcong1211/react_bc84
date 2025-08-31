import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { ACCESS_TOKEN, httClientStoreApi, setStoreJson, setStoreText, USER_LOGIN } from '../../settings/setting'
import { useNavigate } from 'react-router-dom'

const LoginAuth = () => {
  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues:{
        email:'',
        password:''
    },
    onSubmit: async (values) => {
        //call api đăng nhập
        try {
          const res = await httClientStoreApi.post('/Users/signin',values);
          console.log(res.data.content);
          //lưu object login vào localstorage và cookie
          setStoreJson(USER_LOGIN,res.data.content);
          //lưu accessToken vào localstorage và cookie
          setStoreText(ACCESS_TOKEN,res.data.content?.accessToken);
          navigate('/profile');

        }catch(err){
          console.log(err);
          alert('Email hoặc mật khẩu không đúng !' + err.response?.data.message);
        
        }
    }
  })
   
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="text-center mb-4">
                  <h4 className="mb-0">Welcome back</h4>
                  <p className="text-muted small">Sign in to continue to your account</p>
                </div>

                <form onSubmit={loginForm.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input onChange={loginForm.handleChange} type="email" className="form-control" id="email" placeholder="name@example.com" />
                  </div>

                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <label htmlFor="password" className="form-label mb-0">Password</label>
                      <a href="#" className="small">Forgot?</a>
                    </div>
                    <input onChange={loginForm.handleChange} type="password" className="form-control" id="password" placeholder="Enter your password" />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="remember" />
                      <label className="form-check-label small" htmlFor="remember">Remember me</label>
                    </div>
                    <div className="small text-muted">Secure connection</div>
                  </div>

                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary btn-lg">Sign In</button>
                  </div>

                  <div className="text-center">
                    <span className="small text-muted">or sign in with</span>
                    <div className="mt-2">
                      <button type="button" className="btn btn-outline-secondary btn-sm me-2">Google</button>
                      <button type="button" className="btn btn-outline-secondary btn-sm">Facebook</button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="card-footer bg-transparent text-center py-3">
                <span className="small">Don't have an account? <a href="#">Sign up</a></span>
              </div>
            </div>

            <div className="text-center mt-3 small text-muted">© 2025 Your Company</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginAuth