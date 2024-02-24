import styles from './app.module.css';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
