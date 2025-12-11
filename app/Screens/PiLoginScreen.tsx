import { View, Button, Text } from "react-native";
import { usePiAuth } from "../hooks/usePiAuth";

export default function PiLoginScreen() {
  const { login, user } = usePiAuth();

  return (
    <View>
      <Button title="Login with Pi" onPress={login} />
      {user && <Text>Welcome, {user.username}</Text>}
    </View>
  );
}
