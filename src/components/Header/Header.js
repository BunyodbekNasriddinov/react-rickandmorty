import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="shadow py-3">
      <div className="container">
        <div className="d-flex align-items-center">
          <NavLink to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsg9ux7BRU3hAXMF8SZVWm4ByNOJWgjnYXxdrzT-mtZGePIU7QUJY9tW8P7SI-rzoVOg&usqp=CAU"
              width="100%"
              height="50"
              alt="Site logo"
            />
          </NavLink>
          <nav className="d-flex align-items-center ms-auto">
            <ul className="d-flex align-items-center list-unstyled">
              <li className="me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-dark" : "text-dark text-decoration-none"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="me-3">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-dark" : "text-dark text-decoration-none"
                  }
                  to="/location"
                >
                  Location
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-dark" : "text-dark text-decoration-none"
                  }
                  to="/episode"
                >
                  Episode
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
