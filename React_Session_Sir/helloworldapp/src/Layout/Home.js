import Login from '../Membership/Login';

function Home(){
  return(
    
  <div>
    <div className="jumbotron text-center">
      <h1>Transflower Learning Pvt. Ltd.</h1>
      <p>Mentor as a Service</p>
      <p>React JS Learning is a fun</p>
    </div>

    <div className="container">
      <div className="row">

        <div className="col-sm-4">
          <p>Flowers</p>
          <p>Celebrate every moment using flowers</p>
        </div>

        <div className="col-sm-4">
          <p>Fruits</p>
          <p>Enjoy healthy life using fresh fruits</p>
        </div>

        <div className="col-sm-4">
          <Login></Login>
          
        </div>

      </div>
    </div>
  </div>
);

} export default Home;