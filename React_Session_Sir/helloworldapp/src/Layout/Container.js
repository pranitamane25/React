
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Login from '../Membership/Login';
import Register from '../Membership/Register';
import List from '../ProductCatalog/List';

import Hello from './Hello';
import GoodBye from './GoodBye';
import Cart from '../ShoppingCart/Cart';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import ListEmployeeComponent from '../Hr/Employees';
import ViewEmployeeComponent from '../Hr/Employee';


function BasicRouting() {
  return (
    <div>
      <h1>Transflower Store</h1>

      <Router>
        <Link to="/Home">Home</Link> |
        <Link to="/Contact">Contact Us</Link> |
        <Link to="/Hello">Hello</Link> |
        <Link to="/Login">Login</Link> |
        <Link to="/Register">Register</Link>|
        <Link to="/Flowers">List</Link>|
        <Link to="/Cart">My Shopping Cart</Link> |
        <Link to="/About">About Us</Link>|
        <Link to="/Employees">Employees</Link>
       


        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Hello" element={<Hello />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Flowers" element={<List />} />
          <Route path="/Register" element={<Register />} />
          {/* <Route exact path="/Hello" element={<Hello/>}/>
          <Route exact path="/GoodBye" element={<GoodBye/>}/> */}
          <Route path="/Hello" element={<Hello />} />
          <Route path="/Goodbye" element={<GoodBye />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Cart" element={<Cart />} />
           <Route path="/About" element={<About />} />
           <Route path="/Employees" element={<ListEmployeeComponent />} />
             <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
           

        </Routes>

      </Router>
    </div>
  );
} export default BasicRouting;




// function Hello(){
//   return(
//     <div>
//       <h2>Hello from Sanika</h2>
//       <hr/>
//       <p>Sanika here</p>
//     </div>

//   );
// }

