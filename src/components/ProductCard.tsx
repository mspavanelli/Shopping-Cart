import { Box } from '@chakra-ui/react'

import Product from 'types/Product'

interface ProductCardProps {
  product: Product
  addToCart(product: Product): void
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  return (
    <Box data-testid='product-card'>
      <h3>{product.name}</h3>
      <strong>{product.price}</strong>
      <img data-testid='product-image' src={product.image} alt='' />

      <button onClick={() => addToCart(product)}>Add</button>
    </Box>
  )
}

export default ProductCard
