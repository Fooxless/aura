import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import GameTable from './pages/GameTable';
import HomeScreen from './pages/HomeScreen';
import { customTheme } from './components/theme';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import LifeSettingScreen from './pages/LifeSettingScreen';

export default function App() {
  // Adding custom fonts
  // On app store: https://www.instabug.com/blog/react-native-app-ios-android
  const [fontsLoaded] = useFonts({
    BlackOps: require('../aura/assets/fonts/BlackOpsOne-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  const HomeStack = createNativeStackNavigator<HomeStackNavigatorParamList>();

  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <StatusBar hidden />

        <HomeStack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
          <HomeStack.Screen name="GameTable" component={GameTable} />
          <HomeStack.Screen name="LifeSettingScreen" component={LifeSettingScreen} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export type HomeStackNavigatorParamList = {
  HomeScreen: undefined;
  GameTable: { healthPoints: number };
  LifeSettingScreen: undefined;
};
