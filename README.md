# antd-notifications-messages

Obtain a behavior equal to the notifications and messages found in the great Ant-Design library, credit for this
libraries.
[demo here](https://antd-notifications-messages.vercel.app)

* [Antd - notifications](https://ant.design/components/notification)
* [Antd - messages](https://ant.design/components/message)

## Why to use?

Sometimes you probably have a mini project or you just don't need to install the whole antd package to simply use
notifications or messages.

## How to install

Install from:

- `npm install antd-notifications-messages`

or

- `yarn add antd-notifications-messages`

## How to use:

import css in fisrt file to project

index.js

```js
// import CSS
import 'antd-notifications-messages/lib/styles/index.css'

...
```

```js
// import CSS
import 'antd-notifications-messages/lib/styles/index.css'
import React from 'react'
import { notification } from 'antd-notifications-messages'

function App() {
  const show = (type) => {
    // notification use
    notification({
      type,
      title: 'This is a Title',
      message: `This is a notification type ${type}`,
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

[comment]: <> (## Message Props)

[comment]: <> (|   prop   | type   |  default  |                                       description                                       |)

[comment]: <> (|:--------:|--------|:---------:|:---------------------------------------------------------------------------------------:|)

[comment]: <> (| type     | enum   | "success" | Optional. defines the type of notification. "success" \| "info" \| "warning" \| "error" |)

[comment]: <> (| message  | string | ""        | Required. Message of notification                                                       |)

[comment]: <> (| duration | number | 5000      | Optional. Defines the time that the notification will be active on the screen           |)

