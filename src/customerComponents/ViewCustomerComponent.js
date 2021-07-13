import React, { Component } from 'react'
import CustomerService from '../service/CustomerService'
class ViewCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Customer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> CustomerName: </label>
                            <div> { this.state.customer.customerName }</div>
                        </div>
                        
                        <div className = "row">
                            <label> MobileNumber: </label>
                            <div> { this.state.customer.mobileNumber }</div>
                        </div>
                        <div className = "row">
                            <label> EmailId </label>
                            <div> { this.state.customer.emailId }</div>
                        </div>
                        <div className = "row">
                            <label>  DateOfBirth: </label>
                            <div> { this.state.customer.dateOfBirth }</div>
                        </div>
                        <div className = "row">
                            <label> Gender: </label>
                            <div> { this.state.customer.gender }</div>
                        </div>
                        <div className = "row">
                            <label> Nationality: </label>
                            <div> { this.state.customer.nationality }</div>
                        </div>
                        <div className = "row">
                            <label> AadharNumber: </label>
                            <div> { this.state.customer.aadharNumber }</div>
                        </div>
                        <div className = "row">
                            <label> PanNumber: </label>
                            <div> { this.state.customer.panNumber }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}



export default ViewCustomerComponent