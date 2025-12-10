import { useAI } from "../hooks/useAI";
import { useState } from "react";
import { View, TextInput, Button, Image } from "react-native";

export default function AIGeneratorScreen() {
  const { generateImage } = useAI();
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");

  const runGenerate = async () => {
    const result = await generateImage(prompt);
    setImage(result.url);
  };

  return (
    <View>
      <TextInput placeholder="Enter prompt" onChangeText={setPrompt} />
      <Button title="Generate" onPress={runGenerate} />
      {image ? <Image source={{ uri: image }} style={{ width: 300, height: 300 }} /> : null}
    </View>
  );
}
