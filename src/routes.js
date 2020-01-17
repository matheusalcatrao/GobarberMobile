import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const routes = createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
    })
);

export default routes;
