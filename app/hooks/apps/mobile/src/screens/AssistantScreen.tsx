import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function AssistantScreen() {
  const [response, setResponse] = useState("");

  const testAI = async () => {
    const res = await fetch("YOUR_API_URL/ai/text", {
      method: "POST",
      body: JSON.stringify({ prompt: "Hello Royal Mix AI" }),
    });
    const data = await res.json();
    setResponse(data.text);
  };

  return (
    <View>
      <Button title="Test Royal AI" onPress={testAI} />
      <Text>{response}</Text>
    </View>
  );
}
