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
  closable?: boolean;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>, onHidden: () => void) => void;
}

export const Notification: React.FC<NotificationProps> = ({
  title,
  icon,
  message,
  id,
  onClick,
  onRemove = () => {},
  type = 'success',
  className = '',
  closable,
  ...rest
}) => {
  return (
    <div
      className={className}
      onClick={(e) => {
        onClick && onClick(e, onRemove);
        closable && onRemove();
      }}
      {...rest}
    >
      {icon}
      <div>
        <div className="notification-title">{title}</div>
        <div className="notification-content">{message}</div>
      </div>
      <div
        className="notification-close"
        onClick={onRemove}
      />
    </div>
  );
};
