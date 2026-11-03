import { PermissionStatus } from '@/infrastructure/interfaces/location';
import { usePermissionsStore } from '@/store/usePermissions';
import { router } from 'expo-router';
import { PropsWithChildren, useEffect } from 'react';
import { AppState } from 'react-native';

const PermissionsCheckerProvider = ({ children }: PropsWithChildren) => {
  const { locationStatus, checkLocationPermission } = usePermissionsStore();

  useEffect(() => {
    if (locationStatus === PermissionStatus.GRANDTED) {
      router.replace('/map');
    } else if (locationStatus !== PermissionStatus.CHECKING) {
      router.replace('/permissions');
    }
  }, [locationStatus]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState) => {
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  });

  return <>{children}</>;
};

export default PermissionsCheckerProvider;
