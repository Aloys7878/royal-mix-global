import { View, Text, Button } from "react-native";
import { useState } from "react";

export default function AiAssistant() {
  const [reply, setReply] = useState("");

  async function askAI() {
    const res = await fetch("/ai/chat", {
      method: "POST",
      body: JSON.stringify({ prompt: "Hello Royal AI" })
    });
    const data = await res.json();
    setReply(data.reply);
  }

  return (
    <View>
      <Button title="Ask Royal AI" onPress={askAI} />
      <Text>{reply}</Text>
    </View>
  );
}
