import { SplashScreen, Stack } from "expo-router";
import { useFonts, AlmendraDisplay_400Regular } from '@expo-google-fonts/almendra-display'
import { Inter_400Regular } from '@expo-google-fonts/inter'
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    AlmendraDisplay_400Regular,
    Inter_400Regular,
  });
  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]
);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
);
}
