import * as React from 'react';
import { store } from '../utils';
import { Notification } from '../components/notification';

export const notification = ({ duration = 5000, ...props }) => {
  store.add({
    content: <Notification {...props} />,
    duration: duration
    // insert: 'top',
    // container: 'top-right',
    // animationIn: ['', 'elementToFadeIn'],
    // animationOut: ['', 'elementToFadeOut'],
    // dismiss: { duration }
  });
};
