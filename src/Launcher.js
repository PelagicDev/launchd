import React from 'react'
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/core'

const Launcher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex justifyContent="center" className="launcher">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>LAUNCH FORM</ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>

      <Box mt="3">
        <Button variantColor="green" size="md" onClick={onOpen}>
          New Launch
        </Button>
      </Box>
    </Flex>
  )
}

export default Launcher
