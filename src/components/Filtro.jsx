import {useEffect, useState} from 'react'

const Filtro = ({setFiltro, filtro}) => {
  return (
    <div className='filtros sombras contenedor'>
      <form action="">
        <div className='campo'>
        <label htmlFor="">Filtrar Gastos</label>
        <select 
        value={filtro}
        onChange={ e => setFiltro(e.target.value)}
        >
        <option value="">--Seleccionar--</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Inversion">Inversion</option>
                    <option value="Comida">Comida</option>
                    <option value="Salud">Salud</option>
                    <option value="Cervezas">Cervezas</option>
        </select>
        </div>

      </form>
    </div>
  )
}

export default Filtro
