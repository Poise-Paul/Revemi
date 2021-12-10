module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('/Image-Assets/Banner.png')",
        "products-bg": "url('/Image-Assets/Products-img.jpg')",
        "sustain-bg": "url('/Image-Assets/Sustainability Bg.svg')",
        "about-bg": "url('/Image-Assets/About-img.png')",
        "sustains-bg": "url('/Image-Assets/Sustain.jpg')",
        "value-bg": "url('/Image-Assets/Value-bg.jpg')",
        "contact-bg": "url('/Image-Assets/Contact.jpg')",
        "sustain-over": "url('/Image-Assets/sustainability-overlay.svg')",
      },
      colors: {
        primary: "#4DB268",
      },
      screens: {
        sm: "300px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
