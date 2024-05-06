import CartItems from '../cart-items/cart-items'
import './cart-menu.css'
import Button from '../button/button'
import { calcTotalPrice } from '../utils'


export default function CartMenu({ items, handleClick }) {
  return (
    <div className='cart-menu'>
      <div className='cart-menu_film-list'>
        {
          items.length > 0 ? items.map(film => <CartItems film={film} />) : "Корзина пуста"
        }
        {
          items.length > 0 ? (
            <div className='cart-modal'>
              <div className='cart-modal_total-price'>
                <span>Итого: </span>
                <span>{calcTotalPrice(items)} сом </span>
              </div>
              <Button onClick={handleClick} type="primary" size='m'>
                Оформить заказ
              </Button>
            </div>
          ) : ""
        }
      </div>
    </div>
  )
}