module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    screens: {

      '2xl': {'max': '2500px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1500px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1025px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '425px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        'header': "url('./asset/Background-header1.png')",
        'header2': "url('./asset/Background-header2.svg')",
        'header1024': "url('./asset/Background-header1024.jpg')",
        'header425': "url('./asset/Background-header425.jpg')",
        'edt': "url('./asset/EDT.svg')",
        'weexa': "url('./asset/Weexa.svg')",
        'world': "url('./asset/World.svg')",
        'shoppy': "url('./asset/Shoppy.svg')",
        'lumieres': "url('./asset/lumieres.svg')",
        'illu2': "url('./asset/illu2.png')",
        'wordpress': "url('./asset/Wordpress.jpg')",
        'webdesignsvg': "url('./asset/Web-design.jpg')",
        'maintenance': "url('./asset/Maintenance.jpg')",
        'charteGraphique': "url('./asset/charte-graphique.jpg')",
        'photographie': "url('./asset/photographie.jpg')",
        'photographie-1024': "url('./asset/photographie-1024.jpg')",
        'creationLogo': "url('./asset/creation-logo.jpg')",
        'creationLogo-1024': "url('./asset/creation-logo-1024.jpg')",
        'motionDesign': "url('./asset/motion-design.jpg')",
        'motionDesign-1024': "url('./asset/motion-design-1024.jpg')",
        'wordpress-1024': "url('./asset/Wordpress-1024.jpg')",
        'webdesignsvg-1024': "url('./asset/Web-design-1024.jpg')",
        'maintenance-1024': "url('./asset/Maintenance-2024.jpg')",
        'wordpress-425': "url('./asset/Wordpress-425.jpg')",
        'webdesignsvg-425': "url('./asset/Web-design-425.jpg')",
        'maintenance-425': "url('./asset/Maintenance-425.jpg')",
        'spaceBetween-1024': "url('./asset/space-between-1024.png')",
        'spaceBetween': "url('./asset/space-between.png')",
        'spaceBetween-2560': "url('./asset/space-between-2560.png')",
      },
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main': '#FCFAFA',
        'secondary': '#FE856E',
        'third': '#24252D',
      },
      colors: {
        'main': '#FCFAFA',
        'secondary': '#FE856E',
        'third': '#24252D',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
};