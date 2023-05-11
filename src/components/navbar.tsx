import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [popup, setPopup] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <nav
      className="navbar bg-dark text-white border-bottom d-flex justify-content-between w-100"
      data-bs-theme="dark"
    >
      <div className="container-fluid position-relative">
        <span
          className="navbar-brand mb-0 h1 text-white c-pointer"
          role="button"
          tabIndex={0}
          onClick={() => navigate("/")}
        >
          Fresh Articles
        </span>
        <div className="position-relative">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            className=" rounded-circle pe-auto"
            role="button"
            tabIndex={0}
            style={{
              width: 50,
              height: 50,
            }}
            onClick={() => setPopup(!popup)}
          />
          {popup && (
            <div
              className=" position-absolute end-100 bg-white z-1 p-2"
              style={{
                width: 140,
              }}
            >
              <p
                onClick={() => navigate("/reset-password")}
                className="text-dark pe-auto"
                role="button"
                tabIndex={0}
              >
                Reset Password
              </p>
              <p className="text-danger" role="button" tabIndex={0}>
                Log out
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
