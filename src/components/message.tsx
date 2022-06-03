import * as React from 'react';
import { AntdIcon } from './antdIcons';
import { ElementType } from '../global';

export interface MessageProps {
  message?: React.ReactNode;
  icon?: React.ReactNode;
  type?: ElementType;
  id?: string;
  closable?: boolean;
  animationClass?: string;
  onRemove?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

function Message({
  message,
  icon,
  onRemove,
  closable,
  type = 'success',
  animationClass = '',
  className = '',
  ...rest
}: MessageProps) {
  const _class = `ant-message-notice ${className} `;
  const closableClass = closable ? ' ant-closable' : '';

  return (
    <div
      onClick={closable ? onRemove : undefined}
      className={_class + animationClass + closableClass}
      {...rest}
    >
      <div className={`icon-message icon-${type}`}>
        {icon || <AntdIcon type={type} />}
      </div>
      <div>
        <div className="notification-content" style={{ textAlign: 'center' }}>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}

export default Message;
