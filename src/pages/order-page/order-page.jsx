

import { useSelector } from 'react-redux'
import OrderItems from '../../components/order-items/order-items'
import './order-page.css'
import { calcTotalPrice } from '../../components/utils'

export default function OrderPage() {

  const items = useSelector(state => state.cart.itemsInCart)
  if (items.length < 1) {
    return <h1 className='order-not'> Ваша корзина пуста</h1>
  }

  return (
    <div className='order-page'>
      <div className='order-page_left'>
        {items.map(film => <OrderItems film={film} />)}
      </div>
      <div className='order-page_right'>
        <span>{items.length}товаров на сумму {calcTotalPrice(items)}</span>
        <button className='buy-btn'>Купить</button>

      </div>
    </div>
  )
}