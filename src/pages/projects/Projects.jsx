import Skills from '../skills/Skills';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './projects.module.css';

import { EffectCoverflow, Navigation } from 'swiper/modules';
import { useState } from 'react';

const slide_images = [
  {
    name: 'project-1',
    title: 'App of Movies',
    img: '/public/imagesProjects/movie-app.png',
    url: 'https://app-of-movies.vercel.app/',
  },
  {
    name: 'project-2',
    title: 'En proceso...',
    img: '/public/imagesProjects/process.jpeg',
    url: '',
  },
  {
    name: 'project-3',
    title: 'En proceso...',
    img: '/public/imagesProjects/process.jpeg',
    url: '',
  },
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState(slide_images[0].img);
  const [showHandSpan, setShowHandSpan] = useState(true);

  const handleSlideChange = (swiper) => {
    setSelectedImage(slide_images[swiper.activeIndex].img);

    if (showHandSpan) {
      setShowHandSpan(false);
    }
  };

  return (
    <div className={styles.container} id="projects">
      <div
        className={`${styles.background} ${styles.backgroundImage}`}
        style={{
          backgroundImage: `url(${selectedImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className={styles.projectsContainer}>
        {showHandSpan ? (
          <>
            <img className={styles.handImg} src="/swipe-hand.png" alt="" />
            <span className={styles.handSpan}>
              Desliza para cambiar o click para entrar al proyecto
            </span>
          </>
        ) : (
          <>
            <h1 className={styles.title}>Proyectos</h1>
            <hr className={styles.hr} />
          </>
        )}

        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          navigation={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 20,
            stretch: 20,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
          className={styles.swiper}
          onSlideChange={handleSlideChange}
        >
          {slide_images.map((image) => (
            <SwiperSlide key={image.name} className={styles.swiperSlide}>
              <a
                className={
                  (image.name === 'project-2' || image.name === 'project-3') &&
                  styles.process
                }
                href={image.url}
                target="_blank"
              >
                <img className={styles.img} src={image.img} alt={image.name} />
              </a>
              <h2>{image.title}</h2>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Skills />
    </div>
  );
}
