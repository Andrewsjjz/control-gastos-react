import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListaGastos from './components/ListaGastos'
import Filtro from './components/Filtro'
import { GenerarID } from './helpers'
import IconoADD from './img/signo-de-mas.png'
import { number } from 'prop-types'


function App() {

  const [presupuesto, setPresupuesto] = useState(
      Number(localStorage.getItem('presupuesto') ?? 0)
  )
  const [validopresupuesto, setValidopresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [editarGasto, setEditarGasto] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastofiltrado, setGastofiltrado] = useState([])


  useEffect(() => {
    if (Object.keys(editarGasto).length > 0) {
      setModal(true)

      setTimeout(() => {
        setAnimarModal(true)
      }, 600)
    }
  }, [editarGasto])


  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect (() =>{
    const gastosLS = localStorage.getItem('gastos');

    if(gastosLS > 0){
      setEditarGasto([])
    }

  }, [])


  useEffect(() =>{
      if(filtro){
        const gastosFiltrado = gastos.filter (gastos => gastos.categoriagasto === filtro)
        setGastofiltrado(gastosFiltrado)
      }
  }, [filtro])



  useEffect(() => {
    Number(localStorage.setItem('presupuesto', presupuesto ?? 0))
  }, [presupuesto])

  useEffect (() =>{
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupuestoLS > 0){
      setValidopresupuesto(true)
    }

  }, [])



  const handleNuevoGasto = () => {

    setModal(true)
    setEditarGasto({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 600)
  }


  const guardarGasto = gasto => {

    if (gasto.id) {

      const GastosActualizados = gastos.map(gastoState => gastoState.id ===
        gasto.id ? gasto : gastoState)

      setGastos(GastosActualizados)
      setEditarGasto({})

    } else {
      gasto.id = GenerarID()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }


    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)

    }, 600)
  }

  const EliminarGastos = id => {
    const gastosEliminador = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosEliminador)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validopresupuesto={validopresupuesto}
        setValidopresupuesto={setValidopresupuesto}
      />

      {validopresupuesto && (
        <>
          <main>
            <Filtro
            filtro={filtro}
            setFiltro={setFiltro}
            />
            <ListaGastos
              gastos={gastos}
              setEditarGasto={setEditarGasto}
              EliminarGastos={EliminarGastos}
              filtro={filtro}
              gastofiltrado={gastofiltrado}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconoADD}
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        editarGasto={editarGasto}
        setEditarGasto={setEditarGasto}
      />}
    </div>
  )
}

export default App
