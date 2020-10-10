import React from 'react';
import { View , FlatList } from 'react-native'
import {ListItem} from 'react-native-elements';
import {Dishes} from '../shared/dishes'

class Menu extends React.Component{
       
        constructor(props){
            super(props)
            this.state = {
                 dishes : Dishes
            }
        }

        static navigationOptions = {
            title : 'Menu'
        }

       
        render(){
            const renderMenuItem = ({item , index})=>{
                return(
                    <ListItem
                        key={index}
                        title={item.name}
                        subtitle={item.description}
                        hideChevron = {true}
                        onPress={()=>this.props.navigation.navigate("Dishdetail", {dishId : item.id})}
                        leftAvatar={{rounded: true, size: 'medium',source:require('./images/139300686.jpg')}}
                    />
                )
            }
            return(
                <FlatList
                    data={this.state.dishes} 
                    renderItem={renderMenuItem}
                    keyExtractor={item=>item.id.toString()}
                 />
            )
        }
       
 

}


export default Menu;