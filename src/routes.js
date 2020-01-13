import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SiginIn from '~/pages/SignIn';
import SiginUp from '~/pages/SignUp';

const routes = createAppContainer(
    createStackNavigator({
        SiginIn,
        SiginUp,
    })
);

export default routes;
