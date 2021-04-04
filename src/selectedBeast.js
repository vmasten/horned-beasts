import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'

class SelectedBeast extends React.Component{
  render() {
    return (
      <>
      <Modal size='lg' show={this.props.showModal} onHide={this.props.closeModal}>
      <Card>
      <Card.Img src={this.props.favoriteBeast.image_url} alt={this.props.favoriteBeast.keyword}/>
      <Card.Body>
      <Card.Title>{this.props.favoriteBeast.description}</Card.Title>
      </Card.Body>
      </Card>
      </Modal>
      </>
    );
  }
}

export default SelectedBeast