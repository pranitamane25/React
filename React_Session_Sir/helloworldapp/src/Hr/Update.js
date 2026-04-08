

import React from 'react';
import EmployeeService from './EmployeeService';

class UpdateEmployeeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            firstname:'',
            lastname:'',
            email:''
        };
    }

    componentDidMount(){

    }

render(){
    return(
        <div>
            <h2> Update new Employee</h2>
            
        </div>
    )
}

}

export default UpdateEmployeeComponent;