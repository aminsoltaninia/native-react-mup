import React from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDeatailComponent';
import Home from './HomeComponent'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator()
const { Navigator , Screen} = createStackNavigator();
const MenuNavigator = ()=> {
    return (
      <Navigator  initialRouteName = 'Menu' >
        <Screen name="Menu" component={Menu}
                options={{
                   headerStyle : {
                       backgroundColor : '#512DAB'
                   },
                   headerTintColor : '#fff',
                   headerTitleStyle : {
                       color : '#fff'
                   }
                }} />
        <Screen name="Dishdetail" component={DishDetail} 
                options={{
                   headerStyle : {
                       backgroundColor : '#512DAB'
                   },
                   headerTintColor : '#fff',
                   headerTitleStyle : {
                       color : '#fff'
                   }
                }}/>
      </Navigator>
    );
  }
const HomeNavigator = ()=>{
    return (
        <Navigator  >
          <Screen name="Home" component={Home} 
                  options={{
                     headerStyle : {
                         backgroundColor : '#512DAB'
                     },
                     headerTintColor : '#fff',
                     headerTitleStyle : {
                         color : '#fff'
                     }
                  }} />
        </Navigator>
      );
}


const MainNavigator = ()=>{
    return(
        <Drawer.Navigator  >
        <Drawer.Screen name="Menu" component={MenuNavigator}
                options={{
                   title : 'Menu',
                   drawerLabel : 'Menu'
                }} />
        <Drawer.Screen name="Home" component={HomeNavigator} 
               options={{
                title : 'Home',
                drawerLabel : 'Home'
             }}/>
      </Drawer.Navigator>
    )
   
}

class Main extends React.Component{ 
      render(){
          return(
            <NavigationContainer>
                 <MainNavigator/>
            </NavigationContainer>
             
          )
      }

}



export default Main;