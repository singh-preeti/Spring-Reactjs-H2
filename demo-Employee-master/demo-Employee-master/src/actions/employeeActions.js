import axios from "axios";

export const employeeGetAll = (employees) => {
    console.log('get all', employees);
    return {
        type: 'employee/getAll',
        data: employees
    }
}

export const getEmp = (id) => {
    return async function(dispatch, getState) {
        await axios.get("http://localhost:8081/employee/api/" + id)
        .then(data => {
            console.log(data);
            return dispatch({
                type: "employee/getById",
                data: data.data
            });
        });
    };
}

export const empDelete = (id) => {
    return async function(dispatch, getState) {
        await axios.delete("http://localhost:8081/employee/api/" + id)
        .then(data => {
            console.log("delete", data);
            return dispatch(employeeFetchAll());
        });
    };
}

export const empUpdate = (employee) => {
    return async function(dispatch, getState) {
        await axios.post("http://localhost:8081/employee/api/",  employee)
        .then(data => {
            console.log(data);
        });
    };
}

export const empAdd = (employee) => {
    if (employee) {
        return async function(dispatch, getState) {
            await axios.put("http://localhost:8081/employee/api/", employee)
            .then(data => {
                console.log(data);
            });
        };
    }
}

export const employeeFetchAll = () => {
    return async function(dispatch, getState) {        
            await axios.get("http://localhost:8081/employee/api/")
            .then(data => {
                console.log(data);
                return dispatch(employeeGetAll(data.data));
            });
    };
}
