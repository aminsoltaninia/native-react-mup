import React from 'react';
import {  Text ,FlatList } from 'react-native';
import { Card, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import { Loading } from './LoadingComponent';


function History(){
    return(
        <Card
          title='our History'
        >
            <Text style={{margin:10}}>
                 fantoni store in zahedan       
            </Text>
            <Text style={{margin:10}}>
            fanto fantoni store in zahedanni stor fantoni sto fantoni store in zahedan fantoni store in zahedanre in zahedan fantoni store in zahedane in zahedan
            </Text>

        </Card>
    )
}

class About extends React.Component{
        
        

        static navigationOptions = {
            title : 'AboutUs'
        }
    
        render(){
            
            const renderLeader = ({item , index})=>{
                return(
                    <ListItem
                       roundAvatar
                       key={index}
                       title={item.name}
                       subtitle={item.description}
                       subtitleNumberOfLines={15}
                       hideChervon={true}
                       leftAvatar={{source:{uri : baseUrl+ item.image}}}
                    />

                    
                )
            }
            if(this.props.leaders.isLoading){
                return(
                    <>
                       <History/>
                       <Card
                          title="Corporate Learedship"
                       >
                           <Loading/>
                       </Card>
                    </>
                )
            }else if(this.props.leaders.errMess){
                return(
                    <>
                       <History/>
                       <Card
                          title="Corporate Learedship"
                       >
                          <Text>{this.props.leaders.errMess}</Text>
                       </Card>
                    </>
                )
            }else{
                return(
                    <>
                        <History/>
                        <Card title='Corporate leaders'>
                              <FlatList
                                 data = {this.props.leaders.leaders}
                                 renderItem={renderLeader}
                                 keyExtractor={item=>item.id.toString()}
                              />   
                        </Card>
                    </>
                )
            }
         
        }

}

const mapStateToProps = (state)=>{
    return{
        leaders : state.leaders
    }
}
export default connect(mapStateToProps)(About);