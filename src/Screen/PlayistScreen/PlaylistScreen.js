import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { styles } from './PlaylistScreenStyle';
import Header from '../../Components/Header/Header';
import SongList from '../../Components/SongList/SongList';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Tracks from '../../../data';

class PlaylistScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchIconClicked: false,
            searchText: "",
            songList: Tracks,
        };
    }

    onClicked() {
        this.setState({ searchIconClicked: !this.state.searchIconClicked });
    }

    newList = () => Tracks.filter((Track, index)=>
        Track.title.toLocaleLowerCase().includes(this.state.searchText.toLocaleLowerCase())
    );
    
    handleOnChangeText = (text) => {
        // console.log(text)
        this.setState({searchText:text})
    }

    render() {

        const { navigate } = this.props.navigation;
        const searchText = this.state.searchText;
        const searchIconClicked = this.state.searchIconClicked;

        return (
            <View style={styles.container}>
                {
                    !searchIconClicked ?
                        <Header
                            message="Playlist"
                            LeftIcon="menu"
                            RightIcon="magnifying-glass"
                            onRightBtn={() => this.onClicked()}
                            onLeftBtn={}
                        />
                        :
                        <SearchBar
                            onFocus={searchIconClicked}
                            onBack={() => this.onClicked()}
                            searchText={searchText}
                            onChangeText={this.handleOnChangeText}
                        />
                }
                <Text style={styles.article}>List</Text>
                    <SongList
                        data={!searchIconClicked ? this.state.songList : this.newList()}
                        onGoPlayer={(item) => navigate('PlayerScreen', {
                            track: item, list: this.state.songList
                        })}
                    />
            </View>
        );
    }
}

export default PlaylistScreen;