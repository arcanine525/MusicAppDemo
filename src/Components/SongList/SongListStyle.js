import React from 'react';
import {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    item:{
        width:'100%',
        flexDirection: 'row',
        alignItems:'flex-start',
        paddingBottom: 5,
        paddingTop: 5
    },
    image:{
        height: 100,
        width: 100,
        borderRadius: 5,
    },
    title:{
        fontSize: 25,
        fontWeight:'bold'
    },
    artist:{
        marginTop: 10,
        fontSize: 20,
    },
    info:{
        flex:1,
        justifyContent: 'center',
        paddingLeft: 20,
        paddingTop: 10,
    }
});