import React from "react";

class Register extends React.Component{

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
