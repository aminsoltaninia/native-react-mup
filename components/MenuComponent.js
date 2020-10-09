import React from 'react';
import { View , FlatList } from 'react-native'
import {ListItem} from 'react-native-elements'

function Menu(props){

        const renderMenuItem = ({item , index})=>{
              return(
                  <ListItem
                      key={index}
                      title={item.name}
                      subtitle={item.description}
                      hideChevron = {true}
                      leftAvatar={{rounded: true, size: 'medium',source:require('./images/139300686.jpg')}}
                  />
              )
        }
   
        return(
            <FlatList
                data={props.dishes} 
                renderItem={renderMenuItem}
                keyExtractor={item=>item.id.toString()}
             />
        )
 

}


export default Menu;