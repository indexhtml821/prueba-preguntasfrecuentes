import React from 'react'
import { Text, Reply } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>Bienvenido a METICS!</Text>
                <Text>
                    ¿Cómo podemos ayudarle?
                    <Reply payload='contacto'>Contacto</Reply>
                    <Reply payload='inscripcion'>Inscripcion</Reply>
                </Text>
            </>
        )
    }
}