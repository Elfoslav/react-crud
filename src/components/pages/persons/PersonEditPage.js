import React from 'react';
import PersonForm from './partials/PersonForm';
import PersonsStore from '../../stores/PersonsStore';

export default class PersonEditPage extends React.Component {
  render() {
    const person = PersonsStore.findById(this.props.match.params.id);
    return (
      <div id="persons-page">
        <h1>Edit person</h1>
        <PersonForm edit={true} person={person} />
      </div>
    );
  }
}