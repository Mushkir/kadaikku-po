import { StatusBar } from "expo-status-bar";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [data, setData] = useState("");

  const [loaded, error] = useFonts({
    "Sen-Regular": require("./assets/fonts/Sen-Regular.ttf"),
    "Sen-Bold": require("./assets/fonts/Sen-Bold.ttf"),
    "Sen-Medium": require("./assets/fonts/Sen-Medium.ttf"),
    "Sen-SemiBold": require("./assets/fonts/Sen-SemiBold.ttf"),
    "Sen-ExtraBold": require("./assets/fonts/Sen-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const handleSubmit = () => {
    if (!data) {
      setShowErrorMsg(true);
      setTimeout(() => setShowErrorMsg(false), 2000);
      return;
    }

    console.log(data);
  };

  return (
    <View className="w-full h-full bg-primary p-5">
      <Text
        className="mt-20 text-bone_white text-4xl text-center"
        style={{ fontFamily: "Sen-Bold" }}
      >
        Marekkatheey
      </Text>

      <View className="mt-5">
        <Text
          className="text-secondary_light text-lg"
          style={{ fontFamily: "Sen-Medium" }}
        >
          Enter item / list
        </Text>

        <TextInput
          style={{ fontFamily: "Sen-Regular" }}
          onChangeText={(text) => setData(text)}
          className="bg-bone_white mt-1.5 p-4 rounded-md mb-3"
          value={data}
          placeholder="Ex: Onion, Beef..."
        />

        {showErrorMsg && (
          <Text
            className="text-red-600 mb-3"
            style={{ fontFamily: "Sen-Medium" }}
          >
            This field is required.
          </Text>
        )}

        <TouchableOpacity onPress={handleSubmit}>
          <Text
            style={{ fontFamily: "Sen-Bold" }}
            className="bg-secondary p-3 rounded-md mt-3 text-center text-lg text-bone_white"
          >
            Add new
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
