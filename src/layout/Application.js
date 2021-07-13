import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import CreateLoanApplicationComponent from '../loanapplicationcomponents/CreateLoanApplicationComponent'
import LoanApplicationListComponent from '../loanapplicationcomponents/LoanApplicationListComponent'
import ViewLoanApplicationComponent from '../loanapplicationcomponents/ViewLoanApplicationComponent'
function Application() {
    return (
        <div>
            <Router>
                <Switch>
                <Route path="/loan" exact component={ LoanApplicationListComponent }></Route>
              <Route path="/applications"  component={ LoanApplicationListComponent }></Route>
              {/* //step 1 */}
              <Route path="/add-application/:id"  component={CreateLoanApplicationComponent }></Route>
              {/* <Route path= '/update-customer' component={UpdateCustomer}></Route> */}
              <Route path="/view-application/:id"  component={ViewLoanApplicationComponent }></Route>

          
    </Switch>
        
    
   
     </Router>
     
            
        </div>
    )
}

export default Application
