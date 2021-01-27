import React, { Suspense } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from 'navigation/Router';

const WebView = React.lazy(() =>
  import('react-native-webview').then((module) => ({
    default: module.WebView,
  })),
);

type ScreenRouteProp = RouteProp<RootStackParamList, 'RootWebView'>;

const CustomWebView = () => {
  const { url, title } = useRoute<ScreenRouteProp>().params;

  const source = { uri: url };

  return (
    <SafeAreaView>
      <Suspense fallback={null}>
        <WebView source={source} />
      </Suspense>
    </SafeAreaView>
  );
};

export default CustomWebView;
