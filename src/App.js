import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import data from './data/data.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import SelectedBeast from './selectedBeast';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      displayModal: false,
      favoriteBeast: {}
    };
  }

  showModal = (index) => {
    this.setState({ favoriteBeast: this.state.beastData[index],
    showAsModal: true});
  }

  closeModal = () => {
    this.setState({showAsModal: false});
  }
  render() {

  return (
    <div className="App">
      <Header />
      <Main 
        showModal={this.showModal}
        cards={this.state.beastData}/>
        <SelectedBeast
        showModal={this.state.showAsModal}
        closeModal={this.closeModal}
        favoriteBeast={this.state.favoriteBeast}/>

      <Footer />
    </div>
  );
}
}

export default App;
