# `translang`

<a href="https://badge.fury.io/js/%40ispsystem%2Ftranslang"><img src="https://badge.fury.io/js/%40ispsystem%2Ftranslang.svg" alt="npm version" height="18"></a>

> Функции и интерфейсы упрощающие разработку интернационального приложения

## Установка

```
npm i @ispsystem/translang
```

## Использование

```typescript
  import { translang } from '@ispsystem/translang';

  const t = translang('ru', {'HELLO': {'WORLD': 'Привет мир!'}});

  console.log(t.msg(['HELLO', 'WORLD'])); // Привет мир!
```

При использовании вместе с TypeScript будет доступна типизация получения сообщений.