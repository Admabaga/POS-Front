// ValoresContext.js
import React, { createContext, useState } from 'react';

const ValoresContext = createContext();

export const ValoresContexto = ({ children }) => {
  const [valorInfo, setValue] = useState({
    estadoNav: ''
  });

  const actualizarEstadoNav = (estadoActualizado) => {
    setValue(prevState => ({
      ...prevState,
      estadoNav: estadoActualizado
    }));
  };

  return (
    <ValoresContext.Provider value={{ valorInfo, actualizarEstadoNav }}>
      {children}
    </ValoresContext.Provider>
  );
};

export default ValoresContexto;
