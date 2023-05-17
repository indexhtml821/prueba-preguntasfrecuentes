import Welcome from './actions/welcome'
import ChosenContacto from './actions/chosen-contacto'
import chosenInscripcion from './actions/chosen-inscripcion'

export const routes = [
  {
    path: 'welcome',
    text: /hi|hello/,
    action: Welcome,
    childRoutes: [
      {
        path: 'chosen-contacto',
        payload: 'contacto',
        action: ChosenContacto,
      },
      {
        path: 'chosen-inscripcion',
        payload: 'inscripcion',
        action: chosenInscripcion,
      },
    ],
  },
]