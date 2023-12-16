import { useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { useAppTheme } from '../theme';

interface HpTotalSectionProps {
  backgroundColor: string;
}

export default function HpTotalSection({ backgroundColor }: HpTotalSectionProps) {
  const [count, setCount] = useState<number>(40);
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
          transform: 'rotate(90deg)',
          alignSelf: 'center',
        }}
      >
        <Text style={theme.fonts.displayLarge}>{count}</Text>
      </View>
    </>
  );
}
