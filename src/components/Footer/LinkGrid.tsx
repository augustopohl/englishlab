import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading'

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4">Cursos</FooterHeading>
      <Stack>
        <Link>Tipos de cursos</Link>
        <Link>Preços</Link>
      </Stack>
    </Box>
    <Box minW="130px">
      <Stack>
        <Link>Termos e privacidade</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)