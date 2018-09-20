/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Slider from "react-native-slider";
import Video from "react-native-video";
import Control from "./Controls";
import AlbumArt from "./AlbumArt";
import data from "../../../data";
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

  setDuration(data) {
    this.setState({ totalLength: Math.floor(data.duration) });
  }

  setTime(data) {
    this.setState({ currentPosition: Math.floor(data.currentTime) });
  }

  parseTime(time) {
    return Math.floor(time / 60) + ": " + (time % 60);
  }
  render() {
    const music = data[1];
    return (
      <View style={styles.container}>
        <Video
          source={music.audioUrl} // Can be a URL or a local file.
          audioOnly={true}
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onEnd={this.onEnd} // Callback when playback finishes
          onLoad={this.setDuration.bind(this)}
          onError={this.videoError} // Callback when video cannot be loaded
          onProgress={this.setTime.bind(this)}
        />
        <AlbumArt url={music.albumArtUrl} />

        <Slider
          value={this.state.currentPosition / this.state.totalLength}
          disable={true}
        />
        <View style={styles.timeContainer}>
          <Text>{this.parseTime(this.state.currentPosition)}</Text>
          <Text>{this.parseTime(this.state.totalLength)}</Text>
        </View>

        <Control />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center"
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
