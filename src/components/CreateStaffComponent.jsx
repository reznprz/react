import React, { Component } from 'react';
import StaffService from '../services/StaffService';

class CreateStaffComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstName: "",
            lastname: "",
            email: "",
            address: "",
            phone: ""
        };

        // this.changeAddressHandler = this.changeAddressHandler.bind(this);
        // this.changeEmailHandler = this.changeEmailHandler.bind(this);
        // this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        // this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        // this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeSubmit = this.changeSubmit.bind(this);
        this.saveStaff = this.saveStaff.bind(this);

    }

    componentDidMount() {

        if(this.state.id == -1){
            return
        }
        else{
            StaffService.getStaffById(this.state.id).then( (res) => {
                let staffRes = res.data;
                this.setState({firstName : staffRes.firstName,
                    lastName : staffRes.lastName,
                    email : staffRes.email,
                    address : staffRes.address,
                    phone : staffRes.phoneNumber
                });
            });

        }
       

      
    }

    saveStaff = (e) => {
        e.preventDefault();

        let staff = {firstName: this.state.firstName,
        lastName: this.state.lastname,
        email: this.state.email,
        address: this.state.address,
        phoneNumber: this.state.phone}

        console.log('staff => ' + JSON.stringify(staff));

        if(this.state.id == -1 ){
            StaffService.createStaff(staff).then(res => {
                this.props.history.push('/staffs');
            });
        }else{
            StaffService.updateStaff(staff, this.state.id).then( res => {
                this.props.history.push('/staffs');
            });
        }
    }


    // changeFirstNameHandler = (event) => {
    //     this.setState({[event.target.name ]: event.target.value});
    // }

    // changeLastNameHandler = (event) => {
    //     this.setState({[event.target.lastname ]: event.target.value})
    // }

    // changeEmailHandler = (event) => {
    //     this.setState({[event.target.email ]: event.target.value})
    // }

    // changeAddressHandler = (event) => {
    //     this.setState({[event.target.address ]: event.target.value})
    // }
    
    // changePhoneHandler = (event) => {
    //     this.setState({[event.target.phone ] : event.target.value})
    // }

    changeSubmit(event){
        this.setState({[event.target.name ]: event.target.value})
    }

    cancel() {
        this.props.history.push('/staffs');
    }

    getTitle(){
        if(this.state.id == -1){
            return <h3 className= "text-center"> Add Staff </h3>
        }else{
            return <h3 className= "text-center"> Update Staff </h3>
        }
    }


    render() {
        return (
            <div>
                <div className = "container">
                    <div className = "row">
                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                                <div className= "card-body">
                                    <form>
                                        <div className= "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name ="firstName" className="form-control" 
                                            value={this.state.firstName} onChange= {this.changeSubmit} required/>
                                        </div>
                                        <div className= "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name = "lastname" className="form-control" 
                                            value={this.state.lastname} onChange={this.changeSubmit} required/>
                                        </div>
                                        <div className= "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name = "email" className="form-control" 
                                            value={this.state.email} onChange={this.changeSubmit}/>
                                        </div>
                                        <div className= "form-group">
                                            <label> Address: </label>
                                            <input placeholder="Address" name = "address" className="form-control" 
                                            value={this.state.address} onChange={this.changeSubmit}/>
                                        </div>
                                        <div className= "form-group">
                                            <label> Phone: </label>
                                            <input placeholder="Phone" name = "phone" className="form-control" 
                                            value={this.state.phone} onChange={this.changeSubmit}/>
                                        </div>
                                        <button className="btn btn-sucess" onClick={this.saveStaff}> Save </button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}> Delete </button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStaffComponent;