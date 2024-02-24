import SocialLinks from '../../components/social-links/SocialLinks';
import About from '../about/About';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.container} id="home">
      <div className={styles.containerContent}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <h1>Buenas, me llamo Anthony Gómez</h1>
            <h3>Desarrollador Front-end</h3>

            <SocialLinks />
          </div>

          <div className={styles.imgContainer}>
            <img src="/perfil.png" alt="" />
          </div>
        </div>

        <About />
      </div>
    </div>
  );
}

export default Home;
