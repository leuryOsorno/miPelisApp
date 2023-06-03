import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../vistas/Home';
import Navbar from './Navbar';
import Detail from '../vistas/Detail';
import Search from '../vistas/Search';
const Stack = createStackNavigator()

class MainNavigation extends React.PureComponent{
    render(){
        return(
            <Stack.Navigator headerMode={'screen'}>
                <Stack.Screen
                name = "Home"
                component={Home}
                options={{
                    headerTransparent:true,
                    header:({navigation}) => (
                        <Navbar navigation={navigation} main={true} />  
                    ),
                }}
                />
              <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{
                    headerTransparent: true,
                    header: ({navigation}) => (
                        <Navbar main={false} navigation={navigation} />
                    ),
                    }}
                />
                <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    headerTransparent: true,
                    header: ({navigation}) => (
                    <Navbar main={false} navigation={navigation} />
                    ),
                }}
                /> 

            </Stack.Navigator>
            
        )
    }
}

export default MainNavigation;