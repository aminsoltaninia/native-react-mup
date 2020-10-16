import React from 'react';
import { View , Text , ScrollView , FlatList } from 'react-native'
import {Card} from 'react-native-elements';
import {Dishes} from '../shared/dishes';
import {Comments} from '../shared/comment';
import {baseUrl} from '../shared/baseUrl';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {postFavorites} from '../redux/ActionCreater'

function RenderDish(props) {
     const dish = props.dish;
     if(dish!= null) {
         return(
             <Card
                featuredTitle={dish.name}
                image={ require('./images/139300686.jpg')}
             >
                 <Text style={{margin:10}}>
                     {dish.description}
                 </Text>
                 <Icon 
                     raised 
                     reverse
                     name={ props.favorite ? 'md-menu' : 'gratipay'}
                     type='font-awesome'
                     color='#f50'
                     onPress={()=> props.favorite ? console.log('Alredy favorte') :  props.onPress()}
                     >

                 </Icon>

             </Card>  
         );
     }else {
         return(
             <View></View>
         )
     }
}

function RenderComments(props){
    const comments = props.comments;
    const RenderItemComment = ({item , index })=> {
       
        return(
            <View key={index} style={{margin:10}}>
                <Text style={{fontSize:14}}>
                      {item.comment}
                </Text>
                <Text style={{fontsize:12}}>
                      {item.rating} Stars
                </Text>
                <Text style={{fontsize:12}}>
                     {'-- '+ item.author+', '+ item.date}
                </Text> 
            </View>
        )
    }

    return(
        <Card title="Comments">
             <FlatList data={comments} 
                       renderItem = {RenderItemComment}
                       keyExtractor={item=>item.id.toString()}
                       />
        </Card>
    )
}

class  DishDetail extends React.Component{
 
    markFavorite(dishId){
       this.props.postFavorites(dishId)
    }
    static navigationOptions = {
        title : 'Dish details'
    }
    
    render(){
        const {dishId} = this.props.route.params;
        return(
            <>
                <RenderDish dish={this.props.dishes.dishes.filter(dish => dish.id === dishId)[0]}
                            favorite = {this.props.favorites.some(elem => elem===dishId)} 
                            onPress = {()=>this.markFavorite(dishId)}
                 />
                <RenderComments comments = {this.props.comments.comments.filter((comment) => comment.dishId === dishId)}/>
            </>
            
         )
    }
    
}

const mapDispatchToProps = (dispatch)=>{
    return{
        postFavorites : (dishId)=> dispatch(postFavorites(dishId))
    }

}

const mapStateToProps = (state)=>{
    return{
        dishes : state.dishes,
        comments : state.comments,
        favorites : state.favorites
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DishDetail) 