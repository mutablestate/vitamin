import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
  locale: 'de',
  fallbackLocale: 'en',
  messages: {
    en: {
      hello: 'Hey!',
      goodbye: 'Se ya!'
    },
    de: {
      hello: 'Hallo!',
      goodbye: 'Tschüss!'
    }
  }
});
