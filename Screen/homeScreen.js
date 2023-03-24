import { Text, View } from 'react-native';
import NewUserScreen from '../newUser';
export default class HomeScreen extends Component{
  render(){
    return(
      <View>
        <Text>HomeScreen</Text>
        <NewUserScreen/>
      </View>
    )
  }
}