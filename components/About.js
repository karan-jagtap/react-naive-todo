import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const About = () => {
  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.subHeading}>
          Points covered in this application :
        </Text>
        <Text style={styles.points}>1. Stack Navigation</Text>
        <Text style={styles.points}>2. Drawer Navigation</Text>
        <Text style={styles.points}>3. StyleSheet creation</Text>
        <Text style={styles.points}>4. Custom Header Component</Text>
        <Text style={styles.points}>5. Vector Icons</Text>
        <Text style={styles.points}>6. React Native in-built Components</Text>
        <Text style={styles.points}>7. Conditional Styling</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E1F5FE',
    flex: 1,
  },
  subHeading: {
    justifyContent: 'flex-start',
    fontSize: 16,
    color: '#01579B',
    marginBottom: 10,
  },
  points: {
    marginTop: 5,
    marginHorizontal: 10,
    color: '#000',
  },
});

export default About;
