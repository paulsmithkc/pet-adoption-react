function Navbar({ auth, screen, onNavigate, onLogout }) {
  return (
    <header className="navbar navbar-expand navbar-dark bg-dark">
      <nav className="container-fluid">
        {auth && <span className="navbar-text">{auth.email}</span>}
        <ul className="navbar-nav">
          {!auth && (
            <li className="nav-item">
              <a
                className="nav-link"
                href="/login"
                onClick={(evt) => onNavigate(evt, '/login')}
              >
                Login
              </a>
            </li>
          )}
          {auth && (
            <li className="nav-item">
              <a
                className="nav-link"
                href="/login"
                onClick={(evt) => onLogout()}
              >
                Logout
              </a>
            </li>
          )}
          <li className="nav-item">
            <a
              className="nav-link"
              href="/pet/list"
              onClick={(evt) => onNavigate(evt, '/pet/list')}
            >
              Pet List
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
