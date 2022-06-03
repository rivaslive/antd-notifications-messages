import * as React from 'react';
import StoreMessage from '../stores/StoreMessage';
import LoadingFilled from '../icons/loadingFilled';
import Message, { MessageProps } from '../components/message';
import { PositionType } from '../utils/resolvePosition';
import { DurationType } from '../global';

const store = new StoreMessage();

export type MessagesProps = Omit<MessageProps, 'onRemove' | 'id'> & {
  duration?: DurationType;
  position?: PositionType;
  closable?: boolean;
  key?: string | number;
};

export const message = ({
  key,
  duration = 7000,
  type = 'success',
  position = 'topCenter',
  closable = false,
  ...props
}: MessagesProps) => {
  store.subscribe({
    key,
    duration,
    position,
    closable,
    content: <Message type={type} {...props} />
  });
};

const messageLoading = ({
  key,
  duration = 7000,
  type = 'success',
  position = 'topCenter',
  closable = false,
  ...props
}: MessagesProps) => {
  const _duration = duration || 5000;

  return new Promise((resolve) => {
    store.subscribe({
      key,
      duration,
      position,
      closable,
      content: <Message type={type} {...props} icon={<LoadingFilled />} />
    });

    setTimeout(() => {
      return resolve(key);
    }, _duration / 2);
  });
};

message.loading = messageLoading;
