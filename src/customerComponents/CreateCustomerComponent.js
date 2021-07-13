import React, { Component } from 'react'
import CustomerService from '../service/CustomerService';
export default class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)
    
    
        this.state = {
            //step 2
            // id: this.props.match.params.id,
            id:'',
            role:'',
            password:'',
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
this.changeRoleHandler=this.changeRoleHandler.bind(this);
this.changePasswordHandler=this.changePasswordHandler.bind(this);
this.saveOrUpdateCustomer=this.saveOrUpdateCustomer.bind(this);

    }

    //step 3
    componentDidMount(){
        //step 4
        console.log(this.props.currentCustomer)
    
if(this.state.id === '_add'){
    return
}else{
        // CustomerService.getCustomerById(this.state.id).then( (res) =>{
            // let customer = res.data;
            // console.log(this.props)
            // this.setState({role:customer.role,password:customer.password,customerName:customer.customerName,
            //     mobileNumber:customer.mobileNumber,
            //     emailId:customer.emailId,
            //     dateOfBirth:customer.dateOfBirth,
            //     gender:customer.gender,
            //     nationality:customer.nationality,
            //    aadharNumber:customer.aadharNumber,
            //    panNumber:customer.panNumber
            // });
        // });
    }
}
saveOrUpdateCustomer = (e)=>{
    e.preventDefault();
    let customer={role:this.state.role,password:this.state.password,customerName:this.state.customerName,mobileNumber:this.state.mobileNumber,
        emailId:this.state.emailId,dateOfBirth:this.state.dateOfBirth,
        gender:this.state.gender,nationality:this.state.nationality,
       aadharNumber:this.state.aadharNumber,panNumber:this.state.panNumber};
              console.log('customer => ' + JSON.stringify(customer));

              //step 5
              if(this.state.id=== '_add'){
                CustomerService.createCustomer(customer).then( res => {
                    this.props.history.push('/customers');
                });
              }else{
                CustomerService.updateCustomer(customer, this.state.id).then( res => {
                    this.props.history.push('/customers');
                });
              }

}

    changeCustomerNameHandler=(event)=>{
this.setState({customerName:event.target.value});
    }
    changeMobileNumberHandler=(event)=>{
        this.setState({mobileNumber:event.target.value});
            }
            changeEmailIdHandler=(event)=>{
                this.setState({emailId:event.target.value});
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
                                                            changeRoleHandler=(event)=>{
                                                                this.setState({role:event.target.value});
                                                                    }
                                                                    changePasswordHandler=(event)=>{
                                                                        this.setState({password:event.target.value});
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
    this.props.history.push('/customers');

}
getTitle(){
    if(this.state.id ==='_add'){
        return<h3 className="text-center">CustomerRegistration</h3>
    
    }else{
        return<h3 className="text-center">UpdateCustomer</h3>

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
                         
                          <label><h6>CustomerName:</h6></label>
                          <input placeholder="CustomerName" name="CustomerName" className="form-control"
                          value={this.state.customerName} onChange={this.changeCustomerNameHandler}></input>
                      </div>
                      
                      <div className="form-group">
                          <label><h6>MobileNumber:</h6></label>
                          <input type="number" placeholder="Mobilenumber" name="mobileNumber" className="form-control"
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
                      <label><h6>Role:</h6></label>
                          <input placeholder="Role" name="role" className="form-control"
                          value={this.state.role} onChange={this.changeRoleHandler}></input>
                      </div>
                      <div className="form-group">
                          <label><h6>Password:</h6></label>
                          <input placeholder="Password" name="gender" className="form-control"
                          value={this.state.password} onChange={this.changePasswordHandler}></input>
                      </div>


                      <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save</button>
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
