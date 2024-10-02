import React, { useContext } from "react";
import RegistroProducto from "./ProductoRegistro";

function ContenidoPrincipal({valorEstado = 'registroProducto'}) {

  return (
    <>
      {valorEstado === 'registroProducto' && (
        <section className='mainInformation'>
          <RegistroProducto />
        </section>
      )}
    </>
  );
}

export default ContenidoPrincipal;
