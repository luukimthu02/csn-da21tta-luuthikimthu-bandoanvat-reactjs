import React from 'react'
import { useShoppingContext } from '../contexts/ShoppingContext'
import { formatCurrency } from '../helpers/common'


const CartItem = ({ id, name, price, qty, thumbnail }) => {

    const { increaseQty, decreaseQty, removeCartItem } = useShoppingContext()

    return (
        <tr>
            <td><img src={thumbnail} className="img-fluid rounded" alt="Product 1" /></td>
            <td><span className="item-name">{name}</span></td>
            <td><span className="item-quantity">{formatCurrency(price)} <i className="fa-solid fa-xmark"></i> {qty}</span>
                <button type="button" className="btn btn-sm btn-primary ms-4 me-1" onClick={() => decreaseQty(id)}><strong>-</strong></button>
                <button type="button" className="btn btn-sm btn-primary" onClick={() => increaseQty(id)}><strong>+</strong></button>
            </td>
            <td><span className="item-price">{formatCurrency(qty * price)}</span></td>
            <td>
                <button className="btn btn-sm btn-danger btn-remove" onClick={() => removeCartItem(id)}><i className="fas fa-trash-alt"></i></button>
            </td>
        </tr>
    )
}

export default CartItem