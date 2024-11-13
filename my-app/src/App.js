import React from 'react';
import CardContainer from './components/CardContainer';

const App = () => {
  return (
    <div>
      <h1>Probando el CardContainer</h1>
      <CardContainer>
        <div style={{ padding: '20px', border: '1px solid black' }}>Tarjeta 1</div>
        <div style={{ padding: '20px', border: '1px solid black' }}>Tarjeta 2</div>
        <div style={{ padding: '20px', border: '1px solid black' }}>Tarjeta 3</div>
      </CardContainer>
    </div>
  );
};

export default App;
