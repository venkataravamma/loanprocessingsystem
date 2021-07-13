import React, { Component } from 'react'
import LoanApplicationService from '../service/LoanApplicationService'
export default class LoanApplicationListComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             applications:[]

        }
        this.addApplication=this.addApplication.bind(this);
        this.editApplication=this.editApplication.bind(this);
        this.deleteApplication=this.deleteApplication.bind(this);
        this.viewApplication=this.viewApplication.bind(this);
    }

    deleteApplication(id1){
        LoanApplicationService.deleteApplication(id1).then( response => {
            this.setState({applications: this.state.applications.filter(application => application.id1 !== id1)});
        });
    }
    viewApplication(id1){
        this.props.history.push(`/view-application/${id1}`);
    }
    editApplication(id1){
        this.props.history.push(`/add-application/${id1}`);
    }
    
    getMethod=()=>{
        
LoanApplicationService.getApplication().then((response) =>{
    this.setState({applications:response.data});
});
    }

    addApplication(){
        this.props.history.push('/add-application/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Loan Applications</h2>
              
                
                <div classname="row">
                    <button className="btn btn-primary text-center" onClick={this.addApplication}>Loan Application</button>
                </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ApplicationId</th>
                                <th>ApplicationDate</th>
                                <th>Customer</th>
                                <th>Loan Applied Amount</th>
                                <th>Loan Approved Amount</th>
                                <th>FinanceVerificationApproval</th>
                                <th>AdminApproval</th>
                                <th>status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.applications.map(
                                application =>
                                <tr key ={application.id1}  >
                                    <td>{application.applicationId}</td>
                                    <td>{application.applicationDate}</td>
                                    <td>{application.customer}</td>
                                    <td>{application.loanAppliedAmount}</td>
                                     <td>{application.loanApprovedAmount}</td>
                                     <td>{application.financeVerificationApproval}</td>
                                     <td>{application.adminApproval}</td>
                                     <td>{application.status}</td>
                                    <td>]
                                        <button onClick= { ()=> this.editApplication(application.id1)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteApplication(application.id1)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewApplication(application.id1)} className="btn btn-info">View </button>
                                          
                                    </td> 
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
               
          
        )
    }
}
