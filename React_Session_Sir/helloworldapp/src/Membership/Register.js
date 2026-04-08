import React from "react";

class Register extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            firstName: "sanika",
            lastName: "kulkarni",
            email: "sanikakulkarni@gmail.com",
            password: "password1233"
        };
    }

    render(){
        return (
            <div>
                <h2>Transflower Registration</h2>
                <hr/>
                <form>
                    <label>First Name</label>
                    <input type= "text"/>
                    <br/>

                      <label>Last Name</label>
                    <input type= "text"/>
                    <br/>

                     <label>Email</label>
                    <input type= "text"/>
                    <br/>

                     <label>password</label>
                    <input type= "password"/>
                    <br/>

                    <button>Register</button>
                </form>
            </div>

        );

        }
    }

    export default Register;
