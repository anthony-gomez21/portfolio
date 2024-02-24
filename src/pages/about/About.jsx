import styles from './about.module.css';

function About() {
  return (
    <div className={styles.textContainerAbout} id="about">
      <h2>
        Te cuento <span>sobre mi</span>
      </h2>

      <p>
        Empece en desarrollo web hace mas de 1 año, me capacite de forma
        autodidacta y pidiendo consejos a compañeros que ya trabajan en el
        rubro.
        <br />
        Tengo experiencia personal realizando proyectos en los cual pude poner
        en practica situaciones realistas en el ámbito laboral.
        <br />
        <br />
        Me gusta la sinceridad y no me presento como un desarrollador perfecto,
        me presento como una persona responsable, puntual y con una mentalidad
        abierta para mejorar, desde ya muchas gracias.
      </p>
    </div>
  );
}

export default About;
