import React from 'react';
import './App.css';
import Heading from './components/heading';
import Content from './components/content';
import Footer from './components/footer';

function App() {
  return (
    <div className='container'>
      <Heading />
       <Content />
      <Footer />
    </div>
  );
}

export default App;
