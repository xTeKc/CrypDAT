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
  let eth_ca: String = 'ETHEREUM_API_KEY';
  console.log(eth_ca);
}


function fantom() {
  let ftm_ca: String = 'FANTOM_API_KEY';
  console.log(ftm_ca);
}


function harmonyShard() {
  let hs0_ca: String = 'HARMONY_SHARD_API_KEY';
  console.log(hs0_ca);
}


function huobi() {
  let huo_ca: String = 'HUOBI_API_KEY';
  console.log(huo_ca);
}


function polygon() {

}


function solana() {

}


function xdai() {
  
}