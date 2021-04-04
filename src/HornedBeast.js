import React from 'react';
import Card from 'react-bootstrap/Card'

class HornedBeast extends React.Component{

  constructor(props){
    super(props);
    this.state={
      numberOfVotes: 0
    }
  }

  voteForHornedBeast = () => {
    this.setState({numberOfVotes: this.state.numberOfVotes + 1})
  }

  doModal = () => {
    this.props.showModal(this.props.index);
  }

  render() {
    return(
      <div>
      <Card bg='dark' text='light'>
      <Card.Img onClick={this.doModal} src={this.props.source} alt={this.props.alt}/>
      <Card.Body onClick={this.voteForHornedBeast}>
      <Card.Text> ❤️ : {this.state.numberOfVotes} </Card.Text>
      <Card.Text>{this.props.description}</Card.Text>
      </Card.Body>
      </Card>
      </div>
    )
}
}

export default HornedBeast;