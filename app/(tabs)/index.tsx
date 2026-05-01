import "@/global.css";
import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Native Wind
      </Text>
      <Link
        href="/onboarding"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Onboarding
      </Link>

      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Signin
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Signup
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>

      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: {
            id: "claude",
          },
        }}
      >
        Claude Subscription
      </Link>
    </View>
  );
}
