import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../../services/EmployeeServices';
import Employee from '../Employee/Employee';

const Employees = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getEmployees= async () => {
      try {
        const response = await EmployeeServices.getAllEmployees();
        setEmployee(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEmployees();
  },[])

  const deleteEmployeeById = (e, id) => {
    e.preventDefault();
    EmployeeServices.deleteEmployeeById(id).then((res)=> {
      if(employee){
        setEmployee((prevEmployee) => {
          return prevEmployee.filter((employee) => employee.id !== id);
        })
      }
    })
   
     
  }

    return (
        <section className='container'>
              <h1 className='mt-7 text-center font-bold text-4xl text-gray-400'>Employee List</h1>
              <button 
              onClick={() => navigate("/addEmployee")}
              className='m-3 bg-indigo-500 text-white py-2 px-3 rounded hover:bg-indigo-600 shadow-md'>Add Employee</button>

              <div className='mx-auto my-8'>
                <div className='flex shadow border-b'>
                    <table className='min-w-full '>
                      <thead className='bg-gray-50'>
                        <tr>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Id</th>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Name</th>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Email</th>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Phone</th>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>JobTitle</th>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>EmployeeCode</th>
                          <th className='text-right font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Action</th>
                        </tr>
                      </thead>
                      <tbody className='bg-white'>
                        {
                          employee.map((emp) => <Employee deleteEmployeeById={deleteEmployeeById} emp={emp} key={emp.id}/>)
                        }
                      </tbody>
                    </table>
                </div>

              </div>
        </section>
       
    );
};

export default Employees;