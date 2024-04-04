// Define a class for the Swiper component that extends the HTMLElement class
class SwiperComponent extends HTMLElement {
  // The constructor is called when an object is created with the class
  constructor() {
    super(); // Call the parent class constructor
  }

  // connectedCallback is a lifecycle method that is called when the custom element is first connected to the document's DOM
  connectedCallback() {
    this.initSwiper(); // Initialize the Swiper when the component is connected
  }

  // Method to initialize the Swiper
  initSwiper() {
    // Define the options for the Swiper
    const swiperOptions = {
      slidesPerView: 1, // Number of slides per view
      spaceBetween: 20, // Space between slides
      breakpoints: { // Breakpoints for different screen widths
        1024: {
          slidesPerView: 2.55,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        }
      },
      navigation: { // Navigation options
        nextEl: ".swiper-button-next", // Selector for the next button
        prevEl: ".swiper-button-prev", // Selector for the previous button
      }
    };

    // Initialize the Swiper with the options
    new Swiper(this, swiperOptions);
  }
}

// Define the custom element
customElements.define("swiper-component", SwiperComponent);