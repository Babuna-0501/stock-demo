import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "../StateProvider";

function CollectionsProduct({ id, preview, title, price, rating, hideButton }) {
    const [{ collect }, dispatch] = useStateValue();

    const removeFromCollections = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_COLLECT',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <video className='checkoutProduct__image' src={preview} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick={removeFromCollections}>gfdgdfgfd</button>
                )}
            </div>
        </div>
    )
}

export default CollectionsProduct;
