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
        const {navigation} = this.props;
        return(
            <View style={styles.container}>
                <Header 
                    message="Playlist" 
                    L_icon="chevron-left" 
                    R_icon="magnifying-glass"
                    />
                <Text style={styles.article}>List</Text>
                <SongList 
                    data={Tracks} 
                    onGoPlayer={(index) => navigation.navigate('PlayerScreen', {
                        a: index
                    })} 
                />
            </View>
        );
    }
}

export default PlaylistScreen;