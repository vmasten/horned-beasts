import React from 'react';
import HornedBeast from './HornedBeast'
import data from './data/data.json'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Main extends React.Component{
  render() {
    return(
      <Container>
        <Row md={4}>
      {data.map(data => (

        <HornedBeast title={data.title} 
              source={data.image_url} 
              alt={data.keyword} 
              description={data.description} />

      ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
