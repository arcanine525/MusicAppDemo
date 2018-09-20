import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
//import styles from "./PlayerScreenStyles";
import Player from "../../Components/Player/Player";
class PlayerScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Player />
      </View>
    );
  }
}

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  article: {
    fontSize: 30,
    paddingLeft: 10,
    fontWeight: "bold"
  }
});
