import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';


export default class App extends Component {

  renderList = () => {
    
      const jobs = [
          {name: 'job1', id: 1},
          {name: 'job2', id: 2},
          {name: 'job3', id: 3},
          {name: 'job4', id: 4},
          {name: 'job5', id: 5},
          {name: 'job6', id: 6}
      ];

      const separatorStyle = {
          flexGrow: 1,
          height: 5,
          backgorundColor: '#f4f4f4'
      };

      return (
        <FlatList
          style={{
            flex: 1,
            backgroundColor: 'white'
          }}
          data={jobs}
          renderItem={({item}) => this.renderItem(item)}
          itemSeparatorComponent={() => <View style={separatorStyle}/>}
          keyExtractor={(item) => `${item.id}`}
        />
      );
  }

  renderItem = (job) => (
      <Text style={{
        paddingHorizontal: 16,
        paddingVertical: 8,
        minHeight: 48,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#ccc',
        width: 100
      }}
      >
        {job.name}
      </Text>
  )

  render = () => (
      <SafeAreaView style={ styles.container }>
          {this.renderList()}
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c4',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
