# isp-notice



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                        | Type     | Default            |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------- | -------- | ------------------ |
| `host`           | `host`            | Host for ws connection                                                             | `string` | `'localhost:8000'` |
| `paramDelay`     | `param-delay`     | Time that parameters will be aggregated before sending to the websocket            | `number` | `50`               |
| `reconnectCount` | `reconnect-count` | The number of attempts to reconnect to the websocket during an unexpected shutdown | `number` | `5`                |
| `reconnectDelay` | `reconnect-delay` | Websocket reconnection timeout during unexpected shutdown                          | `number` | `5000`             |
| `url`            | `url`             | url by the notification service                                                    | `string` | `'/notifier'`      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
