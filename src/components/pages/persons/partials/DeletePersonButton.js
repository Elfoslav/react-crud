import React from 'react';
import { Icon } from 'semantic-ui-react';
import PersonsStore from '../../../stores/PersonsStore';

export default class DeletePersonButton extends React.Component {
  deletePerson = (e) => {
    e.preventDefault();
    let confirmed = window.confirm('Do you really want to delete this item?');
    if (confirmed) {
      PersonsStore.delete(this.props.id);
      this.props.deletePerson(this.props.id);
    }
  }
  
  render() {
    return (
      <a className="red-text" href={"#delete?id=" + this.props.id} title="delete" onClick={this.deletePerson}>
        <Icon name='delete' />
      </a>
    );
  }
}