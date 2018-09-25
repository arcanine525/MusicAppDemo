import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
//import styles from "./PlayerScreenStyles";
import Player from "../../Components/Player/Player";
import Header from "../../Components/Header/Header";
class PlayerScreen extends Component {
  render() {

    const { track } = this.props.navigation.state.params;

    const {goBack} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header 
          message="Player"
          LeftIcon="chevron-left" 
          onLeftBtn={()=>goBack()}
          RightIcon="dots-three-horizontal"  
          />
        <Player track={track}/>
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
