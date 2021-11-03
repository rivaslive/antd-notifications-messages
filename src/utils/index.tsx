import * as React from 'react';
import ReactDOM from 'react-dom';
import nextId from 'react-id-generator';
import { Wrapper } from '../components/wrapper';

interface AddType {
  content: JSX.Element;
  duration: number;
}

type InstanceType = { key: string; content: JSX.Element };

var instances: InstanceType[] = [];

const render = () => {
  const elm = document.querySelector('.wrapper-notification');

  ReactDOM.render(
    <Wrapper instances={instances} />,
    elm
      ? elm.parentElement
      : document.body.appendChild(document.createElement('DIV'))
  );
};

const onTimeClose = (duration: number, key: string) =>
  setTimeout(() => {
    store.remove(key);
  }, duration);

export const store = {
  add: ({ content, duration }: AddType) => {
    const key = nextId();
    instances.push({ key, content: content });
    render();
    if (duration !== 0) {
      onTimeClose(duration, key);
    }
  },
  remove: (key?: string) => {
    if (typeof onTimeClose == 'number') {
      clearTimeout(onTimeClose);
    }
    instances = instances.filter((f) => f.key !== key);
    render();
  },
};
