import React from "react";

class Item extends React.Component{

    constructor(props){
        super(props);
        //initializing state by taking quantity(value) from props
        this.state={quantity:props.quantity}
       
    }

   
    render(){
        return(
            <div>
             
                <hr/>
                <p>Title:{this.props.title}</p>
                <img src={this.props.imageurl} width="100"height="100"/>
                <p>Quantity : {this.props.quantity}</p>
                <input value={this.state.quantity} type="text" />
                <p>Unit Price: {this.props.price}</p>
                <p>Amount :{this.props.price * this.props.quantity}Rs</p>
                <br/> 
                <button>Remove</button>
            </div>
        )
    }
}
export default Item;