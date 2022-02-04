import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.navPosition}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Feed The Need
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" id="sec-1" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" id="sec-1" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a className="nav-link" id="sec-2" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
