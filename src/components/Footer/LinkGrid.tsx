import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Cursos</FooterHeading>
      <Stack>
        <Link>Como funcionam</Link>
        <Link>Preços</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link>Privacidade</Link>
        <Link>Termos</Link>
        <Link>Licença</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)