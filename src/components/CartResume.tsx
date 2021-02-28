import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Input,
} from '@chakra-ui/react'

const CartResume = () => {
  const { isOpen, onClose } = useDisclosure()

  return (
    <Drawer isOpen={true} onClose={onClose} size='sm'>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>CartResume</DrawerHeader>
          <DrawerBody>Products</DrawerBody>
          <DrawerFooter>
            <Stack direction='column' width='full' spacing='4'>
              <Stack direction='row'>
                <Input placeholder='Add a discount code' />
                <Button width='40' colorScheme='green'>
                  Apply
                </Button>
              </Stack>
              <Button width='full' colorScheme='blue'>
                Checkout
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default CartResume
