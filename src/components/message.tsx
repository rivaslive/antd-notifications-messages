import * as React from 'react';
import { ElementType } from '../global';

export interface MessageProps {
  message?: React.ReactNode;
  icon?: React.ReactNode;
  type?: ElementType;
  id?: string;
  closable?: boolean;
  onRemove?: () => void;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

function Message({
  message,
  icon,
  onRemove,
  closable,
  type = 'success',
  className = '',
  ...rest
}: MessageProps) {
  return (
    <div
      className={className}
      onClick={closable ? onRemove : undefined}
      {...rest}
    >
      {icon}
      <div className="notification-content message-content">
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Message;
