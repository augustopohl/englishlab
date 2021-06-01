import { Image } from '@chakra-ui/react'
import * as React from 'react'

export const Logo = () => {
  return (
    <Image
    w={["97px", "184px"]}
    borderRadius="4px"
    src="/logo2.jpg"
    alt="Dois balões de conversa em formato de cadeias orgânicas acima do nome da marca"
    justifySelf="center"
    gridColumn="2"
/>
  )
}