import logo from "../images/logo.svg";

const links = [
  {
    href: "#home",
    text: "home",
  },
  {
    href: "#about",
    text: "about",
  },
  {
    href: "#services",
    text: "services",
  },
  {
    href: "#tours",
    text: "tours",
  },
];

const Navbar = ({ icons }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {links.map((link, idx) => {
            return (
              <li key={idx}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {icons.map((icon, idx) => {
            return (
              <li key={idx}>
                <a href={icon.href} target="_blank" className="nav-icon">
                  <i className={icon.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
