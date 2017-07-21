import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PersonsStore from '../../stores/PersonsStore';
import DeletePersonButton from './partials/DeletePersonButton';

export default class PersonPage extends React.Component {
  constructor(props) {
    super(props);
    const id = props.match.params.id;
    this.state = { person: PersonsStore.findById(id), redirect: false };
  }
  
  deletePerson = (id) => {
    this.setState({
      redirect: true
    });
  }
  
  render() {
    const person = this.state.person;
    if (this.state.redirect) {
      return <Redirect to='/persons' />;
    }
    if (!person) {
      return <h1>Person not found</h1>;
    }
    return(
      <div id="persons-page">
        <h1>{person.name} {person.surname} (<Link to={'/persons/edit/' + person.id}>Edit</Link>) (<DeletePersonButton id={person.id} deletePerson={this.deletePerson.bind(this)} />)</h1>
        <p>{person.age} years old.</p>
        <p><Link to='/persons'>&larr; back to persons</Link></p>
      </div>
    );
  }
}