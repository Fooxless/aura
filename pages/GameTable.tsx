import { useState } from 'react';
import { Animated, StyleProp, Text, View, ViewStyle } from 'react-native';
import { Button, Icon, Modal, Portal } from 'react-native-paper';

import PlayerSection from '../components/PlayerSection';
import { useAppTheme } from '../components/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from '../App';

export type GameTableProps = NativeStackScreenProps<HomeStackNavigatorParamList, 'GameTable'>;

export default function GameTable({ navigation, route }: GameTableProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const theme = useAppTheme();
  const { healthPoints } = route.params;

  console.log('healthPoints', healthPoints);

  const containerStyle = {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
  } as Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      {/* Left */}
      <View
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <PlayerSection
          backgroundColor={theme.colors.playerColours.darkBlue}
          healthPoints={healthPoints}
          isRight={false}
        />
        <PlayerSection
          backgroundColor={theme.colors.playerColours.green}
          healthPoints={healthPoints}
          isRight={false}
        />
      </View>
      {/* Right */}
      <View
        style={{
          width: '50%',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <PlayerSection
          backgroundColor={theme.colors.playerColours.orange}
          healthPoints={healthPoints}
          isRight={true}
        />
        <PlayerSection
          backgroundColor={theme.colors.playerColours.grey}
          healthPoints={healthPoints}
          isRight={true}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          alignSelf: 'center',
        }}
      >
        <Button
          mode="contained"
          contentStyle={{
            display: 'flex',
            alignContent: 'center',
            margin: -4,
            marginRight: -8,
            marginLeft: -8,
          }}
          onPress={() => setVisible(true)}
        >
          <Icon size={30} source="cog" color="white" />
        </Button>
      </View>

      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={containerStyle}
        >
          <Text>Settings</Text>
          <Button
            mode="contained"
            buttonColor={theme.colors.playerColours.grey}
            textColor="black"
            contentStyle={{ width: '80%', height: 60, alignSelf: 'center' }}
            labelStyle={{ fontSize: 20 }}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            End Game
          </Button>
        </Modal>
      </Portal>
    </View>
  );
}
