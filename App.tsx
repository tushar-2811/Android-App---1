/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, ScrollView, Text, View, } from 'react-native';
import Header from './src/components/Header';
import { useState } from 'react';
import User from './src/components/User';



function App(): React.JSX.Element {
  const [number , setNumber] = useState(100);
  const [name , setName] = useState("tushar");

  const help = (name:string) => {
    setNumber((prevState) => (
      prevState+1
    ));
     console.warn(`${name} ${number}`);
  }
  return (
    <ScrollView>
      <Header />

      <View>
        <Text style={{ fontSize: 30, color: "red" }} > Hello World , I am Tushar {number} </Text>
        <Text style={{ fontSize: 18, color: "green" }} > Like and Share </Text>
        <Button title="Press Me" color={'black'} onPress={() => help("tushar")} />
      </View>

      <User name={name} />
      <Button title='change name' onPress={() => setName("rawat")} />

    </ScrollView>

  );
}

export default App;
