const color = {
    primary: 'rgb(52, 74, 224)',
    danger: '#e22d44',
    info: '#5856d6'
  };

  module.exports = {
    theme: {
      sidebarWidth: 250,
      fontFamily: {
        base: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        ],
        monospace: [
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'Fira Code',
          'Fira Mono',
          'Droid Sans Mono',
          'Consolas',
          'Roboto Mono',
          'Source Code Pro',
          'monospace'
        ]
      },
      color: {
        link: color.info,
        linkHover: 'rgb(70, 69, 171)',
        sidebarBackground: 'white',
        errorBackground: color.danger
      }
    },
    styles: {
      StyleGuide: {
        root: {
          'text-rendering': 'optimizeLegibility',
          '-moz-osx-font-smoothing': 'grayscale',
          '-webkit-font-smoothing': 'antialiased'
        },
        sidebar: {
          '&::-webkit-scrollbar': {
            width: 10
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'white'
          },
          '&::-webkit-scrollbar-thumb': {
            'border': `3px solid ${color.primary}`,
            'borderTopWidth': 0,
            'borderBottomWidth': 0,
            'backgroundColor': '#fff',
            'minHeight': 40,
            '&:active': {
              borderLeftWidth: 2,
              borderRightWidth: 2
            }
          }
        },
        content: {},
        logo: {
          border: 'none',
          paddingBottom: 0,
          color: `${color.primary} !important`
        }
      },
      Logo: {
        logo: {
          color: `${color.primary} !important`,
          fontSize: 20
        }
      },
      ComponentsList: {
        item: {
          '& a': {
            'cursor': 'pointer !important',
            'color': `${color.primary} !important`,
            'fontWeight': 500,
            'paddingLeft': '30px',
            '&:hover': {
              textDecoration: 'underline',
            }
          }
        },
        heading: {
          fontSize: '18px !important',
          color: `${color.primary} !important`
        }
      },
    }
  };
