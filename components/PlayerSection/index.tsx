import { View } from 'react-native';
import HpTotalSection from './HpTotalScreen';

interface PlayerSectionProps {
  backgroundColor: string;
  healthPoints: number;
  isRight: boolean;
}

export default function PlayerSection({
  backgroundColor,
  healthPoints,
  isRight,
}: PlayerSectionProps) {
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
      <HpTotalSection
        backgroundColor={backgroundColor}
        healthPoints={healthPoints}
        isRight={isRight}
      />
      {/* </GestureRecognizer> */}
      {/* Add player settings section */}
    </View>
  );
}
