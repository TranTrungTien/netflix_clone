module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    background: (theme) => ({
      bgTrans:
        "linear-gradient(to right bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
    }),
    extend: {
      colors: {
        "white-999": "#999",
        "black-222": "#222",
      },
      spacing: {
        "2%": "2%",
        "3%": "3%",
        "4%": "4%",
        "5%": "5%",
        "6%": "6%",
        "7%": "7%",
        "8%": "8%",
        "9%": "9%",
        "10%": "10%",

        "85%": "85%",
        "90%": "90%",
        "95%": "95%",
        300: "300px",
        600: "600px",
        1530: "1530px",
        1550: "1550px",
        18: "62px",
      },
      width: {
        42: "168px",
        743: "743px",
        1100: "1100px",
        450: "450px",
        300: "300px",
        "45%": "45%",
        "55%": "55%",
        1530: "1530px",
      },
      height: {
        26: "100px",
        168: "168px",
        352: "352px",
        450: "450px",
        750: "750px",
        560: "560px",
        660: "660px",
      },
      backgroundColor: {
        "red-E5": "#E50914",
        "gray-3030": "#303030",
        "black-333": "#333",
        181818: "#181818",
      },
      zIndex: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        positive: 99999,
        negative: -99999,
      },
      minWidth: {
        300: "300px",
      },
      minHeight: {
        168: "168px",
      },
    },
  },
  variants: {
    extend: {
      visibility: ["hover", "focus", "group-hover", "group-focus"],
      gradientColorStops: ["active", "group-hover", "group-focus"],
    },
  },
  plugins: [],
};
