import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FloatbuttonAction from './components/FloatButtonAction';

export default function App() {
  const[count, setCount]= useState(1);
  return (
    <View style={styles.container}>
      <Text style={styles.texthuge}>{count}</Text>
      <FloatbuttonAction 
        label="+1" 
        onPress={() => setCount(count + 1)} 
        onLongPress={() => setCount(0)} 
        position="right" />
      <FloatbuttonAction
        label="Reset" 
        onPress={() => setCount(0)} 
        position="left"
      />
<StatusBar style='auto' />

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

  texthuge: {
    fontSize: 30,
    fontWeight: '100',
  },

  

 
});