import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { empAdd } from '../actions/employeeActions';

class AddEmployee extends React.Component {

    employee = { name: '', age: 0, department: '' };

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch(empAdd(Object.assign({}, this.employee)));
        e.target.reset();
    }

    render() {
        return (
            <div className="col-md-9 mx-sm-auto col-lg-10 px-md-4">
                <h4 className="mb-3">Add Employee</h4>
                <form className="needs-validation" noValidate onSubmit={this.handleOnSubmit}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <label htmlFor="firstName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name" onChange={e => this.employee.name = e.target.value} required />
                            <div className="invalid-feedback">Valid name is required.</div>
                        </div>

                        <div className="col-sm-6">
                            <label htmlFor="lastName" className="form-label">Age</label>
                            <input type="number" className="form-control" id="age" placeholder="" onChange={e => this.employee.age = e.target.value} required />
                            <div className="invalid-feedback">Valid Age is required.</div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="username" className="form-label">Department</label>
                            <div className="input-group has-validation">
                                <input type="text" className="form-control" id="username" placeholder="Department" onChange={e => this.employee.department = e.target.value} required />
                                <div className="invalid-feedback">Your department is required</div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                        <div className="col-sm-6">
                            <Link to="/"><button className="btn btn-primary">Back</button></Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps)(AddEmployee);