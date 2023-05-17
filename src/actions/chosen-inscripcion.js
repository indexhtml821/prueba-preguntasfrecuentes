import React from 'react'
import {
  Text,
  Carousel,
  Element,
  Pic,
  Button,
  Title,
  Subtitle,
} from '@botonic/react'

export default class extends React.Component {
  render() {

  

    // @varcourses se guarda la información de cursos en caso de tenerlos de manera local
    const courses = [
      {
        nombre: 'Comunicación Coherente, Asertiva y Empática en la Docencia',
        dif: '🌟 🌟 🌟 🌟',
        link:'https://metics.ucr.ac.cr/es/component/sppagebuilder/32-comunicacion-coherente-asertiva-y-empatica-en-la-docencia',
        foto:'https://metics.ucr.ac.cr/images/Documentos/Marco_Competencias/Caretas_Modulos/careta_comunicacion_coherente.png',
      },
      {
        nombre: 'Construcción de Ciudadanía Digital desde la Docencia',
        dif: '🌟 🌟 🌟 🌟 🌟',
        link:'https://metics.ucr.ac.cr/es/component/sppagebuilder/34-construccion-de-ciudadania-digital-desde-la-docencia',
        foto:'https://metics.ucr.ac.cr/images/Documentos/Marco_Competencias/Caretas_Modulos/careta_construccion_ciudadania.png',
      },
      {
        nombre: 'Diseño Visual Aplicado a Entornos Virtuales',
        dif: '🌟 🌟',
        link:'https://metics.ucr.ac.cr/es/component/sppagebuilder/39-diseno-visual-aplicado-a-entornos-virtuales',
        foto: 'https://metics.ucr.ac.cr/images/Documentos/Marco_Competencias/Caretas_Modulos/careta_diseo_visual.png',
      },
    ]
    return (
      <>
        <Text>Seleccione un curso:</Text>
        <Carousel>
          {courses.map((e, i) => (
            <Element key={e.nombre}>
              <Pic src={e.foto} />
              <Title>{e.nombre}</Title>
              <Subtitle>{e.dif}</Subtitle>
              <Button url={e.link} >{e.nombre}</Button>
            </Element>
          ))}
        </Carousel>
      </>
    )
  }
}