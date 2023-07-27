import * as React from 'react';
import { ElementType } from '../global';
import { PositionType, resolvePosition } from '../utils/resolvePosition';

export type InstanceType = {
  key: string | number;
  content: JSX.Element;
  position: string;
  animation: string;
  closable: boolean;
  type: ElementType;
  timeoutKey: number | null;
};

interface WrapperType {
  instances: InstanceType[];
  onRemove: (key: string | number, positionClass: string) => void;
  isMessage?: boolean;
  position: PositionType;
}

export const Wrapper: React.FC<WrapperType> = ({
  instances,
  onRemove,
  position,
  isMessage = false
}) => {
  const positionClass = resolvePosition(position);
  const prefix = isMessage ? 'message' : 'notification';
  const _class = isMessage ? 'wrapper-messages ' : 'wrapper-notifications ';

  return (
    <div className={_class + positionClass}>
      {instances.map((child) => {
        const closableClass = child?.closable ? ' ant-closable' : '';
        // @ts-ignore
        const className = child?.props?.className ?? '';
        return (
          <div key={`${prefix}-${child.key}`}>
            {React.cloneElement(child.content, {
              id: child.key,
              closable: child.closable,
              className: `ant-${prefix}-notice ${child.animation} ${closableClass} ${className}`,
              onRemove: () => onRemove(child.key, position)
            })}
          </div>
        );
      })}
    </div>
  );
};
