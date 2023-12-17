import { View, Text } from 'react-native';
import { Button, IconButton } from 'react-native-paper';
import { useAppTheme } from '../components/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackNavigatorParamList } from '../App';
import React from 'react';

export type LifeSettingScreenProps = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'LifeSettingScreen'
>;

export default function LifeSettingScreen({ navigation }: LifeSettingScreenProps) {
  const theme = useAppTheme();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: theme.colors.border,
        justifyContent: 'center',
      }}
    >
      <IconButton
        icon="arrow-left"
        size={40}
        iconColor="white"
        onPress={() => navigation.navigate('HomeScreen')}
        style={{ margin: 20 }}
      />
      <Text
        style={{
          fontSize: 100,
          color: theme.colors.playerColours.grey,
          fontFamily: 'BlackOps',
          alignSelf: 'center',
          marginBottom: '20%',
        }}
      >
        HP
      </Text>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 20,
          width: '100%',
        }}
      >
        <Button
          mode="contained"
          buttonColor={theme.colors.playerColours.grey}
          textColor="black"
          contentStyle={{ alignSelf: 'center', height: '100%' }}
          labelStyle={{ fontSize: 50, lineHeight: 50 }}
          style={{ height: '20%', width: '60%', justifyContent: 'center' }}
          onPress={() => navigation.navigate('GameTable', { healthPoints: 20 })}
        >
          20
        </Button>
        <Button
          mode="contained"
          buttonColor={theme.colors.playerColours.grey}
          textColor="black"
          contentStyle={{ alignSelf: 'center', height: '100%' }}
          labelStyle={{ fontSize: 50, lineHeight: 50 }}
          style={{ height: '20%', width: '60%', justifyContent: 'center' }}
          onPress={() => navigation.navigate('GameTable', { healthPoints: 30 })}
        >
          30
        </Button>
        <Button
          mode="contained"
          buttonColor={theme.colors.playerColours.grey}
          textColor="black"
          contentStyle={{ alignSelf: 'center', height: '100%' }}
          labelStyle={{ fontSize: 50, lineHeight: 50 }}
          style={{ height: '20%', width: '60%', justifyContent: 'center' }}
          onPress={() => navigation.navigate('GameTable', { healthPoints: 40 })}
        >
          40
        </Button>
      </View>
    </View>
  );
}
