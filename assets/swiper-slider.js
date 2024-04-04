class SwiperComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.initSwiper();
    }
  
    initSwiper() {
      // Configure Swiper with the retrieved options
      const swiperOptions = {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
          1024: {
            slidesPerView: 2.55,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      };
  
      // Check screen width and initialize Swiper accordingly
      new Swiper(this, swiperOptions)
    }
  }
  
  customElements.define("swiper-component", SwiperComponent);
  