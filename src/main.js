import React from 'react';

class Main extends React.Component{
  render() {
    return(
      <div>
        <h2>{this.props.title}</h2>
        <img src={this.props.source} alt={this.props.alt} width="400" />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Main;
