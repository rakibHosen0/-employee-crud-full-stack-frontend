import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeServices from '../../services/EmployeeServices';

const AddEmployee = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState({
        name: "",
        email : "",
        phone : "",
        jobTitle : "",
        imageUrl : ""
    })

    const handleOnChange = (e)=> {
        const value = e.target.value;
        setEmployees({...employees,[e.target.name]: value})
        console.log(value);
    }

    const handleSaveEmployee = (e) => {
        e.preventDefault();
        EmployeeServices.saveEmployee(employees).then((res) =>{
            navigate("/employeeList");
        }).catch((error) => {
            console.log(error)
        })
        

    }

    const handleClearEmployee = () => {
        setEmployees({
            name: "",
            email : "",
            phone : "",
            jobTitle : "",
            imageUrl : ""
        });
    }

    return (
        <div className='py-5 w-1/3 px-6 bg-white m-auto shadow-md  border-1 mt-3 rounded-lg'>
           <div className='bg-red-300 text-white py-2 px-3 rounded hover:bg-red-400 shadow-md w-full text-center font-bold'>Add Employee</div>
            <form className='mt-4'>
                <div>
                    <label className='block text-sm font-medium text-slate-700  mb-1'>Name</label>
                    <input
                        type="text" 
                        required
                       name='name'
                       value={employees.name}
                       onChange={(e) => handleOnChange(e)}
                       
                     className='mb-3 w-full mt-1 text-normal px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' 
                     placeholder='Enter your Full Name'></input>
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700  mb-1'>Email</label>
                    <input 
                    required
                    className='mb-3 w-full mt-1 text-normal px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' name='email'
                    value={employees.email}
                    onChange={(e) => handleOnChange(e)}
                    type="email" 
                     placeholder='Enter your email'></input>
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700  mb-1'>Job Title</label>
                    <input 
                    required
                    className=' mb-3 w-full mt-1 text-normal px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' name='jobTitle'
                    value={employees.jobTitle}
                    onChange={(e) => handleOnChange(e)}
                     type="text" 
                     placeholder='Enter your Job Title' ></input>
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700  mb-1'>Phone</label>
                    <input 
                    required
                    className='mb-3 w-full mt-1 text-normal px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' name='phone'
                    value={employees.phone}
                    onChange={(e) => handleOnChange(e)}
                     type="text" 
                     placeholder='Enter your phone number' ></input>
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700 mb-1'>ImageUrl</label>
                    <input className='mb-3 w-full mt-1 text-normal px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' name='imageUrl' 
                    type="text" 
                    required
                    value={employees.imageUrl}
                    onChange={(e) => handleOnChange(e)}
                    placeholder='Enter image url' ></input>
                </div>

                <div className='w-full flex gap-6'>
                    <button 
                    onClick={handleSaveEmployee}
                    className='bg-green-300 text-white py-2 px-6 rounded hover:bg-green-400 shadow-md'>Save</button>
                    <button onClick={handleClearEmployee} className='bg-indigo-300 text-white py-2 px-6 rounded hover:bg-indigo-400 shadow-md'>Clear</button>
                </div>
            </form>
        </div>
    );
};

export default AddEmployee;