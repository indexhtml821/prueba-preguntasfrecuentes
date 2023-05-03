import REACT from 'react'
import { Text,Reply } from '@botonic/react'


export default class extends REACT.Component {

    render() {
        return (
            <>
                <Text>
                    Bienvenido a la página de METICS
                </Text>
                <Text>
                    ¿Cómo podemos ayudarle?
                    <Reply payload='contacto'>Información de contacto</Reply>
                    <Reply payload='inscripcion'>Inscribirse en un curso de Competencias Digitales</Reply>
                </Text>
            </>
        )
    }
}