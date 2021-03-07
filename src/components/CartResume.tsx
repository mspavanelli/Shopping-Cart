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
import CartItem from './CartItem'

const CartResume = () => {
  const { isOpen, onClose } = useDisclosure()

  return (
    <Drawer isOpen={true} onClose={onClose} size='sm'>
      <DrawerOverlay data-testid='cart-resume'>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>CartResume</DrawerHeader>
          <DrawerBody>
            Products
            <hr />
            <CartItem
              product={{
                name: 'iMac',
                price: '1200',
                image:
                  'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
              }}
            />
          </DrawerBody>
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
