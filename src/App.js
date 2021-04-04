import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import data from './data/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './selectedBeast';
import DropdownInfo from './dropdown'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      beastData: data,
      filteredBeasts: data,
      displayModal: false,
      favoriteBeast: {},
      numberOfHorns: 'All'
    };
  }

  setHorns = (horns) => {
    this.setState({ numberOfHorns: horns})
    const newData = this.state.beastData.filter((beast) => {
      if (horns === 'All') {
        return beast;
      } else {
        return beast.horns === +horns;
      }
    });
    
    this.setState({filteredBeasts: newData})
    }
  

  // handleSelect = (e) => {
  //   this.setHorns(e.target.value);
  // }

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

      <DropdownInfo
        setHorns={this.setHorns}
        horns={this.state.numberOfHorns}/>
      <Main 
        horns={this.state.numberOfHorns}
        showModal={this.showModal}
        cards={this.state.filteredBeasts}/>
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
