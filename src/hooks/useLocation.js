import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          setIsLoading(false);
          return;
        }

        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 1, 
          },
          (newLocation) => {
            setLocation(newLocation);
            setIsLoading(false);
          }
        );
      } catch (error) {
        setErrorMsg('Error fetching location: ' + error.message);
        setIsLoading(false);
      }
    })();
  }, []);

  return { location, errorMsg, isLoading };
};
