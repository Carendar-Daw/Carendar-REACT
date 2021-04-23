const typography = {
  bebasNeue: '/public/assets/fonts/BebasNeue-Regular/BebasNeue-Regular.ttf',
  montserrat: '/public/assets/fonts/Montserrat/Montserrat-Regular.ttf',
  poppins: '/public/assets/fonts/Poppins/Poppins-Regular.ttf',
  robotoSlab: '/public/assets/fonts/Roboto_Slab/static/RobotoSlab-Regular.ttf',

};

const Fonts = {
  bebasNeue: `@font-face {
  font-family: BebasNeue-Regular;
  src: url(${typography.bebasNeue});
}`,
  montserrat: `@font-face {
  font-family: Montserrat-Regular;
  src: url(${typography.montserrat});
}`,
  poppins: `@font-face {
  font-family: Poppins-Regular;
  src: url(${typography.poppins});
}`,
  robotoSlab: `@font-face {
  font-family: RobotoSlab-Regular;
  src: url(${typography.robotoSlab});
}`,
};

export default Fonts;
