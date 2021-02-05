import React from 'react'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Checkout.css'
function Checkout() {
    const [{basket}] = useStateValue();
    return( <div className="checkout">
        <img className="checkout_ad" src="https://res.cloudinary.com/dwbgv1uxp/image/upload/v1612266539/great-indian-festival-sale-add-money-offer_nqvbwf.png" alt=""/>
        {basket?.length ===0 ? (
            <div>   
            <h2>Your Shopping Basket is empty</h2>
            <p>Your have no items in your shopping Basket. Buy one </p>
            </div>
        ) :(
            <div>
                <h2 className='checkout_title'>Your Shopping Basket</h2>
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                
            </div>
        )}
    </div>

    ) ;
}
export default Checkout;