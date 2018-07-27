import React, { Component } from 'react';
import { StyleSheet, 
        Text, 
        View, 
        SafeAreaView, 
        FlatList, 
        ImageBackground, 
        TouchableHighlight,
        Image } from 'react-native';
import { getJobs } from '../networking/API';

const img = require('../assets/images/logo-h-vjobs.png');
const wpp = require('../assets/images/wpp.jpg');

export default class JobList extends Component {

  static navigationOptions = {
    title: 'VJobs'
  };

  constructor(props) {
    super(props);
    this.state = {jobs: []}
  }

  componentDidMount() {
    getJobs()
    .then(jobs => this.setState({jobs}))
    .catch(error => console.log(error))
  }

  renderHeader() {
  return(
    <Image
    style={{margin:16, alignSelf:'center'}}
    source={img}/>
  )
}

  renderItem(vaga) {
    return (
      <TouchableHighlight
            onPress={() => this.props.navigation.navigate('JobDetails', {job: vaga})}>
              <ImageBackground
                source={wpp}
                style={{flex: 1}}
              >
              <Text style={{
                opacity: 0.5,
                paddingHorizontal: 16,
                paddingVertical: 8,
                minHeight: 120,
                fontWeight: 'bold',
                borderWidth: 1,
                borderColor: '#ccc',
                backgroundColor: '#eee',
              }}
              >
                {vaga.name}
              </Text>
              </ImageBackground>
            </TouchableHighlight>
    );
  }
 

  renderList(){
    const separatorStyle = {
      flexGrow: 1, height: 5, backgroundColor: '#fff'
    }

    return (
      <FlatList 
        data={this.state.jobs}
        style={{flex: 1, backgroundColor: 'white'}}
        renderItem={({ item }) => this.renderItem(item)}
        ListHeaderComponent={() => this.renderHeader()}
        ItemSeparatorComponent={() => <View style={separatorStyle}/>}
        keyExtractor={(item) => `${item.id}`}
      />);
  }
 
  render() {
    return (
      <SafeAreaView style={styles.container}>
       { this.renderList() }
     </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: '#fff'
  },
});