// #3143e8 yellow


import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import itemInsert from './components/upload';
import itemList from './components/uploadlist';

const App = () => {
  const [items, setitems] = useState([]);

  const additem = text => {
    setitems([
      ...items,
      { id: Math.random().toString(), textValue: text, checked: false },
    ]);
  };

  const onRemove = id => e => {
    setitems(items.filter(item => item.id !== id));
  };

  const onToggle = id => e => {
    setitems(
      items.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>AriShop</Text>
      <View style={styles.card}>
        <itemInsert onAdditem={additem} />
        <itemList items={items} onRemove={onRemove} onToggle={onToggle} />
      </View>
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => {}}>
          <Image source={require('./assets/favicon.png')} style={styles.icon} />
          <Text style={styles.bottomBarText}>검색</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => {}}>
          <Image source={require('./assets/favicon.png')} style={styles.icon} />
          <Text style={styles.bottomBarText}>등록</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => {}}>
          <Image source={require('./assets/favicon.png')} style={styles.icon} />
          <Text style={styles.bottomBarText}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => {}}>
          <Image source={require('./assets/favicon.png')} style={styles.icon} />
          <Text style={styles.bottomBarText}>채팅</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomBarButton} onPress={() => {}}>
          <Image source={require('./assets/favicon.png')} style={styles.icon} />
          <Text style={styles.bottomBarText}>내 정보</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 10,
  },
  bottomBarButton: {
    alignItems: 'center',
  },
  bottomBarText: {
    color: '#fff',
    marginTop: 5,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default App;
