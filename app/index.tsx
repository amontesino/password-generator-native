import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { Button, StyleSheet, Switch, Text, View } from "react-native";

export default function Index() {
  const [length, setLength] = useState(20);
  const [numberCheck, setNumberCheck] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={[styles.h1]}>Generate a</Text>
      <Text style={[styles.purple, styles.h1]}>random password</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={8}
        maximumValue={32}
        onValueChange={(e) => setLength(Math.round(e))}
        minimumTrackTintColor='purple'
        thumbTintColor='purple'
      />
      <Text>Password length: {length}</Text>
      <View style={styles.switchLine}>
        <Switch />
        <Text>Numbers?</Text>
      </View>
      <View style={styles.switchLine}>
        <Switch />
        <Text>Symbols?</Text>
      </View>
      <View style={styles.switchLine}>
        <Switch />
        <Text>Show password?</Text>
      </View>
      <Button 
        title='generate password'
      />
      <View style={styles.passField}>
        password
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  purple: {
    color: "purple"
  },
  h1: {
    fontSize: 24
  },
  switchLine: {
    display: 'flex',
    flexDirection: 'row',
  },
  passField: {
    backgroundColor: 'purple',
    color: 'white'
  }
})
