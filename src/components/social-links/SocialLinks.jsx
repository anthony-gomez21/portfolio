import styles from './socialLinks.module.css';

const links = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/anthony-gomez-471b502a8/',
    icon: '/linkedin.png',
  },

  {
    name: 'github',
    url: 'https://github.com/anthony-gomez21',
    icon: '/github.png',
  },

  {
    name: 'whatsapp',
    url: 'https://wa.link/c8mv3d',
    icon: '/whatsapp.png',
  },

  {
    name: 'cv',
    url: '/src/assets/portfolio.pdf',
    icon: '/cv.png',
  },
];

function SocialLinks() {
  return (
    <div className={styles.linksContainer}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          download={link.name === 'cv' ? 'mi-cv.pdf' : null}
        >
          <img src={link.icon} alt={`${link.name}`} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
