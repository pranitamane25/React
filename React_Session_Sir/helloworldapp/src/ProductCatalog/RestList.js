

import React from 'react'
import Product from './Product';


class RestList extends React.Component {
    constructor(props){
        super(props);
        this .state={product:[]};
    }

    componentDidMount(){
        //fetch data from rest api
        fetch('http://localhost:8080/products')
        .then(
            async response=>{
                const data=await response.json();
                if(!response.ok){
                    const error=(data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                this.setState({products:data})
            }).catch(error=>{
            this.setState({errorMessage:error.toString()});
            console.log("there was an error fetching the products"+error);
        })
    }





     render(){
    

    return(
        <div>{
            this.state.product.map(item=>
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
    )}

}export default RestList;
