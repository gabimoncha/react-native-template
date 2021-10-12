import HomeScreen from 'screens/Home';
import CustomWebView from 'screens/CustomWebView';
import NetworkError from 'screens/NetworkError';

export type UserStackParamList = {
  Home: undefined;
};

export type CommonStackParamList = {
  NetworkError: undefined;
  WebView: { url: string; title: string };
};

const options = { gestureEnabled: false };

export const commonScreens = {
  NetworkError: { component: NetworkError, options },
  WebView: { component: CustomWebView },
};

export const userScreens = {
  Home: { component: HomeScreen },
};
