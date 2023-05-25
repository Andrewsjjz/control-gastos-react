import {useState, useEffect} from 'react'
import React from 'react'
import cerrarmodal from "../img/cerrarbtn.svg"
import Mensaje from './Mensaje'

const Modal = ({
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto,
    editarGasto,
    setEditarGasto
}) => {

    const [mensajegasto, setMensajegasto] = useState('')
    const [descripciongasto, setDescripciongasto] = useState('')
    const [montogasto, setMontogasto] = useState('')
    const [categoriagasto, setCategoriagasto] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')
 
    useEffect(() =>{
        if(Object.keys(editarGasto).length > 0){
            setDescripciongasto(editarGasto.descripciongasto)
            setMontogasto(editarGasto.montogasto)
            setCategoriagasto(editarGasto.categoriagasto)
            setId(editarGasto.id)
            setFecha(editarGasto.fecha)
          }
    }, [])



const CerrarModal =() => {
    setAnimarModal(false)
    setEditarGasto({})

    setTimeout(() => {
    setModal(false)
        
      }, 600)
}

const HandleValidacion = e => {
    e.preventDefault();

    if ([descripciongasto, montogasto, categoriagasto].includes('')){
        setMensajegasto('Por favor llene los campos')
        return
    }
    
    guardarGasto ({descripciongasto, montogasto, categoriagasto, id, fecha})
}
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
            src={cerrarmodal} 
            alt="btn para cerrar" 
            onClick={CerrarModal}
            />
        </div>

        <form 
        className={`formulario ${animarModal ? "animar" : 'cerrar'} `}
        onSubmit={HandleValidacion}
        >
            <legend>{editarGasto.descripciongasto ? "Editar Gasto" : "Nuevo Gasto"}</legend>
            {mensajegasto && <Mensaje tipo="error">{mensajegasto}</Mensaje>}

            <div className='campo'>
                <label htmlFor="descripcion">Descripcion</label>

                <input 
                type="text"
                id="descripcion" 
                placeholder='Escriba la descripcion'
                value={descripciongasto}
                onChange={e => setDescripciongasto(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="Monto">Monto</label>

                <input 
                type="number"
                id="Monto" 
                placeholder='Escriba el monto'
                value={montogasto}
                onChange={e => setMontogasto(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor="Categoria">Categoria</label>

                <select 
                id="categoria"
                value={categoriagasto}
                onChange={e => setCategoriagasto(e.target.value)}
                >
                    <option value="">--Seleccionar--</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Inversion">Inversion</option>
                    <option value="Comida">Comida</option>
                    <option value="Salud">Salud</option>
                    <option value="Cervezas">Cervezas</option>
                </select>
            </div>
                <input 
                type="submit" 
                value={editarGasto.descripciongasto ? "Guardar Cambios" : "Añadir gasto"}
                />

        </form>
    </div>
  )
}

export default Modal
