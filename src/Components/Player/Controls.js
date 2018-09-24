import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Images from "../../Theme/Image";

const Control = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onLike,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPressRepeat}>
      <Image source={Images.repeatButton} style={styles.secondaryButton} />
    </TouchableOpacity>

    <TouchableOpacity onPress={onBack}>
      <Image source={Images.prevButton} style={styles.secondaryButton} />
    </TouchableOpacity>

    {paused ? (
      <TouchableOpacity onPress={onPressPlay}>
        <Image source={Images.pauseButton} style={styles.playButton} />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onPressPause}>
        <Image source={Images.playButton} style={styles.playButton} />
      </TouchableOpacity>
    )}

    <TouchableOpacity onPress={onForward}>
      <Image source={Images.nextButton} style={styles.secondaryButton} />
    </TouchableOpacity>

    <TouchableOpacity onPress={onLike}>
      <Image source={Images.likeButton} style={styles.secondaryButton}/>
    </TouchableOpacity>
  </View>
);

const primaryBtn = 64;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  playButton: {
    height: primaryBtn,
    width: primaryBtn
  },
  secondaryButton: {
    height: primaryBtn / 2,
    width: primaryBtn / 2
  }
});
export default Control;
