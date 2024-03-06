import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const itemInsert = ({onAdditem}) => {
  const [newitemItem, setNewitemItem] = useState('');

  const itemInputHandler = newitem => {
    setNewitemItem(newitem);
  };

  const additemHandler = () => {
    onAdditem(newitemItem);
    setNewitemItem('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'#999'}
        onChangeText={itemInputHandler}
        value={newitemItem}
        autoCorrect={false}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={additemHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  button: {
    marginRight: 10,
  },
});

export default itemInsert;
