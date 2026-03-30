import React from "react";

class Product extends React.Component{
    render(){
        return(
            <div>
                <h2>Flowers Details</h2>
                <hr/>
                <p>Title:{this.props.title}</p>
                <img src={this.props.imageurl} width="100"height="100"/>
                <p>Description:{this.props.description}</p>
                <br/>
                
                <button>Add To Cart</button>

            </div>
        )
    }
}
export default Product;