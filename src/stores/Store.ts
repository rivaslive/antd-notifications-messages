import { DurationType, ElementType } from '../global';
import { InstanceType } from '../components/wrapper';
import { PositionType } from '../utils/resolvePosition';
import generateUniqueId from '../utils/generateUniqueId';
import { resolveAnimation } from '../utils/resolveAnimation';

interface SubscriptionType {
  content: JSX.Element;
  duration: DurationType;
  position: PositionType;
  type: ElementType;
  closable?: boolean;
  key?: string | number;
}

export default class Store {
  protected instances: InstanceType[];

  constructor() {
    this.instances = [];
    this.add = this.add.bind(this);
    this.set = this.set.bind(this);
    this.clear = this.clear.bind(this);
    this.render = this.render.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.onTimeClose = this.onTimeClose.bind(this);
    this.getInstances = this.getInstances.bind(this);
  }

  render(_position: PositionType) {}

  set(item: InstanceType) {
    const findIndex = this.instances.findIndex((f) => f.key === item.key);

    if (findIndex !== -1) {
      const timeoutKey = this.instances[findIndex].timeoutKey;
      // stop hidden element and set new duration
      if (timeoutKey) clearTimeout(timeoutKey);
      // update instance item
      this.instances[findIndex] = item;
    }
  }

  add(item: InstanceType) {
    this.instances.push(item);
  }

  getInstances(position: PositionType) {
    return this.instances.filter((f) => f.position === position);
  }

  onTimeClose(duration: number, key: string | number, position: PositionType) {
    return setTimeout(() => {
      this.unsubscribe(key, position);
    }, duration);
  }

  clear(key: string | number, resolve: () => void) {
    const findItem = this.instances.find((f) => f.key === key);
    if (findItem && findItem?.timeoutKey) {
      clearTimeout(findItem.timeoutKey);
      resolve();
    }
  }

  subscribe({
    content,
    duration,
    position,
    key,
    type,
    closable = true
  }: SubscriptionType) {
    // get unique id for identify element
    const _key = key ?? generateUniqueId();
    // get animation className in based to position
    const animation = resolveAnimation(position);
    // timeout key for null onClose
    let timeoutKey = null;
    // verify is set or create element
    let isNew = true;

    // clear and prevent close element
    if (key) {
      this.clear(key, () => (isNew = false));
    }

    // set duration with timeout
    if (duration) {
      timeoutKey = this.onTimeClose(duration, _key, position);
    }

    // set new item for subscribe
    const item = {
      type,
      key: _key,
      content,
      position,
      animation,
      closable,
      timeoutKey
    };

    // create or update element in the DOM
    if (isNew) this.add(item);
    else this.set(item);

    // render all elements in the DOM
    this.render(position);
  }

  // remove element from DOM
  unsubscribe(key: string | number, position: PositionType) {
    this.instances = this.instances.filter((f) => f.key !== key);
    this.render(position);
  }
}
