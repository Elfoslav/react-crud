import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DeletePersonButton from '../pages/persons/partials/DeletePersonButton';

export default class Person extends React.Component {
  deletePerson = (e) => {
    this.props.deletePerson(this.props.id);
  }
  
  render() {
    const data = this.props;    
    return(
      <p>
        <Link to={'/persons/' + data.id}>{data.name} {data.surname}, {data.age}</Link>
        &nbsp;(<Link className='red-text' to={'/persons/edit/' + data.id}>Edit</Link>)
        &nbsp;(<DeletePersonButton id={data.id} deletePerson={this.deletePerson.bind(this)} />)
      </p>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}