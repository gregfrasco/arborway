import path from 'path'
import { createGenerateClassName } from '@material-ui/core/styles'
const generateClassName = createGenerateClassName()

export default {
  siteRoot: "http://gregfrasco.com",
  basePath: "arborway",
  entry: path.join(__dirname, 'src', 'index.tsx'),
  plugins: [
    'react-static-plugin-typescript',
    [
      'react-static-plugin-jss',
      {
        providerProps: {
          generateClassName
        }
      }
    ],
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ]
}
