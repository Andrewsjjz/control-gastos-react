import React from 'react'
import Gasto from './Gasto'

const ListaGastos = ({
  gastos, 
  setEditarGasto, 
  EliminarGastos,
  filtro,
  gastofiltrado
}) => {
  return (
    <div className='listado-gastos contenedor'>

        {filtro ? (
          <>
        <h2>{gastofiltrado.length ? "Gastos" : "No hay gastos"}</h2>

            {gastofiltrado.map( gasto => (
              <Gasto 
              key={gasto.id}
              gasto={gasto}
              setEditarGasto={setEditarGasto}
              EliminarGastos={EliminarGastos}
              />
          ))}
          </>
          ) : (
            <>
        <h2>{gastos.length ? "Gastos" : "No hay gastos"}</h2>
            
            {gastos.map( gasto => (
              <Gasto 
              key={gasto.id}
              gasto={gasto}
              setEditarGasto={setEditarGasto}
              EliminarGastos={EliminarGastos}
              />
          ))}
          </>
          )
        }

    </div>
  )
}

export default ListaGastos
