import { NavLink } from 'react-router-dom';
import { FaDoorOpen, FaList } from 'react-icons/fa';

function Navbar({ auth, onLogout }) {
  function onClickLogout(evt) {
    evt.preventDefault();
    onLogout();
  }

  return (
    <header className="navbar navbar-expand navbar-dark bg-dark">
      <nav className="container-fluid">
        {auth && <span className="navbar-text">{auth.email}</span>}
        <ul className="navbar-nav">
          {!auth && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <FaDoorOpen className="m-1" />
                Login
              </NavLink>
            </li>
          )}
          {auth && (
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
                onClick={(evt) => onClickLogout(evt)}
              >
                <FaDoorOpen className="m-1" />
                Logout
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink className="nav-link" to="/pet/list">
              <FaList className="m-1" />
              Pet List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
