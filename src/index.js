/**
 * @class ExampleComponent
 */

import React from 'react'
import notification from './actions/notifications'
import message from './actions/message'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './styles/styles.scss'

// eslint-disable-next-line react/prop-types
function NotificationProvider ({ children }) {
  return (
    <React.Fragment>
      <ReactNotification />
      {children}
    </React.Fragment>
  )
}

export default NotificationProvider
export {notification, message}
//
// export class ExampleComponent extends Component {
//   static propTypes = {
//     text: PropTypes.string
//   }
//   show = () => {
//     store.addNotification({
//       message: 'teodosii@react-notifications-component',
//       type: 'success',
//       insert: 'top',
//       container: 'top-center',
//       animationIn: ['', 'elementTopFadeIn'],
//       animationOut: ['', 'elementTopFadeOut'],
//       dismiss: {duration: 1235000}
//     })
//   }
//   render() {
//     const {
//       text
//     } = this.props
//     return (
//       <div>
//         <ReactNotification />
//         <div className='test'>
//           <AntdIcon type='error' isFilled />
//           Example Component: {text}
//           <button onClick={this.show}>Show</button>
//         </div>
//       </div>
//     )
//   }
// }
