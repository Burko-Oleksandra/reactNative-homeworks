import RegistrationScreen from "./assets/screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./assets/screens/LoginScreen/LoginScreen";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  return <>{true ? <RegistrationScreen /> : <LoginScreen />}</>;
}
