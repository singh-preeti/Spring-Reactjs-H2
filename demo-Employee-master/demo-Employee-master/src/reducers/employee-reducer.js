const initializeState = {
    employees: [],
    employee: {}
}

const employeeReducer = (state = initializeState, action) => {
    console.log(action.type);
    switch (action.type) {
        case "employee/add":
            if (!state.employees) state.employees = [];
            console.log(action.data);
            return state;
        case "employee/getAll":
            return {employees: action.data};
        case "employee/getById":
            return {
                employees: state.employees,
                //employee= action.whatever is fetched from api
                employee: action.data
            }
        default:
            console.log(state.employees);
            return state;
    }
}

export default employeeReducer;