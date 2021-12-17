import './app.css'
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import { v4 as uuidv4 } from 'uuid';
import { Component } from 'react';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
        {id: 1, name: 'John', salary: 1000, increase: true, liked: false},
        {id: 2, name: 'Alex', salary: 1500, increase: false, liked: false},
        {id: 3, name: 'Dane', salary: 1800, increase: true, liked: false},
      ],
      filterType: 'All',
      searchRequest: ''
    }
  }

  handleAdd = (name, salary) => {
    let newEmployeeData = {
      id: uuidv4(),
      name,
      salary,
      increase: false
    };
    this.setState(({data}) => ({
      data: [...data,
        newEmployeeData]
    }))
  };

  handleDelete = (id) => {
    this.setState(({data}) => ({
      data: data.filter((item) => item.id !== id)
    }))
  };

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map((employee) => { return employee.id === id ? {...employee, [prop] : !employee[prop]} : employee})
    }))
  };

  onFilter = (list, type) => {
      switch (type) {
        case 'All':
          return list;
        case 'Up':
          return list.filter(item => item.increase === true);
        case 'Rich':
          return list.filter(item => item.salary > 1000);
        default:
          return list;
      }
  }
  setFilter = (type) => {
    this.setState({filterType: type});
  }

  setSearchReq = (req) => {
    this.setState({searchRequest: req})
  }

  onSearch = (list, searchParameter) => {
    if (searchParameter !== null && searchParameter !== '') {
      
      return list.filter(item => item.name.toLowerCase().includes(searchParameter.toLowerCase()));
    } else {
      return list
    }
    
  }

  render() {
    const { data, searchRequest, filterType } = this.state;
    const dataToRender = this.onFilter(this.onSearch(data, searchRequest), filterType) 
    return (
      <div className="app">
        <AppInfo 
          totalAmount={this.state.data.length}
          lucky={this.state.data.filter(item => item.increase === true)}
        />
  
        <div className='search-panel'>
          <SearchPanel 
            onSearch={this.setSearchReq}
          />
          <AppFilter 
            onFilter={this.setFilter}
            filterType={filterType}
          />
        </div>
        <EmployeesList 
            data={dataToRender}
            // data={this.state.dataToRender.length !== 0 ? this.state.dataToRender : this.state.data}
            handleDelete={this.handleDelete}
            onToggleProp={this.onToggleProp} 
        />
        <EmployeesAddForm 
            handleAdd={this.handleAdd}
        />
      </div>
    );
  }
  
}