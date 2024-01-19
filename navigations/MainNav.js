/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/Home';
import {Routes} from '../routes/AppRoute';
import SingleDonate from '../screens/SingleDonation/SingleDonate';
import BackButton from '../components/BackButton';

const Stack = createStackNavigator();

const Mainnav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // header: () => null,
        // headerShown: true,

        headerBackImage: () => <BackButton  />,
      }}>
      <Stack.Screen name={Routes.Home} component={HomeScreen} />
      <Stack.Screen
        name={Routes.Detail}
        component={SingleDonate}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default Mainnav;
