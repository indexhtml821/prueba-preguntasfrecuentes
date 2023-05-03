import React from 'react'
import { Text, Reply } from '@botonic/react'
import welcome from './actions/welcome'

export const routes = [
  {
    path: 'initial',
    text: /hi/i,
    action: welcome,

    /* () => (
      <>
        <Text>Hello! Nice to meet you ;)</Text>
        <Text>
          How can I help you?
          <Reply payload="search">Search product</Reply>
          <Reply payload="track">Track my order</Reply>
        </Text>
      </>
    )*/
  }
]
