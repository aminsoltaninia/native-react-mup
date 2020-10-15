import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';

function RenderItem(props) {
    const item = props.item
    if (item != null) {
        return (
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={ require('./images/139300686.jpg')}
            >
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>

            </Card>
        )

    } else {
        return (
            <View></View>
        )
    }
}

class Home extends React.Component {


    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                   item = {this.props.dishes.dishes.filter((item)=>item.featured)[0]}
                />
                <RenderItem 
                   item = {this.props.promotions.promotions.filter((item)=>item.featured)[0]}
                />
                <RenderItem 
                   item = {this.props.leaders.leaders.filter((item)=>item.featured)[0]}
                />
            </ScrollView>
        )
    }
}


const mapStateToProps = (state)=>{
    console.log("statatatatatatatata : " , state)
    return{
        dishes : state.dishes,
        leaders : state.leaders,
        promotions : state.promotions
    }
}


export default connect(mapStateToProps)(Home) ;