import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

import {Button} from './utilities/Button';

const CreateComponent = ({handleAddClick, errorMessage, successMessage}) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e);
  };

  return (
    <>
      <Text style={styles.textStyle}>Enter Todo Name</Text>
      <TextInput
        onChangeText={handleChange}
        style={styles.inputTodo}
        value={name}
        placeholder="eg. Pay Bills"
      />
      {errorMessage ? (
        <Text style={styles.messageError}>{errorMessage}</Text>
      ) : (
        <Text style={styles.messageSuccess}>{successMessage}</Text>
      )}
      <View style={styles.button}>
        <Button
          onPress={() => {
            setName('');
            handleAddClick(name);
          }}
          color="#01579B"
          title="ADD"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputTodo: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ccc',
    paddingStart: 10,
    paddingEnd: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 10,
    marginEnd: 10,
    marginStart: 10,
  },
  textStyle: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    width: '100%',
    marginTop: 10,
    marginBottom: 5,
  },
  textStyleList: {
    padding: 5,
  },
  button: {
    margin: 10,
  },
  messageError: {
    color: '#FF0000',
  },
  messageSuccess: {
    color: '#01579B',
  },
});

export default CreateComponent;
