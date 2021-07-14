import React, { Component } from 'react'
import CreateCustomerComponent from './CreateCustomerComponent';
import CustomerService from '../service/CustomerService'
export default class CustomerListComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             customers:[],
             viewcustomerflag:false,
             currentCustomer:null

        }
        this.addCustomer=this.addCustomer.bind(this);
        this.editCustomer=this.editCustomer.bind(this);
        this.viewCustomer=this.viewCustomer.bind(this);
    }

    // deleteCustomer==(id){
    //     let mainValue=[...this.state.customers]

    //         this.setState({customers: mainValue.filter(customer => customer.id !== id)});
    //     };
       deleteCustomer =(id) => {

           console.log(id)

            CustomerService.deleteCustomer(id).then((res)=>{
                // todos.filter((todo, index) => {
                //     if (todo.userId === id) {
                //         todos.splice(index, 1);
                //     }
                //     return {
                //     todos
                // }
                
                
                // });
           let  abc=   this.state.customers.filter(i=>{i.userId=!id}) 
                console.log(abc)
                this.setState({ customers:abc });
            })
                
            
           
             };


   viewCustomer=(customer)=>{
    console.log("arifa")

        // this.setState({viewcustomerflag:true,currentCustomer:customer})
        // this.props.history.push(`/view-customer/${id}`);
    }
    editCustomer(id){
        this.props.history.push(`/add-customer/${id}`);
    }
 getMehod=()=>{
CustomerService.getCustomers().then((res) =>{
    this.setState({customers:res.data});
});
 }
componentDidMount(){
    this.getMehod()
}
    

    addCustomer(){
        this.props.history.push('/add-customer/_add');
    }

    render() {
        console.log(this.state.currentCustomer)
    
        return (
            <div>
                {(this.state.viewcustomerflag && this.state.currentCustomer)?<CreateCustomerComponent  currentCustomer={this.state.currentCustomer}></CreateCustomerComponent>:
                
                <>
                <h2 className="text-center">Registered Customer Details</h2>
              
                <div className="row">
                <div classname="row">
                    <button className="btn btn-primary text-center" onClick={this.addCustomer}>CustomerRegistration</button>
                </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>CustomerName</th>
                                <th>MobileNumber</th>
                                <th>EmailId</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.customers.map(
                                customer =>
                                <tr key ={customer.userId}>
                                    <td>{customer.customerName}</td>
                                     <td>{customer.mobileNumber}</td>
                                    <td>{customer.emailId}</td>
                                    <td>
                                        <button onClick= { ()=> this.editCustomer(customer.userId)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCustomer(customer.userId)} className="btn btn-danger">Delete </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewCustomer(customer)} className="btn btn-info">View </button>
                                          
                                    </td> 
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
                </>
    }
            </div>
        )
    }
}
