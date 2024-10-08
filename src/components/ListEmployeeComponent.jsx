import React,{useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployee();
    },[])

    function getAllEmployee(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        }) 
    }

   function addNewEmployees(){
    navigator('/add-employee')
   } 

   function updateEmployee(id){
    navigator(`/edit-employee/${id}`)
   }

   function removeEmployee(id){
    console.log(id);

    deleteEmployee(id).then((response) =>{
        getAllEmployee();
    } ).catch(error => {
        console.error(error);
    })
   }

  return (
    <div className='container'><br />
            <h2 className='text-center'>List Of Employees</h2><br />

            <button className='btn btn-primary mb-2' onClick={addNewEmployees} >Add Employee</button>
           
            
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                         <th>Employee Email Id</th>
                         <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                          {
                            employees.map(employee => 
                                <tr key={employee.id}>

                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>   
                                <td>
                                    <button className='btn btn-success' style={{ marginRight: '10px' }} onClick={() => updateEmployee(employee.id) }>Update</button>

                                    <button 
                                    className='btn btn-danger' onClick={() => { removeEmployee(employee.id);  
                                        alert(`Employee with ID ${employee.id} has been deleted.`); }} 
                                        >Delete </button>


                                    </td> 

                                    

                                    

                                </tr>
                            )
                          }
                </tbody>
            </table>


    </div>
  )
}

export default ListEmployeeComponent