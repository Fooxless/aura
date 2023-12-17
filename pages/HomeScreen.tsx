import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useAppTheme } from '../components/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from '../App';

export type HomeScreenProps = NativeStackScreenProps<HomeStackNavigatorParamList, 'HomeScreen'>;

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const theme = useAppTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '40%',
        backgroundColor: theme.colors.border,
      }}
    >
      <Text
        style={{
          fontSize: 100,
          color: theme.colors.playerColours.grey,
          fontFamily: 'BlackOps',
          marginBottom: '70%',
        }}
      >
        Aura
      </Text>

      <Button
        mode="contained"
        buttonColor={theme.colors.playerColours.grey}
        textColor="black"
        contentStyle={{ width: '80%', height: 60, alignSelf: 'center' }}
        labelStyle={{ fontSize: 20 }}
        onPress={() => navigation.navigate('LifeSettingScreen')}
      >
        Start Game
      </Button>
    </View>
  );
}
