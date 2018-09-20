import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';
import {styles} from './PlaylistScreenStyle';
import Header from '../../Components/Header/Header';
import SongList from '../../Components/SongList/SongList';
class PlaylistScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Header message="Playlist"/>
                <Text style={styles.article}>List</Text>
                <SongList data={[{id:"1"}]}/>
            </View>
        );
    }
}

export default PlaylistScreen;