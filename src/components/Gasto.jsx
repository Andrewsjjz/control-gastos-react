import React from 'react'
import {FormatearFecha} from '../helpers'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import AhorroIcono from '../img/Ahorro.svg'
import CervezaIcono from '../img/Cerveza.svg'
import ComidaIcono from '../img/Comida.svg'
import InversionIcono from '../img/Inversion.svg'
import SaludIcono from '../img/Salud.svg'

const DiccionarioIconos = {
  Ahorro : AhorroIcono,
  Cervezas : CervezaIcono,
  Comida : ComidaIcono,
  Inversion : InversionIcono,
  Salud : SaludIcono
}

const Gasto = ({gasto, setEditarGasto, EliminarGastos}) => {

  const {categoriagasto, descripciongasto, montogasto, id, fecha } = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditarGasto(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  );
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => EliminarGastos(id)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>

      <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
      >

      <div className='gasto sombra'>
        <div className='contenido-gasto'>
          <img 
          src={DiccionarioIconos[categoriagasto]} 
          alt="Iconos de categoria" 
          />
          <div className='descripcion-gasto'>
            <p className='categoria'>{categoriagasto}</p>
            <p className='nombre-gasto'>{descripciongasto}</p>
            <p className='fecha-gasto'>
              Agregado el dia: {''}
              <span>{FormatearFecha(fecha)}</span>
            </p>

          </div>
        </div>
        <p className='cantidad-gasto'>${montogasto}</p>
      </div>

      </SwipeableListItem>

      </SwipeableList>
  )
}

export default Gasto
