import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
//import styles from "./PlayerScreenStyles";
import data from "../../../data";
import Header from '../../Components/Header/Header';
import Player from "../../Components/Player/Player";

class PlayerScreen extends Component {
    // constructor(props) {
    //   super(props);
    //   const a = props.navigation;
    //   // console.log('222', a)
    // }

  render() {
    const {goBack} = this.props.navigation;
    const {Tracks} = this.props.navigation;
    const {a} = this.props.navigation.state.params;


    return (
      <View style={styles.container}>
        <Header 
          message="Player"
          onBackPress={()=> goBack()} 
          L_icon="chevron-left"
          R_icon="dots-three-horizontal"
        />
        <Player track={a}/>
      </View>
    );
  }
}

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  article: {
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: "bold"
  },
});