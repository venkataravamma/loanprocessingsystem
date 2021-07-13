import React, { Component } from 'react'
import LoanApplicationService from '../service/LoanApplicationService'
export default class CreateLoanApplicationComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            //step 2
            id1: this.props.match.params.id1,
           applicationId:'',
           applictaionDate:'',
             customer:'',
            loanAppliedAmount:'',
             loanApprovedAmount:'',
            financeVerificationApproval:'',
             adminApproval:'',
            status:''
        }
this.changeApplicationIdHandler=this.changeApplicationIdHandler.bind(this);
this.changeApplicationDateHandler=this.changeApplicationDateHandler.bind(this);
this.changeCustomerHandler=this.changeCustomerHandler.bind(this);
this.changeLoanAppliedAmountHandler=this.changeLoanAppliedAmountHandler.bind(this);
this.changeLoanApprovedAmountHandler=this.changeLoanApprovedAmountHandler.bind(this);
this.changeFinanceVerificationApprovalHandler=this.changeFinanceVerificationApprovalHandler.bind(this);
this.changeAdminApprovalHandler=this.changeAdminApprovalHandler.bind(this);
this.changeStatusHandler=this.changeStatusHandler.bind(this);
this.saveOrUpdateApplication=this.saveOrUpdateApplication.bind(this);

    }

    //step 3
    componentDidMount(){
        //step 4
if(this.state.id1 === '_add'){
    return
}else{
        LoanApplicationService.getApplicationById1(this.state.id1).then( (response) =>{
            let application = response.data;
            this.setState({
               applicationId:application.applicationId,
               applicationDate:application.applicationDate,
                customer:application.customer,
                loanAppliedAmount:application.loanAppliedAmount,
                loanApprovedAmount:application.loanApprovedAmount,
                financeVerificationApproval:application.financeVerificationApproval,
                adminApproval:application.adminApproval,
                status:application.status
            });
        });
    }

}
saveOrUpdateApplication = (e)=>{
    e.preventDefault();
    let application ={applicationId:this.state.applicationId,
        applicationDate:this.state.applicationDate,
        customer:this.state.customer,
        loanAppliedAmount:this.state.loanAppliedAmount,            
        loanApprovedAmount:this.state.loanApprovedAmount,
        financeVerificationApproval:this.state.financeVerificationApproval,
       adminApproval:this.state.adminApproval,
        status:this.state.status
    }
              console.log('application => ' + JSON.stringify(application));

              //step 5
              if(this.state.id1=== '_add'){
                LoanApplicationService.createApplication(application).then( response => {
                    this.props.history.push('/applications');
                });
              }else{
                LoanApplicationService.updateApplication(application, this.state.id1).then( response => {
                    this.props.history.push('/applications');
                });
              }

}

changeApplicationIdHandler=(event)=>{
this.setState({applicationId:event.target.value});
    }
    changeApplicationDateHandler=(event)=>{
        this.setState({applicationDate:event.target.value});
            }
            changeCustomerHandler=(event)=>{
                                this.setState({customer:event.target.value});
                                    }
                                    changeLoanAppliedAmountHandler=(event)=>{
                                        this.setState({loanAppliedAmount:event.target.value});
                                            }
                                            changeLoanApprovedAmountHandler=(event)=>{
                                                this.setState({loanApprovedAmount:event.target.value});
                                                    }
                                                    changeFinanceVerificationApprovalHandler=(event)=>{
                                                        this.setState({financeVerificationApproval:event.target.value});
                                                            }
                                                            changeAdminApprovalHandler=(event)=>{
                                                                this.setState({adminApproval:event.target.value});
                                                                    }
                                                                    changeStatusHandler=(event)=>{
                                                                        this.setState({status:event.target.value});
                                                                            }

// saveCustomer =(e)=>{
//     e.preventDefault();
//     let customer={customerName:this.state.customerName,mobileNumber:this.state.mobileNumber,
//         emailId:this.state.emailId,dateOfBirth:this.state.dateOfBirth,
//         gender:this.state.gender,nationality:this.state.nationality,
//        aadharNumber:this.state.aadharNumber,panNumber:this.state.panNumber};

//        CustomerService.createCustomer(customer).then(res=>{
//       this.props.history.push('/');
//        });
// }

cancel(){
    this.props.history.push('/applications');

}
getTitle(){
    if(this.state.id1 ==='_add'){
        return<h3 className="text-center">Loan Application</h3>
    
    }else{
        return<h3 className="text-center">Update Loan Application</h3>

    }
}

    render() {
        return (
            <div>
                <br></br>
             <div className="container">
              <div classname="row">
                  <div className="card col-md-6 offset-md-3 offest-md-3">
                  {
                      this.getTitle()
                  }
                  <div className="card-body">

                  <form>
                      <div className="form-group">
                      <div className="form-group">
                          <label><h6>ApplicationId:</h6></label>
                          <input placeholder="ApplicationId" name="ApplicationId" className="form-control"
                          value={this.state.applicationId} onChange={this.changeApplicationIdHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>ApplicationDate:</h6></label>
                          <input placeholder="ApplicationDate" name="ApplicationDate" className="form-control"
                          value={this.state.applicationDate} onChange={this.changeApplicationDateHandler}></input>
                      </div>
                          <label><h6>Customer:</h6></label>
                          <input placeholder="Customer" name="Customer" className="form-control"
                          value={this.state.customer} onChange={this.changeCustomerHandler}></input>
                      </div>
                      
                      <div className="form-group">
                          <label><h6>LoanAppliedAmount:</h6></label>
                          <input placeholder="LoanAppliedAmount" name="LoanAppliedAmount" className="form-control"
                          value={this.state.loanAppliedAmount} onChange={this.changeLoanAppliedAmountHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>LoanApprovedAmount:</h6></label>
                          <input placeholder="LoanApprovedAmount" name="LoanApprovedAmount" className="form-control"
                          value={this.state.loanApprovedAmount} onChange={this.changeLoanApprovedAmountHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>FinanceVerificationApproval:</h6></label>
                          <input placeholder="FinanceVerificationApproval" name="FinanceVerificationApproval" className="form-control"
                          value={this.state.financeVerificationApproval} onChange={this.changeFinanceVerificationApprovalHandler}></input>
                      </div>
                      
                      <div className="form-group">
                          <label><h6>AdminApproval:</h6></label>
                          <input placeholder="AdminApproval" name="AdminApproval" className="form-control"
                          value={this.state.adminApproval} onChange={this.changeAdminApprovalHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>Status:</h6></label>
                          <input placeholder="Status" name="status" className="form-control"
                          value={this.state.status} onChange={this.changeStatusHandler}></input>
                      </div>
                      


                      <button className="btn btn-success" onClick={this.saveOrUpdateApplication}>Save</button>
                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                  </form>


                 </div>
              </div>
          </div>   
      </div>       
 </div>
        )
    }
}
