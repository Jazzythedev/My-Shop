//this is for the cart funtionality.


import React, { useEffect } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'               
import { useDispatch, useSelector } from 'react-redux'               
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = () => {
  const location = useLocation()              
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate() 
  const productId = params.id

  

const qty = location.search ? Number(location.search.split('=')[1]): 1      
 


useEffect(() => {                                                         
  if (productId){                                                         
    dispatch(addToCart(productId, qty))                              
  }
},[dispatch, productId, qty])               


 
const cart = useSelector((state) => state.cart)        
const {cartItems} = cart                              


const removeFromCartHandler = (id) => {          
    dispatch(removeFromCart(id))
}

const checkoutHandler = () => {                      
navigate('/login?redirect=/shipping')             

}

return (
  <Row>
    <Col md={8}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (                     /* in redux store all items, if length is zero go back. */ 
        <Message>
          Your cart is empty <Link to='/'>Go Back</Link>
        </Message>
      ) : (
        <ListGroup variant='flush'>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.product}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />               {/* the following displays details about the item that was added to the cart.  */}
                </Col>
                <Col md={3}>
                  <Link to={`/product/${item.product}`}>{item.name}</Link>
                </Col>
                <Col md={2}>${item.price}</Col>
                <Col md={2}>
                  <Form.Control
                    as='select'                                                /* dropdown allows you to change quantity of item added to cart */
                    value={item.qty}
                    onChange={(e) =>
                      dispatch(
                        addToCart(item.product, Number(e.target.value))
                      )
                    }
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (  /* how to display the dropdown */
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type='button'
                    variant='light'
                    onClick={() => removeFromCartHandler(item.product)}     /* function to delete item from cart */
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Col>
    <Col md={4}>
      <Card>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h2>
              Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
              items
            </h2>
            $
            {cartItems
              .reduce((acc, item) => acc + item.qty * item.price, 0)    /* subtotal uses the reduce function to add the totals. acc is the accumulated sum of each item, and item represents each item.  0 is default value if there arent any items to add. */
              .toFixed(2)}                                             {/* to fixed produces an answer to two decima places. */}
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}                               /* this takes you to final page to buy product. */
            >
              Proceed To Checkout                       {/* takes you to shopping cart page */}
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  </Row>
)
}

export default CartScreen