import React, {Component} from 'react';
import {
    Text,
    View,
} from 'react-native';
import {styles} from './PlaylistScreenStyle';
import Header from '../../Components/Header/Header';
import SongList from '../../Components/SongList/SongList';
import Tracks from '../../../data';

class PlaylistScreen extends Component {
    render(){

        const {navigate} = this.props.navigation;

        return(
            <View style={styles.container}>
                <Header message="Playlist" LeftIcon="chevron-left" RightIcon="magnifying-glass"/>
                <Text style={styles.article}>List</Text>
                <SongList data={Tracks} onGoPlayer={(index)=> navigate('PlayerScreen',{
                    track: index
                })}/>
            </View>
        );
    }
}

export default PlaylistScreen;