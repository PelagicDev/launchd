import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

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
  Select,
  useDisclosure,
} from '@chakra-ui/core'

type Boat = { id: number; name: string }

const BOATS = [
  { id: 1, name: "23' Clearwater" },
  { id: 2, name: "28' Regulator" },
  { id: 3, name: "16' Boston Whaler" },
  { id: 4, name: "22' Sea Hunt" },
  { id: 5, name: "35' Triton" },
]

const Launcher = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    onClose()
  }

  const NewLaunchForm = () => {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          {/* register your input into the hook by invoking the "register" function */}
          <Select
            name="boat"
            placeholder="Select boat"
            ref={register({ required: true })}
            mb={2}
          >
            {BOATS.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </Select>
          <Select name="placement" defaultValue="dock" ref={register} mb={2}>
            <option value="dock">Dock</option>
            <option value="fishing-am">Fishing (early morning)</option>
            <option value="fuel">Fuel (Wet Slip)</option>
            <option value="after-hours">Request After Hours</option>
          </Select>

          {errors.boat && <span>This field is required</span>}
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variantColor="blue" type="submit">
            Save Launch
          </Button>
        </ModalFooter>
      </form>
    )
  }

  return (
    <Flex justifyContent="center" className="launcher">
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>New Launch</ModalHeader>
            <ModalCloseButton />
            <NewLaunchForm />
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
