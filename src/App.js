import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';
import data from './data/data.json';

const titleArray = data.map(data => data.title);
console.log(titleArray)


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
