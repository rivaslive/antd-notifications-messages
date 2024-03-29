import React, { ChangeEvent, ReactNode, useState } from 'react';
import 'antd-notifications-messages/lib/styles/style.css';
import {
  message,
  notification,
  ElementType,
  MessagesProps,
  PositionType,
  NotificationsProps
} from 'antd-notifications-messages';

type RenderPanelProps = {
  title: string;
  showNotifications: (type: ElementType) => void;
  showMessages: (type: ElementType) => void;
  extra?: ReactNode;
  onlyMessage?: boolean;
};

const RenderPanel = ({
  title,
  showMessages,
  showNotifications,
  extra,
  onlyMessage = false
}: RenderPanelProps) => {
  return (
    <div className="wrapper">
      <h2>{title}:</h2>
      {extra}
      {!onlyMessage && (
        <>
          <h3>Notifications</h3>
          <button
            className="btn btn-success"
            onClick={() => showNotifications('success')}
          >
            Success
          </button>
          <button
            className="btn btn-info"
            onClick={() => showNotifications('info')}
          >
            Info
          </button>
          <button
            className="btn btn-warning"
            onClick={() => showNotifications('warning')}
          >
            Warning
          </button>
          <button
            className="btn btn-error"
            onClick={() => showNotifications('error')}
          >
            Error
          </button>
        </>
      )}

      <h3>Messages</h3>
      <button
        className="btn btn-success"
        onClick={() => showMessages('success')}
      >
        Success
      </button>
      <button className="btn btn-info" onClick={() => showMessages('info')}>
        Info
      </button>
      <button
        className="btn btn-warning"
        onClick={() => showMessages('warning')}
      >
        Warning
      </button>
      <button className="btn btn-error" onClick={() => showMessages('error')}>
        Error
      </button>
    </div>
  );
};

function App() {
  const [position, setPosition] = useState<PositionType>();
  const [duration, setDuration] = useState<number>(7000);

  const showNotifications = (props?: NotificationsProps) => {
    return (type: ElementType) =>
      notification({
        type,
        title: 'This is a Title',
        message: `This is a notification type ${type}`,
        ...props
      });
  };

  const showMessages = (props?: Omit<MessagesProps, 'render'>) => {
    return (type: ElementType) =>
      message({
        type,
        message: `This is a message type ${type}`,
        ...props
      });
  };

  const updateMessage = (type: ElementType) => {
    const key = 'message-1';

    message({
      type,
      key,
      message: 'This is a content'
    });

    setTimeout(() => {
      message({
        type,
        key,
        message: `This is a update message type ${type}`
      });
    }, 1000);
  };

  const loadingMessage = (type: ElementType) => {
    const key = 'message-2';

    message
      .loading({
        type,
        key,
        message: 'Loading...'
      })
      .then(() =>
        message({
          type,
          key,
          message: `This is a message type ${type}`
        })
      );
  };

  const customMessageRender = (type: ElementType) => {
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

  const customNotificationRender = (type: ElementType) => {
    notification({
      type,
      title: 'The title',
      message: 'The custom Render',
      render: ({ message, style, className, icon, title, onRemove }) => {
        return (
          <div
            style={{ ...style, background: 'black', display: 'block' }}
            className={className}
          >
            <h5 style={{ color: 'white', display: 'flex' }}>
              <span>{icon}</span> {title}
            </h5>
            <p style={{ color: 'white' }}>
              <b>{message}</b>
            </p>

            <div>
              <button onClick={onRemove}>Close</button>
            </div>
          </div>
        );
      }
    });
  };

  const onChangePosition = (e: ChangeEvent<HTMLSelectElement>) => {
    setPosition(e.target.value as PositionType);
  };

  const onChangeDuration = (e: ChangeEvent<HTMLInputElement>) => {
    setDuration(parseInt(e.target.value ?? 0, 10));
  };

  return (
    <>
      <h1>antd-notifications-messages</h1>
      <div className="container">
        <RenderPanel
          title="Default"
          showMessages={showMessages()}
          showNotifications={showNotifications()}
        />

        <RenderPanel
          title="Custom Position"
          showMessages={showMessages({ position })}
          showNotifications={showNotifications({ position })}
          extra={
            <select name="position" onChange={onChangePosition}>
              <option value="" disabled selected hidden>
                Select position
              </option>
              <option value="topLeft">Top Left</option>
              <option value="topCenter">Top Center</option>
              <option value="topRight">Top Right</option>

              <option value="bottomLeft">Bottom Left</option>
              <option value="bottomCenter">Bottom Center</option>
              <option value="bottomRight">Bottom Right</option>
            </select>
          }
        />

        <RenderPanel
          title="Custom Duration"
          showMessages={showMessages({ duration })}
          showNotifications={showNotifications({ duration })}
          extra={
            <div>
              <p>
                <b>Duration (In millisecond):</b>
              </p>
              <input
                onChange={onChangeDuration}
                type="number"
                min="0"
                value={duration}
              />
            </div>
          }
        />

        <RenderPanel
          title="Close in onClick"
          showNotifications={showNotifications({ closable: true })}
          showMessages={showMessages({ closable: true })}
        />

        <div className="wrapper">
          <h2>Custom Render Element:</h2>
          <h3>Notification</h3>
          <button
            className="btn btn-success"
            onClick={() => customNotificationRender('success')}
          >
            Show
          </button>

          <h3>Messages</h3>
          <button
            className="btn btn-success"
            onClick={() => customMessageRender('success')}
          >
            Show
          </button>
        </div>

        <div className="wrapper">
          <h2>Update Message:</h2>
          <h3>Messages</h3>
          <button
            className="btn btn-success"
            onClick={() => updateMessage('success')}
          >
            Show
          </button>

          <h2>Loading Message:</h2>
          <h3>Messages</h3>
          <button
            className="btn btn-success"
            onClick={() => loadingMessage('success')}
          >
            Show
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
