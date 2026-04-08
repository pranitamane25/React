          import React from "react";


          class Login extends React.Component{
            constructor(props){
              super(props);
              this.state={
                username: "sanikakulkarni@gmail.com" ,
                password: "password1233"
              };
            }

              render(){
                return (
            <div>
              <form>
                
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input type="email" value={this.state.username} onChange={(event) => {
                    this.setState({ username: event.target.value });
                  }} className="form-control" id="email" />
                </div>

                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input type="password" value={this.state.password} onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }} className="form-control" id="pwd" />
                </div>

                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>

                <button type="submit" className="btn btn-success" onClick={(e) => {
                  e.preventDefault();
                  if (this.state.username === "sanikakulkarni@gmail.com" &&
                      this.state.password === "password1233") {
                    console.log("valid user");
                  } else {
                    console.log("invalid user");
                  }
                }}>
                  Login
                </button>

              </form>
            </div>
          );
              }
          }

              export default Login;
