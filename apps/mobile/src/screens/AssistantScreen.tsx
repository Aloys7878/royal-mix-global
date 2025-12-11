// apps/mobile/src/screens/AssistantScreen.tsx
import React, { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";
import { useRoyalAssistant } from "../hooks/useRoyalAssistant";

export default function AssistantScreen() {
  const { messages, send } = useRoyalAssistant("user-123");
  const [text, setText] = useState("");

  const submit = async () => {
    if (!text) return;
    await send(text);
    setText("");
  };

  return (
    <View style={{ flex:1, padding:16 }}>
      <FlatList data={messages} keyExtractor={(i,idx)=>String(idx)} renderItem={({item})=>(
        <Text style={{ padding:8, backgroundColor: item.from==='user'?'#eee':'#cfe' }}>{item.from}: {item.text}</Text>
      )} />
      <View style={{ flexDirection:'row', marginTop:8 }}>
        <TextInput value={text} onChangeText={setText} style={{ flex:1, borderWidth:1, padding:8 }} />
        <Button title="Send" onPress={submit} />
      </View>
    </View>
  );
}
