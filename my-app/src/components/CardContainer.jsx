// src/components/CardContainer.jsx
import React, { useState } from 'react';

const CardContainer = ({ children }) => {
  // Estado para controlar la disposición: 'row' o 'column'
  const [layout, setLayout] = useState('row');

  // Cambiar la disposición al seleccionar una opción del desplegable
  const handleLayoutChange = (event) => {
    setLayout(event.target.value);
  };

  return (
    <div>
      {/* Desplegable para cambiar la disposición */}
      <select onChange={handleLayoutChange} value={layout}>
        <option value="row">Filas</option>
        <option value="column">Columnas</option>
      </select>

      {/* Contenedor de tarjetas con disposición dinámica */}
      <div style={{ display: 'flex', flexDirection: layout, gap: '10px', marginTop: '10px' }}>
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
