import { useEffect, useState } from 'react';
import styles from './navbar.module.css';

function Navbar() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsNavbarFixed(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.navbarContainer}>
      <div
        className={`${styles.container} ${isNavbarFixed ? styles.fixed : ''}`}
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
      <div className={isNavbarFixed ? styles.extraSpace : ''}></div>
    </div>
  );
}

export default Navbar;
