import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton
      as="a"
      href="#"
      aria-label="Instagram"
      icon={<FaInstagram
        fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Facebook"
      icon={<FaFacebook
        fontSize="20px" />}
    />
    <IconButton
      as="a"
      href="#"
      aria-label="Twitter"
      icon={<FaTwitter
        fontSize="20px" />}
    />
  </ButtonGroup>
)
