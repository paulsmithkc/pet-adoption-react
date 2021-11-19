import { NavLink } from 'react-router-dom';

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
                Logout
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink className="nav-link" to="/pet/list">
              Pet List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
