import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {styles} from './HeaderStyle';
import Icon from 'react-native-vector-icons/Entypo'

const Header = ({message, onLeftBtn, LeftIcon, onRightBtn, RightIcon}) => (
    <View style={styles.header}>
        <TouchableOpacity onPress={onLeftBtn}>
            <Icon name={LeftIcon} size={32} color="#f19199" />
        </TouchableOpacity>
        <Text style={styles.message}>{message.toUpperCase()}</Text>
        <TouchableOpacity onPress={onRightBtn}>
            <Icon name={RightIcon} size={32} color="#f19199" />
        </TouchableOpacity>
    </View>
);

export default Header;