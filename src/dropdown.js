import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

class DropdownInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horns: this.props.horns
    };
  }

  handleSelect = (e) => {
    this.props.setHorns(e);
  }

  render() {
    return (
  <Dropdown>
  <DropdownButton id="dropdown-item-button" title="Horns">
    <Dropdown.Item as="button" eventKey="1" onSelect={this.handleSelect}>1</Dropdown.Item>
    <Dropdown.Item as="button" eventKey="2" onSelect={this.handleSelect}>2</Dropdown.Item>
    <Dropdown.Item as="button" eventKey="3" onSelect={this.handleSelect}>3</Dropdown.Item>
    <Dropdown.Item as="button" eventKey="100" onSelect={this.handleSelect}>many</Dropdown.Item>
  </DropdownButton>
  </Dropdown>
    )
  }
}

export default DropdownInfo