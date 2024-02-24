import styles from './skills.module.css';

const skills = [
  {
    title: 'html',
    icon: '/skills/html.png',
  },

  {
    title: 'css',
    icon: '/skills/css.png',
  },

  {
    title: 'js',
    icon: '/skills/js.png',
  },

  {
    title: 'nextjs',
    icon: '/skills/nextjs.png',
  },

  {
    title: 'sass',
    icon: '/skills/sass.png',
  },

  {
    title: 'tailwind',
    icon: '/skills/tailwind.png',
  },

  {
    title: 'git',
    icon: '/skills/git.png',
  },
];

function Skills() {
  return (
    <div className={styles.container}>
      <h2>Habilidades</h2>
      <hr className={styles.hr} />

      <div className={styles.content}>
        {skills.map((skill) => (
          <div className={styles.skillsContainer} key={skill.title}>
            <img src={skill.icon} alt={`${skill.title} Image`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
