import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.5,
  scaleRatio: 2,

  googleFonts: [
    {
      name: "Nunito",
      styles: ["400", "600", "700"],
    },
    {
      name: "Montserrat",
      styles: ["400", "600", "700"],
    },
  ],
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography
