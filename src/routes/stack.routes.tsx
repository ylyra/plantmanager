import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";
import { PlantSave } from "../pages/PlantSave";
import { SavedPlant } from "../pages/SavedPlant";

import colors from "../styles/colors";
import { UserContext } from "../contexts/UserContext";
import AuthRoutes from "./tabs.routes";

const { Navigator, Screen } = createStackNavigator();

const StackRoutes: React.FC = () => {
  const { userName, myPlants } = useContext(UserContext);

  return (
    <Navigator
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: colors.white } }}
      initialRouteName="Welcome"
    >
      <Screen name="Welcome" component={Welcome} />
      {userName.length === 0 && (
        <>
          <Screen name="UserIdentification" component={UserIdentification} />
          <Screen name="Confirmation" component={Confirmation} />
        </>
      )}

      <Screen name="PlantSelect" component={AuthRoutes} />

      <Screen name="PlantSave" component={PlantSave} />
      <Screen name="SavedPlant" component={SavedPlant} />

      <Screen name="MyPlants" component={AuthRoutes} />
    </Navigator>
  );
};

export default StackRoutes;
