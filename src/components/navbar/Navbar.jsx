import { useEffect, useState } from 'react';
import styles from './navbar.module.css';

function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsNavbarFixed(scrollY > 0);
    };

    const handleResize = () => {
      const mediaQuery = window.matchMedia('(min-width: 1366px)');
      setToggleMenu(mediaQuery.matches);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`${styles.navbarContainer} ${
        isNavbarFixed ? styles.fixed : ''
      }`}
    >
      <div
        className={`${toggleMenu ? styles.container : styles.hideMenu} ${
          isNavbarFixed ? styles.fixed : ''
        }`}
        id="container"
      >
        <ul className={styles.linksContainer}>
          <li>
            <a className={styles.links} href="#home">
              Inicio
            </a>
          </li>

          <li>
            <a className={styles.links} href="#projects">
              Proyectos
            </a>
          </li>

          <li>
            <a className={styles.links} href="#projects">
              habilidades
            </a>
          </li>

          <li>
            <a className={styles.links} href="#contact">
              Contacto
            </a>
          </li>
        </ul>
      </div>

      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className={styles.buttonMenu}
      >
        ☰
      </button>
      <div className={isNavbarFixed ? styles.extraSpace : ''}></div>
    </div>
  );
}

export default Navbar;
