import React, { useState } from 'react'

import { Button } from '@chakra-ui/react'

import Product from 'types/Product'

interface ProductCardProps {
  product: Product
}

const CartItem = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  return (
    <div data-testid='cart-item'>
      <h3>{product.name}</h3>
      <h3>{product.price}</h3>

      <Button onClick={decreaseQuantity}>-</Button>
      <Button onClick={increaseQuantity}>+</Button>

      <span data-testid='quantity'>{quantity}</span>

      <img data-testid='product-image' src={product.image} alt={product.name} />
    </div>
  )
}

export default CartItem
