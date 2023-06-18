// Write your code here

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let totalQuantity = 0

      let totalPrice = 0

      // eslint-disable-next-line no-restricted-syntax
      for (const item of cartList) {
        totalQuantity += item.quantity
        totalPrice += item.price
      }

      return (
        <div className="cart-summary">
          <h1 className="total-head">
            <span>Order Total:</span> Rs {totalPrice}/-
          </h1>
          <p className="total-para">{totalQuantity} Items in cart</p>
          <button className="total-but" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
