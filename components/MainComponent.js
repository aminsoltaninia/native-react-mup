import React from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDeatailComponent';
import Reservation from  './ReservationComponent';
import Home from './HomeComponent';
import About from './AboutUs';
import Contact from './ContactUs';
import { Image, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import getData from '../api/getData';
import {addDishes, addPromotions , addComments , addLeaders} from '../redux/ActionCreater';
//import {fetchDishes , fetchLeaders ,fetchComments , fetchPromotions} from '../redux/ActionCreater'

const Drawer = createDrawerNavigator()
const { Navigator, Screen } = createStackNavigator();


const MenuNavigator = () => {
  return (
    <Navigator initialRouteName='Menu'  >
      <Screen name="Menu" component={Menu}
        options={({ navigation }) => ({

          headerLeft: () => <Icon name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            size={24} color='white'
            onPress={() => navigation.toggleDrawer()}
          />
          ,
          headerStyle: {
            backgroundColor: '#512DAB'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff'
          }

        })
        }
      />
      <Screen name="Dishdetail" component={DishDetail}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#512DAB'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff'
          }

        })
        } />
    </Navigator>
  );
}
const HomeNavigator = () => {
  return (
    <Navigator  >
      <Screen name="Home" component={Home}
        options={({ navigation }) => ({

          headerLeft: () => <Icon name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            size={24} color='white'
            onPress={() => navigation.toggleDrawer()}
          />
          ,
          headerStyle: {
            backgroundColor: '#512DAB'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff'
          }

        })
        } />
    </Navigator>
  );
}
const ReservationNavigator = () => {
  return (
    <Navigator  >
      <Screen name="Reservation" component={Reservation}
        options={({ navigation }) => ({

          headerLeft: () => <Icon name={Platform.OS === 'android' ? 'md-book' : 'ios-book'}
            size={24} color='white'
            onPress={() => navigation.toggleDrawer()}
          />
          ,
          headerStyle: {
            backgroundColor: '#512DAB'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff'
          }

        })
        } />
    </Navigator>
  );
}
const AboutNavigator = () => {
  return (
    <Navigator  >
      <Screen name="AboutUs" component={About}
        options={({ navigation }) => ({

          headerLeft: () => <Icon name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            size={24} color='white'
            onPress={() => navigation.toggleDrawer()}
          />
          ,
          headerStyle: {
            backgroundColor: '#512DAB'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff'
          }

        })
        } />
    </Navigator>
  );
}
const ContactNavigator = () => {
  return (
    <Navigator  >
      <Screen name="ContactUs" component={Contact}
        options={({ navigation }) => ({

          headerLeft: () => <Icon name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
            size={24} color='white'
            onPress={() => navigation.toggleDrawer()}
          />
          ,
          headerStyle: {
            backgroundColor: '#512DAB'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            color: '#fff'
          }

        })
        } />
    </Navigator>
  );
}

const CustomDrawerContentComponent = (props) => {
  return (

    <DrawerContentScrollView>
      <SafeAreaView style={styles.container}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
            <Image source={require('./images/139300686.jpg')}
              style={styles.drawerImage}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}>
              Fantoni Store
                 </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  )
}

const MainNavigator = () => {
  return (
    <Drawer.Navigator drawerStyle={{
                           backgroundColor: '#c6cbef'
                      }}
                      drawerContent={CustomDrawerContentComponent}
    >
      <Drawer.Screen name="Menu" component={MenuNavigator}
        options={{
          title: 'Menu',
          drawerLabel: 'Menu',
          drawerIcon: ({ tintColor }) => {
            return (
              <Icon
                name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                type='font-awesome'
                size={24}
                color={tintColor}
              />
            )
          }
        }} />
      <Drawer.Screen name="Home" component={HomeNavigator}
        options={{
          title: 'Home',
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor }) => {
            return (
              <Icon
                name={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
                type='font-awesome'
                size={24}
                color={tintColor}
              />
            )
          }
        }} />
      <Drawer.Screen name="Reservation" component={ReservationNavigator}
        options={{
          title: 'Reservation',
          drawerLabel: 'Reservation',
          drawerIcon: ({ tintColor }) => {
            return (
              <Icon
                name={Platform.OS === 'android' ? 'md-book' : 'ios-book'}
                type='font-awesome'
                size={24}
                color={tintColor}
              />
            )
          }
        }} />
      <Drawer.Screen name="AboutUs" component={AboutNavigator}
        options={{
          title: 'AboutUs',
          drawerLabel: 'AboutUs',
          drawerIcon: ({ tintColor }) => {
            return (
              <Icon
                name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                type='font-awesome'
                size={24}
                color={tintColor}
              />
            )
          }
        }} />
      <Drawer.Screen name="ContactUs" component={ContactNavigator}
        options={{
          title: 'Contact',
          drawerLabel: 'Contact',
          drawerIcon: ({ tintColor }) => {
            return (
              <Icon
                name={Platform.OS === 'android' ? 'md-contact' : 'ios-contact'}
                type='font-awesome'
                size={22}
                color={tintColor}
              />
            )
          }
        }} />
    </Drawer.Navigator>
  )

}

class Main extends React.Component {

  componentDidMount(){
    //  this.props.fetchComments();
    //  this.props.fetchDishes();
    //  this.props.fetchLeaders();
    //  this.props.fetchPromotions()
    getData.getDishes((dishes)=>{
         this.props.addDishes(dishes)
    })
    getData.getCommenst((comments)=>{
      this.props.addComments(comments)
    })
    getData.getPromotions((promotions)=>{
      this.props.addPromotions(promotions)
    })
    getData.getLeaders((leaders)=>{
      this.props.addLeaders(leaders)
   })

  }
  render() {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </SafeAreaProvider>

    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerHeader: {
    backgroundColor: '#512DAB',
    height: 210,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
     
  }
})

const mapDispatchToProps = dispatch =>({
    //  fetchDishes : ()=> dispatch(fetchDishes()),
    //  fetchLeaders : ()=> dispatch(fetchLeaders()),
    //  fetchComments : ()=> dispatch(fetchComments()),
    //  fetchPromotions : ()=> dispatch(fetchPromotions())
    addDishes : (dishes)=>dispatch(addDishes(dishes)),
    addPromotions : (promotions)=>dispatch(addPromotions(promotions)),
    addLeaders : (leaders)=>dispatch(addLeaders(leaders)),
    addComments : (comments)=>dispatch(addComments(comments))
})

const mapStateToProps = (state)=> {
  return{}
}

export default connect(mapStateToProps,mapDispatchToProps)(Main) ;