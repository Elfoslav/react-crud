import React from 'react';
import { Form } from 'semantic-ui-react';

export default class PersonsSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
    this.state = {
      person: {}
    };
  }
  
  handleInputChange = (e) => {
    if (e.target.name === 'name') {
      this.data.name = e.target.value;
    }
    if (e.target.name === 'surname') {
      this.data.surname = e.target.value;
    }
    if (e.target.name === 'age') {
      this.data.age = e.target.value;
    }
    this.props.filterPersons(this.data);
  }
  
  render() {
    const person = this.state.person;
    return (
      <Form id='add-person-form' onSubmit={this.submitForm}>
        <Form.Field>
          <label>Filter by Name</label>
          <input type='text' name='name' value={person.name} placeholder='First Name' onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Filter by Last Name</label>
          <input type='text' name='surname' value={person.surname} placeholder='Last Name' onChange={this.handleInputChange} />
        </Form.Field>
        <Form.Field>
          <label>Filter by Age</label>
          <input name='age' type='number' value={person.age} placeholder='Age' onChange={this.handleInputChange} />
        </Form.Field>
      </Form>
    );
  }
}