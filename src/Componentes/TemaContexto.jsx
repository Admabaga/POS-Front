import React, { createContext, useState, useEffect } from 'react'

const TemaContexto = createContext()

export const ProveerTema = ({ children }) => {
    const [tema, setTema] = useState(
      localStorage.getItem('tema') || '' 
    )
  
    const cambiarTema = () => {
      setTema(tema => (tema === "" ? "light" : ""))
      localStorage.setItem('tema', tema === "" ? "light" : "")
      document.body.classList.toggle('light-mode')
    }
  
    useEffect(() => {
      localStorage.setItem('tema', tema)
    }, [tema])
  
    return (
      <TemaContexto.Provider value={{ tema, cambiarTema }}>
        {children}
      </TemaContexto.Provider>
    )
  }

export default TemaContexto