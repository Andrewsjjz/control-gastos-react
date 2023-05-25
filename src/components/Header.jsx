import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
  presupuesto,
  setPresupuesto,
  validopresupuesto,
  setValidopresupuesto,
  gastos,
  setGastos
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {validopresupuesto ? (
        <ControlPresupuesto
          gastos={gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setValidopresupuesto={setValidopresupuesto}
        />

      ) : (

        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setValidopresupuesto={setValidopresupuesto}
        />
      )}

    </header>
  )
}

export default Header
