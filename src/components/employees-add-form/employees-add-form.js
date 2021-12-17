import { Component } from 'react';
import './employees-add-form.css';

export default class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      salary: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }



  handleSubmit = (e) => {
    e.preventDefault();
    if ((this.state.name !== '' && this.state.name.length > 3) && (this.state.salary !== '')) {
      this.props.handleAdd(this.state.name, +this.state.salary);
      this.setState({
        name: '',
        salary: ''
      })
    }
    

  }

  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
          <h3>Add new employee</h3>
          <form
              className="add-form d-flex"
              onSubmit={this.handleSubmit}>
              <input type="text"
                  name='name'
                  value={name}
                  className="form-control new-post-label"
                  placeholder="What is his name?" 
                  onChange={this.handleChange}
                  />
              <input type="number"
                  name="salary"
                  value={salary}
                  className="form-control new-post-label"
                  placeholder="Outcome, $?" 
                  onChange={this.handleChange}
                  />

              <button type="submit"
                      className="btn btn-outline-light"
                      >Add</button>
          </form>
      </div>
)
  }
  
}
