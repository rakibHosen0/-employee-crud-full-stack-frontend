import React from 'react';
import { useNavigate } from 'react-router-dom';

const Employee = ({emp, deleteEmployeeById}) => {
    const navigate = useNavigate();

    const updateEmployee = (e, id) =>{
        e.preventDefault();
        navigate(`/updateEmployee/${id}`)
        
    }

    return (
        <>
              <tr key={emp.id} className="hover:bg-gray-100">
                          <td className='text-left px-6 py-4 whitespace-nowap'><div className='text-sm text-gray-500'>{emp.id}</div></td>
                          <td className='text-left px-6 py-4 whitespace-nowap'><div className='text-sm text-gray-500'>{emp.name}</div></td>
                          <td className='text-left px-6 py-4 whitespace-nowap'><div className='text-sm text-gray-500'>{emp.email}</div></td>
                          <td className='text-left px-6 py-4 whitespace-nowap'><div className='text-sm text-gray-500'>{emp.phone}</div></td>
                          <td className='text-left px-6 py-4 whitespace-nowap'><div className='text-sm text-gray-500'>{emp.jobTitle}</div></td>
                          <td className='text-left px-6 py-4 whitespace-nowap'><div className='text-sm text-gray-500'>{emp.employeeCode}</div></td>
                          <td className='text-right px-6 py-4 whitespace-nowap font-medium text-sm'>
                          <a 
                          onClick={(e,id) => updateEmployee(e, emp.id)}
                          href="/" className='bg-indigo-300 text-white py-2 px-3 rounded hover:bg-indigo-400 shadow-md'>Edit</a>
                          <a 
                          onClick={(e, id)=> deleteEmployeeById(e, emp.id)}
                          href="/" className='bg-red-300 text-white py-2 px-3 rounded hover:bg-red-400 shadow-md ml-2'>Delete</a>
                          </td>
                        </tr>
        </>
    );
};

export default Employee;