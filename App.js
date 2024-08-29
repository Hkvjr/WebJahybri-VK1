import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('')
  const [limits, setLimits] = useState('')

  const calculateHRlimits = () => {
    const ageNumber = parseFloat(age.replace(',', '.'))
    const lower = Math.floor((220 - ageNumber) * 0.65)
    const upper = Math.ceil((220 - ageNumber) * 0.85)

    setLimits(`${lower}-${upper}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />
      <Text style={styles.field}>Limits</Text>
      <TextInput
        style={styles.result}
        value={limits}
        editable={false}
      />
      <Button title='Calculate' onPress={calculateHRlimits} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10
  },
  field: {
    marginBottom: 10
  }
})

