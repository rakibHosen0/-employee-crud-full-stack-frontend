import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/employee/" 

class EmployeeService{
    saveEmployee = (employee) => {
        return axios.post(EMPLOYEE_API_BASE_URL+"add", employee)
    }

    getAllEmployees = () => {
        return axios.get(EMPLOYEE_API_BASE_URL+"all")
    }

    getEmployeeById = (id) => {
        return axios.get(EMPLOYEE_API_BASE_URL+"find/"+id)
    }

    UpdateEmployee = (id, employee) => {
        return axios.put(EMPLOYEE_API_BASE_URL+"update/"+id ,employee);
    }

    deleteEmployeeById = (id) => {
        return axios.delete(EMPLOYEE_API_BASE_URL+"delete/"+id);
    }


}

export default new EmployeeService();



