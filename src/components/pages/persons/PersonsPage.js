import React from 'react';
import Person from '../../models/Person';
import { Link } from 'react-router-dom';
import { Button, Icon, Grid } from 'semantic-ui-react';
import PersonsStore from '../../stores/PersonsStore';
import PersonsSearchForm from './partials/PersonsSearchForm';

export default class PersonsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: []
    }
  }
  
  getPersons() {
    //TODO ajax call
    this.setState({
      persons: PersonsStore.findAll()
    });
  }
  
  handleFilterUpdate(data) {
    this.setState({
      persons: PersonsStore.find(data)
    });
  }
  
  componentDidMount() {
    this.getPersons();
  }
  
  deletePerson(id) {
    console.log('deleting: ', id);
    this.setState({
      persons: PersonsStore.findAll()
    });
  }
  
  render() {
    return(
      <div id="persons-page">
        <h1>Persons</h1>
        <p><Link to='/persons/add' ><Button color='green'><Icon name='add' size='small' /> Add person</Button></Link></p>
        <br />
        <Grid centered divided columns={4}>
          <Grid.Column>
            <PersonsSearchForm filterPersons={this.handleFilterUpdate.bind(this)} />
          </Grid.Column>
          <Grid.Column>
            <br />
            {this.state.persons.map((person, i) =>
              <Person {...person} key={i} deletePerson={this.deletePerson.bind(this)} />
            )}
            {this.state.persons.length > 0 ? '' : <p>No data, yet.</p>}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}