import '../Index.css';
import Employee from '../Components/Employee';
import {useState} from 'react';
import AddEmployee from '../Components/AddEmployee';
import EditEmployee from '../Components/EditEmployee';
import Header from '../Components/NavBar';

function App() {
  const[employees, setEmployees] = useState(
    [
      {
        id: 1,
        name: 'John',
        role: 'CEO',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 2,
        name: 'Wajdi',
        role: 'Unity Developper',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 3,
        name: 'Anna',
        role: 'Manager',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 4,
        name: 'Kevin',
        role: 'HR Manager',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
      {
        id: 5,
        name: 'Marie',
        role: 'HR Manager',
        img: 'https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&w=1600',
      },
    ]
  )
function NewEmployee(name, role, img){
  const newEmployee = {
    id: 7,
    name: name,
    role: role,
    img: img
  }
  setEmployees([...employees, newEmployee])
}
function UpdateEmployee(id, newName, newRole){
  const UpdatedEmployees = employees.map((employee) => {
    if(id === employee.id){
      return {...employee, name: newName, role: newRole};
    }
    return employee;
  })
  setEmployees(UpdatedEmployees);
}

const show = true;

return (
    <div className="App bg-purple-100 min-h-screen">
      {  show ?
        <>          
          <div className='flex flex-wrap justify-center'>
            {employees.map( (employee) => {
              const editEmployee = <EditEmployee 
                                      id={employee.id}
                                      name={employee.name} 
                                      role={employee.role} 
                                      updateEmployee={UpdateEmployee}/>
              return ( <Employee 
                          id={employee.id}
                          name={employee.name} 
                          role={employee.role} 
                          src={employee.img}
                          editEmployee={editEmployee}
                        />
                      )
                    })}
          </div>
          <AddEmployee NewEmployee={NewEmployee} />
        </>
        :
        <p>You cannot see this</p>
      }
     </div>
  );
}

export default App;
