import React from 'react';
import HornedBeast from './HornedBeast'
import data from './data/data.json'




class Main extends React.Component{
  render() {
    return(
      <>
      {data.map(data => (
        <HornedBeast title={data.title} 
              source={data.image_url} 
              alt={data.keyword} 
              description={data.description} /> 
      ))}
      </>
    );
  }
}

export default Main;
