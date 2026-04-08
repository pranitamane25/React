import React from "react";
import data  from '../data/cart.json';
import Item from "./Item";


class Cart extends React.Component{
    render(){
        const cartItems=data;

    return(
        <div>
               <h2>My Shopping Cart</h2>2
            
            {
            
            cartItems.map(item=>
                <Item
                key={item.id}
                 id ={item.id}
                title ={item.title}
                imageurl={item.imageurl}
                quantity={item.quantity}
                price={item.price}
                
                />
            )
        }
        </div>
    )

}
}

export default Cart;