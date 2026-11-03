import { PermissionStatus } from '@/infrastructure/interfaces/location';
import * as Location from 'expo-location';
import { Alert, Linking } from 'react-native';

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      if (status === 'denied') {
        manualPermissionRequest();
      }
      return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANDTED;
  };

export const checkLocationPermission = async () => {
  const { status } = await Location.getForegroundPermissionsAsync();

  switch (status) {
    case 'granted':
      return PermissionStatus.GRANDTED;
    case 'denied':
      return PermissionStatus.DENIED;
    default:
      return PermissionStatus.UNDERTEMINED;
  }
};

const manualPermissionRequest = async () => {
  Alert.alert(
    'Permiso de ubicacion necesario',
    'Para continuar debe de habilitar el permiso de localizacion en los ajustes de la app',
    [
      {
        text: 'Abrir ajustes',
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: 'Cancel',
        style: 'destructive',
      },
    ],
  );
};
