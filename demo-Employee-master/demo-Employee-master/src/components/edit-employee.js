import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { empUpdate, getEmp } from '../actions/employeeActions';

class EditEmployee extends React.Component {

    name = '';
    age = 0;
    department = '';

    componentDidMount() {
        
        const id = this.props.match.params.id;
        this.props.dispatch(getEmp(id));
    }

    handleOnSubmit = e => {
        e.preventDefault();
        this.props.dispatch(empUpdate({ id: this.props.match.params.id, name: this.name, age: this.age, department: this.department }));
    }

    handleNameChange = e => {
        this.name = e.target.value;
    }

    render() {
        if (this.props.name) {
            this.name = this.props.name;
            this.age  = this.props.age;
            this.department = this.props.department;
            return (
                <div className="col-md-9 mx-sm-auto col-lg-10 px-md-4">
                    <h4 className="mb-3">Edit Employee</h4>
                    <form className="needs-validation" onSubmit={this.handleOnSubmit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name" onChange={this.handleNameChange} defaultValue={this.name} required />
                                <div className="invalid-feedback">Valid name is required.</div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Age</label>
                                <input type="number" className="form-control" id="age" placeholder="Age" onChange={e => this.age = e.target.value} defaultValue={this.age} required />
                                <div className="invalid-feedback">Valid Age is required.</div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Department</label>
                                <div className="input-group has-validation">
                                    <input type="text" className="form-control" id="username" placeholder="Department" onChange={e => this.department = e.target.value} defaultValue={this.department} required />
                                    <div className="invalid-feedback">Your department is required</div>
                                </div>
                            </div>
                            <div className="col-sm-6"><button className="btn btn-primary" type="submit">Submit</button></div>
                            <div className="col-sm-6"><Link to="/"><button className="btn btn-secondary" >Back</button></Link></div>
                        </div>
                    </form>
                </div>
            );
        }
        return <div />
    }
}

function mapStateToProps(state) {
    console.log(state);
    const { employee } = state;
    return {
        ...employee
    }
}

export default connect(mapStateToProps)(withRouter(EditEmployee));