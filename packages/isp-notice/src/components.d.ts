/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface IspNotice {
    /**
    * Host for ws connection
    */
    'host': string;
    /**
    * Time that parameters will be aggregated before sending to the websocket
    */
    'paramDelay': number;
    /**
    * The number of attempts to reconnect to the websocket during an unexpected shutdown
    */
    'reconnectCount': number;
    /**
    * Websocket reconnection timeout during unexpected shutdown
    */
    'reconnectDelay': number;
    /**
    * url by the notification service
    */
    'url': string;
  }
}

declare global {


  interface HTMLIspNoticeElement extends Components.IspNotice, HTMLStencilElement {}
  var HTMLIspNoticeElement: {
    prototype: HTMLIspNoticeElement;
    new (): HTMLIspNoticeElement;
  };
  interface HTMLElementTagNameMap {
    'isp-notice': HTMLIspNoticeElement;
  }
}

declare namespace LocalJSX {
  interface IspNotice extends JSXBase.HTMLAttributes<HTMLIspNoticeElement> {
    /**
    * Host for ws connection
    */
    'host'?: string;
    /**
    * Time that parameters will be aggregated before sending to the websocket
    */
    'paramDelay'?: number;
    /**
    * The number of attempts to reconnect to the websocket during an unexpected shutdown
    */
    'reconnectCount'?: number;
    /**
    * Websocket reconnection timeout during unexpected shutdown
    */
    'reconnectDelay'?: number;
    /**
    * url by the notification service
    */
    'url'?: string;
  }

  interface IntrinsicElements {
    'isp-notice': IspNotice;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


