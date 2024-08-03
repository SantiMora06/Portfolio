import { createTheme } from '@mantine/core'

const theme = createTheme({
  /** Put your mantine theme override here */
  colorScheme: 'light',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', // font family for the entire application
  headings: {
    fontFamily: 'Courier New, Courier, monospace',
    sizes: {
      h1: {
        fontSize: (36)
      },
      h2: {
        fontSize: (30)
      },
      h3: {
        fontSize: (24)
      },
      h3: {
        fontSize: (18)
      }
    }
  },

});

export default theme
