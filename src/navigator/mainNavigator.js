import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings110354Navigator from '../features/Settings110354/navigator';
import Settings89591Navigator from '../features/Settings89591/navigator';
import UserProfile89584Navigator from '../features/UserProfile89584/navigator';
import Settings89583Navigator from '../features/Settings89583/navigator';
import Settings89581Navigator from '../features/Settings89581/navigator';
import SignIn289579Navigator from '../features/SignIn289579/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings110354: { screen: Settings110354Navigator },
Settings89591: { screen: Settings89591Navigator },
UserProfile89584: { screen: UserProfile89584Navigator },
Settings89583: { screen: Settings89583Navigator },
Settings89581: { screen: Settings89581Navigator },
SignIn289579: { screen: SignIn289579Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
