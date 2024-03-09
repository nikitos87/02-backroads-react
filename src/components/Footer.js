const links = [
  {
    href: "#home",
    title: "home",
  },
  {
    href: "#about",
    title: "about",
  },
  {
    href: "#services",
    title: "services",
  },
  {
    href: "#feautured",
    title: "featured",
  },
];

const date = new Date().getFullYear();

const Footer = ({ icons }) => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <a href={link.href} className="footer-link">
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {icons.map((icon, idx) => {
          return (
            <li key={idx}>
              <a href={icon.href} target="_blank" className="footer-icon">
                <i className={icon.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright {date}&copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
