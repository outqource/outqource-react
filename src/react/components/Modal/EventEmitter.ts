import { EventEmitter } from 'events';
import type { ModalInfo, ModalCallbackType } from './types';

class ModalEventEmitter extends EventEmitter {
  private readonly ALERT = 'alert' as const;

  addChangeListener(callback: ModalCallbackType) {
    this.addListener(this.ALERT, callback);
  }

  removeChangeListener(callback: ModalCallbackType) {
    this.removeListener(this.ALERT, callback);
  }

  add(props: ModalInfo) {
    this.emit(this.ALERT, props);
  }
}

export default new ModalEventEmitter();
