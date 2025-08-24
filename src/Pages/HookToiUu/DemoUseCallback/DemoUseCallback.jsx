import React, { useCallback, useState } from 'react'
import ChildComponentCallback from './ChildComponentCallback'

const DemoUseCallback = () => {

    const [like, setLike] = useState(0);
    const handleLike = () => {
        setLike(like + 1);
    }

    const renderNotify = (name) => {
        alert(`${name} Vừa bình luận bài viết`)
    }

    const renderNotifyUseCallback = useCallback(renderNotify, []);

    return (
        <div className='container mt-4'>
            <h3>Demo Use callback</h3>
            <div className="card mb-3" style={{ maxWidth: '600px' }}>
                <div className="card-body">
                    <h5 className="card-title">Bài viết</h5>
                    <p className="card-text">Đây là nội dung bài viết mẫu giống Facebook.</p>
                    <hr />
                    <button className="btn btn-primary me-2" onClick={() => {
                        handleLike();
                    }}>
                        <i className="fa fa-thumbs-up"></i> {like} Like
                    </button>
                    <ChildComponentCallback renderNotify={renderNotifyUseCallback} />
                </div>
            </div>
        </div>
    )
}

export default DemoUseCallback