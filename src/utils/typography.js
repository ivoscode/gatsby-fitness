import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.44,
  scaleRatio: 2.15,

  googleFonts: [
    {
      name: "Nunito",
      styles: ["400"],
    },
    {
      name: "Montserrat",
      styles: ["400"],
    },
  ],
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: ["Montserrat", "sans-serif"],
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 700,
})

export default typography
