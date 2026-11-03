import PermissionsCheckerProvider from '@/providers/PermissionsCheckerProvider';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <PermissionsCheckerProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="loading/index" options={{ animation: 'none' }} />
          <Stack.Screen name="map/index" options={{ animation: 'fade' }} />
          <Stack.Screen
            name="permissions/index"
            options={{ animation: 'fade' }}
          />
        </Stack>
      </PermissionsCheckerProvider>
    </ThemeProvider>
  );
}
