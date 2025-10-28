import { characters } from '@/assets/characters';
import Slider from '@react-native-community/slider';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import ToggleSwitch from 'toggle-switch-react-native';

export default function Index() {
  const [length, setLength] = useState(20);
  const [numberCheck, setNumberCheck] = useState(false);
  const [symbolCheck, setSymbolCheck] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [password, setPassword] = useState('')

  function genPass() {
    let selectedChars = characters.slice(0, 52);
    let password = '';

    if (numberCheck) {
      selectedChars = selectedChars.concat(characters.slice(52, 62));
    };

    if (symbolCheck) {
      selectedChars = selectedChars.concat(characters.slice(62));
    }

    for (let i = 0; i < length; i++) {
      password += selectedChars[Math.floor(Math.random() * selectedChars.length)];
    }

    setPassword(password);
    Clipboard.setStringAsync(password);
  }

  return (
    <View
      style={styles.main}
    >
      <Text style={[styles.purple, styles.h1]}>password generator.</Text>
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={8}
        maximumValue={32}
        onValueChange={(e) => setLength(Math.round(e))}
        minimumTrackTintColor='#967bb6'
        maximumTrackTintColor='white'
        thumbTintColor='#967bb6'
      />
      <Text style={styles.text}>Password length: {length}</Text>
      <View style={styles.switchLine}>
        {/* <Switch 
          // value={numberCheck}
          // onValueChange={(prev) => setNumberCheck(!prev)}
          // disabled={false}
          // style={{width: 50, height: 50}}
        /> */}
        <ToggleSwitch
          isOn={numberCheck}
          onToggle={isOn => {
            console.log("changed to " + isOn)
            setNumberCheck(isOn)
          }}
          onColor='#967bb6'
          offColor='#333333'
        />
        <Text style={styles.text}>Numbers?</Text>
      </View>
      <View style={styles.switchLine}>
        <ToggleSwitch
          isOn={symbolCheck}
          onToggle={isOn => {
            console.log("changed to " + isOn)
            setSymbolCheck(isOn)
          }}
          onColor='#967bb6'
          offColor='#333333'
      />
        <Text style={styles.text}>Symbols?</Text>
      </View>
      <View style={styles.switchLine}>
        <ToggleSwitch
          isOn={showPass}
          onToggle={isOn => {
            console.log("changed to " + isOn)
            setShowPass(isOn)
          }}
          onColor='#967bb6'
          offColor='#333333'
        />
        <Text style={styles.text}>Show password?</Text>
      </View>
      <Button 
        title='generate password'
        onPress={() => {
          genPass()
          // copyPassword()
        }}
        color="#967bb6"
      />
      {showPass ? <View style={styles.passField}>
        <Text style={styles.text}>{password}</Text>
      </View> : ''}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    backgroundColor: 'black'
  },
  purple: {
    color: '#967bb6'
  },
  h1: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  text: {
    color: 'white'
  },
  switchLine: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    width: "60%"
  },
  passField: {
    backgroundColor: '#967bb6',
    width: '80%',
    maxHeight: 60,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10
  }
})
