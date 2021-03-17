import React from 'react';
import Col from 'react-bootstrap/Col'

class HornedBeast extends React.Component{

  constructor(props){
    super(props);
    this.state={
      numberOfVotes: 0
    }
  }

  rowCounter = 0;

  voteForHornedBeast = () => {
    this.setState({numberOfVotes: this.state.numberOfVotes + 1})
  }

  render() {
    return(
      <Col xs={3} md={4}>
      <h2>{this.props.title}</h2>
      <img onClick={this.voteForHornedBeast} src={this.props.source} alt={this.props.alt} width="400" />
      <p>❤️: {this.state.numberOfVotes}</p>
      <p>{this.props.description}</p>
      </Col>
    )
}
}

export default HornedBeast