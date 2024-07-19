import { useEffect, useState } from "react";
import { Link } from "expo-router";
import { ActivityIndicator, FlatList, View, Pressable } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { CircleInfoIcon } from "../Components/Icons";

import { AnimatedGameCard } from "./GameCard";
import Screen from "../Components/Screen";
import { Logo } from "./Logo";

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <Screen
    // style={{ paddingBottom: insets.bottom, paddingTop: insets.top }}
    >
      {games.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={games}
          key={(game) => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}
