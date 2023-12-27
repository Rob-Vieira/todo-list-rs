import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [ fontLoaded ] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if(!fontLoaded) <AppLoading />

  return (
    <>
      <StatusBar style="light" />
      <Home />
    </>
  );
}
