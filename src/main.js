import React from 'react';
import HornedBeast from './HornedBeast'
import data from './data/data.json'
import CardColumns from 'react-bootstrap/CardColumns'


class Main extends React.Component{
  render() {
    return(
      <div>
      <CardColumns>
      {data.map(data => (

        <HornedBeast title={data.title} 
              source={data.image_url} 
              alt={data.keyword} 
              description={data.description} />

      ))}
        </CardColumns>
        </div>
    );
  }
}

export default Main;
