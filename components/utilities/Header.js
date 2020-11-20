import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({onPress, title}) => {
  const openDrawer = () => {
    console.log('drawer opened');
    navigation.openDrawer();
  };

  return (
    <View style={styles.viewStyle}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={onPress}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#01579B',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    padding: 5,
    marginHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },
});

export default Header;
