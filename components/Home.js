import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import CreateComponent from './CreateComponent';
import ListComponent from './ListComponent';
import Icon from 'react-native-vector-icons/Entypo';

class Home extends React.Component {
  state = {
    todoList: [],
    section: 'create',
    errorMessage: '',
    successMessage: '',
  };

  handleAddClick = (name) => {
    const newItem = {id: Math.random(), name};
    const found = this.state.todoList.findIndex((item) => item.name === name);
    if (found > -1) {
      this.setState({errorMessage: 'Todo Already Present', successMessage: ''});
    } else if (!name) {
      this.setState({
        errorMessage: 'Please Enter a Todo Name',
        successMessage: '',
      });
    } else {
      this.setState({
        todoList: [...this.state.todoList, newItem],
        errorMessage: '',
        successMessage: 'Todo Added',
      });
    }
  };

  handleCreateClick = () => {
    this.setState({section: 'create', errorMessage: '', successMessage: ''});
  };

  handleListClick = () => {
    this.setState({section: 'list', errorMessage: '', successMessage: ''});
  };

  deleteItem = (id) => {
    Alert.alert(
      'Warning',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () =>
            this.setState({
              todoList: [
                ...this.state.todoList.filter((item) => item.id !== id),
              ],
            }),
        },
      ],
      {cancelable: false},
    );
  };

  renderElement = () => {
    if (this.state.section === 'create')
      return (
        <>
          <CreateComponent
            handleAddClick={this.handleAddClick}
            errorMessage={this.state.errorMessage}
            successMessage={this.state.successMessage}
          />
        </>
      );
    return (
      <>
        <ListComponent
          todoList={this.state.todoList}
          deleteItem={this.deleteItem}
        />
      </>
    );
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={this.handleCreateClick}
              color="#01579B"
              title="Create"
              icon={<Icon name="list" />}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={this.handleListClick}
              color="#01579B"
              title="List"
            />
          </View>
        </View>
        {this.renderElement()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E1F5FE',
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
    flex: 1,
    alignContent: 'center',
  },
  tabStyle: {
    backgroundColor: '#01579B',
    height: 1,
    width: '50%',
  },
  createStyle: {
    alignSelf: 'flex-start',
  },
  listStyle: {
    alignSelf: 'flex-end',
  },
});

export default Home;
