class SwiperComponent extends HTMLElement {
    constructor() {
      super();
    this.dataColumnsDesktop = this.getAttribute("data-columns-desktop");
    this.dataColumnsMobile = this.getAttribute("data-columns-mobile");
    }
  
    connectedCallback() {
      this.initSwiper();
  
      // Listen for window resize events
      window.addEventListener("resize", () => this.handleResize());
    }
  
    initSwiper() {
      // Configure Swiper with the retrieved options
      debugger
      const swiperOptions = {
        slidesPerView: this.dataColumnsDesktop,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      };
  
      // Check screen width and initialize Swiper accordingly
      new Swiper(this, swiperOptions)
    }
  
    handleResize() {
      this.initSwiper();
    }
  }
  
  customElements.define("swiper-component", SwiperComponent);
  