import { PositionType } from './resolvePosition';

const resolve = {
  // top
  topLeft: 'fade-in-left',
  topRight: 'fade-in-right',
  topCenter: 'fade-in-top-center',
  // bottom
  bottomLeft: 'fade-in-left',
  bottomRight: 'fade-in-right',
  bottomCenter: 'fade-in-bottom-center'
};

export function resolveAnimation(animation: PositionType) {
  return resolve[animation];
}
