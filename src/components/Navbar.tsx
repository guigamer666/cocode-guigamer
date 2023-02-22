import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
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
      <Link className="navbar-brand" to="/">
        Código JL
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`} to="/">
              Código del día
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive }) => `nav-item nav-link  ${isActive ? 'active' : ''}`} to="/historico">
              Histórico de código
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
