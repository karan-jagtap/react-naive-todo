import React from 'react';
import {Text, FlatList, View, StyleSheet} from 'react-native';

const ListComponent = ({todoList, deleteItem}) => {
  const renderElement = ({item}) => (
    <Text style={styles.textStyleList} onPress={() => deleteItem(item.id)}>
      {item.name}
    </Text>
  );

  const renderSeparator = () => (
    <View style={{backgroundColor: '#ccc', height: 1}}></View>
  );

  return (
    <>
      {todoList.length == 0 ? (
        <Text style={styles.messageEmpty}>No Data Found</Text>
      ) : (
        <FlatList
          style={styles.textStyle}
          data={todoList}
          renderItem={renderElement}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
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
  messageEmpty: {
    color: '#FF0000',
  },
});

export default ListComponent;
