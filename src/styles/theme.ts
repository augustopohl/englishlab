import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        purple: {
           "650": "#651180" 
        },
        orange: {
            "450": "#ec8b00"
        },
        white: {
            "50": "#fdfffe"
        },
        fonts: {
            heading: 'Poppins',
            body: 'Poppins',
        },
        styles: {
            global: {
                body: {
                    bg: "#fdfffe",
                    color: 'gray.700'
                }
            }
        }
    }
})

export default theme;