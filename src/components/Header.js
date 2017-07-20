import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';
import logo from '../logo.svg';

export default class Header extends React.Component {
//  constructor(props) {
//    super(props);
//  }
  
  render() {
    return(
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React crud persons app</h2>
        <Segment inverted textAlign='center' size='mini'>
          <Menu inverted pointing secondary compact>
            <Menu.Item name='home' active={window.location.pathname === '/'} as={Link} to='/'>
              Home
            </Menu.Item>
            <Menu.Item name='persons' as={Link} active={window.location.pathname === '/persons'} to='/persons'>
              Persons
            </Menu.Item>
          </Menu>
        </Segment>
      </div>
    );
  }
}