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

let bsc_ca: String = 'BINANCE_API_KEY';


function binance() {
  console.log(bsc_ca);
}
binance()


function cardano() {
  let ada_ca: String = 'CARDANO_API_KEY';
  console.log(ada_ca);
}
cardano()


function ethereum() {
  let eth_ca: String = 'ETHEREUM_API_KEY';
  console.log(eth_ca);
}
ethereum()


function fantom() {
  let ftm_ca: String = 'FANTOM_API_KEY';
  console.log(ftm_ca);
}
fantom()


function harmonyShard() {
  let hs0_ca: String = 'HARMONY_SHARD_API_KEY';
  console.log(hs0_ca);
}
harmonyShard()


function huobi() {
  let huo_ca: String = 'HUOBI_API_KEY';
  console.log(huo_ca);
}
huobi()


function polygon() {
  let poly_ca: String = 'POLYGON_API_KEY';
  console.log(poly_ca);
}
polygon()


function solana() {
  let sol_ca: String = 'SOLANA_API_KEY';
  console.log(sol_ca);
}
solana()


function xdai() {
  let xdai_ca: String = 'XDAI_API_KEY';
  console.log(xdai_ca)
}
xdai()