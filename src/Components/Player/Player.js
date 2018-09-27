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
import styles from "./PlayerStyles";
import data from "../../../data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      liked: false,
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: props.track,
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

  onPressPause() {
    this.setState({ paused: true });
  }

  onPressPlay() {
    this.setState({ paused: false });
  }

  onBack() {
    this.setState({selectedTrack: this.state.trackNumber - 1});
  }

  onForward() {
    this.setState({selectedTrack: this.state.trackNumber + 1});
  }

  onLike() {
    this.setState({liked: !this.state.liked}); 
  }

  render() {
    
    const music = this.state.selectedTrack;
    
    return (
      <View style={styles.container}>
        <Video
          source={music.audioUrl} // Can be a URL or a local file.
          audioOnly={true}
          paused={!this.state.paused}
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

        <Control
          paused={this.state.paused}
          onPressPause={() => {
            this.onPressPause();
            console.log(this.props.track)
          }}
          onPressPlay={() => {
            this.onPressPlay();
          }}
          onForward={()=>{
            this.onForward();
          }}
          onBack={()=>{
            this.onBack();
          }}
          onLike={()=>{
              this.onLike();
          }}
          />
      </View>
    );
  }
}
