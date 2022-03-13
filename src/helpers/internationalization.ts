import { I18n } from "i18n";
import { locales } from "./locales";

const i18n = new I18n();

i18n.configure({
  locales,
  directory: './src/languages',
  fallbacks: {
    'en-*': 'en',
    'pt-*': 'pt'
  },
  defaultLocale: 'en',
  objectNotation: true,
});

export { i18n };