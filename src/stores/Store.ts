import { InstanceType } from '../components/wrapper';
import generateUniqueId from '../utils/generateUniqueId';
import { PositionType } from '../utils/resolvePosition';
import { resolveAnimation } from '../utils/resolveAnimation';
import { DurationType } from '../global';

interface AddType {
  content: JSX.Element;
  duration: DurationType;
  position: PositionType;
  closable?: boolean;
  key?: string | number;
}

export default class Store {
  protected instances: InstanceType[];

  constructor() {
    this.instances = [];
    this.add = this.add.bind(this);
    this.set = this.set.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.render = this.render.bind(this);
    this.onTimeClose = this.onTimeClose.bind(this);
    this.getInstances = this.getInstances.bind(this);
  }

  set(item: InstanceType) {
    const findIndex = this.instances.findIndex((f) => f.key === item.key);
    if (findIndex !== -1) {
      this.instances[findIndex] = item;
    } else {
      this.add(item);
    }
  }

  add(item: InstanceType) {
    this.instances.push(item);
  }

  getInstances(position: PositionType) {
    return this.instances.filter((f) => f.position === position);
  }

  onTimeClose(duration: number, key: string | number, position: PositionType) {
    setTimeout(() => {
      this.unsubscribe(key, position);
    }, duration);
  }

  // @ts-ignore
  render(position: PositionType) {}

  subscribe({ content, duration, position, key, closable = true }: AddType) {
    const _key = key ?? generateUniqueId();
    const animation = resolveAnimation(position);
    const item = {
      key: _key,
      content: content,
      position,
      animation,
      closable
    };

    if (key) {
      this.set(item);
    } else {
      this.add(item);
    }

    if (duration) {
      this.onTimeClose(duration, _key, position);
    }
    this.render(position);
  }

  unsubscribe(key: string | number, position: PositionType) {
    this.instances = this.instances.filter((f) => f.key !== key);
    this.render(position);
  }
}
