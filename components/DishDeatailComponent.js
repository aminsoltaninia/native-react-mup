import React from 'react';
import { View , Text } from 'react-native'
import {Card} from 'react-native-elements';
import {Dishes} from '../shared/dishes'

function RenderDish(props) {
     const dish = props.dish;
     if(dish!= null) {
         return(
             <Card
                featuredTitle={dish.name}
                image={require('./images/139300686.jpg')}
             >
                 <Text style={{margin:10}}>
                     {dish.description}
                 </Text>

             </Card>  
         );
     }else {
         return(
             <View></View>
         )
     }
}


class  DishDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            dishes : Dishes
        }
    }
    static navigationOptions = {
        title : 'Dish details'
    }
    
    render(){
        // console.log('in detail : ',this.props.route.params)
        const {dishId} = this.props.route.params
        return(
            <RenderDish dish={this.state.dishes.filter(dish => dish.id === dishId)[0]}/>
            
         )
    }
    
}


export default DishDetail