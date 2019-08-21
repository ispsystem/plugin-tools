import { Component, Prop } from '@stencil/core';

import { ISPNotifierManager, ISPNotifier } from '@ispsystem/notice-tools/';

/**
 * ISP notice wrapper component
 */
@Component({
  tag: 'isp-notice',
})
export class IspNotice {
  /** Notifier manager service */
  manager: ISPNotifierManager;
  /** Notifier service */
  notifyService: ISPNotifier;
  /** Host for ws connection */
  @Prop({reflect: true}) host = 'localhost:8000';
  /** url by the notification service */
  @Prop({reflect: true}) url = '/notifier';
  /** Websocket reconnection timeout during unexpected shutdown */
  @Prop({reflect: true}) reconnectDelay = 5000;
  /** The number of attempts to reconnect to the websocket during an unexpected shutdown */
  @Prop({reflect: true}) reconnectCount = 5;
  /** Time that parameters will be aggregated before sending to the websocket */
  @Prop({reflect: true}) paramDelay = 50;

  /**
   * LIFECYCLE
   *
   * Initialize notify services, and pass them in all child nodes
   */
  componentWillLoad() {
    this.manager = new ISPNotifierManager({
      host: this.host,
      paramDelay: this.paramDelay,
      reconnectCount: this.reconnectCount,
      reconnectDelay: this.reconnectDelay,
      url: this.url
    });
    this.manager.connect();
    this.notifyService = new ISPNotifier(this.manager);
    // set notifierService props for all child nodes
    const element = document.querySelector('isp-notice');
    element.childNodes.forEach(el => {
      el['notifierService'] = this.notifyService;
    });
  }

  /**
   * LIFECYCLE
   *
   * Close all connection after component detached
   */
  componentDidUnload() {
    this.manager.disconnect();
    this.notifyService.destroy();
    this.manager.onDestroy();
  }

}
