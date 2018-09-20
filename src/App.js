/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Video from "react-native-video";
import Player from "./Components/Player/Player";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Video
          source={music} // Can be a URL or a local file.
          audioOnly={true}
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onEnd={this.onEnd} // Callback when playback finishes
          onError={this.videoError} // Callback when video cannot be loaded
          onProgress={this.setTime.bind(this)}
        /> */}
        <Player />

        <Text>{this.state.currentPosition}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
