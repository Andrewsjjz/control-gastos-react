import {useEffect , useState} from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
  presupuesto,
  setPresupuesto, 
  gastos,
  setGastos,
  setValidopresupuesto

}) => {

  const [porcentaje, setPorcentaje] = useState(0)

  const [gastado, setGastado] = useState(0)
  const [disponible, setDisponible] = useState(0)

  useEffect (() =>{
    const TotalGastado = gastos.reduce ( (total, gasto) => gasto.montogasto + total, 0)
    const TotalDisponible = presupuesto - TotalGastado

    const nuevoPorcentaje = (( ( presupuesto - TotalDisponible ) / presupuesto) * 100).toFixed(2)

    setPorcentaje(nuevoPorcentaje)

    setDisponible(TotalDisponible)
    setGastado(TotalGastado)

  }, [gastos])



  const HandleResetApp = () => {
      const confirmarReinicio = confirm('¿Desea borrar el presupuesto y gasto?')
      if(confirmarReinicio){
        setGastos([])
        setPresupuesto(0)
        setValidopresupuesto(false)
      }
  } 


  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString ('en-US' , {
      style: 'currency',
      currency: 'USD'
    })
  }

  return (
    <div className='contenedor sombra contenedor-presupuesto dos-columnas'>

      <div>
        <CircularProgressbar 
        value={porcentaje}
        text={`${porcentaje}% Gastado`}
        styles={buildStyles({
          textColor: porcentaje > 100 ? '#FC2947' : '#FF6000',
          trailColor: '#d6d6d6',
          pathColor: porcentaje > 100 ? '#FC2947' : '#16FF00',
          backgroundColor: '#FF6000',
          pathTransitionDuration: 2
        })}
        />
      </div>

      <div className="contenido-presupuesto">
        <button
        className='reset-app'
        type='button'
        onClick={HandleResetApp}
        >
          Resetear App
        </button>
        <p>
          <span className=''> Presupuesto:</span> {formatearCantidad(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? 'negativo' : '' }`}>
          <span className=''> Disponible:</span> {formatearCantidad(disponible)}
        </p>

        <p>
          <span className=''> Gastado:</span> {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  )
}

export default ControlPresupuesto
