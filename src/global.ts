import { MessageProps } from './components/message';
import { NotificationProps } from './components/notification';
import { Root } from 'react-dom/client';
import { PositionType } from './utils/resolvePosition';

export type ElementType = 'success' | 'error' | 'warning' | 'info';
export type DurationType = number | null | false;
export type RenderMessageProps = Omit<MessageProps, 'message' | 'icon'> & {
  message: JSX.Element;
  icon: JSX.Element;
};

export type RenderNotificationProps = Omit<
  NotificationProps,
  'message' | 'icon' | 'title'
> & {
  title: JSX.Element;
  message: JSX.Element;
  icon: JSX.Element;
};

export type RootState = {
  [key in PositionType]?: Root;
};
