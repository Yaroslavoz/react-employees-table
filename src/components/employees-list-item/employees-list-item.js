import './employees-list-item.css';



export default function EmployeesListItem({ num, name, salary, onDelete, increase, liked, onToggleProp }){
  
    let classes = "list-group-item d-flex justify-content-between"
    if(increase) {classes += ' increase'}
    if(liked) {classes += ' like'}
    
    
    return (
      <li className={classes} >
            <span 
              className="list-group-item-label" 
              onClick={()=>onToggleProp('liked')}
              // data-toggle="liked"
              >{num}. {name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                  type="button"
                  className="btn-cookie btn-sm "
                  onClick={()=>onToggleProp('increase')}
                  // data-toggle="increase"

                  >
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}
                        >
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
  )
  
  
};
