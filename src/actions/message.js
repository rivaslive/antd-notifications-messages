import * as React from 'react'
import Message from '../components/message'
import { store } from 'react-notifications-component'

const message = ({ duration = 5000, type = 'success', ...props }) =>
  store.addNotification({
    content: <Message {...props} type={type} />,
    type: 'success',
    insert: 'top',
    container: 'top-center',
    animationIn: ['', 'elementTopFadeIn'],
    animationOut: ['', 'elementTopFadeOut'],
    dismiss: { duration }
  })

export default message
