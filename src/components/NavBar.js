import React from 'react'
import { Box, Flex, Link, Image, Text } from '@chakra-ui/core'

const NavLink = ({ children }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <Link px={2} color="white">
    {children}
  </Link>
)

const NavBar = () => (
  <nav>
    <Flex
      bg="tomato"
      px={5}
      py={4}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png"
          size={30}
        />
        <Text pl={3} color="white">
          Company
        </Text>
      </Flex>
      <Box>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Contact</NavLink>
      </Box>
    </Flex>
  </nav>
)

export default NavBar
