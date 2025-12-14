import { View, Text } from "react-native";
import { useEffect, useState } from "react";

export default function Marketplace() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    fetch("/marketplace")
      .then(res => res.json())
      .then(setItems);
  }, []);

  return (
    <View>
      {items.map(item => (
        <Text key={item.id}>{item.title} — {item.pricePI} PI</Text>
      ))}
    </View>
  );
}
