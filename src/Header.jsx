import { Link } from "react-router-dom";
import axios from "axios";
import { Modal } from "./Modal";
export function Header() {
  const handleLogoutClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };
  return (
    <header>
      <Modal />
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MyBlog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/posts">
                  All Posts
                </a>
              </li>
              <li className="nav-item">
                <Link to="/posts/new" className="nav-link" href="#posts-index">
                  Write a Post
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                {localStorage.jwt === undefined ? (
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/signup" className="dropdown-item">
                        Create an Account
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleLogoutClick}>
                        Logout
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link disabled"></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
