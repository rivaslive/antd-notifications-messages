import * as React from 'react'
import { store } from 'react-notifications-component'
import Notifications from '../components/notification'

const notification = ({
  duration = 5000,
  ...props
}) =>
  store.addNotification({
    content: <Notifications {...props} />,
    type: 'success',
    insert: 'top',
    container: 'top-right',
    animationIn: ['', 'elementToFadeIn'],
    animationOut: ['', 'elementToFadeOut'],
    dismiss: { duration }
  })

export default notification
