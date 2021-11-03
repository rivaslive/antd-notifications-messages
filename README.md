# antd-notifications-messages

This package is based on react-notifications-component, so I only add certain specific elements to obtain a behavior equal to the notifications and messages found in the great Ant-Design library, credits for these two libraries.
[demo here](https://antd-notifications-messages.vercel.app)

* [react-notifications-component](https://www.npmjs.com/package/react-notifications-component)
* [Antd - notifications](https://ant.design/components/notification)
* [Antd - messages](https://ant.design/components/message)

## Why to use?

Sometimes you probably have a mini project or you just don't need to install the whole antd package to simply use notifications or messages.

## How to install

Install from:

- `npm install antd-notifications-messages`

or

- `yarn add antd-notifications-messages`

## How to use:
First of all this library depends on react-notifications-component so you must first install it

- `npm install react-notifications-component`

or

- `yarn add react-notifications-component`

Second we have to add our provider in the index or body of our site, if you have a fixed nav you should add it below the nav so that the notifications are shown below it and not over, but it is open to be shown wherever you want, enought on place the provider in the desired place.

**Note:**
<em>Please do not import any css from react-notifications-component, it is already included in this package</em>


`src/index.js`

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

`src/app.js`

```js
import React from 'react'
import { notification, message } from 'antd-notifications-messages'

function App() {
  const show = (type) => {
    // notification use
    notification({
      type,
      title: 'This is a Title',
      message: `This is a notification type ${type}`,
    })

    // Message use
    message({
      type,
      message: `This is a message type ${type}`,
    })
  }

  return (
    <div>
      <button onClick={() => show('success')}>Success</button>
      <button onClick={() => show('info')}>Info</button>
      <button onClick={() => show('warning')}>Warning</button>
      <button onClick={() => show('error')}>Error</button>
    </div>
  )
}
```

## Notification Props
|   prop   | type   |  default  |                                       description                                       |
|:--------:|--------|:---------:|:---------------------------------------------------------------------------------------:|
| type     | enum   | "success" | Optional. defines the type of notification. "success" \| "info" \| "warning" \| "error" |
| title    | string | ""        | Required. Title of notification                                                         |
| message  | string | ""        | Required. Message of notification                                                       |
| duration | number | 5000      | Optional. Defines the time that the notification will be active on the screen           |


## Message Props
|   prop   | type   |  default  |                                       description                                       |
|:--------:|--------|:---------:|:---------------------------------------------------------------------------------------:|
| type     | enum   | "success" | Optional. defines the type of notification. "success" \| "info" \| "warning" \| "error" |
| message  | string | ""        | Required. Message of notification                                                       |
| duration | number | 5000      | Optional. Defines the time that the notification will be active on the screen           |

## The future
I'm Keep adding features such as the location of alerts and classes, styles to make notifications customizable, or that you can launch your own component in the notification, this in the version 2.
coming soon
