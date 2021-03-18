import React from 'react';
import HornedBeast from './HornedBeast'
import CardColumns from 'react-bootstrap/CardColumns'


class Main extends React.Component{
  render() {
    return(
      <div>
      <CardColumns>
      {this.props.cards.map((data, index) => (
        <div key={index}>
        <HornedBeast title={data.title} 
              source={data.image_url} 
              alt={data.keyword}
              key={index}
              index={index}
              showModal = {this.props.showModal}
              description={data.description} />
          </div>
      ))}
        </CardColumns>
        </div>
    );
  }
}

export default Main;
