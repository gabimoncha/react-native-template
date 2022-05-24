import i18n, { LanguageDetectorAsyncModule } from 'i18next';
import { NativeModules, Platform } from 'react-native';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { warn } from 'utils/console';
import resources from './resources';

const getDeviceLocale = (): string => {
  let locale: string;
  if (Platform.OS === 'ios') {
    const {
      SettingsManager: { settings },
    } = NativeModules;

    locale = settings.AppleLocale || settings.AppleLanguages[0] || 'en';
  } else if (Platform.OS === 'android') {
    locale = NativeModules.I18nManager.localeIdentifier;
  } else locale = 'en';

  const [language] = locale.replace('_', '-').split('-'); // returned device locale can have '_' or '-'

  return language;
};

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector' as 'languageDetector',
  async: true, // flags below detection to be async
  detect: (cb: Function): Promise<string> =>
    AsyncStorage.getItem('user-language')
      .then((language) => {
        if (!language) {
          const locale = getDeviceLocale();
          return cb(locale);
        }

        return cb(language);
      })
      .catch((e) => {
        warn('[Detect user language]', e);
      }),
  init: () => {},
  cacheUserLanguage: (language: string) => {
    AsyncStorage.setItem('user-language', language).catch((e) => {
      warn('[Cache user language]', e);
    });
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    fallbackNS: 'common',
    resources,
    nsSeparator: '.',
    interpolation: {
      escapeValue: false, // react is already safe from xss
    },
  });

export default i18n;
