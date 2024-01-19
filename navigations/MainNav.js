/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/Home';
import {Routes} from '../routes/AppRoute';
import SingleDonate from '../screens/SingleDonation/SingleDonate';

const Stack = createStackNavigator();

const Mainnav = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen name={Routes.Detail} component={SingleDonate} />
    </Stack.Navigator>
  );
};

export default Mainnav;
