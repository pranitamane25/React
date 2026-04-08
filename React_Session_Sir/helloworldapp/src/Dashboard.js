import React from 'react';

//React component Lifecycle
class Dashboard extends React.Component{
    //initialization
    constructor(props){
        console.log("on initialization");
        super(props);
        this.state={company:" Transflower" , year:2020};
    }

    //EventHandler1
    changeCompanyTitle(){
        console.log("click event handler code execution");
        this.setState({company:" Seed Infotech" });
    }

    //EventHandler 2
    changeYear(){
        console.log("click event handler code execution");
        this.setState({year:2021});
    }

    //before Mounting
componentWillMount(){
console.log("componentWillMount Execution");
}



    //Mounting
render(){
    console.log("rendering logic invocation");
    return(
        <div>
            <h1>Transflower Balance Sheet</h1>
            <br />
            <h3>{this.state.company}</h3>
            <br></br>
            <h3>{this.state.year}</h3>
            <hr />
            <a onClick={this.changeCompanyTitle.bind(this)}> Change Company</a>
            <hr />
              <a onClick={this.changeYear.bind(this)}> Change Financial Year</a>
        </div>
    );
}
//After mounting...Post render event Handler 
componentDidMount(){
console.log("componentDidMount execution");
}

//Pre update event Handler
componentWillUpdate(){
console.log("componentWillUpdate Executed");
}

//post update event handler
componentDidUpdate(){
console.log("componentDidUpdate Executed");
}
}


export default Dashboard;