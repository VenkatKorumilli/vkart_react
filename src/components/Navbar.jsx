import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const token = window.localStorage.getItem("token")
  const username = window.localStorage.getItem("username")

  function logout() {
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("username")
    window.localStorage.removeItem("userId")
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top mb-5 rounded">

      <div className="container-fluid">

        <div className="navbar-brand text-dark ms-3 fs-4 fw-bold">
          V-KART
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link className="nav-link fs-5 text-dark" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5 text-dark" to="/cart">
                Cart
              </Link>
            </li>

            {/* Username greeting */}
            {token && (
              <li className="nav-item me-3 fw-semibold text-primary fs-5">
                Hi {username}!
              </li>
            )}

            {!token && (
              <li className="nav-item">
                <Link className="nav-link fs-5 text-dark" to="/login">
                  Login
                </Link>
              </li>
            )}

            {token && (
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 text-dark"
                  to="/login"
                  onClick={logout}
                >
                  Logout
                </Link>
              </li>
            )}

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default Navbar