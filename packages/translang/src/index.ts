import Polyglot from 'node-polyglot';
import { Path } from './types';

function msg(polyglot: Polyglot, keys: string[], options?: number | Polyglot.InterpolationOptions): string {
  if (Array.isArray(keys)) {
    return polyglot.t(keys.join('.'), options);
  } else if (typeof keys === 'string') {
    return polyglot.t(keys, options);
  }

  console.warn(keys);
  return '';
}

export function translang<Lang, LanguageTypes = string>(lang: LanguageTypes, phrases: object): Translang<Lang, LanguageTypes> {
  const _polyglot = new Polyglot({ phrases, locale: String(lang) });

  return {
    msg: msg.bind(null, _polyglot),
    lang
  };
}

export interface Translang<Lang, LanguageTypes = string> {
  msg<T extends Lang, L extends Path<T, L>>(params: L, options?: number | Polyglot.InterpolationOptions): string;
  lang: LanguageTypes;
}
