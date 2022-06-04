# antd-notifications-messages

Obtain a behavior equal to the notifications and messages found in the great Ant-Design library, credit for this
libraries.
[demo here](https://antd-notifications-messages.vercel.app)

- [Antd - notifications](https://ant.design/components/notification)
- [Antd - messages](https://ant.design/components/message)

## Why to use?

Sometimes you probably have a mini project or you just don't need to install the whole antd package to simply use
notifications or messages.

## How to install

Install from:

- `npm install antd-notifications-messages`

or

- `yarn add antd-notifications-messages`

## How to use:

import css in first file to project

index.js

```jsx
import 'antd-notifications-messages/lib/styles/style.css';
```

Now use the API.

# Notifications

```js
import { notification } from 'antd-notifications-messages';

function App() {
  const show = (type) => {
    notification({
      type,
      title: 'This is a Title',
      message: `This is a notification type ${type}`
    });
  };

  return (
    <div>
      <button onClick={() => show('success')}>Success</button>
      <button onClick={() => show('info')}>Info</button>
      <button onClick={() => show('warning')}>Warning</button>
      <button onClick={() => show('error')}>Error</button>
    </div>
  );
}
```

# Message

```js
import { message } from 'antd-notifications-messages';

function App() {
  const show = (type) => {
    message({
      type,
      message: `This is a notification type ${type}`
    });
  };

  return (
    <div>
      <button onClick={() => show('success')}>Success</button>
      <button onClick={() => show('info')}>Info</button>
      <button onClick={() => show('warning')}>Warning</button>
      <button onClick={() => show('error')}>Error</button>
    </div>
  );
}
```

# Custom render

For more api props definition [Message Render Props](#message-render) or [Notification Render Props](#notification-render)

```js
import { message, notification } from 'antd-notifications-messages';

function App() {
  const showMessage = (type) => {
    message({
      type,
      message: 'The custom Render',
      render: ({ message, style, className, icon }) => {
        return (
          <div style={{ ...style, background: 'black' }} className={className}>
            <p style={{ color: 'white', display: 'flex' }}>
              <span>{icon}</span>
              <b> {message}</b>
            </p>
          </div>
        );
      }
    });
  };

  const showNotification = (type) => {
    notification({
      type,
      title: 'The title',
      message: 'The custom Render',
      render: ({ message, style, className, icon, title }) => {
        return (
          <div style={{ ...style, background: 'black' }} className={className}>
            <h5 style={{ color: 'white' }}>
              <span>{icon}</span> {title}
            </h5>
            <p style={{ color: 'white' }}>
              <b>{message}</b>
            </p>
          </div>
        );
      }
    });
  };

  return (
    <div>
      <button onClick={() => showMessage('success')}>Message custom</button>
      <button onClick={() => showNotification('info')}>
        Notification custom
      </button>
    </div>
  );
}
```

## Notification Props

|   prop   | type   |  default   |                                                           description                                                           |
| :------: | ------ | :--------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|  title   | string |     ""     |                                                 Required. Title of notification                                                 |
| message  | string |     ""     |                                                Required. Message of notification                                                |
|   type   | enum   | "success"  |                        Optional. defines the type of notification. "success", "info", "warning", "error"                        |
| position | enum   | "topRight" | Optional. defines the position of notification. "topRight", "topLeft", "topCenter", "bottomRight", "bottomLeft", "bottomCenter" |
| duration | number |    7000    |                          Optional. Defines the time that the notification will be active on the screen                          |

## Message Props

|   prop   | type             |   default   |                                                           description                                                           |
| :------: | ---------------- | :---------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| message  | string           |     ""      |                                                Required. Message of notification                                                |
|   type   | enum             |  "success"  |                        Optional. defines the type of notification. "success", "info", "warning", "error"                        |
| position | enum             | "topCenter" | Optional. defines the position of notification. "topRight", "topLeft", "topCenter", "bottomRight", "bottomLeft", "bottomCenter" |
| duration | number           |    7000     |                          Optional. Defines the time that the notification will be active on the screen                          |
|   key    | number or string |      -      |                                      Optional. Message key, useful to update the message.                                       |

## Notification Render

```jsx
const render = ({
  title,
  message,
  icon,
  type,
  id,
  onRemove,
  className,
  style,
  onClick
}) => {
  return (
    <div style={style} className={className} onClick={onClick}>
      <h5>{title}</h5>
      <p>{message}</p>
    </div>
  );
};
```

## Message Render

```jsx
const render = ({
  message,
  icon,
  type,
  id,
  onRemove,
  className,
  style,
  closable,
  onClick
}) => {
  return (
    <div style={style} className={className} onClick={onClick}>
      <p>{message}</p>
    </div>
  );
};
```

### Credits

[Portfolio](https://kevin-rivas.vercel.app)

[Linkedin](https://www.linkedin.com/in/kevin-rivas-frontend-developer/)

Create with Love ❤️ by [Kevin Rivas](https://kevin-rivas.vercel.app).
