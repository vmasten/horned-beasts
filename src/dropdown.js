import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import HornedBeast from './HornedBeast';

class DropdownInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: this.props.horns
    };
  }

  render() {
    return (
  <Dropdown>
  <DropdownButton id="dropdown-item-button" title="Horns">
    <Dropdown.Item as="button" value={1} onSelect={this.props.setHorns(value)}>1</Dropdown.Item>
    <Dropdown.Item as="button">2</Dropdown.Item>
    <Dropdown.Item as="button">3</Dropdown.Item>
    <Dropdown.Item as="button">many</Dropdown.Item>
  </DropdownButton>
  </Dropdown>
    )
  }
}

export default DropdownInfo