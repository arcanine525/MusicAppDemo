import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
//import styles from "./PlayerScreenStyles";
import Player from "../../Components/Player/Player";
import Header from "../../Components/Header/Header";
class PlayerScreen extends Component {
  
  constructor(props){
    super(props);
    this.state={
      playQueue: [],
    }
  }
  
  componentDidMount(){
    this.setState({
      playQueue: this.state.playQueue.concat(this.props.navigation.state.params.list)
    })
    console.log('HEY')
  }

  render() {

    const {track} = this.props.navigation.state.params;

    const {goBack} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Header 
          message="Player"
          LeftIcon="chevron-left" 
          onLeftBtn={()=>goBack()}
          RightIcon="list"
          onRightBtn={}
          />
        <Player track={track} list={this.state.playQueue}/>
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
