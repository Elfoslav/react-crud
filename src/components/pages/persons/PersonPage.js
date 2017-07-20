import React from 'react';
import { Link } from 'react-router-dom';
import PersonsStore from '../../stores/PersonsStore';

export default class PersonPage extends React.Component {
  constructor(props) {
    super(props);
    const id = props.match.params.id;
    this.state = { person: PersonsStore.findById(id) };
  }
  
  render() {
    const person = this.state.person;
    if (!person) {
      return <h1>Person not found</h1>;
    }
    return(
      <div id="persons-page">
        <h1>{person.name} {person.surname} (<Link to={'/persons/edit/' + person.id}>Edit</Link>)</h1>
        <p>{person.age} years old.</p>
        <p><Link to='/persons'>&larr; back to persons</Link></p>
      </div>
    );
  }
}