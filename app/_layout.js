import { Stack } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";
import { CircleInfoIcon } from "../Components/Icons";
import { Logo } from "../Components/Logo";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                {({ pressed }) => (
                  <CircleInfoIcon style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
