import React, { Component } from 'react';
import StaffService from '../services/StaffService';

class ListStaffComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

            staffs: []

        }

        //this.addSatff = this.addSatff.bind(this);
        this.editStaff = this.editStaff.bind(this);
        //this.deleteStaff = this.deleteStaff.bind(this);
    }

    editStaff(id){
        this.props.history.push(`/addstaff/${id}`)
    }

    

    componentDidMount(){
        StaffService.getEmployees().then((res) => {
            this.setState({staffs : res.data});
        });
    }

    addStaffData(path){
        this.props.history.push(path);
        //this.props.navigate('/addstaff');
        //return <Redirect to = "/addstaff"/>
    }

    deleteStaff(id){
        StaffService.deleteStaffById(id).then( res => {
            this.setState({staffs : this.state.staffs.filter(staff => staff.id !== id)});
        });

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Staff List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={() => this.addStaffData('addstaff/-1')}> Add Staff </button>

                </div>
                <div className= "row">
                    <table className = "table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Staff Id</th>
                                <th>Staff Frist Name</th>
                                <th>Staff Last Name</th>
                                <th>Staff Email</th>
                                <th>Staff Address</th>
                                <th>Staff PhoneNumber</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.staffs.map(
                                    staff => 
                                    <tr key = {staff.id}>
                                        <td> {staff.id}</td>

                                        <td> {staff.firstName}</td>
                                        <td> {staff.lastName}</td>
                                        <td> {staff.email}</td>
                                        <td> {staff.address}</td>
                                        <td> {staff.phoneNumber}</td>
                                        <td>
                                            <button onClick = { () => this.editStaff(staff.id)} className="btn btn-info"> Update</button>
                                            <button style = {{marginLeft : "10px"}} onClick = { () => this.deleteStaff(staff.id)} className="btn btn-danger"> Delete</button>

                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>

                </div>
                
            </div>
        );
    }
}

export default ListStaffComponent;