import React from 'react';
import PersonForm from './partials/PersonForm';

export default class PersonAddPage extends React.Component {
  render() {
    return (
      <div id="persons-page">
        <h1>Add a person</h1>
        <PersonForm />
      </div>
    );
  }
}