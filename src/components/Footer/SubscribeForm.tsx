import {
    Button,
    chakra,
    HTMLChakraProps,
    Input,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import { FooterHeading } from './FooterHeading'
  
  export const SubscribeForm = (props: HTMLChakraProps<'form'>) => {
    return (
      <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
        <Stack spacing="4">
          <FooterHeading>Inscreva-se na nossa newsletter</FooterHeading>
          <Text>Receba notificações de novos cursos recomendados pela nossa plataforma.</Text>
          <Stack spacing="4" direction={{ base: 'column', md: 'row' }}>
            <Input
              bg={useColorModeValue('white', 'inherit')}
              placeholder="Digite seu e-mail"
              type="email"
              required
              focusBorderColor={useColorModeValue('blue.500', 'blue.300')}
              _placeholder={{
                opacity: 1,
                color: useColorModeValue('gray.500', 'whiteAlpha.700'),
              }}
            />
            <Button
              type="submit"
              bg="purple.650"
              color="orange.300"
              flexShrink={0}
              _hover={{ bg: "purple.600" }}
              width={{ base: 'full', md: 'auto' }}
            >
              Assinar
            </Button>
          </Stack>
        </Stack>
      </chakra.form>
    )
  }