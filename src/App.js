import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';

import pepper from './img/pepper.JPG';
import george from './img/george.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <Main title='Pepper' source={pepper} alt='dog holding a turkey feather' description='Very pleased with herself after finding this feather'/>
      <Main title='George' source={george} alt='cat in blanket with paws crossed' description='Looking regal and contented, as a cat should' />
      <Footer />
    </div>
  );
}

export default App;
