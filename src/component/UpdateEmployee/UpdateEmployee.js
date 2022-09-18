import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeServices from '../../services/EmployeeServices';

const UpdateEmployee = () => {
    const navigator = useNavigate();
    const {id} = useParams();
    const [employees, setEmployees] = useState({
        name: id,
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

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await EmployeeServices.getEmployeeById(id);
                setEmployees(response.data);
            }catch(err){
                console.log(err);
            }
        }
        getData();

    },[])

    const handleUpdateEmployee = (e) => {
        e.preventDefault();
        EmployeeServices.UpdateEmployee(id,employees);
        navigator("/employeeList");

      } 

    return (
        <div className='py-5 w-1/3 px-6 bg-white m-auto shadow-md  border-1 mt-3 rounded'>
           <button className='w-full bg-red-300 text-white py-2 px-3 rounded hover:bg-red-400 shadow-md'>Update Employee</button>
            <form className='mt-4'>
                <div>
                    <label className='block text-sm font-medium text-slate-700  mb-1'>Name</label>
                    <input
                        type="text" 
                       name='name'
                       value={employees.name}
                       onChange={(e) => handleOnChange(e)}
                       
                     className='mb-3 w-full mt-1 text-normal px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' 
                     placeholder='Enter your Full Name'></input>
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700  mb-1'>Email</label>
                    <input 
                    className='mb-3 w-full mt-1 text-normal px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' name='email'
                    value={employees.email}
                    onChange={(e) => handleOnChange(e)}
                    type="email" 
                     placeholder='Enter your email' ></input>
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700  mb-1'>Job Title</label>
                    <input 
                    className=' mb-3 w-full mt-1 text-normal px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400' name='jobTitle'
                    value={employees.jobTitle}
                    onChange={(e) => handleOnChange(e)}
                     type="text" 
                     placeholder='Enter your Job Title' ></input>
                </div>
                <div>
                    <label className='block text-sm font-medium text-slate-700  mb-1'>Phone</label>
                    <input 
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
                    value={employees.imageUrl}
                    onChange={(e) => handleOnChange(e)}
                    placeholder='Enter image url' ></input>
                </div>

                <div className='w-full flex gap-6'>
                    <button 
                    onClick={handleUpdateEmployee}
                    className='bg-green-300 text-white py-2 px-6 rounded hover:bg-green-400 shadow-md'>Update</button>
                    <button onClick={() => navigator("/employeeList")} className='bg-indigo-300 text-white py-2 px-6 rounded hover:bg-indigo-400 shadow-md'>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateEmployee;