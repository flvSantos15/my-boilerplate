import { extendTheme } from '@chakra-ui/react'

import styles from './styles'

import Button from './components/button'
import Menu from './components/menu'

import colors from './foundations/colors'
import fonts from './foundations/fonts'
import fontSizes from './foundations/fontSizes'
import fontWeights from './foundations/fontWeight'
import breakpoints from './foundations/breakpoint'

const theme = extendTheme({
   colors,
   fonts,
   fontSizes,
   fontWeights,
   breakpoints,
   styles,
   components: {
    Button,
    Menu
    // Alert
    // Modal
   }
})

export default theme
