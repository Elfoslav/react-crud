import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Person extends React.Component {
  render() {
    const data = this.props;
    return(
      <p>
        <Link to={'/persons/' + data.id}>{data.name} {data.surname}, {data.age}</Link>
        &nbsp;(<Link className='red-text' to={'/persons/edit/' + data.id}>Edit</Link>)
      </p>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}