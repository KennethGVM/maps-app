import ThemedPressable from '@/components/shared/themed-pressable';
import { ThemedText } from '@/components/shared/themed-text';
import { usePermissionsStore } from '@/store/usePermissions';
import { View } from 'react-native';

const PermissionScreen = () => {
  const { locationStatus, requestLocationPermission } = usePermissionsStore();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>Estado actual: {locationStatus}</ThemedText>
      <ThemedPressable onPress={requestLocationPermission}>
        Habilitar ubicacion
      </ThemedPressable>
    </View>
  );
};

export default PermissionScreen;
