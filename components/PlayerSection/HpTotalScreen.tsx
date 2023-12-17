import { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { useAppTheme } from '../theme';

interface HpTotalSectionProps {
  backgroundColor: string;
  healthPoints: number;
  isRight: boolean;
}

export default function HpTotalSection({
  backgroundColor,
  healthPoints,
  isRight,
}: HpTotalSectionProps) {
  const [count, setCount] = useState<number>(healthPoints);
  const theme = useAppTheme();

  return (
    <>
      <TouchableHighlight
        onPress={() => {
          setCount(count + 1);
        }}
        style={{
          height: '50%',
          justifyContent: 'center',
          borderColor: 'none',
        }}
      >
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            backgroundColor,
            alignItems: 'center',
            borderColor: 'none',
          }}
        />
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          setCount(count - 1);
        }}
        style={{
          height: '50%',
          justifyContent: 'center',
          borderColor: 'none',
        }}
      >
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
            backgroundColor,
            alignItems: 'center',
            borderColor: 'none',
          }}
        />
      </TouchableHighlight>
      <View
        style={{
          position: 'absolute',
          transform: isRight ? 'rotate(-90deg)' : 'rotate(90deg)',
          alignSelf: 'center',
        }}
      >
        <Text style={theme.fonts.displayLarge}>{count}</Text>
      </View>
    </>
  );
}
