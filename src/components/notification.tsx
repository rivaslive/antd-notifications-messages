import * as React from 'react';
import { store } from '../utils';
import { AntdIcon } from './antdIcons';

export interface NotificationsProps {
  title?: React.ReactNode;
  message?: React.ReactNode;
  type?: TypeElement;
  id?: string;
  animation?: 'fadeTop' | 'fadeInRight'
  [key: string]: unknown;
}

export const Notification: React.FC<NotificationsProps> = ({
  title,
  message,
  type = 'success',
  id,
  animation = 'fadeInRight',
  className = '',
  ...rest
}) => (
  <div
    className={`ant-notification-notice ${animation === 'fadeInRight' ? 'elementTopRight' : 'elementTopFadeIn'} ${className}`}
  >
    <div className={`icon-notification icon-${type}`}>
      <AntdIcon type={type} {...rest} />
    </div>
    <div>
      <div className="notification-title">{title}</div>
      <div className="notification-content">{message}</div>
    </div>
    <div className="notification-close" onClick={() => store.remove(id)} />
  </div>
);
