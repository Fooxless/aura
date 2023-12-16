import { DefaultTheme, useTheme } from 'react-native-paper';

export type AppTheme = typeof customTheme;

export const useAppTheme = () => useTheme<AppTheme>();

export const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'yellow',
    border: '#0f250e',
    playerColours: {
      teal: '#3a9594',
      darkBlue: '#2d658c',
      purple: '#7e73bd',
      grey: '#bbd1e5',
      green: '#378f6a',
      pink: '#8b4f73',
      orange: '#c57e4e',
      lightBlue: '#508db6',
    },
  },
};
