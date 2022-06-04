import * as React from 'react';
import { ElementType } from '../global';

export interface NotificationProps {
  title?: React.ReactNode;
  message?: React.ReactNode;
  icon?: React.ReactNode;
  type?: ElementType;
  id?: string;
  onRemove?: () => void;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Notification: React.FC<NotificationProps> = ({
  title,
  icon,
  message,
  onRemove,
  id,
  type = 'success',
  className = '',
  ...rest
}) => {
  return (
    <div className={className} {...rest}>
      {icon}
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
