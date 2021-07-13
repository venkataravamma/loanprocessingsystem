import './App.css';
import React from 'react';
import CustomerListComponent from './customerComponents/CustomerListComponent';
import Header from './customerComponents/Header';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import CreateCustomerComponent from './customerComponents/CreateCustomerComponent';
import UpdateCustomer from './customerComponents/UpdateCustomer';
import ViewCustomerComponent from './customerComponents/ViewCustomerComponent';
import CreateLoanApplicationComponent  from './loanapplicationcomponents/CreateLoanApplicationComponent';
import ViewLoanApplicationComponent from './loanapplicationcomponents/ViewLoanApplicationComponent';
import LoanApplicationListComponent from './loanapplicationcomponents/LoanApplicationListComponent';
import Menu from './layout/Menu';
function App() {
 
  return (
    <div>
      <Menu/>
{/* <Router>

    <Header/>
          <div className="container">
      <Switch>
              <Route path="/" exact component={ CustomerListComponent }></Route>
              <Route path="/customers"  component={ CustomerListComponent }></Route>
              //step 1
              <Route path="/add-customer/:id"  component={CreateCustomerComponent }></Route>
              <Route path= '/update-customer' component={UpdateCustomer}></Route>
              <Route path="/view-customer/:id"  component={ViewCustomerComponent }></Route>

             
      <Route path="/loan" exact component={ LoanApplicationListComponent }></Route>
              <Route path="/applications"  component={ LoanApplicationListComponent }></Route>
              //step 1
              <Route path="/add-application/:id"  component={CreateLoanApplicationComponent }></Route>
              <Route path= '/update-customer' component={UpdateCustomer}></Route>
              <Route path="/view-application/:id"  component={ViewLoanApplicationComponent }></Route>

          
    </Switch>
          </div>
    
     <Footer/>
     </Router>
      */}
     
    </div>
  );
}

export default App;
