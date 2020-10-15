import React from 'react';
import { FlatList } from 'react-native'
import {Tile} from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

class Menu extends React.Component{
       

        static navigationOptions = {
            title : 'Menu'
        }
       
        render(){
            const renderMenuItem = ({item , index})=>{
                return(
                    <Tile
                        key={index}
                        title={item.name}
                        caption={item.description}
                        featured
                        onPress={()=>this.props.navigation.navigate("Dishdetail", {dishId : item.id})}
                        imageSrc={{source: require('./images/139300686.jpg')}}
                    />
                )
            }
            return(
                <FlatList
                    data={this.props.dishes.dishes} 
                    renderItem={renderMenuItem}
                    keyExtractor={item=>item.id.toString()}
                 />
            )
        }
       
}

const mapStateToProps = state => {

    return{
        dishes : state.dishes
    }
    
}
export default connect(mapStateToProps)(Menu) ;