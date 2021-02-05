import React, { useCallback, useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';

import { initConnection, getSubscriptions, requestSubscription } from 'react-native-iap';

const skus = ["com.temporary.id"];

const App = () => {
  useEffect(() => {
    initConnection().then((res) => {
      console.log("Connection State:" + res);
    });
  }, []);

  const getSubs = useCallback(async () => {
    const res = await getSubscriptions(skus);
    console.log(res);
  }, []);

  const subscribe = useCallback(async () => {
    const res = await requestSubscription(skus[0]);
    console.log(res);
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{margin: 16}}>
        <Button onPress={getSubs} title="Click to getSubscriptions" />
        <View style={{height: 10}}></View>
        <Button onPress={subscribe} title="Click to subscribe" />
      </SafeAreaView>
    </>
  );
};

export default App;
