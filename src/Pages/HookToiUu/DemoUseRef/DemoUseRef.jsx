import React, { useRef, useState } from 'react'
// //useref: lưu giá trị qua các lần render, tham chiếu đến thẻ dom mà khồng cần phải re-render
// //useRef thường sử dụng trong các form không validation (form tìm kiếm, form login, form bình luận)
// //useState (redux) dùng cho các form có validation (form đăng ký, form đặt vé,... form có validation thì bắt buộc phải dùng useState (useFormik))

const DemoUseRef = () => {
    const [number, setNumber] = useState(1);
    const refButton = useRef(null);
    // const [account, setAccount] = useState({
    //     email: '',
    //     password: ''
    // });
    const account = useRef({
        email: '',
        password: ''
    });

    // const account = {
    //     email:'',
    //     password:''
    // }
    const handleChange = (e) => {
        const { name, value } = e.target;
        // setAccount({...account, [name]: value });
        account.current[name] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('🔥 ~ handleSubmit ~ account:', account.current);

        refButton.current.className = 'btn btn-danger w-100';


    }
    console.log(account)
    return (
        <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <button className='btn btn-success' onClick={() => {
                setNumber(number + 1);
            }}>number: {number}</button>
            <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%' }}>
                <div className="text-center mb-4">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
                        alt="Google Logo"
                        style={{ width: 92, height: 30 }}
                    />
                    <h5 className="mt-3">Sign in</h5>
                    <p className="text-muted mb-0">to continue to Google</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input

                            className="form-control"
                            placeholder="Email or phone"
                            onChange={handleChange}
                            name="email"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <a href="#" className="small text-primary">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" ref={refButton}>
                        Next
                    </button>
                </form>
                <div className="text-center mt-3">
                    <a href="#" className="small">Create account</a>
                </div>
            </div>
        </div>
    )
}

export default DemoUseRef





