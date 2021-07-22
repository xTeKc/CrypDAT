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
let ada_ca: String = 'CARDANO_API_KEY';
let eth_ca: String = 'ETHEREUM_API_KEY';
let ftm_ca: String = 'FANTOM_API_KEY';
let hs0_ca: String = 'HARMONY_SHARD_API_KEY';
let huo_ca: String = 'HUOBI_API_KEY';
let poly_ca: String = 'POLYGON_API_KEY';
let sol_ca: String = 'SOLANA_API_KEY';
let xdai_ca: String = 'XDAI_API_KEY';


function binance(bsc_ca: String) {
  console.log(bsc_ca);
}
binance(bsc_ca)


function cardano(ada_ca: String) {
  console.log(ada_ca);
}
cardano(ada_ca)


function ethereum(eth_ca: String) {
  console.log(eth_ca);
}
ethereum(eth_ca)


function fantom(ftm_ca) {
  console.log(ftm_ca);
}
fantom(ftm_ca)


function harmonyShard(hs0_ca) {
  console.log(hs0_ca);
}
harmonyShard(hs0_ca)


function huobi(huo_ca) {
  console.log(huo_ca);
}
huobi(huo_ca)


function polygon(poly_ca) {
  console.log(poly_ca);
}
polygon(poly_ca)


function solana(sol_ca) {
  console.log(sol_ca);
}
solana(sol_ca)


function xdai(xdai_ca) {
  console.log(xdai_ca)
}
xdai(xdai_ca)