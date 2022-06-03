import * as React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import { Wrapper } from '../components/wrapper';
import { PositionType, resolvePosition } from '../utils/resolvePosition';

class StoreMessage extends Store {
  constructor() {
    super();
  }

  render(position: PositionType) {
    const positionClass = resolvePosition(position);
    const elm = document.querySelector(`.wrapper-messages.${positionClass}`);

    const instances = this.getInstances(position);

    ReactDOM.render(
      <Wrapper
        isMessage
        position={position}
        instances={instances}
        onRemove={this.unsubscribe}
      />,
      elm
        ? elm.parentElement
        : document.body.appendChild(document.createElement('DIV'))
    );
  }
}

export default StoreMessage;
