import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
const [age, setAge] = useState('')
const [upperLimit, setUpperLimits] = useState(0)
const [lowerLimit, setLowerLimits] = useState(0)

function calculateLimits()  {
  if(age){
  const calculateUpperLimit = Math.floor((220 - (age))*(0.85));
  const calculateLowerLimit = Math.floor((220 - (age))*(0.65));
  setUpperLimits(calculateUpperLimit);
  setLowerLimits(calculateLowerLimit);
}
}

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age:</Text>
      <TextInput
      placeholder='Enter your age'
      keyboardType='decimal-pad'
      value={age}
      style={styles.field}
      onChangeText={text => setAge(text)}
      />
      <Text style={styles.field}>Limits:</Text>
      <Text style={styles.field}>{lowerLimits + '-' + upperLimit}</Text>
      <Button title='Calculate' onPress={calculateLimits}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
