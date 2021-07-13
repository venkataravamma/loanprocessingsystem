import React from 'react'
// import Header from './customerComponents/Header';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import CreateCustomerComponent from '../customerComponents/CreateCustomerComponent'
import CustomerListComponent from '../customerComponents/CustomerListComponent'
import ViewCustomerComponent from '../customerComponents/ViewCustomerComponent'

function Home() {
    return (
        <div className="container">
       <Router>    

{/* <Header/> */}
      <div className="container">
  <Switch>
          <Route path="/" exact component={ CustomerListComponent }></Route>
          <Route path="/customers"  component={ CustomerListComponent }></Route>
          {/* //step 1 */}
          <Route path="/add-customer/:id"  component={CreateCustomerComponent }></Route>
          {/* <Route path= '/update-customer' component={UpdateCustomer}></Route> */}
          <Route path="/view-customer/:id"  component={ViewCustomerComponent }></Route>
</Switch>
</div>
</Router>
</div>

  );
}

export default Home
