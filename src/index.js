import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  // No sattusbar a tag backgroundColor é necessária somente para o Android
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7519c1" />
      <Routes />
    </>
  );
}
