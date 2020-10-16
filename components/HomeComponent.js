import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';

function RenderItem(props) {
    const item = props.item;
    if (props.isLoading) {
        return (
            <Loading />
        )
    } else if (props.errMess) {
        return (
            <View>
                <Text>
                    {props.errMess}
                </Text>
            </View>
        )
    } else {
        if (item != null) {
            return (
                <Card
                    featuredTitle={item.name}
                    featuredSubtitle={item.designation}
                    image={require('./images/139300686.jpg')}
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

}

class Home extends React.Component {


    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.props.dishes.dishes.filter((item) => item.featured)[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                />
                <RenderItem
                    item={this.props.promotions.promotions.filter((item) => item.featured)[0]}
                    isLoading={this.props.promotions.isLoading}
                    errMess={this.props.promotions.errMess}
                />
                <RenderItem
                    item={this.props.leaders.leaders.filter((item) => item.featured)[0]}
                    isLoading={this.props.leaders.isLoading}
                    errMess={this.props.leaders.errMess}
                />
            </ScrollView>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        leaders: state.leaders,
        promotions: state.promotions
    }
}


export default connect(mapStateToProps)(Home);