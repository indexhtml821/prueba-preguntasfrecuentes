import Welcome from './actions/welcome'

export const routes = [
  {
    path: 'welcome',
    text: /hi|hello/,
    action: Welcome,
  },
]