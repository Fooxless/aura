import { View } from 'react-native';
import HpTotalSection from './HpTotalScreen';

interface PlayerSectionProps {
  backgroundColor: string;
}

export default function PlayerSection({ backgroundColor }: PlayerSectionProps) {
  return (
    <View
      style={{
        height: '50%',
        borderColor: '#0f250e',
        borderWidth: 5,
        justifyContent: 'center',
      }}
    >
      {/* <GestureRecognizer
        onSwipeUp={() => onSwipeUp()}
        config={config}
        style={{
          flex: 1,
        }}> */}
      <HpTotalSection backgroundColor={backgroundColor} />
      {/* </GestureRecognizer> */}
      {/* Add player settings section */}
    </View>
  );
}
