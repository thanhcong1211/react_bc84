import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function AdminTemplate() {
    return (
        <div>
            {/* Top navbar */}
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <button
                        className="btn btn-outline-light d-md-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        ☰
                    </button>
                    <NavLink className="navbar-brand ms-2" to="/">
                        Cybersoft store
                    </NavLink>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-sm btn-outline-light me-2">Documentation</button>
                        <button className="btn btn-sm btn-danger">Buy Now</button>
                    </div>
                </div>
            </nav>

            <div className="container-fluid" style={{ marginTop: 56 }}>
                <div className="row">
                    {/* Sidebar */}
                    <nav
                        id="sidebarMenu"
                        className="col-md-2 col-lg-2 d-md-block bg-light sidebar collapse"
                        style={{ minHeight: "calc(100vh - 56px)", paddingTop: 20 }}
                    >
                        <div className="position-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2">
                                    <NavLink className="nav-link active" to="/admin">
                                        <span className="me-2">🏠</span> Admin dashboard
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <NavLink className="nav-link" to="/admin/product-management">
                                        <span className="me-2">📊</span> Product management
                                    </NavLink>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className="nav-link" href="#">
                                        <span className="me-2">📁</span> Pages
                                    </a>
                                </li>
                                <li className="nav-item mb-2">
                                    <a className="nav-link" href="#">
                                        <span className="me-2">🔌</span> Plugins
                                    </a>
                                </li>
                            </ul>

                            <hr />

                            <h6 className="px-3 text-muted">UI Toolkit</h6>
                            <ul className="nav flex-column px-2">
                                <li className="nav-item mb-1">
                                    <a className="nav-link" href="#">Components</a>
                                </li>
                                <li className="nav-item mb-1">
                                    <a className="nav-link" href="#">Forms</a>
                                </li>
                                <li className="nav-item mb-1">
                                    <a className="nav-link" href="#">Utilities</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* Main content */}
                    <main className="col-md-10 ms-sm-auto px-4">

                  
                        <div className="mt-4">
                            <Outlet />
                        </div>

                        <footer className="mt-5 mb-4 text-muted small">
                            <div>Copyright © khaicybersoft Website 2025</div>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    );
}