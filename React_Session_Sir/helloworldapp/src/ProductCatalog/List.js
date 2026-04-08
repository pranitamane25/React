import React from "react";
import data  from '../data/product.json';

import Product from "./Product";

class List extends React.Component{
    render(){
        const flowers=data;

    return(
        <div>{
            flowers.map(item=>
                <Product 
                key={item.id}
                 id ={item.id}
                title ={item.title}
                description={item.description}
                imageurl={item.imageurl}
                quantity={item.quantity}
                price={item.price}
                likes={item.likes}
                />
            )
        }
        </div>
    )

}
}

export default List;