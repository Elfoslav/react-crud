import React from 'react';
import { Form, Button, Grid } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import serialize from 'form-serialize';
import PersonsStore from '../../../stores/PersonsStore';

export default class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = { 
      submitted: false, 
      person: props.person || {} 
    };
  }
  
  handleInputChange = (e) => {
    this.setState({
      person: {
        [e.target.name]: e.target.value
      }
    });
  }
  
  submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    var data = serialize(form, { hash: true});
    //console.log(data);
    if (!data.name) {
      alert('Fill in name');
      return form.name.focus();
    }
    if (!data.surname) {
      alert('Fill in surname');
      return form.surname.focus();
    }
    if (!data.age) {
      alert('Fill in age');
      return form.age.focus();
    }
    //form.reset();
    this.setState({ submitted: true });
    data.id = data.id || PersonsStore.data.length + 1;
    data.age = parseInt(data.age, 10);
    
    if (this.props.edit) {
      PersonsStore.edit(data.id, data);
    } else {
      PersonsStore.add(data);
    }
  }
  
  render() {
    const person = this.state.person;
    
    if (this.state.submitted && !this.props.edit) {
      return <Redirect to='/persons' />
    }
      
    if (this.state.submitted && this.props.edit) {
      return <Redirect to={'/persons/' + this.props.person.id} />
    }
    
    return(
      <Grid centered columns={3}>
        <Grid.Column>
          <Form id='add-person-form' onSubmit={this.submitForm}>
            <Form.Field>
              <label>First Name</label>
              <input type='text' name='name' value={person.name} placeholder='First Name' onChange={this.handleInputChange} />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input type='text' name='surname' value={person.surname} placeholder='Last Name' onChange={this.handleInputChange} />
            </Form.Field>
            <Form.Field>
              <label>Age</label>
              <input name='age' type='number' value={person.age} placeholder='Age' onChange={this.handleInputChange} />
            </Form.Field>
            <input name='id' type='hidden' value={person.id} />
            <Button positive form='add-person-form' type='submit' value='Submit'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}