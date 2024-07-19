import { Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../../Components/Icons";
import { styled } from "nativewind";
import Screen from "../../Components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className="active:opacity-50">
            <HomeIcon />
          </StyledPressable>
        </Link>
        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Aliqua quis qui nisi ut adipisicing nulla ullamco proident enim
          consectetur ad.Tempor ex ipsum qui eu cupidatat quis aute excepteur
          velit ea sit elit pariatur.
        </Text>
      </ScrollView>
    </Screen>
  );
}
