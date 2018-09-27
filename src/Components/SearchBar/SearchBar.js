import React, {Component} from 'react';
import {
    TextInput,
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo'

const BackIcon = ({onBack, LeftIcon}) => (
    <TouchableOpacity onPress={onBack}>
        <Icon name={LeftIcon} size={32} color="#fff" />
    </TouchableOpacity>
);

class SearchBar extends Component{

    render(){
        
        return(
            <View style={styles.container}>
                <BackIcon LeftIcon="chevron-left" onBack={this.props.onBack}/>
                <TextInput
                    autoFocus={this.props.onFocus} 
                    contextMenuHidden = {false}
                    placeholder="Looking for ..."
                    style = {styles.input}
                    value={this.props.searchText}
                    onChangeText={this.props.onChangeText}
                />
                </View>
        );
    }
}

export default SearchBar;

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
    container:{
        width,
        height: 72,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor:'#f19199',
    },
    input:{
        fontSize: 20,
        alignItems: 'center',
        backgroundColor:'#fff',
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 5,
        width: "90%"
    },
    icon:{
        alignItems: 'center',
    }
});