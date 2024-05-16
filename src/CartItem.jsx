import React from 'react'
import {FaChevronUp, FaChevronDown} from 'react-icons/fa'
import { useGlobalContext } from './context'
const CartItem = ({id, title, price, img, amount}) => {

    const {remove, increase,decrease} = useGlobalContext();
  return (
    <>
    <article className="cart-item">
            <img className='img' src={img} alt={title} />
            <div>
                <h5 className='title-tag'>{title}</h5>
                <h4 className="price-tag">₹{price}</h4>
                <button className="remove-btn" onClick={()=>remove(id)}>Remove</button>
            </div>
            <div className="amount">
                <button className="amount-btn">
                    <FaChevronUp className='amount-icon' onClick={()=>increase(id)}/>
                </button>
                <span className="amount">{amount}</span>
                <button className="amount-btn" onClick={()=>decrease(id)}>
                    <FaChevronDown className='amount-icon'/>
                </button>
            </div>
    </article>
        
    </>
  )
}

export default CartItem;
