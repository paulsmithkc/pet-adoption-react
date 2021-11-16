function Navbar({ auth, screen, onNavigate }) {
  return (
    <header className="navbar navbar-expand navbar-dark bg-dark">
      <nav className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              href="/login"
              onClick={(evt) => onNavigate(evt, '/login')}
            >
              Login
            </a>
          </li>
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
