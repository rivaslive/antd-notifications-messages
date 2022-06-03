import * as React from 'react';
import { AntdIcon } from './antdIcons';
import {ElementType} from '../global';

export interface NotificationProps {
  title?: React.ReactNode;
  message?: React.ReactNode;
  icon?: React.ReactNode;
  type?: ElementType;
  id?: string;
  animationClass?: string;
  onRemove?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const Notification: React.FC<NotificationProps> = ({
  title,
  icon,
  message,
  onRemove,
  id,
  animationClass = '',
  type = 'success',
  className = '',
  ...rest
}) => {
  const _class = `ant-notification-notice ${className} `;

  return (
    <div className={_class + animationClass} {...rest}>
      <div className={`icon-notification icon-${type}`}>
        {icon || <AntdIcon type={type} />}
      </div>
      <div>
        <div className="notification-title">{title}</div>
        <div className="notification-content">{message}</div>
      </div>
      <div
        className="notification-close"
        onClick={() => onRemove && onRemove()}
      />
    </div>
  );
};
