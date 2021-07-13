import React, { Component } from 'react'
import CustomerService from '../service/CustomerService';

class UpdateCustomer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id:this.props.match.params.id,
            customerName:'',
            mobileNumber:'',
            emailid:'',
            dateOfBirth:'',
            gender:'',
            nationality:'',
            aadharNumber:'',
            panNumber:''
       }
this.changeCustomerNameHandler=this.changeCustomerNameHandler.bind(this);
this.changeMobileNumberHandler=this.changeMobileNumberHandler.bind(this);
this.changeAadharNumberHandler=this.changeAadharNumberHandler.bind(this);
this.changeDateOfBirthHandler=this.changeDateOfBirthHandler.bind(this);
this.changeEmailIdHandler=this.changeEmailIdHandler.bind(this);
this.changeGenderHandler=this.changeGenderHandler.bind(this);
this.changeNationalityHandler=this.changeNationalityHandler.bind(this);
this.changePanNumberHandler=this.changePanNumberHandler.bind(this);
       this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( (res) =>{
            let customer = res.data;
            this.setState({customerName:customer.customerName,
                mobileNumber:customer.mobileNumber,
                emailId:customer.emailId,
                dateOfBirth:customer.dateOfBirth,
                gender:customer.gender,
                nationality:customer.nationality,
               aadharNumber:customer.aadharNumber,
               panNumber:customer.panNumber
            });
        });
    }

    updateCustomer = (e) => {
        e.preventDefault();
        let customer={customerName:this.state.customerName,mobileNumber:this.state.mobileNumber,
            emailId:this.state.emailId,dateOfBirth:this.state.dateOfBirth,
            gender:this.state.gender,nationality:this.state.nationality,
           aadharNumber:this.state.aadharNumber,panNumber:this.state.panNumber};
                  console.log('customer => ' + JSON.stringify(customer));
        console.log('id => ' + JSON.stringify(this.state.id));
        CustomerService.updateCustomer(customer, this.state.id).then( res => {
            this.props.history.push('/customers');
        });
    }
    
    changeCustomerNameHandler=(event)=>{
        this.setState({customername:event.target.value});
            }
            changeMobileNumberHandler=(event)=>{
                this.setState({mobileNumber:event.target.value});
                    }
                    changeEmailIdHandler=(event)=>{
                        this.setState({emailid:event.target.value});
                            }
                            changeGenderHandler=(event)=>{
                                this.setState({gender:event.target.value});
                                    }
                                    changeNationalityHandler=(event)=>{
                                        this.setState({nationality:event.target.value});
                                            }
                                            changeAadharNumberHandler=(event)=>{
                                                this.setState({aadharNumber:event.target.value});
                                                    }
                                                    changePanNumberHandler=(event)=>{
                                                        this.setState({panNumber:event.target.value});
                                                            }
                                                            changeDateOfBirthHandler=(event)=>{
                                                                this.setState({dateOfBirth:event.target.value});
                                                                    }
        

    cancel(){
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Customer</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className="form-group">
                          <label><h6>CustomerName:</h6></label>
                          <input placeholder="CustomerName" name="customerName" className="form-control"
                          value={this.state.customerName} onChange={this.changeCustomerNameHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>MobileNumber:</h6></label>
                          <input placeholder="Mobilenumber" name="mobileNumber" className="form-control"
                          value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>EmailId:</h6></label>
                          <input placeholder="EmailId" name="emailId" className="form-control"
                          value={this.state.emailId} onChange={this.changeEmailIdHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>DateOfBirth:</h6></label>
                          <input placeholder="DateOfBirth" name="dateOfBirth" className="form-control"
                          value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>Gender:</h6></label>
                          <input placeholder="Gender" name="gender" className="form-control"
                          value={this.state.gender} onChange={this.changeGenderHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>Nationality:</h6></label>
                          <input placeholder="Nationality" name="nationality" className="form-control"
                          value={this.state.nationality} onChange={this.changeNationalityHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>AadharNumber:</h6></label>
                          <input placeholder="AadharNumber" name="aadharNumber" className="form-control"
                          value={this.state.aadharNumber} onChange={this.changeAadharNumberHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>PanNumber:</h6></label>
                          <input placeholder="PanNumber" name="panNumber" className="form-control"
                          value={this.state.panNumber} onChange={this.changePanNumberHandler}></input>
                      </div>


                                        <button className="btn btn-success" onClick={this.updateCustomer}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateCustomer;
