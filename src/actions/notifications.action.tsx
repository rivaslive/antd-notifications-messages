import * as React from 'react';

import { DurationType } from '../global';
import { PositionType } from '../utils/resolvePosition';
import StoreNotification from '../stores/StoreNotification';
import { Notification, NotificationProps } from '../components/notification';

const store = new StoreNotification();

export type NotificationsProps = Omit<
  NotificationProps,
  'onRemove' | 'id' | 'animation'
> & {
  duration?: DurationType;
  position?: PositionType;
};

export const notification = ({
  duration = 7000,
  position = 'topRight',
  ...props
}: NotificationsProps) => {
  store.subscribe({
    content: <Notification {...props} />,
    duration,
    position
    // insert: 'top',
    // container: 'top-right',
    // animationIn: ['', 'elementToFadeIn'],
    // animationOut: ['', 'elementToFadeOut'],
    // dismiss: { duration }
  });
};
