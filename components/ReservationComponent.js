import React from 'react';
import { Text , View , StyleSheet , Picker , Switch , Button , Modal } from 'react-native';
import {Card} from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { color } from 'react-native-reanimated';

class Reservation extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            guests : 1 , 
            smoking : false , 
            date : '',
            showModal : false
        }
    }
    static navigationOptions = {
        title : 'Reservation'
    }

    handleReservation(){
        console.log(JSON.stringify(this.state));
        this.toggleModal();
    }
    toggleModal(){
        const showInf = this.state.showModal
        this.setState({
            showModal : !this.state.showModal
        })
        if(showInf) {
            this.setState({
               
                guests : 1 , 
                smoking : false , 
                date : '',
            })
        }
    }
    render(){
        return(
            <>
               <View style={styles.formRow}>
                    <Text style={styles.formLabel}>
                         Nmber Of Guests
                    </Text>
                   <Picker
                      style={styles.formItem}
                      selectedValue = {this.state.guests}
                      onValueChange={(itemValue , itemIndex)=> this.setState({
                          guests : itemValue
                      })}
                   >
                        <Picker.Item value='1' label='1' />
                        <Picker.Item value='2' label='2' />
                        <Picker.Item value='3' label='3' />
                        <Picker.Item value='4' label='4' />
                        <Picker.Item value='5' label='5' />
                        <Picker.Item value='6' label='6' />


                   </Picker>
               </View>
               <View style={styles.formRow}>
                    <Text style={styles.formLabel}>
                         Smoking/Non-Smoking
                    </Text>
                    <Switch
                       style={styles.formItem}
                       value={this.state.smoking}
                       onTintColor='#512DAB'
                       onValueChange={(value)=> this.setState({
                           smoking : value
                       })}
                    >
                    </Switch>
               </View>
               <View style={styles.formRow}>
                    <Text style={styles.formLabel}>
                         Date and Time
                    </Text>
                    <DatePicker 
                         style={{flex: 2 , marginRight : 20}}
                         date={this.state.date}
                         format="YYYY-MM-DD"
                         mode='date'
                         placeholder='select Date'
                         minimumDate='2020-01-01'
                         confirmBtnText='Confirm'
                         cancelBtnText='Cancle'
                         customStyles={{
                             dateIcon : {
                                 position : 'absolute',
                                 left:0 ,
                                 top: 4 ,
                                 marginLeft : 0
                             },
                             dateInput : {
                                 marginLeft : 36 
                             }
                         }}
                         onDateChange={(date)=>this.setState({
                              date : date 
                         })}
                    />
               </View>
               <View style={styles.formRow}>
                    <Button
                        title='Reserve'
                        color='#512DAB'
                        onPress={()=> this.handleReservation()}
                        accessibilityLabel='Learn more Aboute this purple botton'
                    />

                   
               </View>
               <Modal 
                  animationType={'slide'}
                  transparent={false}
                  visible={this.state.showModal}
                  onDismiss={()=> this.toggleModal()}
                  onRequestClose = {()=> this.toggleModal()}
               >
                   <View style={styles.modal}>
                       <Text style={styles.modalTitle}>
                           Your reservation
                       </Text>
                       <Text style={styles.modalText}>
                             Number of Guestes : {this.state.guests}
                       </Text>  
                       <Text style={styles.modalText}>
                             smoking : {`${this.state.smoking ? 'permit for smoking' : 'no smoking'}`}
                       </Text>  
                       <Text style={styles.modalText}>
                             Date and Time :  {this.state.date}
                       </Text>
                       <Button 
                        title='Close'
                        color='#512DAB'
                        onPress={()=>this.toggleModal()}/>
                   </View>
               </Modal>
            </>
        )
    }
}

const styles = StyleSheet.create({
    formRow : {
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1 ,
        flexDirection : 'row',
        margin : 20
    },
    formLabel : {
        fontSize : 18 ,
        flex : 2
    },
    formItem : {
        flex : 1
    },
    modal: {
        justifyContent: 'center',
        margin : 20
    },
    modalTitle : {
        fontSize : 20,
        fontWeight : 'bold',
        backgroundColor : 'pink',
        textAlign : 'center',
        color : 'white',
        marginBottom : 20
    },
    modalText : {
        fontSize : 18 ,
        margin : 10
    }
})

export default Reservation;