
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import News from '../layout/News';
import Services from '../layout/Services';
import ContactUs from './ContactUs';
import Home from '../layout/Home';
import AboutUs from './AboutUs';
import Application from './Application';
import LandingPage from './LandingPage';


function Menu() {
  

  return (
    <div className="Menu">
        
       <Router>
       
    <div className="Menu">
      {/* <ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/contact"> Contact</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/login">Login</Link></li>
      </ul> */}


      {/* navbar */}
      <nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/landingpage">LoanApplication System</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item py-2">
          <Link class="nav-link active" aria-current="page" to="/"><h5>HomePage</h5></Link>
        </li>
      
        <li class="nav-item py-2 ">
       <Link class="nav-link"  to="/loan">
        <h5> LoanApplications</h5></Link>
        </li>
        <li class="nav-item py-2 ">
       <Link class="nav-link"  to="/news">
        <h5> News</h5></Link>
        </li>
        
        <li class="nav-item py-2 ">
       <Link class="nav-link"to="/service">
       <h5> Services</h5></Link>
        </li>
        <li class="nav-item py-2 ">
       <Link class="nav-link" to="/aboutus">
        <h5> AboutUs</h5></Link>
        </li>
        <li class="nav-item py-2 ">
       <Link class="nav-link" to="/contactus">
         <h5>ContactUs</h5></Link>
        </li>
        <li class="nav-item py-2 ">
       <Link class="nav-link" to="/admin">
         <h5>Admin</h5></Link>
        </li>
        <li class="nav-item py-2 ">
       <Link class="nav-link" to="/customersignin">
         <h5>Customer</h5></Link>
        </li>
        <li class="nav-item py-2 ">
       <Link class="nav-link" to="/finofficer">
         <h5>FinanceOfficer</h5></Link>
        </li>

        {/* <li class="nav-item py-2">
        <Link class="nav-link" to="/signin"><h5>Signin</h5></Link>
        </li>
        <li class="nav-item py-2">
        <Link class="nav-link" to="/signup"><h5>SignUp</h5></Link>
        </li> */}
      </ul>
    </div>
  </div>
</nav>



     
      <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/loan" component={Application}/>
<Route exact path="/landingpage" component={LandingPage}/>

<Route  exact path="/news" component={News}/>
<Route exact path="/service" component={Services}/>
<Route exact path="/aboutus" component={AboutUs}/>

<Route exact path="/contactus" component={ContactUs}/>


{/* <Route  path="/signin" component={Signin}/>
<Route path="/signup" component={SignUp}/> */}
 

</Switch>

    </div>
    
    </Router>
      
    
    </div>
  );

  

}

export default Menu;
