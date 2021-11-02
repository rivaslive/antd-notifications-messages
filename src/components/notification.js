import * as React from 'react'
import AntdIcon from './antdIcons'

const Notification = ({ title, message, type = 'success', ...rest }) => (
  <div className='notification-wrapper'>
    <div className={`icon-notification icon-${type}`}>
      <AntdIcon type={type} {...rest} />
    </div>
    <div>
      <div className='notification-title'>{title}</div>
      <div className='notification-content'>{message}</div>
    </div>
    <div className='notification-close' />
  </div>
)

export default Notification
