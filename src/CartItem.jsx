import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

/**
 * CartItem Component
 * Manages the display and logic for the shopping cart, including
 * quantity adjustments, subtotal calculations, and total amount aggregation.
 */
const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    /**
     * Extracts numeric values from cost strings.
     * Uses regex to strip non-numeric characters (like currency symbols),
     * ensuring calculations are performed on valid numbers.
     */
    const parseItemCost = (itemCost) => {
        if (typeof itemCost === 'number') return itemCost;
        return parseFloat(itemCost.replace(/[^0-9.]/g, '')) || 0;
    };

    /**
     * Calculates the grand total for all items currently in the cart.
     * It reduces the cart array by multiplying each item's unit cost 
     * by its quantity and adding it to the accumulator.
     */
    const calculateTotalAmount = () => {
        return cart.reduce((total, item) => {
            return total + (parseItemCost(item.cost) * item.quantity);
        }, 0).toFixed(2); // Formats to 2 decimal places for financial accuracy
    };

    /**
     * Navigation handler to return to the product listing page.
     */
    const handleContinueShopping = (e) => {
        onContinueShopping(e);
    };

    /**
     * Placeholder for future payment gateway integration.
     */
    const handleCheckoutShopping = () => {
        alert('Checkout functionality will be integrated in a future update.');
    };

    /**
     * Dispatches an action to increase the quantity of a specific item by 1.
     */
    const handleIncrement = (item) => {
        dispatch(updateQuantity({ ...item, quantity: item.quantity + 1 }));
    };

    /**
     * Decreases item quantity. If quantity reaches 1, the next decrement
     * will trigger the removal of the item from the cart entirely.
     */
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ ...item, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.name)); // Assuming removal by unique name or ID
        }
    };

    /**
     * Removes an item from the cart regardless of its quantity.
     */
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    /**
     * Calculates the subtotal for a single line item (Unit Price x Quantity).
     */
    const calculateTotalSubtotal = (item) => {
        return (item.quantity * parseItemCost(item.cost)).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">{item.cost}</div>
                            <div className="cart-item-quantity">
                                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)} aria-label="Decrease quantity">-</button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)} aria-label="Increase quantity">+</button>
                            </div>
                            <div className="cart-item-total">Subtotal: ${calculateTotalSubtotal(item)}</div>
                            <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
                <br />
                <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;
