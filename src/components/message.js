import * as React from 'react'
import AntdIcon from './antdIcons'

function Message({ message, ...rest }) {
  return (
    <React.Fragment>
      <div className='message-wrapper'>
        <div className={`icon-message icon-${rest.type}`}>
          <AntdIcon isFilled {...rest} />
        </div>
        <div>
          <div className='notification-content' style={{ textAlign: 'center' }}>
            <span>{message}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Message
