import { SplashScreen, Stack } from "expo-router";
import { useFonts, AlmendraDisplay_400Regular } from '@expo-google-fonts/almendra-display'
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    AlmendraDisplay_400Regular,
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
  return <Stack screenOptions={{ headerShown: false }} />;
}
