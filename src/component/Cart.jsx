import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, increaseQuantity, decreaseQuantity, clearAllItems } from './Redux/Slices/cartReducer'
import { setAlert, clearAlert } from './Redux/Slices/alertReducer'



const Cart = () => {
    const dispatch = useDispatch()
    const Products = useSelector(state => state.cart.items)
    if (Products.length === 0) return <h1 className='text-uppercase text-center px-3 w-100 d-flex align-items-center justify-content-center' style={{ color: "#b4b9c387", height: "80vh", margin: "unset" }}>empty Cart<i className="fa-solid fa-cart-shopping"></i></h1>;
    const ClearCartAlert = () => {
        dispatch(clearAllItems())
        dispatch(setAlert({
            message: "Cart Cleared Successfully!",
            type: "danger"
        }))
        setTimeout(() => {
            dispatch(clearAlert())
        }, 2500);
    }
    const removeAlert = (items) => {
        dispatch(removeFromCart(items));
        dispatch(setAlert({
            message: "Remove item Successfully!",
            type: "primary"
        }))
        setTimeout(() => {
            dispatch(clearAlert())
        }, 2500);
    }
    const buyAlert = () => {
        dispatch(clearAllItems())
        dispatch(setAlert({
            message: "Order Placed Successfully!",
            type: "success"
        }))
        setTimeout(() => {
            dispatch(clearAlert())
        }, 2500);

    }

    return (
        <>
            <div className="cart-container px-4 position-relative  w-100">

                <div className="cart w-100">
                    <div className="cart-heading my-4 text-center w-100 my-3">
                        <nav aria-label="breadcrumb d-flex justify-content-center">
                            <ol className="breadcrumb d-flex justify-content-center">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="cart">Cart</li>
                            </ol>
                        </nav>
                    </div>
                    {Products.map((items, key) => {
                        return <div className='w-100  my-2 p-2 align-items-center  cart-items d-flex' key={key} style={{ gap: "10px" }}>
                            <div className='cart-product-image ' ><img src={items.image} alt="" /></div>
                            <div className=" cart-section-2 d-flex align-items-center justify-content-between flex-wrap">

                                <div className='td'>


                                    <div className='table-data td text-start'  >{items.name.slice(0, 30)} . . .</div>

                                    <span>
                                        Price: ${(parseInt(items.price.replace(/,/g, '')) * parseInt(items.quantity)).toLocaleString()}

                                    </span>
                                </div>
                                <div className="item-quantity d-flex justify-content-end gap-4"  >
                                    <div className="" style={{ width: "130px" }}>


                                        <button className='me-4 btn-sm btn btn-primary rounded-1' onClick={() => { dispatch(decreaseQuantity(items)) }}>-</button>
                                        <span className='ms-1'>{items.quantity}</span>
                                        <button className='ms-4 btn-sm btn btn-primary rounded-1' onClick={() => { dispatch(increaseQuantity(items)) }}>+</button>
                                    </div>

                                    <div className='table-data'>
                                        <button className='btn btn-danger rounded-1' onClick={() => { removeAlert(items) }} >Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })}
                </div>
                <div className="options row mt-5">
                    <button className='col btn btn-danger rounded-0 p-3 text-uppercase fw-bold ' onClick={ClearCartAlert}>Clear Cart</button>
                    <button className='col btn btn-success rounded-0 p-3 text-uppercase fw-bold ' onClick={buyAlert}>Buy $
                        {
                            (Products.map(item => parseInt(item.price.replace(/,/g, '')) * parseInt(item.quantity)).reduce((prev, curr) => prev + curr, 0).toLocaleString())}

                    </button>
                </div>
            </div>

        </>
    )
}


export default Cart
