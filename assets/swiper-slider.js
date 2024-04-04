class SwiperComponent extends HTMLElement {
  constructor() {
    super();
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
      slidesPerView: 2.5,
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
