# `dev-proxy-server`

<a href="https://badge.fury.io/js/%40ispsystem%2Fdev-proxy-server"><img src="https://badge.fury.io/js/%40ispsystem%2Fdev-proxy-server.svg" alt="npm version" height="18"></a>

> Локальный прокси-сервер для разработки плагинов независимо от основного приложения.

## Использование

1. Установить прокси как зависимость к проекту `npm i @ispsystem/dev-proxy-server -D`.

2. Создать файл настроек прокси-сервера в корне проекта `proxy.conf.json`:

```json
{
  "cookie": "ses6=********",
  "host": "vepp-1.vepp.evm.ru",
  "port": 8000
}
```
Если запустить без этого файла, то он будет создан автоматически из шаблона.

3. В вашем коде замените URL закроса к серверу на запрос через прокси, к примеру `http://localhost:8000/request-address`.

4. Запустить прокси сервер командой `npx dev-proxy-server` перед запуском сервера для разработки.
