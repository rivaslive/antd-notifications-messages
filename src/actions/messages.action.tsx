import * as React from 'react';
import StoreMessage from '../stores/StoreMessage';
import Message, { MessageProps } from '../components/message';
import { PositionType } from '../utils/resolvePosition';
import { DurationType, RenderMessageProps } from '../global';
import genericResolveProps from './genericResolveAction';
import LoadingFilled from '../icons/loadingFilled';

const store = new StoreMessage();

export type MessagesProps = Omit<MessageProps, 'onRemove' | 'id'> & {
  duration?: DurationType;
  position?: PositionType;
  closable?: boolean;
  key?: string | number;
  render?: (props: RenderMessageProps) => JSX.Element;
};

export const message = ({
  key,
  duration = 7000,
  type = 'success',
  position = 'topCenter',
  closable = false,
  ...props
}: MessagesProps) => {
  const resolveProps = genericResolveProps(
    { type, ...props },
    Message,
    'message'
  );

  store.subscribe({
    key,
    duration,
    position,
    closable,
    ...resolveProps
  });
};

const messageLoading = ({
  key,
  render,
  duration = 7000,
  type = 'success',
  position = 'topCenter',
  closable = false,
  icon = (
    <div className={`icon-message`}>
      <LoadingFilled />
    </div>
  ),
  ...props
}: MessagesProps) => {
  return new Promise((resolve) => {
    const resolveProps = genericResolveProps(
      { type, icon, ...props },
      Message,
      'message'
    );

    store.subscribe({
      key,
      duration,
      position,
      closable,
      ...resolveProps
    });

    duration &&
      setTimeout(() => {
        return resolve(key);
        // resolve 300ms before for update element and not show a new
      }, duration - 300);
  });
};

message.loading = messageLoading;
