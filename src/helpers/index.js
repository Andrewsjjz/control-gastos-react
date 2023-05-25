
//Generar ID aleatorio
export const GenerarID = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
}

//Formatear fecha

export const FormatearFecha = fecha => {
        const nuevaFecha = new Date(fecha)
        const hora = nuevaFecha.getHours()
        const minuto = nuevaFecha.getMinutes()
        const opciones = {
                year: 'numeric',
                month: 'long',
                day: '2-digit'
        }

        const FechaHoy = nuevaFecha.toLocaleDateString('es-ES', opciones)

        return FechaHoy + ' ' + '-' + ' ' + hora + ':' + minuto + 'hs';
}