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
<<<<<<< HEAD
    initialRouteName: "PlayListScreen",
=======
    initialRouteName: "PlayerScreen",
>>>>>>> b93c2236956c596dfacca7b9560071a1deec590a
    headerMode: 'none'
  }
);

export default MainStack;
