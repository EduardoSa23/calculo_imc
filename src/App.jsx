import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import imcImage from './assets/images/imc1.png';



function App() {
  return (
    <div className="container">
      <div className="image">
      <img src={imcImage} alt="Figura de saúde" />
      </div>
      <Form />
    </div>
  );
}

export default App;
