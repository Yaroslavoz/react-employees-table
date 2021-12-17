import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css';


const EmployeesList = ({ data, handleDelete, onToggleProp }) => {
  
    return (
      <ul className="app-list list-group">
        {data.map(({id, ...listData}, i) => 
            (<EmployeesListItem 
            key={id}
            {...listData}
            num={i+1}
            onDelete={()=>handleDelete(id)}
            onToggleProp={(prop)=>onToggleProp(id, prop)}
            // onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />)
        )}
      </ul>
    )
  };
  export default EmployeesList;
  

