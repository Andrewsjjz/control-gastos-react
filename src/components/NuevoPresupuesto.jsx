import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
  presupuesto, 
  setPresupuesto,
  setValidopresupuesto
}) => {

  const [mensaje, setMensaje] = useState ('')

  const handlePresupuesto = e => {
    e.preventDefault ()

    if (!presupuesto || presupuesto < 0) {
      setMensaje ('Presupuesto no valido')
      return
    } 
    setMensaje('')
    setValidopresupuesto(true)
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                
                <input 
                type="number" 
                className='nuevo-presupuesto' 
                placeholder='Ingrese presupuesto' 
                value={presupuesto}
                onChange={ e => setPresupuesto(Number(e.target.value))}
                />

            </div>
            <input 
            type="submit" 
            value="Añadir presupuesto" 
            onClick={handlePresupuesto}/>

            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
      
    </div>
  )
}

export default NuevoPresupuesto
