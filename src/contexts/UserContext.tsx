import React, { createContext, ReactNode, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { format } from "date-fns";

import { Load } from "../components/Load";
import { PlantProps, StoragePlantProps } from "../libs/storage";
import { Alert } from "react-native";

interface UserContextData {
  userName: string;
  myPlants: PlantProps[];
  loadPlants: () => Promise<PlantProps[]>;
  handleRemove: (plant: PlantProps) => void;
}

export const UserContext = createContext({} as UserContextData);

interface UserContextProviderProps {
  children: ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [isLoadingContext, setIsLoadingContext] = useState(true);
  const [userName, setUserName] = useState("");

  async function loadPlants(): Promise<PlantProps[]> {
    try {
      const data = await AsyncStorage.getItem("@plantmanager:plants");
      const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

      const plantSorted = Object.keys(plants)
        .map((plant) => {
          return {
            ...plants[plant].data,
            hour: format(
              new Date(plants[plant].data.dateTimeNotification),
              "HH:mm"
            ),
          };
        })
        .sort((a, b) =>
          Math.floor(
            new Date(a.dateTimeNotification).getTime() / 100 -
              Math.floor(new Date(b.dateTimeNotification).getTime() / 100)
          )
        );

      return plantSorted;
    } catch (error) {
      throw new Error(error);
    }
  }

  function handleRemove(plant: PlantProps) {
    Alert.alert("Remover", `Deseja remover a planta ${plant.name}`, [
      {
        text: "Não 🙏",
        style: "cancel",
      },
      {
        text: "Sim 😰",
        onPress: async () => {
          try {
            const data = await AsyncStorage.getItem("@plantmanager:plants");
            const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

            await Notifications.cancelScheduledNotificationAsync(
              plants[plant.id].notificationId
            );
            delete plants[plant.id];

            await AsyncStorage.setItem(
              "@plantmanager:plants",
              JSON.stringify(plants)
            );

            setMyPlants((oldData) =>
              oldData.filter((item) => item.id !== plant.id)
            );
          } catch (error) {
            Alert.alert("Não foi possível remover! 😰");
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem("@plantmanager:user");

      setUserName(user || "");
    }

    loadStorageUserName();
    setIsLoadingContext(false);
  }, []);

  useEffect(() => {
    async function loadPlantsStorage() {
      const plantsStoraged = await loadPlants();

      setMyPlants(plantsStoraged);
    }
    loadPlantsStorage();
  }, []);

  const valueProvider = {
    userName,
    loadPlants,
    myPlants,
    handleRemove,
  };

  if (isLoadingContext) {
    return <Load />;
  }

  return (
    <UserContext.Provider value={valueProvider}>
      {children}
    </UserContext.Provider>
  );
}
