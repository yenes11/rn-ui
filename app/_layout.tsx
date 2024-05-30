import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useTheme,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import ColorSchemeProvider, {
  useColorScheme,
} from '@/components/useColorScheme';
import { StatusBar, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ColorSchemeProvider>
      <GestureHandlerRootView>
        <RootLayoutNav />
      </GestureHandlerRootView>
    </ColorSchemeProvider>
  );
}

function RootLayoutNav() {
  const { theme } = useColorScheme();
  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerLargeTitle: true,
          headerTransparent: true,
          headerBlurEffect: 'prominent',
          headerSearchBarOptions: {
            placeholder: 'Search',
            hideWhenScrolling: true,
            obscureBackground: false,
          },
          // headerRight: () => <Text>asdasd</Text>,
          // headerLeft: () => <Text>asdasd</Text>,
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: true, title: 'Tab One' }}
        />
        <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
      </Stack>
    </ThemeProvider>
  );
}
