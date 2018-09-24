import React, {Component} from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {styles} from './SongListStyle';

class SongList extends Component {
    
    _renderItem = ({item, index}) => (
        <TouchableOpacity onPress={()=>alert("You clicked !")}>
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );

    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                    data={this.props.data}
                    renderItem={this._renderItem}
                    keyExtractor={item => item.id}                />
            </View>
        );
    }
}

export default SongList;