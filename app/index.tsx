import { characters } from '@/assets/characters';
import Slider from '@react-native-community/slider';
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
  }

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
        />
        <Text>Numbers?</Text>
      </View>
      <View style={styles.switchLine}>
        <ToggleSwitch
          isOn={symbolCheck}
          onToggle={isOn => {
            console.log("changed to " + isOn)
            setSymbolCheck(isOn)
          }}
        />
        <Text>Symbols?</Text>
      </View>
      <View style={styles.switchLine}>
        <ToggleSwitch
          isOn={showPass}
          onToggle={isOn => {
            console.log("changed to " + isOn)
            setShowPass(isOn)
          }}
        />
        <Text>Show password?</Text>
      </View>
      <Button 
        title='generate password'
        onPress={genPass}
      />
      {showPass ? <View style={styles.passField}>
        <Text>{password}</Text>
      </View> : ''}
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
