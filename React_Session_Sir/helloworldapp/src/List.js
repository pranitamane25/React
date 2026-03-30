import React from "react";
import data  from './data/product.json';

import Product from "./Product";

class List extends React.Component{
    render(){
        const flowers=data;

    return(
        <div>{
            flowers.map(item=>
                <Product  id ={item.id}
                title ={item.title}
                description={item.description}
                imageurl={item.imageurl}

                />
            )
        }
        </div>
    )

}
}

export default List;