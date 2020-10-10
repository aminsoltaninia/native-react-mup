import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Dishes } from '../shared/dishes';
import { Promotions } from '../shared/promotions';
import { Leaders } from '../shared/leaders'

function RenderItem(props) {
    const item = props.item
    if (item != null) {
        return (
            <Card
                featuredTitle={item.name}
                featuredSubtitle={item.designation}
                image={require('./images/green-wooden-wall-background-vintage-43785297.jpg')}
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

    constructor(props){
        super(props)
        this.state={
            dishes : Dishes ,
            promotions : Promotions ,
            Leaders : Leaders
        }
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem 
                   item = {this.state.dishes.filter((item)=>item.featured)[0]}
                />
                <RenderItem 
                   item = {this.state.promotions.filter((item)=>item.featured)[0]}
                />
                <RenderItem 
                   item = {this.state.Leaders.filter((item)=>item.featured)[0]}
                />
            </ScrollView>
        )
    }
}


export default Home;