import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {styles} from './HeaderStyle';
import Icon from 'react-native-vector-icons/Entypo'

const Header = ({message, onBackPress, onSearchPress}) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={onBackPress}>
            <Icon name="chevron-left" size={40} color="#f19199" />
        </TouchableOpacity>
        <Text style={styles.message}>{message.toUpperCase()}</Text>
        <TouchableOpacity onPress={onSearchPress}>
            <Icon name="magnifying-glass" size={40} color="#f19199" />
        </TouchableOpacity>
    </View>
);

export default Header;