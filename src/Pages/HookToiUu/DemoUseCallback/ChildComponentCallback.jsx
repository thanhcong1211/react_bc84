import React, { memo } from 'react'

const ChildComponentCallback = (props) => {

  console.log('child component render');
  return (
    <div>
      <h6>Bình luận</h6>
      <div className="mb-3 d-flex">
        <img
          src="https://i.pravatar.cc?u=5"
          alt="avatar"
          className="rounded-circle me-2"
          style={{ width: 40, height: 40 }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Viết bình luận..."
          style={{ borderRadius: '20px' }}
        />
        <button className="btn btn-primary ms-2" style={{ borderRadius: '20px' }} onClick={()=>{
          props.renderNotify('Khải');
        }}>
          Gửi
        </button>
      </div>
      <div>
        <div className="d-flex mb-2">
          <img
            src="https://i.pravatar.cc?u=6"

            alt="avatar"
            className="rounded-circle me-2"
            style={{ width: 40, height: 40 }}
          />
          <div>
            <div className="bg-light p-2 rounded" style={{ borderRadius: '20px' }}>
              <strong>Nguyễn Văn A</strong> <br />
              Bình luận mẫu 1
            </div>
            <div className="small text-muted mt-1">1 phút trước</div>
          </div>
        </div>
        <div className="d-flex mb-2">
          <img
            src="https://i.pravatar.cc?u=7"

            alt="avatar"
            className="rounded-circle me-2"
            style={{ width: 40, height: 40 }}
          />
          <div>
            <div className="bg-light p-2 rounded" style={{ borderRadius: '20px' }}>
              <strong>Trần Thị B</strong> <br />
              Bình luận mẫu 2
            </div>
            <div className="small text-muted mt-1">2 phút trước</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default  memo(ChildComponentCallback);