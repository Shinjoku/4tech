import React, { Component } from 'react';
import { ImageBackground } from 'react-native';

import { SafeAreaView, StyleSheet, Text } from 'react-native';

const wpp = require('../assets/images/wpp.jpg');

export default class JobDetails extends Component {
static navigationOptions = {
    title: 'Detalhes'
};

getJob() {
    const {navigation} = this.props;
    const vaga = navigation.getParam('job', {});

    return vaga;
}

    render() {
        const job = this.getJob();
        return (
            <SafeAreaView style={styles.container}>
            <ImageBackground
                source={wpp}
                style={{flex: 1, width: '100%', height: '100%'}}
                resizeMode='cover'
            >
                <Text style={{color: 'white', fontWeight: 'bold', padding: 16}}> {job.name} </Text>
                <Text style={{padding: 16}}> {job.description} </Text>
                <Text style={{padding: 16}}> {job.salary} </Text>
            </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create ( {
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
}); 