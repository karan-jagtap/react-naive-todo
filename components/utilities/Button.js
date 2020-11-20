import React, {useState} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export const Button = ({onPress}) => {
  const [clicked, setclicked] = useState(false);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.1}
      onPressIn={() => setclicked(true)}
      onPressOut={() => setclicked(false)}>
      <View style={!clicked ? styles.viewStyle : styles.viewClicked}>
        <Text style={!clicked ? styles.textStyle : styles.textClicked}>
          Add
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#01579B',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
  viewClicked: {
    backgroundColor: '#01579B',
    paddingHorizontal: 21,
    paddingVertical: 7,
    borderRadius: 7,
  },
  textStyle: {
    color: '#fff',
  },
  textClicked: {
    color: '#000',
  },
});
