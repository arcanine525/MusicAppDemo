import { createStackNavigator } from "react-navigation";
import PlayListScreen from "../Screen/PlayistScreen/PlaylistScreen";
import PlayerScreen from "../Screen/PlayerScreen/PlayerScreen";
const MainStack = createStackNavigator(
  {
    PlayListScreen: {
      screen: PlayListScreen
    },

    PlayerScreen: {
      screen: PlayerScreen
    }
  },
  {
    initialRouteName: "PlayListScreen",
    headerMode: 'none'
  }
);

export default MainStack;
