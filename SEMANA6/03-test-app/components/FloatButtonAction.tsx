import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  label: string;
  position: 'left' | 'right';
  onPress: () => void;
  onLongPress?: () => void;
}



export default function FloatbuttonAction({ label, position, onPress, onLongPress }: Props) {
  return (
    <Pressable 
      style={[styles.floatingButton, position === 'right' ? styles.positionRight : styles.positionLeft]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{color: "white", fontSize: 20}}>{label}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    
    borderRadius: 15,
    padding: 20,
    shadowOpacity: 0.3,
    elevation: 3,
  },

  positionRight: {
    right: 20,
    backgroundColor: "#65558f",
},

  positionLeft: {
    left: 20,
    backgroundColor: "#E4080A",
},
});
