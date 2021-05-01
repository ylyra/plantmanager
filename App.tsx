import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import * as Notifications from "expo-notifications";

import Routes from "./src/routes";
import { UserContextProvider } from "./src/contexts/UserContext";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });

  useEffect(() => {
    //const subscription = Notifications.addNotificationReceivedListener(
    //  async (notification) => {
    //    const data = notification.request.content.data.plant as PlantProps;
    //    console.log(data);
    //  }
    //);
    //return () => subscription.remove();

    //async function notifications() {
    //  const data = await Notifications.getAllScheduledNotificationsAsync();
    //  await Notifications.cancelAllScheduledNotificationsAsync();
    //}
    //notifications();
    
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}
