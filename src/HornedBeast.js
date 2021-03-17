import React from 'react';
import Card from 'react-bootstrap/Card'

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
      <Card>
      <h2>{this.props.title}</h2>
      <img onClick={this.voteForHornedBeast} src={this.props.source} alt={this.props.alt} width="400" />
      <p>❤️: {this.state.numberOfVotes}</p>
      <p>{this.props.description}</p>
      </Card>
    )
}
}

export default HornedBeast