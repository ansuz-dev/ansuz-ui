module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: ({opacityVariable, opacityValue}) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-primary), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-primary), var(${opacityVariable}, 1))`;
            }
            return "rgb(var(--color-primary))";
          },
        },
        secondary: {
          DEFAULT: ({opacityVariable, opacityValue}) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-secondary), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-secondary), var(${opacityVariable}, 1))`;
            }
            return "rgb(var(--color-secondary))";
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
