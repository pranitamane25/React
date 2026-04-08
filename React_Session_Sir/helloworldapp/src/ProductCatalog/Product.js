import React from "react";
import Counter from "./Counter";
class Product extends React.Component{

    constructor(props){
        super(props);
        //initializing state by taking likes(value) from props
        this.state={count:props.likes}
        this.handler=this.handler.bind(this);//event binding
    }

    handler(data){
        //change the state of product likes
        this.setState({likes:data});
    }

    render(){
        return(
            <div>
                <h2>Flowers Details</h2>
                <hr/>
                <p>Title:{this.props.title}</p>
                <img src={this.props.imageurl} width="100"height="100"/>
                <p>Description:{this.props.description}</p>
                <p>Quantity available: {this.props.quantity}</p>
                <p>Unit Price: {this.props.price}</p>
                <p>Likes: {this.state.likes}</p>
                <Counter count={this.props.likes} handler={this.handler}></Counter>
                <br/> 
                <button>Add To Cart</button>
            </div>
        )
    }
}
export default Product;