const resolve = {
  topLeft: 'position-top-left',
  topRight: 'position-top-right',
  topCenter: 'position-top-center',
  bottomRight: 'position-bottom-right',
  bottomLeft: 'position-bottom-left',
  bottomCenter: 'position-bottom-center',
};

export type PositionType = keyof typeof resolve;

export function resolvePosition(position: PositionType) {
  return resolve[position];
}
