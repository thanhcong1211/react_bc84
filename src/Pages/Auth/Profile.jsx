import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfileApi } from '../../redux/userReducer';
import { ACCESS_TOKEN, getStoreText } from '../../settings/setting';
import { Navigate } from 'react-router-dom';

const Profile = () => {
const {userProfile} = useSelector(state => state.userReducer);
const dispatch = useDispatch();
console.log(userProfile);
const getProfileApi = async () => {
    const actionThunkGetProfile = getUserProfileApi();
    dispatch(actionThunkGetProfile);
}

useEffect(()=>{
   getProfileApi();
},[]);

if(!getStoreText(ACCESS_TOKEN)) {
    return <Navigate to="/login" />;
}


return (
    <div className="container my-5">
        <style>{`
            .profile-card { border-radius: 12px; overflow: hidden; }
            .profile-avatar { width: 120px; height: 120px; object-fit: cover; border: 4px solid #fff; box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
            .field-label { font-size: 0.85rem; color: #6c757d; }
            .field-value { font-weight: 600; font-size: 1rem; }
            .chip { padding: 0.25rem 0.6rem; border-radius: 999px; font-size: 0.8rem; }
        `}</style>

        <div className="card profile-card shadow-sm">
            <div className="card-body">
                <div className="row g-3 align-items-center">
                    <div className="col-md-4 text-center">
                        <div className="position-relative d-inline-block">
                            <img
                                src={userProfile?.avatar}
                                alt="avatar"
                                className="rounded-circle profile-avatar"
                            />
                        </div>
                        <h4 className="mt-3 mb-0">{userProfile.name}</h4>
                        <p className="text-muted mb-1">
                            {userProfile.image}
                        </p>
                        <span className="chip bg-success text-white">Active</span>
                    </div>

                    <div className="col-md-8">
                        <div className="d-flex justify-content-between align-items-start">
                            <h5 className="mb-2">Profile</h5>
                            <div>
                                <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                                <button className="btn btn-sm btn-outline-secondary">Close</button>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col-sm-6 mb-3">
                                <div className="field-label">Email</div>
                                <div className="field-value">{userProfile?.email}</div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="field-label">Phone</div>
                                <div className="field-value">{userProfile?.phone}</div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="field-label">Gender</div>
                                <div className="field-value">{userProfile?.gender ? 'Male' : 'Female'}</div>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <div className="field-label">Facebook ID</div>
                                <div className="field-value">-</div>
                            </div>

                            <div className="col-12 mb-3">
                                <div className="field-label">Password</div>
                                <div className="field-value text-muted">None</div>
                            </div>

                            <div className="col-12">
                                <div className="field-label">Orders History</div>
                                <div className="mt-2 p-3 border rounded bg-light text-muted">No orders yet</div>
                            </div>
                        </div>

                        <div className="mt-4 d-flex gap-2">
                            <button className="btn btn-primary">Send Message</button>
                            <button className="btn btn-outline-primary">Upload Avatar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Profile