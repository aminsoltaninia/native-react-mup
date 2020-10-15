import React from 'react';
import { View, Text } from 'react-native'


class Contact extends React.Component{
           
        static navigationOptions = {
            title : 'ContactUs'
        }
    
        render(){
        
            return(
                <View>
                    <Text>Contact page</Text>
                </View>
            )
        }

}


export default Contact;