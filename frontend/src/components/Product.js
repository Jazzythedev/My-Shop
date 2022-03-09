import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
  return (
    <Card className= 'my-3 p-3 rounded'>
        <Card.Img src={product.image} variant='top' />
    </Card>
  )
}

export default Product