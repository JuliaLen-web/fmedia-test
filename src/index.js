import "./styles/main.sass";

import Swiper, {Mousewheel, Navigation, Thumbs, Pagination} from 'swiper'
Swiper.use([Mousewheel, Navigation, Thumbs, Pagination])


window.addEventListener('load', () => {
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 12,
    resizeObserver: true,
    observer: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    grabCursor: true,
    preloadImages: true,
    direction: 'horizontal',
    lazy: true,
    slidesPerView: '3',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })

  const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 30,
    resizeObserver: true,
    observer: true,
    preloadImages: true,
    direction: 'horizontal',
    lazy: true,
    slidesPerView: '1',
    thumbs: {
      swiper: galleryThumbs
    }
  })
})

