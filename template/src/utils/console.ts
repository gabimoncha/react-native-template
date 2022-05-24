import { FileLogger } from 'react-native-file-logger';

export const log = (...args: any[]) => {
  if (__DEV__) {
    console.log(...args);
  } else {
    FileLogger.info(`${args.join(' ')}`);
  }
};

export const debug = (...args: any[]) => {
  if (__DEV__) {
    console.debug(...args);
  } else {
    FileLogger.debug(`${args.join(' ')}`);
  }
};

export const warn = (...args: any[]) => {
  if (__DEV__) {
    console.warn(...args);
  } else {
    FileLogger.warn(`${args.join(' ')}`);
  }
};

export const error = (...args: any[]) => {
  if (__DEV__) {
    console.error(...args);
  } else {
    FileLogger.error(`${args.join(' ')}`);
  }
};
