declare module '*.png';
declare module '*.svg';

declare module '@env' {
  export const ENV: 'dev' | 'prod';
  export const SENTRY_DSN: string;
}
