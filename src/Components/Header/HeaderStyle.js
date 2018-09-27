import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    header: {
        height: 72,
        // paddingTop: "1%",
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    message:{
        flex: 1,
        textAlign: 'center',
        color: '#f19199',
        fontWeight: 'bold',
        fontSize: 20,
    }
});