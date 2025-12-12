import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Home() {
  const sections = [
    { name: "AI Text", route: "/ai/text" },
    { name: "AI Image", route: "/ai/image" },
    { name: "AI Voice", route: "/ai/voice" },
    { name: "Upload Media", route: "/media/upload" },
    { name: "Orders", route: "/order" },
    { name: "Profile", route: "/profile" },
  ];

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Royal Mix Global
      </Text>
      <Text style={{ opacity: 0.6, marginBottom: 20 }}>
        Multi-Ecosystem | AI | Media | Web3 | Pi
      </Text>

      {sections.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => router.push(item.route)}
          style={{
            padding: 20,
            backgroundColor: "#eee",
            borderRadius: 10,
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
