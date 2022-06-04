import * as React from 'react';
import { AntdIcon } from '../components/antdIcons';
import {
  ElementType,
  RenderMessageProps,
  RenderNotificationProps
} from '../global';

type GenericResolveType = {
  icon?: React.ReactNode;
  type?: ElementType;
  render?: (props: RenderMessageProps | RenderNotificationProps) => JSX.Element;
  [key: string]: unknown;
};

function genericResolveProps(
  { render, icon: _icon, type = 'success', ...props }: GenericResolveType,
  Component: any,
  prefix: 'message' | 'notification',
) {
  const icon = _icon || (
    <div className={`icon-${prefix} icon-${type}`}>
      <AntdIcon isFilled={prefix === 'message'} type={type} />
    </div>
  );

  const _render = render ? (
    render({
      ...props,
      type,
      icon: icon as JSX.Element,
      message: props.message as JSX.Element
    })
  ) : (
    <Component type={type} icon={icon} {...props} />
  );

  return {
    type,
    icon,
    ...props,
    content: _render
  };
}

export default genericResolveProps;
