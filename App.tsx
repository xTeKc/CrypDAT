import * as dotenv from "dotenv";
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

dotenv.config()


function binance() {
  let bsc_ca: String = 'BINANCE_API_KEY';
  console.log(bsc_ca);
}


function cardano() {
  let ada_ca: String = 'CARDANO_API_KEY';
  console.log(ada_ca);
}


function ethereum() {

}


function fantom() {

}


function harmonyShard() {

}


function huobi() {

}


function polygon() {

}


function solana() {

}


function xdai() {
  
}